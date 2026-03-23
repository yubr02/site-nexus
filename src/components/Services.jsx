import { services } from '../data/siteContent.js';

function Services() {
  return (
    <section className="section section--dark" id="servicos">
      <div className="container">
        <div className="section-heading section-heading--dark reveal">
          <span className="eyebrow">Serviços</span>
          <h2>Soluções completas para diferentes perfis de consumo.</h2>
          <p>
            Cada projeto é dimensionado conforme perfil de consumo, estrutura disponível, metas
            de economia e viabilidade técnica. A proposta é sair do genérico e entregar precisão.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-card__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
