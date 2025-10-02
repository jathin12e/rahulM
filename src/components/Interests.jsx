import React from 'react';
import './Interests.css'; // Add this import

const Interests = () => {
  const interests = [
    {
      title: "Cooking",
      description: "Has a keen interest in culinary arts and photography"
    },
    {
      title: "Artistic Expression",
      description: "Enjoys expressing creativity through drawing and writing short stories"
    }
  ];

  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">Interests</h2>
        <div className="card">
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;