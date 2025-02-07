import React from 'react';
import { motion } from 'framer-motion';
import '../components/css/About.css';

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <motion.div
        className="about-image"
        initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
        whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 15,
          rotateX: 5,
          z: 50
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="cube-container">
          <div className="cube">
            <div className="face front">
              <span>PURITY</span>
            </div>
            <div className="face back">
              <span>TECH</span>
            </div>
            <div className="face right">
              <span>SOLUTIONS</span>
            </div>
            <div className="face left">
              <span>INNOVATION</span>
            </div>
            <div className="face top">
              <span>EXCELLENCE</span>
            </div>
            <div className="face bottom">
              <span>QUALITY</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0, rotateY: 30 }}
        whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.4,
          type: "spring",
          stiffness: 80,
          damping: 12
        }}
        whileHover={{ 
          scale: 1.02,
          rotateX: 2,
          z: 20,
          transition: { duration: 0.3 }
        }}
      >
        <h2>About Us</h2>
        <p>
          At <strong>Purity Tech Solutions</strong>, we are dedicated to providing 
          cutting-edge technology solutions that simplify and enhance your life. 
          From software development to digital transformation, our team excels at delivering innovation with excellence.
        </p>
        <p>
          Our mission is to empower businesses by leveraging the latest technologies 
          to achieve their goals. Join us on our journey to make the world a more 
          connected and efficient place.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
