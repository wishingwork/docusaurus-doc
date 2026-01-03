import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {useTranslation} from 'react-i18next';
import logoImg from '../../assets/images/TripPlanner/logo.png';

export default function Footer(){
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isJIceShop = pathname && pathname.includes('j-ice-shop');

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/trip-planner" aria-label="Go to trip planner" className="flex items-center">
              <img
                src={logoImg}
                alt="Logo"
                className="w-12 h-12 object-contain rounded"
                style={{ marginLeft: '-0.25rem' }}
              />
              <span className="text-xl font-bold text-white ml-3">{t('tripPlanner.appTitle') || 'WeatherGo Plan'}</span>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1">{'© 2025 WeatherGo Plan. All rights reserved.'}</p>
            <p className="text-gray-400">
              Contact:
              <a href="mailto:info@meteosync.com" className="text-blue-400 hover:text-blue-300 ml-1">
                info@meteosync.com
              </a>
            </p>
            <p className="text-gray-400">
              <a href="/delete-trip-account" className="text-blue-400 hover:text-blue-300">
                {t ? t('tripPlanner.deleteAccount') : 'Delete account'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
