import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
          <p className="about-subtitle">Hospitality Professional & Culinary Expert</p>
        </div>
        
        <div className="about-content">
          <div className="about-grid">
            {/* Main Content Card */}
            <div className="about-main-card">
              <div className="card-header">
                <div className="profile-icon">
                  <span className="icon">👨‍🍳</span>
                </div>
                <div className="header-text">
                  <h3 className="profile-name">M.U. Rahul</h3>
                  <p className="profile-title">Master's in Hotel Management</p>
                </div>
              </div>
              
              <div className="about-text">
                <p className="intro-text">
                  Aspiring hospitality professional with a Master's degree in Hotel Management and extensive 
                  hands-on experience in catering, cruise services, and hotel operations. Known for combining 
                  strong academic knowledge with real-world expertise gained from reputed establishments.
                </p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Events Catered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <p className="closing-text">
                  Passionate about delivering exceptional culinary experiences and ensuring customer 
                  satisfaction in every aspect of service. Committed to excellence in hospitality management 
                  and culinary arts.
                </p>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="about-sidebar">
              {/* Expertise Card */}
              <div className="expertise-card">
                <h3 className="card-title">Core Competencies</h3>
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-icon">🍽️</div>
                    <div className="skill-content">
                      <h4>Culinary Arts</h4>
                      <p>Menu planning & food preparation</p>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">⭐</div>
                    <div className="skill-content">
                      <h4>Guest Services</h4>
                      <p>Exceptional customer experience</p>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">🏨</div>
                    <div className="skill-content">
                      <h4>Hotel Operations</h4>
                      <p>Management & coordination</p>
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">🚢</div>
                    <div className="skill-content">
                      <h4>Cruise Services</h4>
                      <p>Maritime hospitality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="contact-card">
                <h3 className="card-title">Contact Information</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <span className="contact-label">Phone</span>
                      <span className="contact-value">+1 (504) 565-6084</span>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                      <span className="contact-label">Email</span>
                      <span className="contact-value">muppalarahult603@gmail.com</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">Available Worldwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;