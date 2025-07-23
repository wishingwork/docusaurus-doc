import React from 'react';
import { Clock, MapPin, Sun, CloudRain, Cloud } from 'lucide-react';

const TimelineViewScreenshot = () => {
    return (
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
                )
}        

export default TimelineViewScreenshot;