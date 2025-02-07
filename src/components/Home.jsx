import React from "react";
import { motion } from "framer-motion";
import "../components/css/Home.css";

const Home = () => (
  <section id="home" className="home">
    <div className="home-bg"></div>
    <div className="home-overlay"></div>

    <motion.div
      className="home-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="home-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        Welcome to Purity Technology Solutions
      </motion.h1>

      <motion.p
        className="home-subtext"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        We provide innovative tech solutions that drive business growth, enhance
        efficiency, and deliver exceptional customer experiences.
      </motion.p>

      {/* <motion.a
        href="#about"
        className="explore-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.a> */}
    </motion.div>
  </section>
);

export default Home;
