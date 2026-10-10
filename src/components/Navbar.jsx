import { useEffect, useRef, useState } from 'react';
import { whatsappUrl } from '../utils/whatsapp.js';

function Navbar({ links, company }) {
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    const onKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1000px)');
    const onDesktop = () => { if (desktop.matches) setIsOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    desktop.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [isOpen]);

  const navigate = (event, href) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      window.history.pushState(null, '', href);
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className={`navbar ${compact ? 'navbar--compact' : ''}`} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
    }}>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" onClick={(event) => navigate(event, '#home')} aria-label="EMG — início">
          <strong>{company.shortName}</strong>
          <small>Instalações Elétricas<br />& Energia Solar</small>
        </a>
        <a className="button button--primary navbar__whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Pedir orçamento pelo WhatsApp (abre em nova aba)">WhatsApp</a>
        <button ref={toggleRef} className="navbar__toggle" type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen((prev) => !prev)}>
          <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
        </button>
        <nav id="main-navigation" className={`navbar__nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => <a key={link.href} href={link.href} onClick={(event) => navigate(event, link.href)}>{link.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
