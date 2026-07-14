import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Settings, Languages, TrendingUp, DollarSign } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { category: 'Key Account & Client Management', items: ['Client Retention', 'Key Account Management', 'Client Management', 'Upsell', 'Relationship Building'], icon: <Users size={20} />, color: 'skill-cyan-emerald' },
    { category: 'Sales & Distribution', items: ['Sales Management', 'B2B Sales', 'Corporate Sales', 'SaaS Sales', 'Channel Sales', 'Channel Distribution'], icon: <TrendingUp size={20} />, color: 'skill-blue-purple' },
    { category: 'Financial & Loan Products', items: ['Home Loans', 'Business Loans', 'Personal Loans', 'FASTag Programs'], icon: <DollarSign size={20} />, color: 'skill-orange-rose' },
    { category: 'Leadership & Team Management', items: ['Team Leading', 'Team Management', 'Mentoring', 'Cross-Functional Collaboration'], icon: <Award size={20} />, color: 'skill-pink-rose' },
    { category: 'Strategic Operations', items: ['Supply Chain Optimization', 'Field Sales Strategy', 'Operations Management', 'Lead Generation Drives'], icon: <Settings size={20} />, color: 'skill-indigo' },
    { category: 'Languages', items: ['English', 'Hindi'], icon: <Languages size={20} />, color: 'skill-cyan-blue' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title">Professional <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">A comprehensive view of my core competencies, key sales skills, and operational expertise.</p>
      </div>

      <motion.div
        className="skills-grid-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="skill-category glass-panel"
            whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 30px -10px rgba(107,70,193,0.3)' }}
          >
            <div className="category-header">
              <div className="icon-wrapper glass-panel">
                {skillGroup.icon}
              </div>
              <h3>{skillGroup.category}</h3>
            </div>
            <div className="skill-tags">
              {skillGroup.items.map((item, i) => (
                <span key={i} className={`skill-tag ${skillGroup.color}`}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
