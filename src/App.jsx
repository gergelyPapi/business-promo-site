// React App with tab targeting only enabled on contact section

import React, { useState, useEffect } from 'react';
import logo from './assets/logo_picture_only.png';
import profile from './assets/profile.jpeg';
import ServiceCard from './components/ServiceCard/serviceCard';
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
          <span onClick={() => scrollToSection('welcome')} tabIndex={-1}>Kezdőlap</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          <span onClick={() => scrollToSection('intro')} tabIndex={-1}>Bevezetés</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          <span onClick={() => scrollToSection('services')} tabIndex={-1}>Szolgáltatások</span>
          <span className="nav-divider" tabIndex={-1}>|</span>
          {/* <span onClick={() => scrollToSection('knowledge')} tabIndex={-1}>Tudástár</span>
          <span className="nav-divider" tabIndex={-1}>|</span> */}
          <span onClick={() => scrollToSection('contact')} tabIndex={-1}>Kapcsolatok</span>
        </nav>
        <div className="lang-switch" tabIndex={-1}>
          <button onClick={() => setLanguage('HUN')} tabIndex={-1}>HUN</button>
          <button onClick={() => setLanguage('ENG')} tabIndex={-1}>ENG</button>
        </div>
      </header>

      {/* SubPage 1: Welcome page */}
      <div className="section-divider"></div>
      <section className="section welcome" id="welcome" tabIndex={-1}>
        <div className="intro-content" tabIndex={-1}>
          <div className="intro-column logo-col" tabIndex={-1}>
            <img src={logo} alt="Profile" className="logo-pic" tabIndex={-1} />
          </div>
          <div className="intro-column text-col" tabIndex={-1}>
            <div className="presentation" tabIndex={-1}>
              <h1 tabIndex={-1}>dr. Szomor Zsófia Anna LL.M.</h1>
              <h3 tabIndex={-1}>ügyvéd</h3>
              <h3 tabIndex={-1}>közlekedési szakjogász</h3>
              <h2 tabIndex={-1}>Forduljon bizalommal hozzám, ha szakszerű, hatékony és precíz jogi segítségnyújtásra van szüksége a büntetőjog, cégeljárás, ingatlan adásvétel, ajándékozás, valamint a családjog területén.</h2>
            </div>
          </div>
          <div className="intro-column pic-col" tabIndex={-1}>
            <img src={profile} alt="Profile" className="profile-pic" tabIndex={-1} />
          </div>
        </div>
        <footer className="intro-footer" tabIndex={-1}>
          <h3 tabIndex={-1}>Elérhetőségek</h3>
          <p tabIndex={-1}>
            <span className='presentation-sub-title'>Tel. szám:</span>
            <span className='presentation-sub-content'> +36309713467</span>
          </p>
          <p tabIndex={-1}>
            <span className='presentation-sub-title'>Email:</span>
            <span className='presentation-sub-content'> drszomorzsofia@gmail.com</span>
          </p>
          <p tabIndex={-1}>
            <span className='presentation-sub-title'>Cím:</span>
            <span className='presentation-sub-content'> 1137 Budapest, Szent István krt. 18. 2. em. 4/A.</span>
          </p>
        </footer>
      </section>

      {/* SubPage 2: Intro page */}
      <div className="section-divider"></div>
      <section className="section intro" id="intro" tabIndex={-1}>
        <div className="intro-content" tabIndex={-1}>
          <div className="intro-column text-col" tabIndex={-1}>
            <div className="presentation" tabIndex={-1}>
              <p tabIndex={-1}>Dr. Szomor Zsófia Anna ügyvéd vagyok. Jogi tanulmányaimat a Szegedi Tudományegyetem Állam- és Jogtudományi Karán végeztem. Egyetemi éveim során Bűnügyi Modulon specializálódtam, mely által mélyebb és átfogóbb tudást szereztem a büntetőjog területén. 
                  Diplomám megszerzését követően több mint 3 évig egy magas szakmai színvonalú budapesti ügyvédi irodánál dolgoztam ügyvédjelöltként, ahol elméleti tudásom mellé mélyreható gyakorlati tapasztalatot szereztem több jogterületen is.
                  Ügyvédjelölti pályafutásom alatt számos bírósági eljárásban képviseltem Ügyfeleinket, és sikeres jogi tanácsadások révén számos esetben mozdítottam elő jogi problémáik megoldását.
                  Ügyvédjelölti éveim alatt közlekedési szakjogászi képesítést szereztem a Pázmány Péter Katolikus Egyetem Állam- és Jogtudományi Karán.
                  Ügyvédi hivatásom gyakorlása során határozott célom, hogy nagy fokú szakmai alázattal, elhivatottsággal és felkészültséggel segítsek Ügyfeleimnek,
                  jogaik és érdekeik érvényesítésében. Kiemelt figyelmet fordítok továbbá a megbízhatóságra, empátiára, a precizitásra és a hatékony kommunikációra, annak érdekében, hogy Ügyfeleim jogi problémái minél gyorsabban és eredményesen megoldódjanak.</p>
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
        <ServiceCard 
          title="Védelem ellátása a nyomozás, valamint a bírósági eljárás során"
          details="A büntetőeljárási törvényünk értelmében a terheltnek a büntetőeljárás minden szakaszában joga
           van a hatékony védelemhez, melybe beletartozik, hogy védő közreműködését vegye igénybe védelme ellátására. Védőként legfőbb 
           célom, hogy Ügyfeleim védelmét már a nyomozás kezdetétől hatékonyan, precízen lássam el, 
           és biztosítsam számukra a jogállamiság keretei között a tisztességes eljárást. A védelem ellátása során
            nagy fokú szakmai alázattal, kellő empátiával és felkészültséggel képviselem Ügyfeleimet, továbbá mindig
             arra törekszem, hogy Ügyfeleimet részletesen tájékoztassam az aktuális jogi helyzetükről, a lehetséges következményekről,
              és a védelmi stratégiák lehetőségeiről. Kiemelt
               figyelmet fordítok arra, hogy minden esetben Ügyfeleim legfőbb érdekei szerint járjak el és jogaikat a hatóságok, bíróságok maradéktalanul tiszteletben tartsák.
               
            Ha büntetőügyben Önnek vagy hozzátartozójának védőre van szüksége, keressen bizalommal!"
          articleId="article1"
        />
        <ServiceCard title="Litigation" details="Representation in court cases..." articleId="article2" />
      </section>

      {/* SubPage 3: Knowledge Base */}
      {/* <div className="section-divider"></div>
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
      </section> */}

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
