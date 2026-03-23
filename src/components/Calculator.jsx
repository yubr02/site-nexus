import { useMemo, useState } from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function Calculator() {
  const [billValue, setBillValue] = useState('350');

  const parsedValue = Number.parseFloat(billValue.replace(',', '.')) || 0;

  const simulation = useMemo(() => {
    const monthlySavings = parsedValue * 0.8;
    const annualSavings = monthlySavings * 12;
    const remainingBill = parsedValue - monthlySavings;

    return {
      monthlySavings,
      annualSavings,
      remainingBill: remainingBill > 0 ? remainingBill : 0,
    };
  }, [parsedValue]);

  return (
    <section className="section section--accent" id="simulacao">
      <div className="container calculator">
        <div className="calculator__copy reveal">
          <span className="eyebrow">Simulação de economia</span>
          <h2>Descubra quanto sua conta pode encolher com um projeto bem dimensionado.</h2>
          <p>
            Informe seu valor médio mensal para visualizar uma estimativa simples de economia.
            É uma referência inicial para iniciar a conversa comercial com mais contexto.
          </p>

          <label className="calculator__label" htmlFor="billValue">
            Valor médio da conta de luz
          </label>
          <div className="calculator__input-wrap">
            <span>R$</span>
            <input
              id="billValue"
              type="number"
              min="0"
              step="0.01"
              value={billValue}
              onChange={(event) => setBillValue(event.target.value)}
              placeholder="350"
            />
          </div>
        </div>

        <div className="calculator__results reveal reveal-delay">
          <article className="result-card result-card--highlight">
            <span>Economia mensal estimada</span>
            <strong>{formatCurrency(simulation.monthlySavings)}</strong>
          </article>
          <article className="result-card">
            <span>Economia anual estimada</span>
            <strong>{formatCurrency(simulation.annualSavings)}</strong>
          </article>
          <article className="result-card">
            <span>Conta residual estimada</span>
            <strong>{formatCurrency(simulation.remainingBill)}</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
