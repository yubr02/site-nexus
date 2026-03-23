# AC Engenharia e Energia Solar

Site institucional em React + Vite para apresentação comercial e captação de clientes de energia solar.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Conecte o repositório local ao remoto:

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git add .
git commit -m "Initial site publish"
git push -u origin main
```

3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `GitHub Actions`.
5. Depois do push, o workflow `Deploy to GitHub Pages` fará a publicação.

## Estrutura

- `src/`: componentes e estilos do site
- `public/`: logo e vídeos locais
- `.github/workflows/deploy.yml`: deploy automático no GitHub Pages
