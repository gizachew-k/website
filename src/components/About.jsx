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
          About <span>Me</span>
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
                src={require('../assets/images/Profile.png')} 
                alt={personalInfo.name}
              />
              <div className="image-backdrop"></div>
            </div>
          
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
            I'm a passionate <span className="highlight">{personalInfo.title}</span>  in creating beautiful, responsive, and user-friendly web applications.
            </motion.p>

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

            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
         
            </motion.div>
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

export default About;