import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow and background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`h-20 sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-100/95 backdrop-blur-sm shadow-lg" : "bg-slate-100/80"
    }`}>
      <nav className="flex justify-between items-center h-full px-5 md:px-10 max-w-7xl mx-auto">
        <button className="text-xl font-medium bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
          <a href="#home">AS</a>
        </button>

        {/* Hamburger Icon for Mobile View */}
        <div className="lg:hidden">
          <button className="text-2xl text-blue-950 p-2" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="nav-end hidden lg:flex space-x-6">
          {["about", "skills", "projects"].map((item) => (
            <button key={item} className="group relative overflow-hidden text-blue-950">
              <a href={`#${item}`} className="text-lg font-medium px-3 py-2 inline-block hover:text-blue-600 transition-colors duration-300">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </button>
          ))}
          <button className="text-white bg-gradient-to-r from-blue-700 to-blue-900 px-5 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
            <a href="#contacts">Contact Me</a>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-50 bg-slate-100/95 backdrop-blur-md transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-end p-6">
            <button onClick={toggleMenu} className="text-2xl text-blue-950">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 h-full pb-20">
            {["home", "about", "skills", "projects", "contacts"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={toggleMenu}
                className="text-2xl font-medium text-blue-950 hover:text-blue-600 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;