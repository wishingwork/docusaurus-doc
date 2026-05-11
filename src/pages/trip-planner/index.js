import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  Calendar, MapPin, Users, Share2, Sun,
  CheckCircle, Globe, Navigation, ArrowRight, AppWindow,
  Briefcase, School, Play, Download, LayoutDashboard, CloudSun, Smartphone, Languages, Activity,
  Search, Home, Plus, User, Link as LinkIcon, Clock, Upload, Trash2, Edit2, ExternalLink,
  Instagram, Facebook, MessageCircle
} from 'lucide-react';
import '../../css/custom.css';

import { useTranslation } from 'react-i18next';

// Centralized color definitions
export const colors = {
  primary: '#007BFF',
  secondary: '#005FA0',
  accent: '#ffd33d',
  error: 'red',
  background: '#f5f5f5',
  white: '#fff',
  text: '#333',
  textSecondary: '#888',
  border: '#ccc',
  borderLight: '#e0e0e0',
};

const Navbar = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (i18n.language !== 'zh-Hant' && i18n.language !== 'en') {
      i18n.changeLanguage('zh-Hant');
    }
  }, [i18n]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e0e0e0] px-4 md:px-6 py-3 md:py-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        <a href="/" className="flex items-center gap-2 md:gap-3 font-bold text-lg md:text-xl no-underline transition-all hover:opacity-90 shrink-0" style={{ color: colors.secondary }}>
          <img
            src={require('../../assets/images/TripPlanner/logo.png').default}
            alt="WeatherGoPlan Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="tracking-tight block">{t('app.name')}</span>
        </a>
        <ul className="hidden md:flex items-center gap-4 xl:gap-8 font-medium list-none mb-0 shrink-0" style={{ color: colors.text }}>
          <li><a href="#features" className="hover:opacity-80 transition-colors no-underline text-inherit text-xs xl:text-base whitespace-nowrap">{t('landing.nav.features')}</a></li>
          <li><a href="#organizer" className="hover:opacity-80 transition-colors no-underline text-inherit text-xs xl:text-base whitespace-nowrap">{t('landing.nav.organizers')}</a></li>
          <li><a href="#sharing" className="hover:opacity-80 transition-colors no-underline text-inherit text-xs xl:text-base whitespace-nowrap">{t('landing.nav.sharing')}</a></li>
          <li><a href="#how" className="hover:opacity-80 transition-colors no-underline text-inherit text-xs xl:text-base whitespace-nowrap">{t('landing.nav.how')}</a></li>
        </ul>
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <div className="flex items-center gap-1 md:gap-2 border rounded-lg px-1.5 md:px-2 py-1 md:py-1.5 transition-colors" style={{ backgroundColor: colors.background, borderColor: colors.borderLight }}>
            <Languages className="w-3 md:w-4 h-3 md:h-4" style={{ color: colors.textSecondary }} />
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-bold border-none focus:ring-0 cursor-pointer outline-none p-0"
              style={{ color: colors.text }}
            >
              <option value="en">EN</option>
              <option value="zh-Hant">繁中</option>
            </select>
          </div>
          <a href="https://weathergo.meteosync.com/login" className="text-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-1 no-underline whitespace-nowrap text-[10px] md:text-sm lg:text-base" style={{ backgroundColor: colors.primary }}>
            <span className="hidden md:inline">{t('landing.nav.becomeOrganizer')}</span>
            <span className="md:hidden">{t('landing.nav.becomeOrganizer').split(' ')[0]}</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full filter blur-[100px] opacity-40 z-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="hero-content">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold text-sm mb-8" style={{ backgroundColor: '#EBF5FF', border: '1px solid #DBEAFE', color: colors.primary }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></div>
            {t('landing.hero.tag')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight" style={{ color: colors.text }}>
            {t('landing.hero.title_part1')} <br />
            <span className="italic" style={{ color: colors.primary }}>{t('landing.hero.title_part2')}</span>
          </h1>
          <p className="text-xl mb-10 max-w-xl leading-relaxed" style={{ color: colors.textSecondary }}>
            {t('landing.hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="https://weathergo.meteosync.com/login" className="text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 group hover:opacity-90 no-underline" style={{ backgroundColor: colors.primary, boxShadow: `0 20px 25px -5px ${colors.primary}33` }}>
              <Plus className="w-4 h-4" />
              {t('landing.hero.becomeOrganizer')}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12 border-t pt-10" style={{ borderColor: colors.borderLight }}>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>5000+</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: colors.textSecondary }}>{t('landing.hero.stats.attractions')}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>Free</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: colors.textSecondary }}>{t('landing.hero.stats.start')}</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:pr-20 mt-16 lg:mt-0">
          <div className="absolute top-10 -left-4 md:-left-20 z-20 bg-white rounded-2xl shadow-2xl p-4 md:p-5 border border-gray-100 w-48 md:w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-800 mb-3 md:mb-4 pb-2 border-b border-gray-50">
              <span>📅</span> {t('landing.hero.cards.hosted')}
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-between gap-3 text-[10px]">
                <span className="font-semibold text-gray-700 truncate">{isEn ? 'Parent-Child Yoga' : '親子瑜珈體驗班'}</span>
                <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold shrink-0">{t('landing.hero.cards.published')}</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-[10px]">
                <span className="font-semibold text-gray-700 truncate">{isEn ? 'Train Marathon' : '追火車馬拉松'}</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold shrink-0">{t('landing.hero.cards.draft')}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-[240px] md:w-[300px] h-[480px] md:h-[600px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl border-[6px] md:border-[8px] border-gray-800 overflow-hidden" id="hero-mobile">
            <img
              src={isEn ? "/img/trip-planner/explore_en.PNG" : "/img/trip-planner/explore_zh.PNG"}
              alt="App Mobile Screen"
              className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.2rem]"
            />
          </div>

          <div className="absolute bottom-10 -right-4 md:-right-20 z-20 bg-white rounded-2xl shadow-2xl p-4 md:p-5 border border-gray-100 w-44 md:w-56 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="text-[10px] md:text-sm font-bold text-gray-800 mb-3 md:mb-4 pb-2 border-b border-gray-50">
              🔗 {t('landing.hero.cards.share')}
            </div>
            <div className="flex gap-1.5 md:gap-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#06C755] flex items-center justify-center text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M24 10.304c0-5.23-5.383-9.486-12-9.486-6.617 0-12 4.256-12 9.486 0 4.69 4.283 8.623 10.075 9.358.392.085.926.258 1.06.593.121.302.08.775.04 1.078l-.173 1.04c-.053.303-.255 1.184 1.1 0 1.355-1.184 7.31-4.303 9.97-7.362 1.288-1.547 1.928-3.155 1.928-4.707z" />
                </svg>
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#E1306C] flex items-center justify-center text-white shadow-sm">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-sm">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
              </div>
            </div>
            <div className="text-[8px] md:text-[10px] text-gray-400 font-medium truncate"><a href="https://www.meteosync.com/event/a4f43af1-106e-4d86-b1c0-90c0f10b417a">Share</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const { t } = useTranslation();
  const benefitItems = t('landing.benefits.items', { returnObjects: true });
  const icons = [Users, Calendar, Users, Share2, Activity];

  return (
    <section id="features" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>{t('landing.benefits.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: colors.text }}>
            {t('landing.benefits.title_part1')}<br />
            {t('landing.benefits.title_part2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitItems.map((benefit, idx) => {
            const Icon = icons[idx];
            const isWide = idx === 4;
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-md bg-white ${isWide ? 'lg:col-span-2' : ''}`}
                style={{ borderColor: colors.borderLight }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8`} style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>{benefit.title}</h3>
                <p className="leading-relaxed text-sm md:text-base" style={{ color: colors.textSecondary }}>
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeatureArchitectureSection = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language === 'en';
  const [activeTab, setActiveTab] = useState('A');

  const visualData = {
    A: {
      title: t('landing.featureArch.visual.A.title'),
      subtitle: t('landing.featureArch.visual.A.subtitle'),
      features: [
        { icon: <Search className="w-4 h-4" />, ...t('landing.featureArch.visual.A.features.search', { returnObjects: true }) },
        { icon: <MapPin className="w-4 h-4" />, ...t('landing.featureArch.visual.A.features.rec', { returnObjects: true }) },
        { icon: <Home className="w-4 h-4" />, ...t('landing.featureArch.visual.A.features.indoor', { returnObjects: true }) },
        { icon: <Activity className="w-4 h-4" />, ...t('landing.featureArch.visual.A.features.weather', { returnObjects: true }) }
      ]
    },
    B: {
      title: t('landing.featureArch.visual.B.title'),
      subtitle: t('landing.featureArch.visual.B.subtitle'),
      features: [
        { icon: <Plus className="w-4 h-4" />, ...t('landing.featureArch.visual.B.features.create', { returnObjects: true }) },
        { icon: <Calendar className="w-4 h-4" />, ...t('landing.featureArch.visual.B.features.schedule', { returnObjects: true }) },
        { icon: <User className="w-4 h-4" />, ...t('landing.featureArch.visual.B.features.profile', { returnObjects: true }) },
        { icon: <Upload className="w-4 h-4" />, ...t('landing.featureArch.visual.B.features.publish', { returnObjects: true }) }
      ]
    },
    C: {
      title: t('landing.featureArch.visual.C.title'),
      subtitle: t('landing.featureArch.visual.C.subtitle'),
      desc: t('landing.featureArch.visual.C.desc'),
      features: [
        { icon: <Calendar className="w-4 h-4" />, title: t('landing.featureArch.visual.C.features.event'), desc: <a href="https://www.meteosync.com/event/a4f43af1-106e-4d86-b1c0-90c0f10b417a" class="text-white underline">{t('landing.featureArch.visual.C.features.event_desc')}</a> },
        { icon: <Users className="w-4 h-4" />, title: t('landing.featureArch.visual.C.features.profile'), desc: <a href="https://www.meteosync.com/organizer/31577e14-5240-434e-9c8e-fa92c6a99b25" class="text-white underline">{t('landing.featureArch.visual.C.features.profile_desc')}</a> },
        { icon: <MapPin className="w-4 h-4" />, title: t('landing.featureArch.visual.C.features.attraction'), desc: <a href="https://www.meteosync.com/attraction/attr_01KFFT0DFFVNWGMFAPV9CQYKGW" class="text-white underline">{t('landing.featureArch.visual.C.features.attraction_desc')}</a> }
      ]
    }
  };

  const current = visualData[activeTab];

  return (
    <section id="features-arch" className="py-24 text-white scroll-mt-20" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.accent }}>{t('landing.featureArch.tag')}</span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">{t('landing.featureArch.title')}</h2>
          <p className="text-xl max-w-4xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t('landing.featureArch.desc')}
          </p>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 bg-white/5 p-1 rounded-2xl md:inline-flex border border-white/5 whitespace-nowrap">
          {['A', 'B', 'C'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${activeTab === tab
                ? 'bg-white text-[#005FA0] shadow-xl'
                : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
            >
              {t(`landing.featureArch.tabs.${tab}`)}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            {current.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7">
            <div className="relative h-full w-full min-h-[500px] md:min-h-[750px] flex items-center justify-center p-4 md:p-8 bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10">
              {activeTab === 'A' && (
                <div className="relative w-full h-full flex flex-col">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[80px] -ml-32 -mb-32"></div>

                  <div className="absolute top-8 left-8 right-8 z-20 md:max-w-[350px] text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-white">{current.title}</h3>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-emerald-400">{current.subtitle}</h3>
                  </div>

                  <div className="absolute top-[30%] md:top-[20%] left-1/2 -translate-x-1/2 z-10 w-[180px] h-[380px] md:w-[260px] md:h-[530px] bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 border-[4px] md:border-[6px] border-gray-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] transform translate-y-8 md:translate-y-12">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                      <img src={isEn ? "/img/trip-planner/attraction_list_en.PNG" : "/img/trip-planner/attraction_list_zh.PNG"} className="w-full h-full object-cover" alt="Attraction List" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'B' && (
                <div className="relative w-full h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-[80px] -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full filter blur-[80px] -ml-32 -mb-32"></div>

                  <div className="absolute top-8 left-8 right-8 z-20 md:max-w-[350px] text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-white">{current.title}</h3>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-blue-400">{current.subtitle}</h3>
                  </div>

                  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 z-10 w-[90%] md:w-[85%] max-w-[550px] bg-gray-800 rounded-lg md:rounded-xl p-1 md:p-2 border-[3px] md:border-[6px] border-gray-700 shadow-2xl transform translate-y-4 md:translate-y-8">
                    <div className="w-full h-full bg-white rounded-lg overflow-hidden relative border border-gray-600">
                      <img src={isEn ? "/img/trip-planner/dashboard_en.png" : "/img/trip-planner/dashboard_zh.png"} className="w-full h-full" alt="Dashboard" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[105%] h-2 bg-gray-700 rounded-b-xl shadow-md"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              )}

              {activeTab === 'C' && (
                <div className="relative w-full h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[80px] -ml-32 -mb-32"></div>

                  <div className="absolute top-8 left-8 right-8 z-20 md:max-w-[500px] text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-white">{current.title}</h3>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-blue-400">{current.subtitle}</h3>
                    <p className="text-[10px] text-gray-400 leading-relaxed hidden sm:block">{current.desc}</p>
                  </div>

                  <div className="absolute top-[30%] md:top-[20%] left-1/2 -translate-x-1/2 z-10 w-[180px] h-[380px] md:w-[260px] md:h-[530px] bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 border-[4px] md:border-[6px] border-gray-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] transform translate-y-8 md:translate-y-12">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                      <img src={isEn ? "/img/trip-planner/attraction_map_en.PNG" : "/img/trip-planner/attraction_map_zh.PNG"} className="w-full h-full object-cover" alt="Map View" />
                      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-xs font-bold text-gray-800">{t('landing.featureArch.visual.C.features.attraction_name')}</div>
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                        </div>
                        <div className="text-[8px] text-gray-400">{t('landing.featureArch.visual.C.features.attraction_desc')}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[35%] left-[5%] z-20 w-44 bg-white rounded-2xl shadow-2xl p-2.5 border border-gray-100 rotate-[-3deg] hover:rotate-0 transition-all duration-500 hidden md:block">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[9px] font-bold text-gray-800">{t('landing.featureArch.visual.C.features.event')}</span>
                    </div>
                    <div className="rounded-xl overflow-hidden mb-2 aspect-video relative" id="event-image">
                      <img src="/img/trip-planner/event_detail_share.PNG" className="w-full h-full object-cover object-top" alt="Event" />
                    </div>
                    <div className="text-[9px] font-bold text-gray-900 leading-tight mb-1 truncate">{t('landing.featureArch.visual.C.features.event_desc')}</div>
                    <div className="flex gap-1 justify-end pt-1 border-t border-gray-50">
                      <div className="w-4 h-4 rounded-full bg-[#06C755] flex items-center justify-center text-[6px] text-white font-bold"><MessageCircle className="w-3 h-3" /></div>
                      <div className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center text-[6px] text-white font-bold"><Facebook className="w-3 h-3" /></div>
                      <div className="w-4 h-4 rounded-full bg-[#E1306C] flex items-center justify-center text-[6px] text-white font-bold"><Instagram className="w-3 h-3" /></div>
                      <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[6px] text-white font-bold"><LinkIcon className="w-3 h-3" /></div>
                    </div>
                  </div>

                  {/* Bottom Left: Organizer Profile Card */}
                  <div className="absolute bottom-[5%] left-[5%] z-20 w-40 md:w-48 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100 rotate-[2deg] hover:rotate-0 transition-all duration-500 hidden md:block">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wider">{t('landing.featureArch.visual.C.features.profile')}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-sm">
                        <Home className="w-4 h-4" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="text-[9px] font-bold text-gray-900 truncate">{t('landing.featureArch.visual.C.features.profile_desc')}</div>
                        <div className="text-[7px] text-gray-400 truncate tracking-tight">heart@cwlf.org.tw</div>
                      </div>
                    </div>
                    <div className="flex gap-1 justify-center pt-2 border-t border-gray-50">
                      <div className="bg-[#06C755]/10 text-[#06C755] text-[6px] px-1.5 py-0.5 rounded font-bold">LINE 分享</div>
                      <div className="bg-blue-600/10 text-blue-600 text-[6px] px-1.5 py-0.5 rounded font-bold">FB 粉絲專頁</div>
                    </div>
                  </div>

                  {/* Top Right: Space Preview Card */}
                  <div className="absolute top-[35%] right-[5%] z-20 w-44 md:w-48 bg-white rounded-2xl shadow-2xl p-2.5 border border-gray-100 rotate-[4deg] hover:rotate-0 transition-all duration-500 hidden md:block">
                    <div className="text-[9px] font-bold text-gray-400 mb-2 uppercase tracking-tight">{t('landing.featureArch.visual.C.features.space')}</div>
                    <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[4/3]" id="space-image">
                      <img src="/img/trip-planner/organizer_detail_share.PNG" className="w-full h-full object-cover object-top" alt="Space" />
                    </div>
                    <div className="flex items-center gap-1 text-[7px] text-gray-400">
                      <MapPin className="w-2.5 h-2.5" /> {isEn ? 'Zhongshan District, Taipei City...' : '台北市中山區民東路二段...'}
                    </div>
                  </div>

                  <div className="absolute bottom-[10%] right-[5%] z-20 w-44 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 rotate-[-2deg] hover:rotate-0 transition-all duration-500 hidden md:block">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span className="text-[9px] font-bold text-gray-800 uppercase">{t('landing.featureArch.visual.C.features.attraction')}</span>
                    </div>
                    <p className="text-[8px] text-gray-500 leading-normal mb-3">{t('landing.featureArch.visual.C.features.attraction_desc')}</p>
                    <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="text-[8px] font-bold text-gray-800">{t('landing.featureArch.visual.C.features.attraction_name')}</div>
                        <div className="text-[6px] text-gray-400 tracking-tighter uppercase">National Historic Site</div>
                      </div>
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Share2 className="w-2 h-2 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrganizerDashboardSection = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language === 'en';
  const features = t('landing.organizer.features', { returnObjects: true });
  const icons = [LayoutDashboard, Activity, Users];

  return (
    <section id="organizer" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>{t('landing.organizer.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.text }}>{t('landing.organizer.title')}</h2>
          <p className="text-xl max-w-3xl leading-relaxed" style={{ color: colors.textSecondary }}>{t('landing.organizer.desc')}</p>
        </div>

        <div className="rounded-[2.5rem] p-8 md:p-12 border shadow-2xl mb-16 overflow-hidden bg-gray-50 flex justify-center" style={{ borderColor: colors.borderLight }} id="feature-management-dashboard">
          <img
            src={isEn ? "/img/trip-planner/dashboard_en.png" : "/img/trip-planner/dashboard_zh.png"}
            alt="Dashboard View"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.text }}>{feature.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: colors.textSecondary }}>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section >
  )
};

const SocialSharingSection = () => {
  const { t } = useTranslation();
  const cards = t('landing.social.cards', { returnObjects: true });
  const icons = ['🎟️', '🏢', '📍'];
  const links = [
    'https://www.meteosync.com/event/a4f43af1-106e-4d86-b1c0-90c0f10b417a',
    'https://www.meteosync.com/organizer/31577e14-5240-434e-9c8e-fa92c6a99b25',
    'https://www.meteosync.com/attraction/attr_01KFFT0DFFVNWGMFAPV9CQYKGW'
  ];

  return (
    <section id="sharing" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>{t('landing.social.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.text }}>{t('landing.social.title')}</h2>
          <p className="text-xl max-w-4xl leading-relaxed" style={{ color: colors.textSecondary }}>
            {t('landing.social.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {['event', 'profile', 'attraction'].map((key, idx) => {
            const card = cards[key];
            return (
              <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl bg-white`} style={{ borderColor: colors.borderLight }}>
                <div className="text-3xl mb-10">{icons[idx]}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>{card.title}</h3>
                <p className="text-sm mb-10 leading-relaxed h-24 overflow-hidden" style={{ color: colors.textSecondary }}>{card.desc}</p>
                <div className="p-3 rounded-xl border text-[10px] font-bold truncate" style={{ backgroundColor: `${colors.primary}05`, borderColor: `${colors.primary}15`, color: colors.primary }}>
                  <a href={links[idx]} target="_blank" rel="noopener noreferrer">{card.link_text}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhoIsThisForSection = () => {
  const { t } = useTranslation();
  const cards = t('landing.who.cards', { returnObjects: true });
  const emojis = ['🎯', '🤝', '🏫', '🗺️'];

  return (
    <section id="for-who" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-bold tracking-widest text-[10px] uppercase mb-4 block" style={{ color: colors.primary }}>{t('landing.who.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>
            {t('landing.who.title_part1')} <br className="hidden md:block" /> {t('landing.who.title_part2')}
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed font-medium" style={{ color: colors.textSecondary }}>
            {t('landing.who.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="p-10 rounded-[2rem] border transition-all duration-300 flex flex-col items-center text-center bg-white hover:shadow-xl"
              style={{ borderColor: colors.borderLight }}
            >
              <div className="text-4xl mb-8">{emojis[idx]}</div>
              <h3 className="font-bold text-xl mb-4" style={{ color: colors.text }}>{item.title}</h3>
              <p className="text-sm leading-relaxed font-medium px-2" style={{ color: colors.textSecondary }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = t('landing.how.steps', { returnObjects: true });

  return (
    <section id="how" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20">
          <span className="font-bold tracking-widest text-[10px] uppercase mb-4 block" style={{ color: colors.primary }}>{t('landing.how.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>{t('landing.how.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: colors.textSecondary }}>
            {t('landing.how.desc')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-[32px] left-[12.5%] right-[12.5%] h-[1px] hidden md:block" style={{ backgroundColor: colors.border }}></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl mb-8 transition-transform hover:scale-105 border-[8px]" style={{ backgroundColor: colors.primary, borderColor: colors.background, boxShadow: `0 20px 25px -5px ${colors.primary}33` }}>
                  {idx + 1}
                </div>
                <h3 className="text-lg font-extrabold mb-4" style={{ color: colors.text }}>{step.title}</h3>
                <p className="text-sm leading-relaxed font-medium px-4" style={{ color: colors.textSecondary }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="py-24 text-white overflow-hidden relative" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
            {t('landing.cta.title_part1')} <br className="hidden sm:block" /> {t('landing.cta.title_part2')}
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t('landing.cta.desc')}
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            <a href="https://weathergo.meteosync.com/login" className="w-full px-8 py-5 rounded-2xl font-bold shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] no-underline" style={{ backgroundColor: colors.white, color: colors.secondary }}>
              <User className="w-5 h-5" /> {t('landing.cta.button')}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:pr-12 group mt-20 lg:mt-0 px-4 sm:px-0">
          {/* Browser Mockup */}
          <div className="bg-[#FAF9F6] rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-[320px] sm:w-[480px] aspect-[16/10] border border-white/5 relative transform rotate-2 group-hover:rotate-0 transition-transform duration-700 overflow-hidden">
            <div className="flex gap-1.5 mb-3 opacity-40 px-2">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-inner">
              <img
                src={isEn ? "/img/trip-planner/dashboard_en.png" : "/img/trip-planner/dashboard_zh.png"}
                alt="Dashboard"
              />
            </div>
          </div>

          {/* Phone Frame */}
          <div className="absolute top-[-35%] md:top-[-30%] right-[20%] md:right-20 z-30 transform translate-x-12 sm:translate-x-20 translate-y-8 sm:translate-y-10 group-hover:translate-x-8 sm:group-hover:translate-x-12 group-hover:translate-y-4 sm:group-hover:translate-y-5 transition-transform duration-700">
            <div className="w-[160px] md:w-[220px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-gray-800 overflow-hidden relative">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                <img
                  src={isEn ? "/img/trip-planner/attraction_map_en.PNG" : "/img/trip-planner/attraction_map_zh.PNG"}
                  className="w-full h-full object-cover"
                  alt="App Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { i18n, t } = useTranslation();

  return (
    <footer className="text-white pt-24 pb-12" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="text-white font-bold text-2xl tracking-tight">
              {t('app.name')}
            </div>
            <p className="text-lg max-w-sm leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('landing.footer.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/weathergo%E9%A5%97%E6%A8%82/id6753878511" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80">
                <img
                  src="/img/app_store_badge.svg"
                  alt="App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.wishingwork.weatherplanb" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80">
                <img
                  src={require('../../assets/images/TripPlanner/google_play_badge.png').default}
                  alt="Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">{t('landing.footer.org')}</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="https://weathergo.meteosync.com/login" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.become')}</a></li>
                <li><a href="https://weathergo.meteosync.com/login" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.dash')}</a></li>
                <li><a href="https://weathergo.meteosync.com/login" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.create')}</a></li>
                <li><a href="https://weathergo.meteosync.com/login" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.manage')}</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">{t('landing.footer.part')}</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.explore')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.planner')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.nearby')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.coupons')}</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">{t('landing.footer.comp')}</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="https://www.meteosync.com/" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.about')}</a></li>
                <li><a href="mailto:info@meteosync.com" className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.contact')}</a></li>
                <li><a href={`https://www.meteosync.com/trip-planner/${i18n.language === 'en' ? 'en' : 'zh'}/privacypolicies/`} className="hover:text-white transition-colors no-underline text-inherit">{t('landing.footer.links.privacy')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="font-medium text-sm mb-0" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {t('landing.footer.copyright')}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => i18n.changeLanguage('zh-Hant')}
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${i18n.language === 'zh-Hant' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
            >
              <Globe className="w-4 h-4" /> 繁體中文
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${i18n.language === 'en' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function TripPlannerWebsite() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FeatureArchitectureSection />
      <OrganizerDashboardSection />
      <SocialSharingSection />
      <WhoIsThisForSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}