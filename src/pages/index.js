
import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/LandingPage/HeroSection';
import WorkflowSection from '../components/LandingPage/WorkflowSection';
import TestimonialSection from '../components/LandingPage/TestimonialSection';
import Footer from '../components/LandingPage/Footer';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Meteosync"
      description="Elevate Your Decision-Making with Weather Insights">
      <main>
        <HeroSection />
        <WorkflowSection />
        <TestimonialSection />
      </main>
      <Footer />
    </Layout>
  );
}
