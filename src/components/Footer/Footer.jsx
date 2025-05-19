import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <p className="p-footer">&copy; Ivan Lima 2024, Todos os direitos reservados.</p>
      <nav className="nav-footer">
        <p className="p-footer">Contact:</p>
        <div className="a-footer">
          <a href=""><img className="img-footer" src="/assets/icons-social/gmail.png" alt="Gmail" /></a>
          <a href=""><img className="img-footer" src="/assets/icons-social/github.png" alt="GitHub" /></a>
          <a href=""><img className="img-footer" src="/assets/icons-social/linkedin.png" alt="LinkedIn" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
