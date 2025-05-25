import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './styles/animations.css';

// Space Animation Component
const SpaceBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars = [];
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          delay: Math.random() * 10 + 5
        });
      }
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80 shooting-star"
          style={{
            top: '20%',
            right: '-10px',
            animationDelay: `${shootingStar.delay}s`
          }}
        />
      ))}

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse blur-xl"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse blur-xl floating-orb-2"></div>
      <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-indigo-400 rounded-full opacity-20 animate-pulse blur-xl floating-orb-3"></div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'work':
        return <Work />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SpaceBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;