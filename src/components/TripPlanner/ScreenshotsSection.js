import React, { act } from 'react';
import { Calendar, Clock, MapPin, Sun, Route, MapPinned, CloudSun } from 'lucide-react';
import AttractionList from '../../assets/images/TripPlanner/AttractionList.png';
import MapView from '../../assets/images/TripPlanner/MapView.png';
import TripPlannerForm from '../../assets/images/TripPlanner/TripPlannerForm.png';

import { useTranslation } from 'react-i18next';

const ScreenshotsSection = ({
  activeView,
  setActiveView,
}) => {
    const { t } = useTranslation();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('tripPlanner.screenshots.title')}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t('tripPlanner.screenshots.subtitle')}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side - View Options */}
                    <div className="space-y-4">
                        <div 
                            onClick={() => setActiveView('TripPlannerForm')}
                            className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                                activeView === 'calendar' 
                                    ? 'bg-blue-600 text-white shadow-xl' 
                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                            }`}
                        >
                            <div className="flex items-center mb-3">
                                <Route className={`mr-3 ${activeView === 'calendar' ? 'text-white' : 'text-blue-600'}`} size={32} />
                                <h3 className="text-xl font-bold">{t('tripPlanner.screenshots.TripPlannerFormView')}</h3>
                            </div>
                            <p className={`${activeView === 'calendar' ? 'text-blue-100' : 'text-gray-600'}`}>
                                {t('tripPlanner.screenshots.TripPlannerFormDesc')}
                            </p>
                            <div className="mt-4 flex items-center space-x-4 text-sm">
                                <div className="flex items-center">
                                    <MapPin className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                    <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>{t('tripPlanner.screenshots.address')}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                    <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>{t('tripPlanner.screenshots.departureTime')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            onClick={() => setActiveView('AttractionList')}
                            className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                                activeView === 'timeline' 
                                    ? 'bg-blue-600 text-white shadow-xl' 
                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                            }`}
                        >
                            <div className="flex items-center mb-3">
                                <CloudSun className={`mr-3 ${activeView === 'timeline' ? 'text-white' : 'text-blue-600'}`} size={32} />
                                <h3 className="text-xl font-bold">{t('tripPlanner.screenshots.AttractionListView')}</h3>
                            </div>
                            <p className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-600'}`}>
                                {t('tripPlanner.screenshots.AttractionListDesc')}
                            </p>
                            <div className="mt-4 flex space-x-2">
                                <div className="w-4 h-4 bg-red-400 rounded-full" title={t('screenshots.sunny')}></div>
                                <div className="w-4 h-4 bg-blue-400 rounded-full" title={t('screenshots.cloudy')}></div>
                                <div className="w-4 h-4 bg-green-500 rounded-full" title={t('screenshots.rainy')}></div>
                                <span className={`text-sm ml-2 ${activeView === 'calendar' ? 'text-blue-100' : 'text-gray-500'}`}>
                                    {t('tripPlanner.screenshots.locationTypeIndicators')}
                                </span>
                            </div>
                        </div>

                        <div 
                            onClick={() => setActiveView('MapView')}
                            className={`p-6 rounded-xl cursor-pointer transition-all transform hover:scale-105 ${
                                activeView === 'timeline' 
                                    ? 'bg-blue-600 text-white shadow-xl' 
                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                            }`}
                        >
                            <div className="flex items-center mb-3">
                                <MapPinned className={`mr-3 ${activeView === 'timeline' ? 'text-white' : 'text-blue-600'}`} size={32} />
                                <h3 className="text-xl font-bold">{t('tripPlanner.screenshots.MapView')}</h3>
                            </div>
                            <p className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-600'}`}>
                                {t('tripPlanner.screenshots.MapDesc')}
                            </p>
                            <div className="mt-4 flex items-center space-x-4 text-sm">
                                <div className="flex items-center">
                                    <MapPin className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                    <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>{t('tripPlanner.screenshots.location')}</span>
                                </div>
                                <div className="flex items-center">
                                    <Route className={`mr-1 ${activeView === 'timeline' ? 'text-blue-200' : 'text-gray-400'}`} size={16} />
                                    <span className={`${activeView === 'timeline' ? 'text-blue-100' : 'text-gray-500'}`}>{t('tripPlanner.screenshots.route')}</span>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    
                    {/* Right Side - Screenshot Display */}
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md flex justify-center">
                            { activeView === 'TripPlannerForm' && (
                                <img
                                    src={TripPlannerForm}
                                    alt="Trip Planner Form Screenshot"
                                    className="rounded-xl shadow-lg w-2/3"
                                />
                            )}
                            { activeView === 'AttractionList' && (
                                <img
                                    src={AttractionList}
                                    alt="Attraction List View Screenshot"
                                    className="rounded-xl shadow-lg w-2/3"
                                />
                            )}           
                            { activeView === 'MapView' && (
                                <img
                                    src={MapView}
                                    alt="Map View Screenshot"
                                    className="rounded-xl shadow-lg w-2/3"
                                />
                            )}                                                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ScreenshotsSection;