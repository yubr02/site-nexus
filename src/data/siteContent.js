export const company = {
  name: 'EMG Instalações Elétricas & Energia Solar',
  shortName: 'EMG',
  logo: './emg-logo.webp',
  whatsapp: '5511943459000',
  phone: '(11) 94345-9000',
  email: 'contato@acengenhariaenergia.com.br',
  address: 'Rua Pascoal Ranieri Mazzili, 421',
  city: 'São Paulo - SP',
};

export const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Energia solar', href: '#beneficios' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export const services = [
  { title: 'Instalações elétricas', icon: 'bolt', text: 'Instalação de circuitos, tomadas e pontos de iluminação, conforme a necessidade de cada ambiente.', message: 'Olá, EMG! Gostaria de um orçamento para instalações elétricas.' },
  { title: 'Manutenção elétrica', icon: 'tool', text: 'Avaliação de falhas, reparos e verificações preventivas em instalações elétricas existentes.', message: 'Olá, EMG! Preciso avaliar uma manutenção elétrica. Podemos conversar sobre o serviço?' },
  { title: 'Quadros de distribuição', icon: 'panel', text: 'Montagem e adequação de quadros, organização dos circuitos e avaliação dos dispositivos de proteção.', message: 'Olá, EMG! Gostaria de um orçamento para montagem ou adequação de um quadro de distribuição.' },
  { title: 'Energia solar', icon: 'sun', text: 'Sistemas fotovoltaicos planejados a partir da sua conta de luz e do espaço disponível para instalação.', message: 'Olá, EMG! Gostaria de avaliar um sistema de energia solar para meu imóvel.' },
];

export const serviceSteps = [
  { title: 'Entender', text: 'Você conta o que precisa e informa onde será o serviço.' },
  { title: 'Avaliar', text: 'Avaliamos as informações e combinamos os próximos passos para conhecer a instalação.' },
  { title: 'Apresentar a proposta', text: 'Você recebe a descrição do serviço e as condições para decidir.' },
  { title: 'Executar', text: 'Com a proposta aprovada, combinamos a execução do serviço.' },
];

export const benefits = [
  { title: 'Geração própria de energia', text: 'Produza parte da energia consumida no imóvel. A geração varia conforme o sistema, o clima e as condições do local.', icon: 'sun' },
  { title: 'Possibilidade de economia', text: 'A redução na conta depende do consumo, da tarifa e do projeto. Uma avaliação ajuda a estimar esse potencial.', icon: 'chart' },
  { title: 'Cuidado com o sistema', text: 'Inspeções e manutenção fazem parte do uso do sistema. As necessidades devem ser avaliadas conforme a instalação.', icon: 'shield' },
];

export const faqs = [
  { question: 'Como pedir um orçamento?', answer: 'Escolha o serviço e informe seu nome, cidade e o que precisa no formulário. O botão abre o WhatsApp com a mensagem preparada; você confere e confirma o envio lá. A proposta depende da avaliação do serviço.' },
  { question: 'Vocês fazem manutenção em instalações e sistemas existentes?', answer: 'A EMG oferece manutenção elétrica. Se você já tem uma instalação ou um sistema solar, informe o problema e os equipamentos pelo WhatsApp para a equipe confirmar a possibilidade de atendimento e o serviço necessário.' },
  { question: 'Minha cidade é atendida?', answer: 'O endereço cadastrado da EMG fica em São Paulo - SP. Informe sua cidade e bairro pelo WhatsApp para confirmar a disponibilidade de atendimento no local.' },
  { question: 'A energia solar funciona durante uma falta de energia?', answer: 'Depende do tipo de sistema e dos equipamentos. Sistemas convencionais conectados à rede desligam durante uma queda de energia. Para manter o fornecimento, é preciso um sistema projetado para backup, com inversor compatível e, conforme a configuração, baterias. Ter painéis solares, por si só, não garante energia durante uma falta.', source: 'https://www.energy.gov/cmei/systems/solar-and-resilience-basics', sourceLabel: 'Entenda os sistemas de backup (em inglês)' },
  { question: 'A economia do simulador é garantida?', answer: 'Não. O simulador aplica uma hipótese simplificada de 80% sobre o valor informado. Não considera todos os custos, tarifas ou características da instalação e não é um orçamento. A economia e o retorno dependem da avaliação do projeto.' },
];
