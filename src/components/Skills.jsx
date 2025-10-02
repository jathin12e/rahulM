import React from 'react';
import './Skills.css'; // Add this import

const Skills = () => {
  const skills = {
    "Culinary Expertise": [
      "Creative Dish Development", "Food Preparation", "Tandoor Specialist",
      "Cooking Techniques", "Menu Planning", "Quality Control"
    ],
    "Hospitality Management": [
      "Team Collaboration", "Time Management", "Inventory Management",
      "Supervisory Skills", "Customer Service", "Staff Training"
    ],
    "Safety & Standards": [
      "Hygiene & Safety Standards", "Quality Assurance", "Compliance",
      "Risk Management", "Sanitation", "Documentation"
    ],
    "Soft Skills": [
      "Communication", "Leadership", "Problem Solving",
      "Adaptability", "Multitasking", "Attention to Detail"
    ]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title-1">Skills & Expertise</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category} className="skill-category fade-in">
              <h3>{category}</h3>
              <div className="skill-items">
                {items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;