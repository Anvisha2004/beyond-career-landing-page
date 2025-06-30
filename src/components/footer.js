import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <h3>Beyond Career</h3>
      </div>
      <div style={styles.column}>
        <h4>Contact Us</h4>
        <p><FontAwesomeIcon icon={faEnvelope} /> contact@beyondcareer.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> +91 1234567890</p>
      </div>

      <div style={styles.column}>
        <h4>Follow Us</h4>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    color: '#fff',
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    textAlign: 'left'
  },
  column: {
    flex: '1 1 250px',
    margin: '1rem'
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem'
  },
};

export default Footer;
