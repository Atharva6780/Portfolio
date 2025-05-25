import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl mb-4 md:mb-0">
            Atharva Shinde
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/atharvashinde6780/" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Atharva6780" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://x.com/AtharvaS03?t=7OWybhmhws_FWV2zx7OTrw&s=08" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atharva Shinde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
