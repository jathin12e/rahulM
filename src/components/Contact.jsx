import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const contactMethods = [
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 504 565 6084',
      link: 'tel:+15045656084',
      description: 'Available for calls and WhatsApp'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'muppalarahult603@gmail.com',
      link: 'mailto:muppalarahult603@gmail.com',
      description: 'Quick response guaranteed'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'New Orleans, USA',
      link: '#',
      description: 'Open to relocation opportunities'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="contact-bg-elements">
        <div className="bg-element element-1">🍽️</div>
        <div className="bg-element element-2">👨‍🍳</div>
        <div className="bg-element element-3">🌟</div>
        <div className="bg-element element-4">💼</div>
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title-1" style={{color:"white"}}>Let's Create Something Amazing</h2>
          <p className="section-subtitle">
            Ready to bring exceptional culinary experiences to your establishment. 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className={`contact-info-section ${isVisible ? 'visible' : ''}`}>
            <div className="info-header">
              <h3>Get In Touch</h3>
              <div className="header-decoration"></div>
            </div>
            
            <p className="info-description">
              I'm currently available for new opportunities in hospitality, 
              culinary arts, and restaurant management. Whether you're looking 
              for a skilled chef, hospitality professional, or want to discuss 
              a potential collaboration, I'd love to hear from you.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="method-icon">
                    <span>{method.icon}</span>
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="availability-badge">
              <div className="status-dot"></div>
              <span>Currently Available for Opportunities</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-section ${isVisible ? 'visible' : ''}`}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'll get back to you within 24 hours</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-decoration"></div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-decoration"></div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div className="input-decoration"></div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    <span>Send Message</span>
                  </>
                )}
                <div className="btn-glow"></div>
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-card">
            <div className="action-icon">💼</div>
            <h4>Job Opportunities</h4>
            <p>Looking for hospitality or culinary positions</p>
          </div>
          <div className="action-card">
            <div className="action-icon">👨‍🍳</div>
            <h4>Consultation</h4>
            <p>Menu development and kitchen optimization</p>
          </div>
          <div className="action-card">
            <div className="action-icon">🌟</div>
            <h4>Collaboration</h4>
            <p>Special events and culinary projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;