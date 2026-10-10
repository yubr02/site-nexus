import { services } from '../data/siteContent.js';
import { whatsappUrl } from '../utils/whatsapp.js';
import Icon from './Icon.jsx';

function Services() {
  return (
    <section className="section section--dark" id="servicos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nossos serviços</span>
          <h2>O que podemos fazer por você</h2>
          <p>Da manutenção de uma instalação ao planejamento de um sistema solar. Escolha o serviço e conte sua necessidade.</p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__icon"><Icon name={service.icon} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="service-card__link" href={whatsappUrl(service.message)} target="_blank" rel="noopener noreferrer" aria-label={`Pedir orçamento: ${service.title} pelo WhatsApp (nova aba)`}>Pedir orçamento <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="section-note">Os links abrem o WhatsApp com uma mensagem pronta. Você confirma o envio lá.</p>
      </div>
    </section>
  );
}
export default Services;
