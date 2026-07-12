import myphoto from '../assets/Myphoto1.png';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <div className="h1d">
          <p className="eyebrow">Sigma Batch · Apna College</p>
          <h1>Hey, I'm <span className="name">Subham</span></h1>
          <p className="hp2">
            This site is a complete log of my Sigma Batch learning journey — from the
            very first HTML line to advanced backend modules. Every module I finish
            gets pushed here, so it doubles as a roadmap for anyone coming up behind me.
          </p>
          <div className="home-actions">
            <a href="https://github.com/MSubham06/PortfolioSigmaFSD" target="_blank" rel="noreferrer" className="homebtn">
              <i className="fa-brands fa-github"></i> View Code Repo
            </a>
            <a href="#code" className="homebtn-ghost">See my modules ↓</a>
          </div>
        </div>
        <div className="h2d">
          <div className="polaroid">
            <img src={myphoto} alt="Subham" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;