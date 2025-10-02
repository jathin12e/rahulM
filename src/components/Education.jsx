import React from 'react';
import './education.css';

const Education = () => {
  const education = [
    {
      degree: "MBA in Hotel Management and Catering Sciences",
      institution: "Alagappa University",
      duration: "2021 - 2023",
      location: "Kattupakam, Chennai 600056",
      icon: "🎓",
      highlights: ["Hospitality Management", "Catering Sciences", "Business Administration"],
      grade: "Distinction"
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Seshachala Degree College",
      duration: "2017 - 2020",
      location: "Puttur, Chitoor Distl, AP",
      icon: "📊",
      highlights: ["Commerce & Business", "Financial Management", "Business Studies"],
      grade: "First Class"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sai Jyothi Educational Institution",
      duration: "2014 - 2016",
      location: "Puttur, Chitoor Distl, AP",
      icon: "📚",
      highlights: ["Science Stream", "Mathematics", "Physics & Chemistry"],
      grade: "85%"
    },
    {
      degree: "SSLC (10th Standard)",
      institution: "Jnana Jyothi Vidhya Mandhir",
      duration: "2013 - 2014",
      location: "Puttur, Chitoor Distl, AP",
      icon: "🏫",
      highlights: ["Secondary Education", "Foundation Studies", "Core Subjects"],
      grade: "92%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-header">
          <h2 className="education-title">Education Journey</h2>
          <p className="education-subtitle">Academic Qualifications & Achievements</p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-header">
                <div className="education-icon">
                  <span className="icon">{edu.icon}</span>
                </div>
                <div className="duration-badge">
                  <span>{edu.duration}</span>
                </div>
              </div>

              <div className="card-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="institution-name">{edu.institution}</h4>
                <p className="location">
                  <span className="location-icon">📍</span>
                  {edu.location}
                </p>
                
                <div className="grade-badge">
                  <span className="grade-text">{edu.grade}</span>
                </div>

                <div className="highlights-section">
                  <h5 className="highlights-title">Key Focus Areas</h5>
                  <div className="highlights-list">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="education-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${100 - (index * 25)}%`}}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {index === 0 ? 'Most Recent' : `Step ${education.length - index}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-summary">
          <div className="summary-card">
            <div className="summary-icon">📈</div>
            <div className="summary-content">
              <h3>Continuous Learning</h3>
              <p>Dedicated to academic excellence and professional development in hospitality management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;