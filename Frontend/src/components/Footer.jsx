import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-left">
          &copy; 2026 Mr. Ankit Mishra. All rights reserved.
        </div>
        <div className="footer-middle">
          <a href="http://linkedin.com/in/ankit-mishra-565228127" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mishra.ankit612@gmail.com?subject=Let's discuss an opportunity&body=Let's discuss an opportunity" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <div className="footer-right">
          Created with ♥ and a mind for logic & a heart for design.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
