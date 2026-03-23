function Footer({ links, company }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <strong>{company.name}</strong>
          <p>Energia solar com engenharia, confiança e visão de longo prazo.</p>
        </div>

        <div className="footer__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__social">
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${company.email}`}>Email</a>
          <a href="#home">Instagram</a>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <span>(c) 2026 {company.name}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
