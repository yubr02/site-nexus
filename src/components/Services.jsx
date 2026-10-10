import { services } from '../data/siteContent.js';

function Services() {
  return (
    <section className="section section--dark" id="servicos">
      <div className="container">
        <div className="section-heading section-heading--dark reveal">
          <span className="eyebrow">Serviços</span>
          <h2>Soluções completas para diferentes perfis de consumo.</h2>
          <p>
            Da instalação elétrica à geração solar, encontre o serviço que faz sentido para
            o seu momento. Fale com a equipe para avaliar seu projeto.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-card__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="service-card__link" href="#contato">Solicitar avaliação <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
