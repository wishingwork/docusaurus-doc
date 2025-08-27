import React from 'react';
import styles from '../../pages/index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>WeatherSync</h3>
            <p>Transforming businesses through intelligent weather insights and operational optimization solutions.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Services</h3>
            <p><a href="#operations">Weather Intelligence</a></p>
            <p><a href="#operations">Operational Optimization</a></p>
            <p><a href="#insights">Predictive Analytics</a></p>
            <p><a href="#insights">Custom Solutions</a></p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Industries</h3>
            <p>Logistics & Transportation</p>
            <p>Energy & Utilities</p>
            <p>Agriculture</p>
            <p>Construction</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Email: info@meteosync.com</p>
            {/* <p>Phone: +1 (555) 123-4567</p> */}
            {/* <p>Address: 123 Innovation Drive<br/>Tech City, TC 12345</p> */}
          </div>
        </div>
        
        {/* <div className={styles.footerBottom}>
          <p>&copy; 2025 WeatherSync. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div> */}
      </div>
    </footer>
  );
}