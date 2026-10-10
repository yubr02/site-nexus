import { useEffect } from 'react';
import About from './components/About.jsx';
import Benefits from './components/Benefits.jsx';
import Calculator from './components/Calculator.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import { company, navLinks } from './data/siteContent.js';
import './styles/app.css';

function App() {
  useEffect(() => {
    document.title = company.name;
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Navbar links={navLinks} company={company} />
      <main id="main-content" tabIndex={-1}>
        <Hero company={company} />
        <Services />
        <About />
        <Benefits />
        <Calculator />
        <Faq />
        <Contact company={company} />
      </main>
      <Footer links={navLinks} company={company} />
    </div>
  );
}

export default App;
