import { useState } from 'react';
import { faqs } from '../data/siteContent.js';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container faq">
        <div className="section-heading reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Perguntas frequentes sobre energia solar.</h2>
          <p>
            Reunimos respostas objetivas para as dúvidas mais comuns de quem está avaliando fazer a transição.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <article className={`faq-item reveal ${isActive ? 'is-active' : ''}`} key={item.question}>
                <button type="button" onClick={() => setActiveIndex(index)}>
                  <span>{item.question}</span>
                  <span>{isActive ? '-' : '+'}</span>
                </button>
                {isActive && <p>{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
