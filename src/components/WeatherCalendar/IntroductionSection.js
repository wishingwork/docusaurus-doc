import React from 'react';
import { Calendar, Sun, Cloud, CloudRain, Users } from 'lucide-react';

const IntroductionSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Plan Events with
                  <span className="text-blue-600 block">Weather Insights</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Never let weather surprise your events again. Our intelligent calendar integrates real-time weather data 
                  to help you plan, schedule, and manage events with complete weather awareness.
                </p>
                <a 
                  href="mailto:info@meteosyn.com"
                  className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-100 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 flex items-center"
                >
                  <Users className="mr-2" size={20} />
                  Request Internal Testing
                </a>
              </div>
              
              <div className="flex justify-center w-full">
                <div className="relative w-full flex justify-center">
                  <div className="w-full max-w-xs sm:w-80 sm:h-80 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                    <div className="text-center w-full">
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
                  <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Sun className="text-white" size={24} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <CloudRain className="text-white" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
    )}

export default IntroductionSection;