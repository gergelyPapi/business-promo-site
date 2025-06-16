// React App with tab targeting only enabled on contact section

import React, { useState, useEffect } from 'react';
import logo from './assets/logo_picture_only.png';
import profile from './assets/profile.jpeg';
import ServiceCard from './components/ServiceCard/serviceCard';
import ArticleCard from './components/ArticleCard/articleCard';
import background from './assets/background.png';

function App() {
  const [language, setLanguage] = useState('ENG');
  const [articleOverlay, setArticleOverlay] = useState(null);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'contact') {
            setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) observer.observe(contactSection);

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`app ${language.toLowerCase()}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
      tabIndex={-1}
    >
      {/* Fixed Header */}
      <header className="fixed-header" tabIndex={-1}>
        <img src={logo} alt="Business Logo" className="logo" tabIndex={-1} />
        <nav className="nav-links" tabIndex={-1}>
          <span onClick={() => scrollToSection('intro')} tabIndex={-1}>Intro</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          <span onClick={() => scrollToSection('services')} tabIndex={-1}>Services</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          <span onClick={() => scrollToSection('knowledge')} tabIndex={-1}>Knowledge</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          <span onClick={() => scrollToSection('contact')} tabIndex={-1}>Contact</span>
        </nav>
        <div className="lang-switch" tabIndex={-1}>
          <button onClick={() => setLanguage('HUN')} tabIndex={-1}>HUN</button>
          <button onClick={() => setLanguage('ENG')} tabIndex={-1}>ENG</button>
        </div>
      </header>

      {/* SubPage 1: Welcome page */}
      <div className="section-divider"></div>
      <section className="section intro" id="intro" tabIndex={-1}>
        <div className="intro-content" tabIndex={-1}>
          <div className="intro-column text-col" tabIndex={-1}>
            <div className="presentation" tabIndex={-1}>
              <h1 tabIndex={-1}>dr. Szomor Zsófia Anna LL.M. ügyvéd közlekedési szakjogász</h1>
              <p tabIndex={-1}>Forduljon bizalommal hozzám, ha szakszerű, hatékony és precíz jogi segítségnyújtásra van szüksége a büntetőjog, cégeljárás, ingatlan adásvétel/ ajándékozás, valamint a családjog területén.</p>
            </div>
          </div>
          <div className="intro-column pic-col" tabIndex={-1}>
            <img src={profile} alt="Profile" className="profile-pic" tabIndex={-1} />
          </div>
        </div>
      </section>

      {/* SubPage 2: Services */}
      <section className="section services" id="services" tabIndex={-1}>
        <h2 tabIndex={-1}>Our Services</h2>
        <ServiceCard title="Contract Law" details="We draft and review contracts..." />
        <ServiceCard title="Litigation" details="Representation in court cases..." />
      </section>

      {/* SubPage 3: Knowledge Base */}
      <div className="section-divider"></div>
      <section className="section knowledge" id="knowledge" tabIndex={-1}>
        <h2 tabIndex={-1}>Case Studies</h2>
        <div className="articles" tabIndex={-1}>
          <ArticleCard 
            title="Winning a Tenant Dispute"
            description="How we helped a tenant regain their rights"
            content="Full article content here..."
            onClick={setArticleOverlay}
          />
        </div>
      </section>

      {/* Article Overlay */}
      {articleOverlay && (
        <div className="overlay fade" onClick={() => setArticleOverlay(null)} tabIndex={-1}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()} tabIndex={-1}>
            <button className="close" onClick={() => setArticleOverlay(null)} tabIndex={-1}>X</button>
            <h3 tabIndex={-1}>{articleOverlay.title}</h3>
            <p tabIndex={-1}>{articleOverlay.content}</p>
          </div>
        </div>
      )}

      {/* SubPage 4: Contact */}
      <div className="section-divider"></div>
      <section className="section contact" id="contact">
        <h2 tabIndex={isContactVisible ? 0 : -1}>Contact Us</h2>
        <div className="contact-details">
          <p tabIndex={isContactVisible ? 0 : -1}>Email: contact@lawxyz.com</p>
          <p tabIndex={isContactVisible ? 0 : -1}>Phone: +36 30 123 4567</p>
        </div>
        <form className="contact-form">
          <input type="email" placeholder="Your Email" required tabIndex={isContactVisible ? 0 : -1} />
          <textarea placeholder="Your Message" required tabIndex={isContactVisible ? 0 : -1}></textarea>
          <button type="submit" tabIndex={isContactVisible ? 0 : -1}>Send Message</button>
        </form>
        <div className="legal-text">
          <p tabIndex={isContactVisible ? 0 : -1}>Legal information goes here (TBD).</p>
        </div>
      </section>
    </div>
  );
}

export default App;
