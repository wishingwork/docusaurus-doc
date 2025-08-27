import React from 'react';
import styles from '../../pages/index.module.css';
import HeroSectionGraph from '../../assets/images/weather-forecasters-comparing-their-forecasts.webp';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <h1>Transform Your Business with Weather Intelligence</h1>
        <p>Harness the power of advanced weather insights to optimize operational workflows across industries. Make data-driven decisions that boost efficiency, reduce costs, and maximize performance.</p>
        
        <div className={styles.chartContainer}>
              <img
                  src={HeroSectionGraph}
                  alt="Calendar View Screenshot"
              />   
        </div>
      </div>
    </section>
  );
}