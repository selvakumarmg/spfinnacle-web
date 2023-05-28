import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; 2023 SP Finnacle. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
