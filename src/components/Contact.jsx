import { useState } from 'react';
import { services } from '../data/siteContent.js';
import { contactMessage, whatsappUrl } from '../utils/whatsapp.js';

function Contact({ company }) {
  const [formState, setFormState] = useState({ servico: services[0].title, nome: '', cidade: '', mensagem: '' });
  const handleChange = ({ target }) => setFormState((prev) => ({ ...prev, [target.name]: target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(whatsappUrl(contactMessage(formState)), '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="section section--contact" id="contato">
      <div className="container contact">
        <div className="contact__info">
          <span className="eyebrow">Vamos conversar?</span>
          <h2>Conte o que você precisa</h2>
          <p>Escolha o serviço e informe sua cidade para confirmarmos o atendimento. Se preferir, comece a conversa direto pelo WhatsApp.</p>
          <dl className="contact__details">
            <div><dt>WhatsApp</dt><dd><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{company.phone}</a></dd></div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            <div><dt>Endereço</dt><dd>{company.address}<br />{company.city}</dd></div>
          </dl>
          <a className="button button--primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} aria-label="Solicitar orçamento" aria-describedby="contact-hint">
          <label>Serviço<select name="servico" value={formState.servico} onChange={handleChange}>{services.map((service) => <option key={service.title}>{service.title}</option>)}<option>Preciso de orientação</option></select></label>
          <div className="form-grid">
            <label>Nome<input required pattern=".*\S.*" maxLength={100} autoComplete="name" name="nome" value={formState.nome} onChange={handleChange} placeholder="Seu nome" /></label>
            <label>Cidade<input required pattern=".*\S.*" maxLength={100} autoComplete="address-level2" name="cidade" value={formState.cidade} onChange={handleChange} placeholder="Onde será o serviço?" /></label>
          </div>
          <label>Mensagem (opcional)<textarea name="mensagem" value={formState.mensagem} onChange={handleChange} rows="4" maxLength={1500} placeholder="Conte o que precisa. Se puder, informe o bairro e detalhes da instalação." /></label>
          <p id="contact-hint" className="field-hint">O botão abre o WhatsApp com sua mensagem preparada. Você confere e confirma o envio por lá.</p>
          <button className="button button--primary" type="submit">Abrir orçamento no WhatsApp <span aria-hidden="true">↗</span></button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
