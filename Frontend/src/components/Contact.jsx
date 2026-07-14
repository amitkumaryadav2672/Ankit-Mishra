import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Looking for a results-driven Senior Relationship Manager? I'm open to opportunities!</p>
      </motion.div>

      <div className="contact-container" style={{ justifyContent: 'center' }}>
        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="contact-info glass-panel"
          style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}
        >
          <h3>Let's drive growth and excellence.</h3>
          <p className="contact-desc">
            With over 9 years of expertise in client servicing, sales, operations, and key account management, I'm ready to manage client relationships and exceed business goals.
          </p>

          <div className="info-items">
            <a 
              href="mailto:mishra.ankit612@gmail.com?subject=Let's discuss an opportunity&body=Let's discuss an opportunity" 
              title="Click to send an email" 
              className="info-item"
            >
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-content">
                 <h4>Email</h4>
                 <p>mishra.ankit612@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+919910903061" 
              title="Click to call" 
              className="info-item"
            >
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-content">
                 <h4>Phone</h4>
                 <p>+91-9910903061</p>
              </div>
            </a>

            <motion.div variants={itemVariants} className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-content">
                 <h4>Location</h4>
                 <p>New Delhi, India</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="social-links-contact" style={{ marginTop: '2rem' }}>
            <a href="http://linkedin.com/in/ankit-mishra-565228127" target="_blank" rel="noreferrer" className="social-btn glass-panel"><Linkedin size={22} /></a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
