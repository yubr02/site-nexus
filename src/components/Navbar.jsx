import { useState } from 'react';

function Navbar({ links, company }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <span className="navbar__brand-mark">
            <img src={company.logo} alt={company.name} />
          </span>
          <span>
            <strong>{company.shortName}</strong>
            <small>Engenharia e Energia Solar</small>
          </span>
        </a>

        <button
          className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="button button--primary button--sm"
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
