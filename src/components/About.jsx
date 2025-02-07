import React from 'react';
import { motion } from 'framer-motion';
import '../components/css/About.css';
import img1 from '../image/purity_logo.jpeg';

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <motion.div
        className="about-image"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotateY: 10 }} // 3D Hover Effect
      >
        <img 
          src= {img1}
          alt="About Us"
        />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
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
