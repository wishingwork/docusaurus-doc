import React, { useState } from 'react';
import { Calendar, Clock, Mail, Sun, Cloud, CloudRain, Users, MapPin, Plus, Eye, Check } from 'lucide-react';
import '../../css/custom.css'; // Ensure Tailwind CSS is imported
import Layout from '@theme/Layout';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

// Import refactored section components
import ContactSection from '../../components/WeatherCalendar/ContactSection';
import IntroductionSection from '../../components/TripPlanner/IntroductionSection';
import ScreenshotsSection from '../../components/TripPlanner/ScreenshotsSection';
import UsageExplanationSection from '../../components/TripPlanner/UsageExplanationSection';

const TripPlannerWebsite = () => {
    const [activeView, setActiveView] = useState('TripPlannerForm');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { t, i18n } = useTranslation();

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     console.log('Contact form submitted:', contactForm);
//     alert('Thank you for your interest! We will contact you soon.');
//     setContactForm({ name: '', email: '', message: '' });
//   };

return (
    <div className="min-h-screen bg-white">
        {/* Header (extracted) */}
        <Header />
        {/* Introduction Section */}
        <IntroductionSection />
        {/* Screenshots Section */}
        <ScreenshotsSection
            activeView={activeView}
            setActiveView={setActiveView}
        />
        {/* Usage Explanation Section */}
        <UsageExplanationSection />
        {/* Contact Section */}
        {/* <ContactSection
            contactForm={contactForm}
            handleInputChange={handleInputChange}
            handleContactSubmit={handleContactSubmit}
        /> */}
        {/* Footer (extracted) */}
        <Footer />
    </div>
);
};

export default function Home(){
    return (
        <TripPlannerWebsite />);
};