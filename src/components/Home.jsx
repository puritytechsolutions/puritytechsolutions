import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../components/css/Home.css";

const Home = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    const particleCount = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 2 + 0.5;
        this.brightness = Math.random() * 50 + 50;
      }
      
      update() {
        this.z -= this.speed;
        if (this.z <= 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
      
      draw() {
        const scale = 100 / this.z;
        const x = (this.x - canvas.width/2) * scale + canvas.width/2;
        const y = (this.y - canvas.height/2) * scale + canvas.height/2;
        const r = this.size * scale;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z/1000})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="home">
      <canvas ref={particlesRef} className="particles-canvas"></canvas>
      
      <div className="geometric-shapes">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`geometric-shape shape-${i}`}></div>
        ))}
      </div>

      <div className="gradient-sphere"></div>
      
      <div className="content-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h1
            className="home-title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
