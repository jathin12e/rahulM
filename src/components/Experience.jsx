import React, { useState, useRef, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const experienceRefs = useRef([]);
  const containerRef = useRef(null);

  const experiences = [
    {
      position: "Line Cook",
      company: "Pontchartrain Hotel",
      duration: "2024 - 2025",
      location: "New Orleans, United States",
      icon: "🍳",
      type: "culinary",
      responsibilities: [
        "Prepared and cooked menu items in a fast-paced kitchen environment",
        "Maintained high standards of food quality, presentation, and hygiene",
        "Assisted in food prep, inventory management, and kitchen cleaning",
        "Collaborated with kitchen staff to ensure timely and efficient service"
      ],
      skills: ["Cooking", "Food Safety", "Teamwork", "Time Management"],
      achievement: "Consistently maintained 95%+ guest satisfaction ratings"
    },
    {
      position: "Culinary Trainee",
      company: "Sheraton Grand Chennai Resort & Spa",
      duration: "2023",
      location: "Chennai, India",
      icon: "🏨",
      type: "training",
      responsibilities: [
        "Trained in culinary department under expert chef supervision",
        "Mastered basic cooking methods in food production department",
        "Assisted food preparation process following Chef instructions precisely",
        "Actively participated in buffet setup and presentation"
      ],
      skills: ["Culinary Training", "Food Prep", "Buffet Setup", "Kitchen Basics"],
      achievement: "Completed intensive 6-month culinary training program"
    },
    {
      position: "Food Handler",
      company: "Qatar Star Services LLC",
      duration: "2022",
      location: "Doha, Qatar",
      icon: "🌯",
      type: "operations",
      responsibilities: [
        "Managed food item arrangement in concession racks efficiently",
        "Coordinated with cashiers using KOT (Kitchen Order Ticket) system",
        "Prepared food items according to operational requirements",
        "Ensured quality control and presentation standards"
      ],
      skills: ["Food Handling", "Coordination", "Quality Control", "Operations"],
      achievement: "Improved food preparation efficiency by 20%"
    },
    {
      position: "Ground Staff",
      company: "Cordelia Cruises",
      duration: "2022",
      location: "Chennai, India",
      icon: "🛳️",
      type: "hospitality",
      responsibilities: [
        "Collected and entered passenger details accurately into the system",
        "Verified travel documents and ensured smooth check-in procedures",
        "Coordinated with team members to guide passengers to the ship on time",
        "Assisted in maintaining a safe, organized, and customer-friendly environment"
      ],
      skills: ["Customer Service", "Documentation", "Team Coordination", "Safety"],
      achievement: "Processed 200+ passengers daily with 100% accuracy"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = experienceRefs.current.findIndex(ref => ref === entry.target);
            setActiveIndex(index);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    experienceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getTypeColor = (type) => {
    const colors = {
      culinary: '#f8f7f7ff',
      training: '#3b82f6',
      operations: '#f7fafaff',
      hospitality: '#eceaf1ff'
    };
    return colors[type] || '#6b7280';
  };

  const getTypeGradient = (type) => {
    const gradients = {
      culinary: 'linear-gradient(135deg, #ef4444, #0a0909ff)',
      training: 'linear-gradient(135deg, #bcbdc1ff, #f5f6f8ff)',
      operations: 'linear-gradient(135deg, #10b981, #059669)',
      hospitality: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    };
    return gradients[type] || 'linear-gradient(135deg, #6b7280, #4b5563)';
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">
            My journey through diverse roles in hospitality and culinary excellence
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="experience-container" ref={containerRef}>
          {/* Timeline Line */}
          <div className="timeline-line">
            <div 
              className="timeline-progress" 
              style={{ height: `${(activeIndex / (experiences.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Experience Cards */}
          <div className="experience-cards">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={el => experienceRefs.current[index] = el}
                className={`experience-card ${index === activeIndex ? 'active' : ''}`}
                data-index={index}
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot"
                  style={{ background: getTypeGradient(exp.type) }}
                >
                  <div className="dot-glow"></div>
                  <div className="dot-pulse"></div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="card-header">
                    <div className="header-main">
                      <div 
                        className="experience-icon"
                        style={{ background: getTypeGradient(exp.type) }}
                      >
                        <span className="icon">{exp.icon}</span>
                      </div>
                      <div className="title-section">
                        <h3 className="position-title">{exp.position}</h3>
                        <div className="company-duration">
                          <h4 className="company-name">{exp.company}</h4>
                          <span className="experience-duration">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="location-tag">
                      <span className="location-icon">📍</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* Achievement Badge */}
                    <div className="achievement-badge">
                      <span className="badge-icon">🏆</span>
                      <span className="badge-text">{exp.achievement}</span>
                    </div>

                    {/* Responsibilities */}
                    <div className="responsibilities-section">
                      <h5 className="section-title">Key Responsibilities</h5>
                      <div className="responsibilities-grid">
                        {exp.responsibilities.map((resp, idx) => (
                          <div key={idx} className="responsibility-item">
                            <div 
                              className="responsibility-icon"
                              style={{ background: getTypeColor(exp.type) }}
                            >
                              ✓
                            </div>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="skills-section">
                      <h5 className="section-title">Skills Developed</h5>
                      <div className="skills-container">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="skill-tag"
                            style={{ 
                              borderColor: getTypeColor(exp.type),
                              color: 'white'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer">
                    <div className="experience-type">
                      <span 
                        className="type-badge"
                        style={{ background: getTypeColor(exp.type) }}
                      >
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                    <div className="card-arrow">
                      <span style={{ color: getTypeColor(exp.type) }}>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="experience-navigation">
          <div className="nav-dots">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  experienceRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                aria-label={`View ${exp.position} at ${exp.company}`}
              >
                <div 
                  className="dot-inner"
                  style={{ 
                    background: index === activeIndex ? getTypeGradient(exp.type) : getTypeColor(exp.type)
                  }}
                ></div>
                <span className="dot-tooltip">{exp.company}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;