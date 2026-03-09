// src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      {/* Wave effect at top */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#0f0f1a" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-content">
         
          <motion.div 
            className="footer-links-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <i className="fas fa-chevron-right"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div 
            className="footer-social-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect With Me</h4>
            <div className="footer-social-grid">
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-card github">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-card linkedin">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-card instagram">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href={personalInfo.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="social-card telegram">
                <i className="fab fa-telegram-plane"></i>
                <span>Telegram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="built-with">
              Built using React
            </p>
          </div>
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;