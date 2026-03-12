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
  
  // Add state for form fields and errors
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle field blur (mark as touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate single field on blur
    const fieldError = validateField(name, formData[name]);
    if (fieldError) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  // Validate a single field
  const validateField = (name, value) => {
    switch(name) {
      case 'from_name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        
        // Check for numbers in name
        const hasNumberInName = /\d/.test(value);
        if (hasNumberInName) return 'Name cannot contain numbers';
        
        // Check for only letters and spaces
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(value)) return 'Name can only contain letters and spaces';
        
        return '';
        
      case 'from_email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
        
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 4) return 'Subject must be at least 4 characters';
        
        // Check for numbers in subject
        const hasNumberInSubject = /\d/.test(value);
        if (hasNumberInSubject) return 'Subject cannot contain numbers';
        
        // Check for only letters and spaces (allowing basic punctuation)
        const subjectRegex = /^[A-Za-z\s\.,!?-]+$/;
        if (!subjectRegex.test(value)) {
          return 'Subject can only contain letters, spaces, and basic punctuation (. , ! ? -)';
        }
        
        return '';
        
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 5) return 'Message must be at least 5 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        // Numbers ARE allowed in message
        return '';
        
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate each field
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    setTouched({
      from_name: true,
      from_email: true,
      subject: true,
      message: true
    });
    
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate form before sending
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message-field');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
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
          // Reset form
          form.current.reset();
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: ''
          });
          setErrors({});
          setTouched({});
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
                className="social-link"
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
            <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="from_name">Your Name *</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Eliyas"
                  required
                  className={touched.from_name && errors.from_name ? 'error' : ''}
                />
                {touched.from_name && errors.from_name && (
                  <span className="error-message-field">{errors.from_name}</span>
                )}
               
              </div>

              <div className="form-group">
                <label htmlFor="from_email">Your Email *</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="eliyas@gmail.com"
                  required
                  className={touched.from_email && errors.from_email ? 'error' : ''}
                />
                {touched.from_email && errors.from_email && (
                  <span className="error-message-field">{errors.from_email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Inquiry"
                  required
                  className={touched.subject && errors.subject ? 'error' : ''}
                />
                {touched.subject && errors.subject && (
                  <span className="error-message-field">{errors.subject}</span>
                )}
               
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="write your message here..."
                  required
                  className={touched.message && errors.message ? 'error' : ''}
                ></textarea>
                {touched.message && errors.message && (
                  <span className="error-message-field">{errors.message}</span>
                )}
                
                {/* Character counter */}
                <div className="character-counter">
                  {formData.message.length}/1000 characters
                </div>
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

              {/* Form summary error */}
              {Object.keys(errors).length > 0 && submitStatus === null && (
                <div className="form-summary-error">
                  ⚠ Please fix the errors above before submitting.
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