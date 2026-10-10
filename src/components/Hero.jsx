function Hero({ company }) {
  return (
    <section className="hero section" id="home">
      <div className="container hero__content">
        <div className="hero__copy reveal">
          <span className="eyebrow">Elétrica & energia solar</span>
          <h1>Mais energia para o seu <em>futuro.</em></h1>
          <p>Instalações elétricas, manutenção e energia solar para sua casa ou empresa. Conte com a EMG para entender sua necessidade e planejar o próximo passo.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contato">Solicitar orçamento <span aria-hidden="true">↗</span></a>
            <a className="button button--ghost" href="#servicos">Conhecer os serviços</a>
          </div>
          <div className="hero__signature"><span /> Instalações elétricas <span /> Sistemas fotovoltaicos</div>
        </div>
        <figure className="hero__brand-art reveal reveal-delay">
          <img src={company.logo} alt="EMG — Instalações Elétricas & Energia Solar. Mais energia para o seu futuro." fetchPriority="high" />
          <figcaption>Do cuidado com a instalação à geração da sua energia.</figcaption>
        </figure>
      </div>
    </section>
  );
}
export default Hero;
