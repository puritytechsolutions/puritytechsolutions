import React, { useState, useRef } from 'react';
import projectsData from '../data/projectsData';
import '../components/css/Projects.css';

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const scrollRef = useRef(null);

  const toggleExpand = (index) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-container" ref={scrollRef}>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${expandedCards[index] ? 'expanded' : ''}`}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(500px) rotateY(5deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(500px) rotateY(0)'}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p><strong>Client:</strong> {project.client}</p>
            <p className="description">{project.description}</p>
            <h4>Features:</h4>
            <ul 
              className="features-list" 
              style={{ 
                maxHeight: expandedCards[index] ? '500px' : '50px', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s ease-in-out' 
              }}
            >
              {expandedCards[index]
                ? project.features.map((feature, i) => <li key={i} className="feature-item">{feature}</li>)
                : <li className="feature-item">{project.features[0]}</li>
              }
            </ul>
            <div className="show-more-container">
              <span 
                className="show-more" 
                onClick={() => toggleExpand(index)}
              >
                {expandedCards[index] ? 'Show Less' : 'Show More'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
