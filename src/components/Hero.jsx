function Hero({ company }) {
  return (
    <section className="hero section" id="home">
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="eyebrow">EMG · Elétrica & energia solar</span>
          <h1>Instalações elétricas e energia solar para sua casa ou empresa</h1>
          <p className="hero__tagline">Mais energia para o seu futuro.</p>
          <p>Precisa instalar, reparar ou começar a gerar sua energia? Conte o que você precisa e converse com a EMG sobre o serviço.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contato">Solicitar orçamento <span aria-hidden="true">↗</span></a>
            <a className="button button--ghost" href="#servicos">Conhecer os serviços</a>
          </div>
          <p className="hero__location">Endereço em {company.city}. Consulte o atendimento na sua cidade.</p>
        </div>
        <figure className="hero__brand-art">
          <img src={company.logo} alt="EMG Instalações Elétricas e Energia Solar: símbolo com casa, painel solar e sol." width="1200" height="800" fetchPriority="high" />
          <figcaption>Instalações · Manutenção · Quadros · Energia solar</figcaption>
        </figure>
      </div>
    </section>
  );
}
export default Hero;
