import { benefits } from '../data/siteContent.js';
import Icon from './Icon.jsx';

function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Benefícios da energia solar</span>
          <h2>Uma decisão que combina economia, sustentabilidade e valorização.</h2>
          <p>
            A energia solar vai muito além da redução da conta. Ela fortalece a previsibilidade
            financeira, reduz exposição a reajustes e projeta uma imagem moderna para o imóvel ou negócio.
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
      </div>
    </section>
  );
}

export default Benefits;
