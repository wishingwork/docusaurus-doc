import React from 'react';
import styles from '../../pages/index.module.css';
import TestimonialGraph from '../../assets/images/weather-application.webp';

export default function TestimonialSection() {
  return (
    <section className={styles.insights} id="insights">
      <div className={styles.container}>
        <h2>Unlock Unparalleled Insights with Weather Effect</h2>
        
        <div className={styles.insightsContent}>
          {/* <div className={styles.insightsGraph}>
            <div className={styles.graphLines}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div> */}
              <img
                  src={TestimonialGraph}
                  alt="Calendar View Screenshot"
              />             
          
          <div className={styles.insightsText}>
            <p>Our weather intelligence platform delivers unprecedented visibility into how atmospheric conditions impact your operations. From supply chain optimization to energy management, our insights drive measurable improvements in efficiency and profitability.</p>
            
            <p>Experience the power of weather-aware planning with our comprehensive suite of tools designed for modern businesses.</p>
            
            <a href="https://weathercalendar.meteosync.com/" className={styles.ctaButton}>Explore Weather Calendar</a>
          </div>
        </div>
        
        {/* <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"WeatherSync transformed our logistics operations. We reduced weather-related delays by 40% and improved customer satisfaction significantly."</p>
            <p className={styles.testimonialAuthor}>— Sarah Chen, Operations Director, Global Logistics Corp</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"The predictive insights helped us optimize our energy consumption patterns, resulting in 25% cost savings during peak seasons."</p>
            <p className={styles.testimonialAuthor}>— Michael Rodriguez, Energy Manager, Metro Utilities</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"Our agricultural operations became significantly more efficient. The weather intelligence platform helped us time our activities perfectly."</p>
            <p className={styles.testimonialAuthor}>— Emma Thompson, Farm Operations Manager, GreenHarvest Co</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}