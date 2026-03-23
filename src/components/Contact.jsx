import { useState } from 'react';

function Contact({ company }) {
  const [formState, setFormState] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidade: '',
    mensagem: '',
  });

  const handleChange = ({ target }) => {
    setFormState((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = encodeURIComponent(
      [
        'Olá, quero solicitar uma proposta de energia solar.',
        '',
        `Nome: ${formState.nome || '-'}`,
        `Telefone: ${formState.telefone || '-'}`,
        `Email: ${formState.email || '-'}`,
        `Cidade: ${formState.cidade || '-'}`,
        '',
        'Mensagem:',
        formState.mensagem || '-',
      ].join('\n'),
    );

    window.open(`https://wa.me/${company.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="section section--contact" id="contato">
      <div className="container contact">
        <div className="contact__info reveal">
          <span className="eyebrow">Contato</span>
          <h2>Solicite uma proposta e entenda o potencial do seu projeto.</h2>
          <p>
            Fale com a nossa equipe para receber uma análise inicial, tirar dúvidas e iniciar
            um orçamento com visão técnica e foco em retorno.
          </p>

          <div className="contact__details">
            <div>
              <strong>Telefone</strong>
              <span>{company.phone}</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>{company.email}</span>
            </div>
            <div>
              <strong>Endereço</strong>
              <span>{company.address}</span>
            </div>
          </div>

          <a
            className="button button--primary"
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <form className="contact__form reveal reveal-delay" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Nome
              <input name="nome" value={formState.nome} onChange={handleChange} placeholder="Seu nome" />
            </label>
            <label>
              Telefone
              <input
                name="telefone"
                value={formState.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="voce@empresa.com"
              />
            </label>
            <label>
              Cidade
              <input name="cidade" value={formState.cidade} onChange={handleChange} placeholder="Sua cidade" />
            </label>
          </div>
          <label>
            Mensagem
            <textarea
              name="mensagem"
              value={formState.mensagem}
              onChange={handleChange}
              rows="5"
              placeholder="Conte um pouco sobre seu consumo ou tipo de projeto."
            />
          </label>
          <button className="button button--primary" type="submit">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
