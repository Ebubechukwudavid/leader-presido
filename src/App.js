import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';  // separate name to avoid conflict
import About from './About';
import Services from './Services';
import './App.css';


function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const images = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png'
  ];

  const phrases = [
    'Community Founder',    'President',    'SiBAN | CEO', 'C.B.C Blockchain Services'
  ];

  const scrollingImages = [
    'slide-1.png','slide-2.png','slide-3.png', 'slide-4.png', 'slide-5.png',  'slide-6.png',   'slide-7.png',    'slide-8.png', 'slide-9.png', 'slide-10.png','slide-11.png',
  ];

  const allScrollingImages = [...scrollingImages, ...scrollingImages];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isTyping, phrases]);

  return (
  //Section A (header) 
    <div className="App">
      <Router>
      <header className="header">
        <div className="card">
          <div className="name">Obinna Iwuno</div>
          <div className="role">community founder</div>
        </div>
        <nav className="nav">
         <HashLink to="/#">Home</HashLink>
          <Link to="/about">About Me</Link> 
         <HashLink to="/#services">Services</HashLink>
          <a href="#blog">Blog</a>
          <a href="#beyond-vision">Beyond the Vision</a>
        </nav>
        <input id="checkbox" type="checkbox"></input>
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
        <div className="mobile-nav">
          <HashLink to="/#">Home</HashLink>
          <Link to="/about">About Me</Link>
          <HashLink to="/#services">Services</HashLink>
          <a href="#blog">Blog</a>
          <a href="#beyond-vision">Beyond the Vision</a>
        </div>
      </header>
       <Routes>
         <Route path="/" element={
          <>
      <div className="slider-container">
        <div className="slider">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className={`slider-image ${currentImage === 2 ? 'face-image' : ''} ${
              isTransitioning ? 'slide-out' : ''
            }`}
          />
          <div className="image-text">
            <div className="name-text">OBINNA IWUNO</div>
            <div className="role-text">
              {currentText}
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="viewport-box">
          <div className="scroll-track">
            {allScrollingImages.map((src, index) => (
              <img key={index} className="graphic-item" src={src} alt={`graphic-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Section B */}
    <div className="section-B">
        <span className="about-bg">ABOUT</span>
        <span className="about-fg">OBINNA IWUNO</span>
      </div>

       <div className="About-row-layout" id="about">
        <img className="About-sticky" src="About-01.png" alt="About-avatar" />
        <div>
          <h2 className="About-heading">OBINNA IWUNO</h2>
          <div className="About-info-container">
            <p className="About-subtitle">President, SiBAN | CEO, C.B.C Blockchain Services</p>
            <hr />
          </div>
          <br /><br />
          <p className="About-paragraph-1">
            Crypto Bootcamp Community is the premier go-to-community for enthusiasts,
            professionals and investors in the blockchain and web3 industry,
            dedicated to driving blockchain and web3 mainstream in Africa and beyond.
            <br /><br /><br />
            We are an education and skill development outfit, growth marketing and user
            engagement platform, a crypto training and consulting agency, and
            experiential events firm whose focus is on helping Web3 brands through
            visibility, acquisition, and conversion to deliver their products and
            services to the market, position rightly in the ecosystem, gain adoption
            with the target audience and access the best talents in blockchain and web3.
            <br /><br /><br />
            With over 10,000 community members in 14 countries, Crypto Bootcamp has made
            a huge significant impact across the continent, empowering individuals and
            fostering a deeper understanding of this cutting-edge technology.
            <br /><br /><br />
            Our membership spans across the major cities and universities in the East,
            West, Central and Southern Africa region and beyond. We've trained over
            50,000 on Blockchain Technology, Crypto-currency and Web3 through our
            education programs and events, and empowered them to actively engage in the
            industry as service providers, innovators and traders.
            <br /><br /><br />
            Crypto Bootcamp is the one stop solution and growth partner for blockchain
            and web3 industry businesses . <Link to="/about" >Learn more</Link>
            
          </p>
        </div>
      </div>

      {/* Section C */}
          <div className="section-B" id='services'>
        <span className="about-bg">Service</span>
        <span className="about-fg">Service</span>
      </div>

     <div className="service-rectangle-container">
  <div className="service-section-container">
    <div className="service-card">
      <div className="service-emoji">🎓</div>
      <div className="service-title">Education and Events</div>
      <div className="service-description">
        At the core of our offerings is our commitment to education and community engagement. We host regular educational sessions designed to empower our community with in-depth knowledge of the crypto space. From live sessions on platforms like Telegram and Twitter to immersive bootcamps and expert-led events, we ensure our community is well-versed in blockchain technology and its applications. Our events also provide excellent opportunities for networking, knowledge sharing, and collaboration with industry experts.
      </div>
    </div>

    <div className="service-card">
      <div className="service-emoji">💡</div>
      <div className="service-title">Marketing and Campaigns</div>
      <div className="service-description">
        Our marketing and campaign services are meticulously crafted to help brands effectively reach their target audience in the crypto space. We leverage our marketing expertise and extensive network to create strategic campaigns that drive engagement and awareness. Whether you're launching a new product or seeking to enhance brand visibility, our campaigns are designed to achieve maximum impact in a competitive market.
      </div>
    </div>

    <div className="service-card">
      <div className="service-emoji">🗂️</div>
      <div className="service-title">Project Onboarding and Management</div>
      <div className="service-description">
        We provide comprehensive project onboarding and management services to ensure the smooth and efficient execution of your blockchain projects. Our team of experts guides you through every stage, from initial planning to final implementation, ensuring that your projects are delivered on time and to the highest standards.
      </div>
    </div>

    <div className="service-card">
      <div className="service-emoji">🌱</div>
      <div className="service-title">Growth and Expansion Solutions</div>
      <div className="service-description">
        For businesses looking to expand their market presence or enter new markets, we provide tailored growth and expansion solutions. Our consulting services offer strategic insights and practical strategies to help businesses confidently navigate the blockchain ecosystem and achieve sustainable growth.
      </div>
    </div>
  </div>
</div>






</>
        } />
        <Route path="/about" element={<About  />} />
        <Route path="/services" element={<Services />} /> 
      </Routes>
    </Router>
  </div>
  
  );
}

export default App;
