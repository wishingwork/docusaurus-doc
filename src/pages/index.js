import React, { useState } from 'react';
import { Calendar, Clock, Mail, Sun, Cloud, CloudRain, Users, MapPin, Plus, Eye, Check } from 'lucide-react';
import '../css/custom.css'; // Ensure Tailwind CSS is imported
import logoImg from '../assets/images/logo.png';

// Import refactored section components
import CalendarViewScreenshot from '../components/WeatherCalendar/CalendarViewScreenshot';
import TimelineViewScreenshot from '../components/WeatherCalendar/TimelineViewScreenshot';
import ContactSection from '../components/WeatherCalendar/ContactSection';
import IntroductionSection from '../components/WeatherCalendar/IntroductionSection';
import ScreenshotsSection from '../components/WeatherCalendar/ScreenshotsSection';
import UsageExplanationSection from '../components/WeatherCalendar/UsageExplanationSection';

const EventCalendarWebsite = () => {
  const [activeView, setActiveView] = useState('calendar');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">            
                <img
                    src={logoImg}
                    alt="WeatherCalendar Logo"
                    className="w-12 h-12 object-contain rounded"
                    style={{ marginLeft: '-0.25rem' }}
                />                  
              <h1 className="text-2xl font-bold text-gray-900">WeatherCalendar</h1>
            </div>
          </div>
        </div>
      </header>
      {/* Introduction Section */}
      <IntroductionSection />
      {/* Screenshots Section */}
      <ScreenshotsSection
        activeView={activeView}
        setActiveView={setActiveView}
        CalendarViewScreenshot={CalendarViewScreenshot}
        TimelineViewScreenshot={TimelineViewScreenshot}
      />
      {/* Usage Explanation Section */}
      <UsageExplanationSection />
      {/* Contact Section */}
      {/* <ContactSection
        contactForm={contactForm}
        handleInputChange={handleInputChange}
        handleContactSubmit={handleContactSubmit}
      /> */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
                <img
                    src={logoImg}
                    alt="WeatherCalendar Logo"
                    className="w-12 h-12 object-contain rounded"
                    style={{ marginLeft: '-0.25rem' }}
                />                   
              <span className="text-xl font-bold">WeatherCalendar</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">© 2025 WeatherCalendar. All rights reserved.</p>
              <p className="text-gray-400">
                Contact: 
                <a href="mailto:info@meteosync.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  info@meteosync.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function Home(){
    return (
        <EventCalendarWebsite />);
};