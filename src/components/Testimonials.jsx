import { testimonials } from '../data/siteContent.js';

function Testimonials() {
  return (
    <section className="section section--light" id="depoimentos">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Depoimentos</span>
          <h2>Resultados percebidos por quem decidiu gerar a própria energia.</h2>
          <p>
            Credibilidade se constrói com experiência real, clareza no processo e entrega que
            se traduz em confiança após a instalação.
          </p>
        </div>

        <div className="cards-grid cards-grid--three">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card reveal" key={testimonial.name}>
              <p>"{testimonial.text}"</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
