import React from "react";

const Footer = () => {
  return (
    <>
      <div id="contacts" className="text-blue-950 bg-gradient-to-t from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                  ></textarea>
                </div>
                <button className="w-full py-3 rounded-lg bg-white text-blue-900 font-medium hover:bg-blue-50 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                  { icon: "fa-instagram", url: "https://www.instagram.com/" },
                  { icon: "fa-twitter", url: "https://twitter.com/AtharvaS03" },
                  { icon: "fa-linkedin", url: "https://www.linkedin.com/in/atharvashinde6780" },
                  { icon: "fa-github", url: "https://github.com/Atharva6780" },
                  { icon: "fa-youtube", url: "https://www.youtube.com/c/yourchannel" },
                  { icon: "fa-whatsapp", url: "https://wa.me/yourphonenumber" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                  >
                    <i className={`fa-brands ${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
              
              <div className="text-white/80 text-center space-y-3">
                <p className="flex items-center justify-center">
                  <i className="fa-solid fa-envelope mr-2"></i>
                  your.email@example.com
                </p>
                <p className="flex items-center justify-center">
                  <i className="fa-solid fa-phone mr-2"></i>
                  +91 123 456 7890
                </p>
                <p className="flex items-center justify-center">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 py-4 border-t border-white/20 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} Atharva Shinde. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;