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
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <span className="avatar-icon">👨‍🍳</span>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">M.U. Rahul</h3>
                <p className="profile-title">Master's in Hotel Management</p>
              </div>
            </div>
            
            <div className="profile-bio">
              <p className="bio-text">
                Aspiring hospitality professional with a Master's degree in Hotel Management and extensive 
                hands-on experience in catering, cruise services, and hotel operations. Known for combining 
                strong academic knowledge with real-world expertise gained from reputed establishments.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Events Catered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="expertise-section">
            <h3 className="section-title">Core Competencies</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🍽️</div>
                <div className="skill-content">
                  <h4 className="skill-title">Culinary Arts</h4>
                  <p className="skill-desc">Menu planning & food preparation</p>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⭐</div>
                <div className="skill-content">
                  <h4 className="skill-title">Guest Services</h4>
                  <p className="skill-desc">Exceptional customer experience</p>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🏨</div>
                <div className="skill-content">
                  <h4 className="skill-title">Hotel Operations</h4>
                  <p className="skill-desc">Management & coordination</p>
                </div>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🚢</div>
                <div className="skill-content">
                  <h4 className="skill-title">Cruise Services</h4>
                  <p className="skill-desc">Maritime hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="section-title">Contact Information</h3>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (504) 565-6084</span>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">muppalarahult603@gmail.com</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="closing-section">
            <p className="closing-text">
              Passionate about delivering exceptional culinary experiences and ensuring customer 
              satisfaction in every aspect of service. Committed to excellence in hospitality management 
              and culinary arts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;