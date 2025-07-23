import React, { useState } from 'react';
import { Calendar, Clock, Mail, Sun, Cloud, CloudRain, Users, MapPin, Plus, Eye, Check } from 'lucide-react';
import '../css/custom.css'; // Ensure Tailwind CSS is imported
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your interest! We will contact you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WeatherCalendar</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Plan Events with
                <span className="text-blue-600 block">Weather Insights</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Never let weather surprise your events again. Our intelligent calendar integrates real-time weather data 
                to help you plan, schedule, and manage events with complete weather awareness.
              </p>
              <button 
                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 flex items-center"
              >
                <Users className="mr-2" size={20} />
                Request Internal Testing
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Calendar className="text-blue-600" size={48} />
                    </div>
                    <div className="flex space-x-2 justify-center mb-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sun className="text-white" size={16} />
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <Cloud className="text-white" size={16} />
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <CloudRain className="text-white" size={16} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Weather-Integrated Planning</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Sun className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <CloudRain className="text-white" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Powerful Views
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect view for your planning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - View Options */}
            <div className="space-y-4">
              <div 
                onClick={() => setActiveView('calendar')}
                className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                  activeView === 'calendar' 
                    ? 'bg-blue-600 text-white shadow-xl' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-center mb-3">
                  <Calendar className={`mr-3 ${activeView === 'calendar' ? 'text-white' : 'text-blue-600'}`} size={32} />
                  <h3 className="text-xl font-bold">Calendar View</h3>
                </div>
                <p className={`${activeView === 'calendar' ? 'text-blue-100' : 'text-gray-600'}`}>
                  Get an overall view of all your events with weather-coded colors. Each event displays its weather condition 
                  through intuitive color coding, making it easy to spot potential weather concerns at a glance.
                </p>
                <div className="mt-4 flex space-x-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" title="Sunny"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full" title="Cloudy"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full" title="Rainy"></div>
                  <span className={`text-sm ml-2 ${activeView === 'calendar' ? 'text-blue-100' : 'text-gray-500'}`}>
                    Weather indicators
                  </span>
                </div>
              </div>
              
              <div 
                onClick={() => setActiveView('timeline')}
                className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                  activeView === 'timeline' 
                    ? 'bg-purple-600 text-white shadow-xl' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-center mb-3">
                  <Clock className={`mr-3 ${activeView === 'timeline' ? 'text-white' : 'text-purple-600'}`} size={32} />
                  <h3 className="text-xl font-bold">Timeline View</h3>
                </div>
                <p className={`${activeView === 'timeline' ? 'text-purple-100' : 'text-gray-600'}`}>
                  View events in a chronological list format showing what, where, when, and weather conditions. 
                  Perfect for detailed planning and sequential event management with comprehensive weather information.
                </p>
                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className={`mr-1 ${activeView === 'timeline' ? 'text-purple-200' : 'text-gray-400'}`} size={16} />
                    <span className={`${activeView === 'timeline' ? 'text-purple-100' : 'text-gray-500'}`}>Location</span>
                  </div>
                  <div className="flex items-center">
                    <Sun className={`mr-1 ${activeView === 'timeline' ? 'text-purple-200' : 'text-gray-400'}`} size={16} />
                    <span className={`${activeView === 'timeline' ? 'text-purple-100' : 'text-gray-500'}`}>Weather</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Screenshot Display */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {activeView === 'calendar' ? (
                  <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Calendar View</h4>
                    </div>
                    {/* Mock Calendar */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 35 }, (_, i) => (
                        <div key={i} className="aspect-square p-1">
                          <div className={`w-full h-full rounded flex items-center justify-center text-xs
                            ${i === 10 ? 'bg-yellow-200 text-yellow-800' :
                              i === 15 ? 'bg-blue-200 text-blue-800' :
                              i === 22 ? 'bg-gray-200 text-gray-800' :
                              i > 6 && i < 30 ? 'hover:bg-gray-50 text-gray-700' : 'text-gray-300'}`}>
                            {i > 6 && i < 30 ? i - 6 : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                        <span>Team Meeting - Sunny</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span>Outdoor Event - Rainy</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Timeline View</h4>
                    </div>
                    {/* Mock Timeline */}
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">Team Meeting</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            10:00 AM - 11:30 AM
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            Conference Room A
                          </div>
                          <div className="text-xs text-yellow-600 flex items-center">
                            <Sun size={12} className="mr-1" />
                            Sunny, 24°C
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">Product Launch</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            2:00 PM - 5:00 PM
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            Central Park
                          </div>
                          <div className="text-xs text-blue-600 flex items-center">
                            <CloudRain size={12} className="mr-1" />
                            Rainy, 18°C
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-3"></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">Client Dinner</div>
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            7:00 PM - 9:00 PM
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            Downtown Restaurant
                          </div>
                          <div className="text-xs text-gray-600 flex items-center">
                            <Cloud size={12} className="mr-1" />
                            Cloudy, 20°C
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Explanation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to create weather-aware events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Plus size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Create Event</h3>
              <p className="text-gray-600 mb-4">
                Add your event details including title, date, time, and location. Our system automatically detects the location for weather tracking.
              </p>
              {/* <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-200">
                <div className="text-left text-sm">
                  <div className="font-medium mb-1">📅 Event: Team Outing</div>
                  <div className="text-gray-600">📍 Central Park</div>
                  <div className="text-gray-600">🕒 Tomorrow 2:00 PM</div>
                </div>
              </div> */}
            </div>
            
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Weather Integration</h3>
              <p className="text-gray-600 mb-4">
                The system automatically fetches weather forecast for your event location and time, providing real-time updates.
              </p>
              {/* <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sun className="text-white" size={24} />
                  </div>
                  <div className="text-sm font-medium">Sunny, 24°C</div>
                  <div className="text-xs text-gray-500">Perfect for outdoor activities!</div>
                </div>
              </div> */}
            </div>
            
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. View & Manage</h3>
              <p className="text-gray-600 mb-4">
                See your events in calendar or timeline view with weather-coded colors. Make informed decisions about your activities.
              </p>
              {/* <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-200">
                <div className="flex justify-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
                    <Check className="text-white" size={12} />
                  </div>
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-600">Events with weather status</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact-section" className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100">
              Contact our development team to request internal testing access
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your testing requirements and timeline..."
                ></textarea>
              </div>
              
              <button
                onClick={handleContactSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Request Internal Testing Access
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Calendar className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">WeatherCal</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1">© 2025 WeatherCal. All rights reserved.</p>
              <p className="text-gray-400">
                Contact: 
                <a href="mailto:dev@weathercal.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  dev@weathercal.com
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