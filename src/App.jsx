import React, { useState, useEffect } from 'react';
import logo from './assets/logo_picture_only.png';
import profile from './assets/profile.jpeg';
import background from './assets/wood-background.png';


function App() {
  const [language, setLanguage] = useState('ENG');
  const [articleOverlay, setArticleOverlay] = useState(null);

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

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className={`app ${language.toLowerCase()}`}>
      {/* Fixed Header */}
      <header className="fixed-header">
        <nav className="nav-links">
          <a href="#intro">Intro</a>
          <a href="#services">Services</a>
          <a href="#knowledge">Knowledge</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="lang-switch">
          <button onClick={() => setLanguage('HUN')}>HUN</button>
          <button onClick={() => setLanguage('ENG')}>ENG</button>
        </div>
      </header>

      {/* SubPage 1: Intro */}
      <div className="section-divider"></div>
      <section className="section intro" id="intro">
        <div className="intro-content">
          <div className="intro-column logo-col">
            <img src={logo} alt="Business Logo" className="logo" />
          </div>
          <div className="intro-column text-col">
            <div className="presentation">
              <h1>dr. Szomor Zsófia Anna LL.M. ügyvéd közlekedési szakjogász</h1>
              <p>Forduljon bizalommal hozzám, ha szakszerű, hatékony és precíz jogi segítségnyújtásra van szüksége a büntetőjog, cégeljárás, ingatlan adásvétel/ ajándékozás, valamint a családjog területén.</p>
            </div>
          </div>
          <div className="intro-column pic-col">
            <img src={profile} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <div className="background-img"></div>
      </section>

      {/* SubPage 2: Services */}
      <section className="section services" id="services">
        <h2>Our Services</h2>
        <ServiceCard title="Contract Law" details="We draft and review contracts..." />
        <ServiceCard title="Litigation" details="Representation in court cases..." />
        {/* Add more services as needed */}
      </section>

      {/* SubPage 3: Knowledge Base */}
      <div className="section-divider"></div>
      <section className="section knowledge" id="knowledge">
        <h2>Case Studies</h2>
        <div className="articles">
          <ArticleCard 
            title="Winning a Tenant Dispute"
            description="How we helped a tenant regain their rights"
            content="Full article content here..."
            onClick={setArticleOverlay}
          />
          {/* More articles */}
        </div>
      </section>

      {/* Article Overlay */}
      {articleOverlay && (
        <div className="overlay fade" onClick={() => setArticleOverlay(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setArticleOverlay(null)}>X</button>
            <h3>{articleOverlay.title}</h3>
            <p>{articleOverlay.content}</p>
          </div>
        </div>
      )}

      {/* SubPage 4: Contact */}
      <div className="section-divider"></div>
      <section className="section contact" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p>Email: contact@lawxyz.com</p>
          <p>Phone: +36 30 123 4567</p>
        </div>
        <form className="contact-form">
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="legal-text">
          <p>Legal information goes here (TBD).</p>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, details }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="service-card" onClick={() => setOpen(!open)}>
      <h3>{title}</h3>
      {open && <p className="fade-in">{details}</p>}
    </div>
  );
}

function ArticleCard({ title, description, content, onClick }) {
  return (
    <div className="article-card" onClick={() => onClick({ title, content })}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default App;
