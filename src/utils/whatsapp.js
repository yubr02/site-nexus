import { company } from '../data/siteContent.js';

export const defaultMessage = 'Olá, EMG! Gostaria de conversar sobre um orçamento.';

export function whatsappUrl(message = defaultMessage) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function contactMessage({ servico, nome, cidade, mensagem }) {
  return [
    'Olá, quero solicitar um orçamento com a EMG.', '',
    `Serviço: ${servico}`, `Nome: ${nome.trim()}`,
    `Cidade: ${cidade.trim()}`, '',
    'Mensagem:', mensagem.trim() || 'Gostaria de mais informações sobre o serviço.',
  ].join('\n');
}
