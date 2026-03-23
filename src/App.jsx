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
import Testimonials from './components/Testimonials.jsx';
import { company, navLinks } from './data/siteContent.js';
import './styles/app.css';

function App() {
  useEffect(() => {
    document.title = company.name;
  }, []);

  return (
    <div className="app-shell">
      <Navbar links={navLinks} company={company} />
      <main>
        <Hero company={company} />
        <About />
        <Benefits />
        <Services />
        <Calculator />
        <Testimonials />
        <Faq />
        <Contact company={company} />
      </main>
      <Footer links={navLinks} company={company} />
    </div>
  );
}

export default App;
