import { aboutCards } from '../data/siteContent.js';

function About() {
  return (
    <section className="section section--light" id="sobre">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Sobre a empresa</span>
          <h2>Uma empresa com postura técnica e atendimento consultivo.</h2>
          <p>
            A EMG reúne instalações elétricas, manutenção, quadros de distribuição e energia
            solar em um só lugar. Nosso atendimento começa entendendo o que você precisa,
            para orientar o serviço e apresentar uma proposta clara para sua casa ou empresa.
          </p>
        </div>

        <div className="about-grid">
          {aboutCards.map((card) => (
            <article className="info-card reveal" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
