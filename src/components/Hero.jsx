import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Hospitality Professional',
    'Culinary Artist',
    'Hotel Management Expert',
    'Customer Experience Specialist'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, titles]);

  return (
    <section className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-element element-1">🍽️</div>
        <div className="floating-element element-2">👨‍🍳</div>
        <div className="floating-element element-3">🌟</div>
        <div className="floating-element element-4">🎯</div>
        <div className="floating-element element-5">💫</div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span>Available for Opportunities</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-main">M.U. RAHUL</span>
              <span className="title-underline"></span>
            </h1>
            
            <h2 className="hero-subtitle">
              <span className="typed-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>
            
            <p className="hero-description">
              Master's in Hotel Management with extensive experience in luxury hospitality, 
              culinary arts, and customer service excellence. Passionate about creating 
              unforgettable dining experiences and delivering exceptional service standards.
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number" style={{color:"white"}}>5+</span>
                <span style={{color:"white"}}>Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{color:"white"}}>50+</span>
                <span className="stat-label" style={{color:"white"}}>Dishes Mastered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{color:"white"}}>100%</span>
                <span className="stat-label" style={{color:"white"}}>Client Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <span className="btn-icon">📧</span>
                <span className="btn-text">Get In Touch</span>
                <div className="btn-glow"></div>
              </a>
              <a href="#menu" className="btn btn-secondary">
                <span className="btn-icon">🍴</span>
                <span className="btn-text">View My Menu</span>
              </a>
              <a href="#experience" className="btn btn-outline">
                <span className="btn-icon">📊</span>
                <span className="btn-text">My Journey</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-image">
            <div className="image-container">
              <img 
                src='/RAI_2013.jpg' 
                alt="M.U. Rahul - Hospitality Professional"
                className="profile-image"
              />
              <div className="image-frame"></div>
              <div className="image-glow"></div>
              
              {/* Decorative Elements */}
              <div className="floating-card card-1">
                <span>🏆</span>
                <span>Certified Chef</span>
              </div>
              <div className="floating-card card-2">
                <span>⭐</span>
                <span>5 Star Exp</span>
              </div>
              <div className="floating-card card-3">
                <span>🎯</span>
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;