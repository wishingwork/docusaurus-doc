import React from 'react';
import { Calendar, Clock, MapPin, Sun } from 'lucide-react';
import CalendarView from '../../assets/images/Calendar_View.png';
import TimelineView from '../../assets/images/Timeline_View.png';

const ScreenshotsSection = ({
  activeView,
  setActiveView,
  CalendarViewScreenshot,
  TimelineViewScreenshot
}) => {
return (
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
                                ? 'bg-blue-600 text-white shadow-xl' 
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                        }`}
                    >
                        <div className="flex items-center mb-3">
                            <Clock className={`mr-3 ${activeView === 'timeline' ? 'text-white' : 'text-blue-600'}`} size={32} />
                            <h3 className="text-xl font-bold">Timeline View</h3>
                        </div>
                        <p className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-600'}`}>
                            View events in a chronological list format showing what, where, when, and weather conditions. 
                            Perfect for detailed planning and sequential event management with comprehensive weather information.
                        </p>
                        <div className="mt-4 flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                                <MapPin className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>Location</span>
                            </div>
                            <div className="flex items-center">
                                <Sun className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>Weather</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Side - Screenshot Display */}
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-md flex justify-center">
                        <img
                            src={activeView === 'calendar' ? CalendarView : TimelineView}
                            alt="Calendar View Screenshot"
                            className="rounded-xl shadow-lg w-2/3"
                        />                        
                    </div>
                </div>
            </div>
        </div>
    </section>
)
};

export default ScreenshotsSection;