import React from 'react';
import { Plus, Sun, Eye, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UsageExplanationSection = () => {
    const { t } = useTranslation();
    return (
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('usage.title')}
            </h2>
            <p className="text-lg text-white">
              {t('usage.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Plus size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('usage.step1.title')}</h3>
              <p className="text-white mb-4">
                {t('usage.step1.desc')}
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('usage.step2.title')}</h3>
              <p className="text-white mb-4">
                {t('usage.step2.desc')}
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('usage.step3.title')}</h3>
              <p className="text-white mb-4">
                {t('usage.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default UsageExplanationSection;