import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = ({ contactForm, handleInputChange, handleContactSubmit }) => {
    const { t } = useTranslation();
    return (
      <section id="contact-section" className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-blue-100">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.namePlaceholder')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.emailPlaceholder')}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button
                onClick={handleContactSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                {t('contact.button')}
              </button>
            </div>
          </div>
        </div>
      </section>        
    )    
}

export default ContactSection;