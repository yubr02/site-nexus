import { useState } from 'react';
import { faqs } from '../data/siteContent.js';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <div className="section-heading">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Serviços elétricos e energia solar, sem complicação</h2>
          <p>Saiba como pedir uma proposta e o que considerar antes de começar.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article className="faq-item" key={item.question}>
                <h3><button id={`faq-button-${index}`} type="button" aria-expanded={isActive} aria-controls={`faq-panel-${index}`} onClick={() => setActiveIndex(isActive ? null : index)}><span>{item.question}</span><span aria-hidden="true">{isActive ? '−' : '+'}</span></button></h3>
                <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={!isActive}>
                  <p>{item.answer}{item.source && <><br /><a className="text-link" href={item.source} target="_blank" rel="noopener noreferrer">{item.sourceLabel}</a></>}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Faq;
