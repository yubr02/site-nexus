import { serviceSteps } from '../data/siteContent.js';

function About() {
  return (
    <section className="section section--light" id="sobre">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Sobre a EMG</span>
          <h2>Antes de começar, vamos entender o que você precisa</h2>
          <p>A EMG trabalha com instalações elétricas, manutenção, quadros de distribuição e energia solar. Conversamos sobre sua necessidade, avaliamos o serviço e apresentamos uma proposta para sua casa ou empresa.</p>
        </div>
        <ol className="process-grid" aria-label="Etapas do atendimento">
          {serviceSteps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3><p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export default About;
