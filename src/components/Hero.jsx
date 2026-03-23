import { demoVideos, heroPanelPoints, highlights, stats } from '../data/siteContent.js';

function Hero({ company }) {
  const featuredVideo = demoVideos.find((video) => video.featured) ?? demoVideos[0];

  return (
    <section className="hero section" id="home">
      <div className="hero__media">
        <video
          className="hero__bg-video"
          src={featuredVideo.localSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy reveal">
          <span className="eyebrow">Energia solar com engenharia, estratégia e confiança</span>
          <h1>Economize com energia solar e invista no seu futuro.</h1>
          <p>
            A {company.shortName} desenvolve projetos solares residenciais, comerciais e rurais
            com foco em economia real, segurança técnica e valorização do patrimônio.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contato">
              Solicitar orçamento
            </a>
            <a
              className="button button--ghost"
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>

          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__stats reveal reveal-delay">
          <div className="hero__video-card">
            <p>Por que falar com a AC Engenharia</p>
            <h2>Projeto solar com leitura técnica, economia prevista e atendimento consultivo.</h2>
            <ul className="hero__panel-list">
              {heroPanelPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button button--primary" href="#simulacao">
              Simular economia
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
