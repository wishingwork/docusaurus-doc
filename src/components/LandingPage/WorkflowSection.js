import React from 'react';
import styles from '../../pages/index.module.css';

export default function WorkflowSection() {
  return (
    <section className={styles.operations} id="operations">
      <div className={styles.container}>
        <h2>Elevate Your Operations with Meteosync</h2>
        
        <div className={styles.workflowGrid}>
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>1</div>
            <h3>Data Integration</h3>
            <p>Effortlessly link your existing systems to the Meteosync API for immediate access to critical weather data tailored to your operational needs.</p>
          </div>
          
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>2</div>
            <h3>Custom Analysis</h3>
            <p>Our advanced algorithms analyze weather patterns specific to your industry and geographical operations to identify optimization opportunities.</p>
          </div>
          
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>3</div>
            <h3>Predictive Insights</h3>
            <p>Receive actionable forecasts and recommendations that enable proactive decision-making and risk mitigation strategies.</p>
          </div>
          
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>4</div>
            <h3>Workflow Optimization</h3>
            <p>Implement weather-aware workflows that automatically adjust operations based on current and forecasted conditions.</p>
          </div>
          
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>5</div>
            <h3>Performance Monitoring</h3>
            <p>Track the impact of weather-informed decisions with comprehensive analytics and continuous improvement recommendations.</p>
          </div>
          
          <div className={styles.workflowStep}>
            <div className={styles.stepIcon}>6</div>
            <h3>Ongoing Support</h3>
            <p>Our expert team provides continuous support and system refinement to ensure maximum value from your weather intelligence investment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}