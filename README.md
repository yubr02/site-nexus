# EMG Instalações Elétricas & Energia Solar

Site institucional em React e Vite para apresentação dos serviços da EMG e pedidos de orçamento pelo WhatsApp.

## Visão geral

O projeto transforma a presença digital da empresa em uma experiência direta e acessível, apresentando serviços, diferenciais e canais de contato em diferentes tamanhos de tela.

## Tecnologias

- React
- Vite
- JavaScript
- HTML
- CSS

## Funcionalidades

- Layout responsivo para desktop, tablet e celular
- Apresentação dos serviços da empresa
- Navegação por seções
- Identidade visual própria
- Versão preparada para publicação estática

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

```bash
git clone https://github.com/yubr02/site-nexus.git
cd site-nexus
npm install
npm run dev
```

O terminal exibirá o endereço local da aplicação.

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

## Verificações

`npm test` verifica a leitura de valores monetários brasileiros, a simulação e a codificação das mensagens do WhatsApp. `npm run preview` serve o build para revisão local.

O roteiro `scripts/check-browser.mjs` testa a interface no Chrome em 360, 768 e 1440 px, sem enviar mensagens. Requer Playwright instalado separadamente; informe seu diretório `node_modules` em `EMG_QA_MODULES`, o caminho do Chrome em `EMG_CHROME` e, opcionalmente, `EMG_QA_URL` (padrão: `http://127.0.0.1:4173`). Capturas e relatório ficam em `dist/qa/`, ignorado pelo Git. Essas ferramentas não fazem parte do bundle do site.

## Conteúdo e publicação

- Dados de contato, serviços e perguntas frequentes: `src/data/siteContent.js`.
- O e-mail cadastrado ainda usa a marca AC. Confirmar o novo endereço antes de substituir.
- O endereço cadastrado fica em São Paulo; a região de atendimento precisa ser confirmada, sem inferir cobertura a partir do endereço.
- Não há fotos identificadas de obras da EMG ou informações suficientes para um portfólio. A imagem institucional foi preservada e otimizada em WebP; o PNG original continua disponível.
- A explicação sobre falta de energia foi conferida em [Solar and Resilience Basics, Department of Energy](https://www.energy.gov/cmei/systems/solar-and-resilience-basics).
- O deploy existente usa `.github/workflows/deploy.yml` e GitHub Pages. Um push para `main` publica automaticamente. Não publicar sem solicitação.
- `public/CNAME` ainda registra `acengenhariasolar.com.br`, enquanto o último deploy informou `emgenergiasolar.com.br`. Essa divergência foi preservada nesta atualização; conferir as configurações de Pages antes de qualquer futura alteração de domínio. DNS não foi alterado.

## Estrutura principal

```text
site-nexus/
├── public/
├── src/
├── index.html
├── package.json
└── vite.config.js
```

## Autor

Desenvolvido por [Matheus Santos Carvalho](https://github.com/yubr02).
