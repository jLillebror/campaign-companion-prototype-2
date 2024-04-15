import Navigation from '@/app/Components/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styles from './ContactPage.module.css'; // Import CSS styles

const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Contact Information</h1>
      <div className={styles.contactItem}>
        <h3>Email</h3>
        <p>
          <a href="mailto:johan-aberg@live.com">
            <FontAwesomeIcon icon={faEnvelope} /> johan-aberg@live.com
          </a>
        </p>
      </div>
      <div className={styles.contactItem}>
        <h3>LinkedIn</h3>
        <p>
          <a href="https://www.linkedin.com/in/johan-%C3%A5berg-a13780209/">
            <FontAwesomeIcon icon={faLinkedin} /> Johan Åberg
          </a>
        </p>
      </div>
      <div className={styles.contactItem}>
        <h3>GitHub</h3>
        <p>
          <a href="https://github.com/jLillebror">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
