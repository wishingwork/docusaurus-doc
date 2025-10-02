import React from 'react';
import { Clock, MapPin, Sun, CloudRain, Cloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TimelineViewScreenshot = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 border">
            <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{t('timelineView.title')}</h4>
            </div>
            {/* Mock Timeline */}
            <div className="space-y-4">
                <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                    <div className="flex-1">
                        <div className="font-medium text-sm">{t('timelineView.event1.title')}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            {t('timelineView.event1.time')}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {t('timelineView.event1.location')}
                        </div>
                        <div className="text-xs text-yellow-600 flex items-center">
                            <Sun size={12} className="mr-1" />
                            {t('timelineView.event1.weather')}
                        </div>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <div className="flex-1">
                        <div className="font-medium text-sm">{t('timelineView.event2.title')}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            {t('timelineView.event2.time')}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {t('timelineView.event2.location')}
                        </div>
                        <div className="text-xs text-blue-600 flex items-center">
                            <CloudRain size={12} className="mr-1" />
                            {t('timelineView.event2.weather')}
                        </div>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 mr-3"></div>
                    <div className="flex-1">
                        <div className="font-medium text-sm">{t('timelineView.event3.title')}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            {t('timelineView.event3.time')}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {t('timelineView.event3.location')}
                        </div>
                        <div className="text-xs text-gray-600 flex items-center">
                            <Cloud size={12} className="mr-1" />
                            {t('timelineView.event3.weather')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineViewScreenshot;