// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../constants';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          About <span className="highlight">Me</span>
        </motion.h2>

        <div className="about-content">
          {/* Left Column - Profile Image */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img 
                src={personalInfo.avatar || "https://via.placeholder.com/400x500"} 
                alt={personalInfo.name}
              />
              <div className="image-backdrop"></div>
            </div>
            
            {/* <div className="experience-badge">
              <span className="years">3+</span>
              <span className="text">Years of<br />Experience</span>
            </div> */}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="about-text"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h3 variants={fadeInUp}>
              Who is <span className="highlight">{personalInfo.name.split(' ')[0]}</span>?
            </motion.h3>
            
            <motion.p variants={fadeInUp} className="bio">
              { "I'm a passionate Full Stack Developer with expertise in building modern web applications. I specialize in React, learning Node.js, and creating seamless user experiences."}
            </motion.p>

            {/* <motion.p variants={fadeInUp} className="bio-secondary">
              With over 3 years of experience in the industry, I've worked with startups and established companies to deliver high-quality solutions. My approach combines technical excellence with creative problem-solving to build products that users love.
            </motion.p> */}

            {/* Quick Info Grid */}
            <motion.div variants={fadeInUp} className="info-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>{personalInfo.location || "Ethiopia"}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🎓</div>
                <div className="info-content">
                  <h4>Education</h4>
                  <p>Undergrauguate in Computer Science</p>
                </div>
              </div>

              {/* <div className="info-card">
                <div className="info-icon">💼</div>
                <div className="info-content">
                  <h4>Availability</h4>
                  <p>Freelance / Full-time</p>
                </div>
              </div> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
              {/* <a href={personalInfo.resume || "#"} className="btn btn-outline" download>
                Download CV
              </a> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <div className="stat-box">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div> */}
          {/* <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div> */}
          {/* <div className="stat-box">
            <div className="stat-number">8+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;