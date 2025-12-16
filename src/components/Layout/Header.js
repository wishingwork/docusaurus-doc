import React from 'react';
import {useLocation} from '@docusaurus/router';
import logoImg from '../../assets/images/TripPlanner/logo.png';
import {useTranslation} from 'react-i18next';

export default function Header(){
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();

  // Determine variant based on URL
  const title =  t('tripPlanner.appTitle') || 'WeatherPlanB';

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Logo"
              className="w-12 h-12 object-contain rounded"
              style={{ marginLeft: '-0.25rem' }}
            />
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>

          <div>
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              <option value="en">English</option>
              <option value="zh-Hant">繁體中文</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
