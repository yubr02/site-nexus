import test from 'node:test';
import assert from 'node:assert/strict';
import { parseBill, simulateBill, simulationMessage } from '../src/utils/simulation.js';
import { whatsappUrl, contactMessage } from '../src/utils/whatsapp.js';
import { services } from '../src/data/siteContent.js';

test('accepts Brazilian currency, grouping, pasted currency and cents', () => {
  for (const [input, expected] of [['350', 350], ['350,50', 350.5], ['1.234,56', 1234.56], ['R$ 1.234,56', 1234.56], [' R$\u00a01.234,56 ', 1234.56], ['1.234', 1234], ['0,01', .01], ['1234,5', 1234.5]]) {
    assert.equal(parseBill(input), expected, input);
  }
});

test('rejects empty, negative, zero, malformed and unsafe values', () => {
  for (const input of ['', ' ', 'R$', '-50', '-0,50', '0', '0,00', 'abc', '350abc', 'NaN', 'Infinity', '1e3', '1,234.56', '350.50', '12.34,56', '1,234', '1 234,56', '99999999999999999999999999']) {
    assert.equal(parseBill(input), null, input);
  }
});

test('rounds to cents and keeps totals consistent', () => {
  assert.deepEqual(simulateBill(350), { monthlySavings: 280, annualSavings: 3360, remainingBill: 70 });
  const result = simulateBill(1234.56);
  assert.deepEqual(result, { monthlySavings: 987.65, annualSavings: 11851.8, remainingBill: 246.91 });
  assert.equal(Math.round((result.monthlySavings + result.remainingBill) * 100), 123456);
});

test('WhatsApp preserves accents, line breaks and reserved characters', () => {
  const message = contactMessage({ servico: 'Manutenção elétrica', nome: ' João & Ana ', cidade: ' São Paulo ', mensagem: 'Quadro elétrico\nAvaliação + orçamento? #1' });
  const url = new URL(whatsappUrl(message));
  assert.equal(url.origin + url.pathname, 'https://wa.me/5511943459000');
  assert.equal(url.searchParams.get('text'), message);
  assert.match(message, /Nome: João & Ana\nCidade: São Paulo/);
  assert.ok(!message.includes('Telefone:') && !message.includes('Email:'));
});

test('each service has its own message and simulation includes values and qualification', () => {
  assert.equal(new Set(services.map((item) => whatsappUrl(item.message))).size, 4);
  const message = simulationMessage(350, simulateBill(350));
  assert.match(message, /350,00/);
  assert.match(message, /280,00/);
  assert.match(message, /3\.360,00/);
  assert.match(message, /70,00/);
  assert.match(message, /não é um orçamento/);
  assert.equal(new URL(whatsappUrl(message)).searchParams.get('text'), message);
});
