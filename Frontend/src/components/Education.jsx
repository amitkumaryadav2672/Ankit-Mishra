import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const experience = [
    {
      role: 'Relationship Manager',
      company: 'IndiaMART',
      date: 'Jun 2023 - Present',
      desc: [
        'Delivered exceptional client servicing, enhancing customer satisfaction and retention rates by 20%.',
        'Drove revenue generation initiatives, achieving a consistent 15% growth quarter-over-quarter.',
        'Spearheaded team building activities, fostering collaboration and improving overall team productivity by 25%.',
        'Led and managed high-performing teams of up to 10 members, ensuring timely project delivery and exceeding targets.',
        'Coordinated cross-functional teams to optimize resource allocation and workflow efficiency.',
        'Developed and executed strategic business development plans, expanding client base by 30% within one year.'
      ]
    },
    {
      role: 'Assistant Manager',
      company: 'IndiaMART',
      date: 'Nov 2021 - Jun 2023',
      desc: [
        'Supervised and coordinated client servicing operations to boost customer satisfaction and improve retention rates.',
        'Delivered high-quality support individually, resolving client issues efficiently and effectively.',
        'Implemented targeted client engagement strategies, increasing service renewal rates by 12%.',
        'Streamlined communication channels between clients and internal teams, enhancing response time by 15%.'
      ]
    },
    {
      role: 'Senior Executive Sales Manager',
      company: 'Ninjacart',
      date: 'Jan 2021 - Oct 2021',
      desc: [
        'Led procurement operations for the Fruits Department, coordinating directly with farmers to optimize supply chain efficiency.',
        'Managed end-to-end logistics solutions, ensuring cost-effective transport and timely delivery, resulting in a 15% reduction in operational expenses.',
        'Expanded market reach by onboarding key clients in Bhopal, Jabalpur, and Indore, increasing regional sales by 20%.',
        'Oversaw P&L of logistics and sales processes, driving profitability through strategic cost control.',
        'Ensured timely payment collections, reducing receivables aging by 25% and enhancing cash flow.'
      ]
    },
    {
      role: 'Administration Manager',
      company: 'Prayag Consultancy & Services',
      date: 'May 2018 - Dec 2020',
      desc: [
        'Managed lead generation through targeted market campaigns and cold calling across the Allahabad region, driving consistent pipeline growth.',
        'Channelled leads to partnered banks and NBFCs for personal, business, home loans and LAP, improving disbursement efficiency.',
        'Sourced leads via references, DSAs, channel partners and marketing initiatives to diversify pipeline.',
        'Enhanced lead conversion rates by optimizing stakeholder communication, resulting in a 12% increase in loan disbursal efficiency.',
        'Led FASTag issuance operations for Bank of Baroda across 102 branches by establishing tie-ups with toll plazas and automobile showrooms, increasing issuance volume by 27%.'
      ]
    },
    {
      role: 'Channel Partner',
      company: 'Andromeda Sales And Distribution PVT Ltd',
      date: 'Jan 2017 - Apr 2018',
      desc: [
        'Generated leads through market campaigns and cold calling across the Allahabad region.',
        'Channelled leads to partner banks and NBFCs to facilitate timely loan disbursements for various loan products.',
        'Sourced leads via references, DSAs, channel partners and marketing initiatives.',
        'Improved lead conversion by streamlining stakeholder communication and maintaining strong relationships within the financial ecosystem.'
      ]
    }
  ];

  const education = [
    { degree: 'B.A - Bachelor of Arts | Arts & Humanities', school: 'Allahabad University', date: '2016', score: 'Marks: 61.2%' },
    { degree: '12th Grade', school: 'Uttar Pradesh Board (English)', date: '2011', score: 'Marks: 84%' },
    { degree: '10th Grade', school: 'Uttar Pradesh Board (English)', date: '2009', score: 'Marks: 75%' }
  ];

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="education-container">
        {/* Left Side: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          </div>

          <div className="timeline-wrapper">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: 10 }}
                >
                  <h3>{exp.role}</h3>
                  <p className="school">{exp.company}</p>
                  {Array.isArray(exp.desc) ? (
                    <ul className="exp-desc-list">
                      {exp.desc.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="exp-desc">{exp.desc}</p>
                  )}
                  <div className="edu-meta">
                    <span className="date gradient-text">{exp.date}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="timeline-side"
        >
          <div className="section-header align-left">
            <h2 className="section-title">Formal <span className="gradient-text">Education</span></h2>
          </div>

          <div className="timeline-wrapper">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-row"
              >
                <div className="timeline-dot right-dot"></div>
                <motion.div
                  className="timeline-item glass-panel"
                  whileHover={{ scale: 1.0, x: -10 }}
                >
                  <h3>{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <div className="edu-meta">
                    <span className="date">{edu.date}</span>
                    <span className="score gradient-text">{edu.score}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
