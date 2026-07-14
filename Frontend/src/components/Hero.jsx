import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Briefcase, Award, TrendingUp } from 'lucide-react';
import profileImg from '../assets/ankit.png';
import './Hero.css';

const Hero = () => {
  const titles = [
    "Relationship Manager",
    "Senior Key Account Manager",
    "Sales & Operations Specialist",
    "Client Retention Expert"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Years of Exp.', value: '9+', icon: <Briefcase size={20} /> },
    { label: 'Key Branches', value: '102', icon: <Award size={20} /> },
    { label: 'Revenue Growth', value: '20%+', icon: <TrendingUp size={20} /> }
  ];

  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT SIDE: Large Profile Image */}
      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <div className="image-frame glass-panel">
          <img
            src={profileImg}
            alt="Ankit Mishra"
            className="large-profile-img"
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Text Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-badge glass-panel"
        >
          <span className="pulse-dot"></span> Relationship Manager | IndiaMART
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-title"
        >
          Hi, I'm <span className="gradient-text">Ankit Mishra</span><br />
          <div className="rotating-title-container">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="rotating-title"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-subtitle"
        >
          Results-driven Senior Key Account Manager with over 9 years of expertise in client servicing, sales, operations, and account management. Proven track record in driving revenue growth, optimizing supply chain and logistics, and managing key loan distribution channels.
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item glass-panel">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-cta"
        >
          <a href="#contact" className="btn btn-primary">
            Hire Me <ArrowRight size={18} />
          </a>
          <a href="#education" className="btn btn-secondary">
            View Experience
          </a>
          <a href="/Ankit Mishra.pdf" download="Ankit_Mishra_Resume.pdf" className="btn btn-outline">
            Resume <Download size={18} />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="http://linkedin.com/in/ankit-mishra-565228127" target="_blank" rel="noreferrer" className="social-icon-link"><Linkedin size={22} /></a>
          <a href="mailto:mishra.ankit612@gmail.com?subject=Let's discuss an opportunity&body=Let's discuss an opportunity" className="social-icon-link" aria-label="Send Email"><Mail size={22} /></a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
