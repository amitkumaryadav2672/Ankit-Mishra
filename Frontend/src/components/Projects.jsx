import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Award, Users, BarChart2, CheckSquare } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      title: 'FASTag Issuance Campaign',
      role: 'Campaign Leader / Admin Manager',
      duration: 'May 2018 - Dec 2020',
      description: 'Led FASTag issuance operations for Bank of Baroda across 102 branches by establishing strategic tie-ups with toll plazas and automobile showrooms. Achieved a 27% increase in issuance volume.',
      tech: ['Operations Management', 'Strategic Tie-ups', 'Team Leading', 'Channel Distribution'],
      github: '#',
      live: '#',
      color: '#6366f1',
      icon: <Award size={24} color="#6366f1" />
    },
    {
      title: 'Community Outreach & Lead Generation Drives',
      role: 'Organiser & Lead Specialist',
      duration: 'Ongoing Initiatives',
      description: 'Organised and executed market-level outreach campaigns and referral drives to source high-quality leads and build strong partnerships with local stakeholders.',
      tech: ['Lead Generation', 'Community Outreach', 'Public Relations', 'Outreach Planning'],
      github: '#',
      live: '#',
      color: '#10b981',
      icon: <Users size={24} color="#10b981" />
    },
    {
      title: 'Excel for the Real World',
      role: 'Certification (Microsoft Excel)',
      duration: 'Basic to Advanced Skills',
      description: 'Gained advanced skills in Microsoft Excel, focusing on data manipulation, analysis, VLOOKUP, pivot tables, and professional reporting.',
      tech: ['Data Analysis', 'Reporting', 'Excel', 'Spreadsheets'],
      github: '#',
      live: '#',
      color: '#eab308',
      icon: <CheckSquare size={24} color="#eab308" />
    },
    {
      title: 'Power BI Certification',
      role: 'Credential by Skill Nation',
      duration: 'Data Visualization',
      description: 'Certified in Power BI. Learned database connectivity, dashboard design, interactive visualization, DAX measures, and ETL modeling.',
      tech: ['Power BI', 'Data Visualization', 'DAX', 'Business Intelligence'],
      github: '#',
      live: '#',
      color: '#3b82f6',
      icon: <BarChart2 size={24} color="#3b82f6" />
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="section-header"
      >
        <h2 className="section-title">Campaigns & <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Key campaigns managed, lead generation drives organized, and professional credentials obtained.</p>
      </motion.div>

      <motion.div style={{ y: yOffset }} className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
            whileHover={{ y: -15, scale: 1.02, rotateY: 2 }}
            className="project-card glass-panel"
          >
            <div className="project-color-bar" style={{ background: project.color, boxShadow: `0 0 15px ${project.color}` }}></div>
            <div className="project-content">
              <div className="project-header">
                {project.icon}
                <span className="project-duration">{project.duration}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <div className="project-desc">
                {Array.isArray(project.description) ? (
                  <ul>
                    {project.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              <ul className="project-tech">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              {project.github !== '#' && (
                <div className="project-links">
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="Github Repo">
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
