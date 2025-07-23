import React from 'react';
import { Plus, Sun, Eye, Check } from 'lucide-react';

const UsageExplanationSection = () => {
    return (
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-white">
              Simple steps to create weather-aware events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Plus size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Create Event</h3>
              <p className="text-white mb-4">
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
              <h3 className="text-xl font-bold text-white mb-2">2. Weather Integration</h3>
              <p className="text-white mb-4">
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
              <h3 className="text-xl font-bold text-white mb-2">3. View & Manage</h3>
              <p className="text-white mb-4">
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
    );
};

export default UsageExplanationSection;