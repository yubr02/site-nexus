import { benefits } from '../data/siteContent.js';
import Icon from './Icon.jsx';

function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Benefícios da energia solar</span>
          <h2>Energia solar começa com uma avaliação do seu imóvel</h2>
          <p>
            Seu consumo, o espaço para os painéis e as condições da instalação ajudam a definir
            o projeto. Conheça os pontos a considerar antes de investir.
          </p>
        </div>

        <div className="cards-grid cards-grid--three">
          {benefits.map((benefit) => (
            <article className="feature-card reveal" key={benefit.title}>
              <div className="feature-card__icon">
                <Icon name={benefit.icon} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="#simulacao">Fazer uma simulação inicial <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

export default Benefits;
