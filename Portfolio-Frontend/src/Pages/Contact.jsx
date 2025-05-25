import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
  if (formData.name && formData.email && formData.message) {
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  } else {
    alert('Please fill in all required fields.');
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "atharvas6780@gmail.com",
      link: "mailto:hello@elite8digital.com"
    },
    {
      icon: "📱",
      title: "Phone",
      details: "8177896780",
      link: "tel:+918177896780"
    },
    {
      icon: "📍",
      title: "Location",
      details: "Mumbai,Maharashtra",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      details: "Connect with me",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Create Something Amazing</h3>
            <p className="text-gray-300 text-lg mb-8">
              I'm always excited to work on 
              innovative projects that push the boundaries of what's possible. Whether you need 
              a stunning website or complex web application, let's discuss how 
              we can make it happen.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center">
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{info.title}</p>
                    <a 
                      href={info.link}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-semibold">Available for new projects</span>
              </div>
              <p className="text-green-200 text-sm mt-2">
                Currently accepting new client projects and collaborations
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {['GitHub', 'Twitter'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600/30 transition-all duration-300 hover:scale-110"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
