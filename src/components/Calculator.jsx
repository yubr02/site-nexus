import { useState } from 'react';
import { formatCurrency, parseBill, simulateBill, simulationMessage } from '../utils/simulation.js';
import { whatsappUrl } from '../utils/whatsapp.js';

function Calculator() {
  const [billValue, setBillValue] = useState('350,00');
  const bill = parseBill(billValue);
  const result = bill === null ? null : simulateBill(bill);
  const error = !billValue.trim() ? 'Informe o valor da sua conta de luz.' : 'Informe um valor maior que zero no formato brasileiro, como 350,00 ou 1.234,56.';

  return (
    <section className="section section--accent" id="simulacao">
      <div className="container calculator">
        <div className="calculator__copy">
          <span className="eyebrow">Simulação de energia solar</span>
          <h2>Uma estimativa para começar a conversa</h2>
          <p id="simulation-disclaimer">Esta simulação usa uma hipótese simplificada de <strong>80% de economia</strong>. Não é um orçamento nem uma garantia. A economia real depende da tarifa, do consumo e da avaliação do projeto.</p>
          <label className="calculator__label" htmlFor="billValue">Valor médio mensal da conta de luz</label>
          <div className="calculator__input-wrap">
            <span aria-hidden="true">R$</span>
            <input id="billValue" type="text" inputMode="decimal" maxLength={24} value={billValue} onChange={(event) => setBillValue(event.target.value)} aria-invalid={bill === null} aria-describedby={`bill-hint simulation-disclaimer${bill === null ? ' bill-error' : ''}`} />
          </div>
          <p id="bill-hint" className="field-hint">Exemplos: 350,00 ou 1.234,56. Você também pode colar um valor com R$.</p>
          <p id="bill-error" className="field-error" aria-live="polite">{bill === null ? error : ''}</p>
        </div>
        <div className="calculator__results">
          <div aria-live="polite" aria-atomic="true" className="results-list">
            <article className="result-card result-card--highlight"><h3>Economia mensal na hipótese de 80%</h3><strong>{result ? formatCurrency(result.monthlySavings) : '—'}</strong></article>
            <article className="result-card"><h3>Economia anual nessa hipótese</h3><strong>{result ? formatCurrency(result.annualSavings) : '—'}</strong></article>
            <article className="result-card"><h3>Valor restante nessa hipótese</h3><strong>{result ? formatCurrency(result.remainingBill) : '—'}</strong></article>
          </div>
          {result ? <a className="button button--primary" href={whatsappUrl(simulationMessage(bill, result))} target="_blank" rel="noopener noreferrer">Pedir orçamento com essa estimativa</a> : <button className="button button--primary" disabled>Pedir orçamento com essa estimativa</button>}
          <p className="field-hint">O WhatsApp abre com os valores preparados. Você confere e confirma o envio lá.</p>
        </div>
      </div>
    </section>
  );
}
export default Calculator;
