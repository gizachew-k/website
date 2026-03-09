// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import '../styles/Home.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Create particles for background
  const particles = [...Array(30)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${10 + Math.random() * 20}s`
  }));

  return (
    <section id="home" className="hero">
      {/* Animated background particles */}
      <div className="hero-background">
        {particles.map((style, i) => (
          <div
            key={i}
            className="particle"
            style={style}
          />
        ))}
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WELCOME TO MY WEBSITE
          </motion.h2>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span>{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm a passionate <span className="highlight">{personalInfo.title}</span> with expertise in creating beautiful, responsive, and user-friendly web applications.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            > 
              <i className="fab fa-github"></i>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
  href={personalInfo.socialLinks.telegram}
  target="_blank"
  rel="noopener noreferrer"
  className="social-icon"
>
  <i className="fab fa-telegram-plane"></i>
</a>
            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;