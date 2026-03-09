// src/components/Contact.jsx

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { personalInfo, emailConfig } from '../constants';
import '../styles/Contacts.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use the credentials from your constants file
    emailjs
      .sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.userId
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log('Email error:', error.text);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Have a question or want to work together? I'd love to hear from you!
        </motion.p>

        <div className="contact-container">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              I'm always interested in hearing about new projects, 
              opportunities, or just having a chat. Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
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
                className="social-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending... ✈️' : 'Send Message ✈️'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;