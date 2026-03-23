import { aboutCards } from '../data/siteContent.js';

function About() {
  return (
    <section className="section section--light" id="sobre">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Sobre a empresa</span>
          <h2>Uma empresa com postura técnica e atendimento consultivo.</h2>
          <p>
            A AC Engenharia e Energia Solar une visão de engenharia, tecnologia fotovoltaica e
            atendimento próximo para entregar projetos seguros, escaláveis e financeiramente
            inteligentes. Atuamos com planejamento detalhado, escolha criteriosa de equipamentos
            e foco em credibilidade em cada etapa.
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
