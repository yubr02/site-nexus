import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const modules = process.env.EMG_QA_MODULES;
const { chromium } = await import(modules ? pathToFileURL(path.join(modules, 'playwright/index.mjs')).href : 'playwright');
const browser = await chromium.launch({ executablePath: process.env.EMG_CHROME, headless: true });
const url = process.env.EMG_QA_URL || 'http://127.0.0.1:4173';
const output = path.resolve('dist/qa');
await mkdir(output, { recursive: true });
const report = [];
try {
  for (const width of [360, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    // No real WhatsApp navigation or sending: intercept links and window.open.
    await page.route('**/wa.me/**', route => route.abort());
    await page.addInitScript(() => {
      window.openedMessages = [];
      window.open = (url) => { window.openedMessages.push(url); return null; };
      document.addEventListener('click', event => {
        const link = event.target.closest('a');
        if (link?.href.startsWith('https://wa.me/')) {
          event.preventDefault();
          window.openedMessages.push(link.href);
        }
      }, true);
    });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('h1').innerText(), 'Instalações elétricas e energia solar para sua casa ou empresa');
    assert.ok(await page.locator('.hero__brand-art img').evaluate(img => img.complete && img.naturalWidth > 0));
    const checkWidth = async () => assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `horizontal overflow ${width}`);
    await checkWidth();
    await page.screenshot({ path: path.join(output, `home-${width}.png`), fullPage: true });

    const originalHeight = await page.locator('.navbar').evaluate(el => el.getBoundingClientRect().height);
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForFunction(() => document.querySelector('.navbar').classList.contains('navbar--compact'));
    const compactHeight = await page.locator('.navbar').evaluate(el => el.getBoundingClientRect().height);
    assert.ok(compactHeight < originalHeight, 'header compacts');
    const toggle = page.locator('.navbar__toggle');
    if (width < 1000) {
      assert.equal(await page.locator('#main-navigation').isVisible(), false);
      await toggle.focus();
      await page.keyboard.press('Enter');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), '#home');
      await checkWidth();
      await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      assert.equal(await toggle.evaluate(el => el === document.activeElement), true);
    }
    for (const target of ['#servicos', '#sobre', '#beneficios', '#faq', '#contato', '#home']) {
      if (width < 1000) await toggle.click();
      await page.locator(`#main-navigation a[href="${target}"]`).click();
      await page.waitForTimeout(120);
      const geometry = await page.evaluate(target => ({
        top: document.querySelector(`${target} h1, ${target} h2`).getBoundingClientRect().top,
        bottom: document.querySelector('.navbar').getBoundingClientRect().bottom,
      }), target);
      assert.ok(geometry.top >= geometry.bottom, `anchor hidden: ${target}, ${width}`);
      if (width < 1000) assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    }
    await page.locator('.hero__actions a[href="#contato"]').click();
    assert.equal(new URL(page.url()).hash, '#contato');
    await page.locator('.text-link[href="#simulacao"]').click();
    const bill = page.locator('#billValue');
    for (const invalid of ['', '-100', '0', 'abc', '350.50', '12.34,56']) {
      await bill.fill(invalid);
      assert.equal(await bill.getAttribute('aria-invalid'), 'true', invalid);
      assert.equal(await page.locator('.calculator__results button').isDisabled(), true);
      assert.ok((await page.locator('#bill-error').innerText()).length > 0);
      assert.equal(await page.locator('.result-card strong').first().innerText(), '—');
    }
    await bill.fill('R$ 1.234,56');
    assert.equal(await bill.getAttribute('aria-invalid'), 'false');
    assert.match(await page.locator('.result-card strong').first().innerText(), /987,65/);
    await page.locator('.calculator__results a').click();
    let opened = await page.evaluate(() => window.openedMessages.at(-1));
    assert.match(new URL(opened).searchParams.get('text'), /1\.234,56/);
    assert.match(new URL(opened).searchParams.get('text'), /987,65/);

    for (const button of await page.locator('.faq-item button').all()) {
      await button.focus();
      await page.keyboard.press('Enter');
      assert.equal(await button.getAttribute('aria-expanded'), 'true');
      const panel = page.locator(`#${await button.getAttribute('aria-controls')}`);
      assert.equal(await panel.isVisible(), true);
      await page.keyboard.press('Space');
      assert.equal(await button.getAttribute('aria-expanded'), 'false');
      assert.equal(await panel.isVisible(), false);
    }
    const form = page.locator('.contact__form');
    assert.equal(await form.locator('input').count(), 2);
    const before = await page.evaluate(() => window.openedMessages.length);
    await form.locator('button').click();
    assert.equal(await page.evaluate(() => window.openedMessages.length), before, 'empty form must not open WhatsApp');
    await form.locator('[name=nome]').fill('   ');
    await form.locator('[name=cidade]').fill('São Paulo');
    await form.locator('button').click();
    assert.equal(await page.evaluate(() => window.openedMessages.length), before, 'whitespace name must not submit');
    await form.locator('[name=servico]').selectOption('Manutenção elétrica');
    await form.locator('[name=nome]').fill('João & Ana');
    await form.locator('[name=mensagem]').fill('Avaliação do quadro\nOrçamento + manutenção?');
    await form.locator('button').click();
    opened = await page.evaluate(() => window.openedMessages.at(-1));
    const contact = new URL(opened);
    assert.equal(contact.origin + contact.pathname, 'https://wa.me/5511943459000');
    assert.match(contact.searchParams.get('text'), /Nome: João & Ana\nCidade: São Paulo/);
    assert.match(contact.searchParams.get('text'), /Avaliação do quadro\nOrçamento \+ manutenção\?/);
    assert.ok(!contact.searchParams.get('text').includes('Telefone:'));
    const serviceUrls = [];
    for (const link of await page.locator('.service-card__link').all()) {
      await link.click();
      serviceUrls.push(await page.evaluate(() => window.openedMessages.at(-1)));
    }
    assert.equal(new Set(serviceUrls).size, 4);
    for (const link of await page.locator('a[href^="https://wa.me/"]').all()) {
      const href = new URL(await link.getAttribute('href'));
      assert.equal(href.pathname, '/5511943459000');
      assert.ok(href.searchParams.get('text'));
    }
    await page.locator('.navbar__whatsapp').click();
    assert.equal(new URL(await page.evaluate(() => window.openedMessages.at(-1))).pathname, '/5511943459000');
    await checkWidth();
    assert.deepEqual(errors, []);
    report.push({ width, status: 'passed', checks: ['no horizontal overflow', 'compact header', 'keyboard menu and escape', 'anchor clearance', 'FAQ keyboard and ARIA', 'currency validation', 'contact validation', 'WhatsApp messages intercepted', 'no browser errors'] });
    console.log(`PASS ${width}px`);
    await page.close();
  }
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
