export function parseBill(input) {
  const value = input.trim().replace(/^R\$\s*/, '');
  // Brazilian notation: 350,50 or 1.234,56. Reject partial/ambiguous input.
  if (!/^(?:\d+|[1-9]\d{0,2}(?:\.\d{3})+)(?:,\d{1,2})?$/.test(value)) return null;
  const amount = Number(value.replaceAll('.', '').replace(',', '.'));
  const cents = Math.round(amount * 100);
  if (!Number.isSafeInteger(cents) || cents <= 0 || cents > Math.floor(Number.MAX_SAFE_INTEGER / 12)) return null;
  return cents / 100;
}

export const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL',
}).format(value);

export function simulateBill(bill) {
  const cents = Math.round(bill * 100);
  const savings = Math.round(cents * 0.8);
  return { monthlySavings: savings / 100, annualSavings: savings * 12 / 100, remainingBill: (cents - savings) / 100 };
}

export function simulationMessage(bill, result) {
  return [
    'Olá, EMG! Gostaria de um orçamento de energia solar com base nesta simulação.', '',
    `Conta de luz informada: ${formatCurrency(bill)}`,
    `Economia mensal na hipótese de 80%: ${formatCurrency(result.monthlySavings)}`,
    `Economia anual nessa hipótese: ${formatCurrency(result.annualSavings)}`,
    `Valor restante nessa hipótese: ${formatCurrency(result.remainingBill)}`, '',
    'Sei que esta estimativa é simplificada, não é um orçamento e não garante economia. Gostaria de avaliar meu projeto.',
  ].join('\n');
}
