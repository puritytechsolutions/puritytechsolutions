import React, { useState, useRef } from 'react';
import projectsData from '../data/projectsData';
import '../components/css/Projects.css';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  

  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-container" ref={scrollRef}>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${expandedIndex === index ? 'expanded' : ''}`} 
            style={{ transition: 'height 0.4s ease-in-out, transform 0.3s ease-in-out', height: expandedIndex === index ? 'auto' : '420px' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p><strong>Client:</strong> {project.client}</p>
            <p className='description'>{project.description}</p>
            <h4>Features:</h4>
            <ul className="features-list" style={{ maxHeight: expandedIndex === index ? '500px' : '50px', overflow: 'hidden', transition: 'max-height 0.4s ease-in-out' }}>
              {expandedIndex === index
                ? project.features.map((feature, i) => <li key={i} className="feature-item">{feature}</li>)
                : <li className="feature-item">{project.features[0]}</li>
              }
            </ul>
            <div className="show-more-container">
              <span 
                className="show-more" 
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {expandedIndex === index ? 'Show Less' : 'Show More'}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-arrow left" onClick={() => scroll('left')}>
        &#8249;
      </button>
      <button className="scroll-arrow right" onClick={() => scroll('right')}>
        &#8250;
      </button>
    </section>
  );
};

export default Projects;
