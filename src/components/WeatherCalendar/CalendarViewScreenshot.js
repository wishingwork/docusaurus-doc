import React from 'react';
import { Calendar, Sun, Cloud, CloudRain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CalendarViewScreenshot = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 border">
            <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{t('calendarView.title')}</h4>
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
                    <span>{t('calendarView.sunnyEvent')}</span>
                </div>
                <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>{t('calendarView.rainyEvent')}</span>
                </div>
            </div>
        </div>
    );
}

export default CalendarViewScreenshot;