import React, { useState, useEffect, useRef } from 'react';
import './Languages.css';

const Languages = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const languages = [
    { 
      name: "English", 
      level: "Proficient", 
      percentage: 90,
      icon: "🌐",
      description: "Professional proficiency in speaking, writing, and comprehension",
      color: "#3498db"
    },
    { 
      name: "Tamil", 
      level: "Proficient", 
      percentage: 95,
      icon: "�️",
      description: "Native-level proficiency with cultural understanding",
      color: "#2ecc71"
    },
    { 
      name: "Hindi", 
      level: "Intermediate", 
      percentage: 70,
      icon: "🇮🇳",
      description: "Conversational fluency with good comprehension skills",
      color: "#e74c3c"
    },
    { 
      name: "Telugu", 
      level: "Native", 
      percentage: 100,
      icon: "🎯",
      description: "Mother tongue with complete linguistic mastery",
      color: "#9b59b6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimations();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimations = () => {
    const delays = [0, 200, 400, 600];
    
    languages.forEach((lang, index) => {
      setTimeout(() => {
        setAnimatedPercentages(prev => ({
          ...prev,
          [lang.name]: lang.percentage
        }));
      }, delays[index]);
    });
  };

  const getProficiencyIcon = (level) => {
    const icons = {
      Native: "🎯",
      Proficient: "⭐",
      Intermediate: "📚",
      Basic: "🌱"
    };
    return icons[level] || "💬";
  };

  return (
    <section id="languages" className="languages-section" ref={sectionRef}>
      <div className="container">
        <div className="languages-header">
          <h2 className="section-title">Language Proficiency</h2>
          <p className="section-subtitle" style={{color:"black"}}>
            Multilingual communication skills for global hospitality excellence
          </p>
        </div>

        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div 
              key={lang.name}
              className={`language-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div 
                  className="language-icon"
                  style={{ backgroundColor: `${lang.color}20`, borderColor: lang.color }}
                >
                  <span>{lang.icon}</span>
                </div>
                <div className="language-info">
                  <h3 className="language-name">{lang.name}</h3>
                  <div className="language-level">
                    <span className="level-badge" style={{ backgroundColor: lang.color }}>
                      {getProficiencyIcon(lang.level)} {lang.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="language-description">{lang.description}</p>
                
                <div className="progress-container">
                  <div className="progress-labels">
                    <span>Proficiency</span>
                    <span className="percentage">
                      {animatedPercentages[lang.name] || 0}%
                    </span>
                  </div>
                  
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${animatedPercentages[lang.name] || 0}%`,
                        backgroundColor: lang.color
                      }}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="skill-indicators">
                  <div className="skill-indicator">
                    <span className="indicator-label">Speaking</span>
                    <div className="indicator-dots">
                      {[1, 2, 3, 4, 5].map(dot => (
                        <div 
                          key={dot}
                          className={`dot ${dot <= (lang.percentage / 20) ? 'active' : ''}`}
                          style={{ backgroundColor: dot <= (lang.percentage / 20) ? lang.color : '#ecf0f1' }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="skill-indicator">
                    <span className="indicator-label">Writing</span>
                    <div className="indicator-dots">
                      {[1, 2, 3, 4, 5].map(dot => (
                        <div 
                          key={dot}
                          className={`dot ${dot <= (lang.percentage / 20) - 0.5 ? 'active' : ''}`}
                          style={{ backgroundColor: dot <= (lang.percentage / 20) - 0.5 ? lang.color : '#ecf0f1' }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="skill-indicator">
                    <span className="indicator-label">Comprehension</span>
                    <div className="indicator-dots">
                      {[1, 2, 3, 4, 5].map(dot => (
                        <div 
                          key={dot}
                          className={`dot ${dot <= (lang.percentage / 20) + 0.5 ? 'active' : ''}`}
                          style={{ backgroundColor: dot <= (lang.percentage / 20) + 0.5 ? lang.color : '#ecf0f1' }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

        <div className="languages-footer">
          <div className="proficiency-legend">
            <h4>Proficiency Scale</h4>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-dots">
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div key={dot} className="dot active" style={{ backgroundColor: '#3498db' }}></div>
                  ))}
                </div>
                <span>Native / Fluent</span>
              </div>
              <div className="legend-item">
                <div className="legend-dots">
                  {[1, 2, 3, 4].map(dot => (
                    <div key={dot} className="dot active" style={{ backgroundColor: '#3498db' }}></div>
                  ))}
                  <div className="dot"></div>
                </div>
                <span>Proficient</span>
              </div>
              <div className="legend-item">
                <div className="legend-dots">
                  {[1, 2, 3].map(dot => (
                    <div key={dot} className="dot active" style={{ backgroundColor: '#3498db' }}></div>
                  ))}
                  {[4, 5].map(dot => (
                    <div key={dot} className="dot"></div>
                  ))}
                </div>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;