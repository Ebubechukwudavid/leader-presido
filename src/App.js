import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'https://via.placeholder.com/800x400/96CEB4/FFFFFF?text=Image+4',
    'https://via.placeholder.com/800x400/FFEAA7/FFFFFF?text=Image+5'
  ];

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
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="App">
      <header className="header">
        <div className="card">
          <div className="name">Obinna Iwuno</div>
          <div className="role">community founder</div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <a href="#beyond-vision">Beyond the Vision</a>
        </nav>
        <input id="checkbox" type="checkbox"></input>
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
        <div className="mobile-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <a href="#beyond-vision">Beyond the Vision</a>
        </div>
      </header>

      <div className="slider-container">
        <div className="slider">
          <img 
            src={images[currentImage]} 
            alt={`Slide ${currentImage + 1}`}
            className={`slider-image ${currentImage === 2 ? 'face-image' : ''}`}
          />
          <div className="image-text">
            <div className="name-text">OBINNA IWUNO</div>
            <div className="role-text">Community Founder</div>
          </div>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
