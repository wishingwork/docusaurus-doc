import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  Calendar, MapPin, Users, Share2, Sun,
  CheckCircle, Globe, Navigation, ArrowRight, AppWindow,
  Briefcase, School, Play, Download, LayoutDashboard, CloudSun, Smartphone, Languages, Activity,
  Search, Home, Plus, User, Link as LinkIcon, Clock, Upload, Trash2, Edit2, ExternalLink
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
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== 'zh-Hant') {
      i18n.changeLanguage('zh-Hant');
    }
  }, [i18n]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e0e0e0] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl no-underline transition-colors" style={{ color: colors.secondary }}>
          <div className="p-1.5 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
          </div>
          WeatherGoPlan
        </a>
        <ul className="hidden md:flex items-center gap-8 font-medium list-none mb-0" style={{ color: colors.text }}>
          <li><a href="#features" className="hover:opacity-80 transition-colors no-underline text-inherit">Features</a></li>
          <li><a href="#organizer" className="hover:opacity-80 transition-colors no-underline text-inherit">For Organizers</a></li>
          <li><a href="#sharing" className="hover:opacity-80 transition-colors no-underline text-inherit">Social Growth</a></li>
          <li><a href="#how" className="hover:opacity-80 transition-colors no-underline text-inherit">How It Works</a></li>
        </ul>
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2 border rounded-lg px-2 py-1.5 transition-colors" style={{ backgroundColor: colors.background, borderColor: colors.borderLight }}>
            <Languages className="w-4 h-4" style={{ color: colors.textSecondary }} />
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold border-none focus:ring-0 cursor-pointer outline-none"
              style={{ color: colors.text }}
            >
              <option value="en">EN</option>
              <option value="zh-Hant">繁中</option>
            </select>
          </div>
          <a href="#" className="font-medium transition-colors hidden lg:block no-underline" style={{ color: colors.text }}>Sign In</a>
          <a href="#" className="text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-1 no-underline whitespace-nowrap text-xs md:text-base" style={{ backgroundColor: colors.primary }}>
            Become <span className="hidden sm:inline">an Organizer</span> <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const { i18n } = useTranslation();
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
            Event & Trip Engagement Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight" style={{ color: colors.text }}>
            Organize Better Events with <br />
            <span className="italic" style={{ color: colors.primary }}>Smart Trip Planning</span>
          </h1>
          <p className="text-xl mb-10 max-w-xl leading-relaxed" style={{ color: colors.textSecondary }}>
            Create events, guide participants, discover attractions, and stay weather-ready with your branded event experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 group hover:opacity-90" style={{ backgroundColor: colors.primary, boxShadow: `0 20px 25px -5px ${colors.primary}33` }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              Become an Organizer
            </button>
            <button className="bg-white border hover:border-gray-300 px-8 py-4 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2" style={{ borderColor: colors.border, color: colors.text }}>
              <span className="text-sm">▶</span> Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12 border-t pt-10" style={{ borderColor: colors.borderLight }}>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>10K+</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: colors.textSecondary }}>App users</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>500+</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: colors.textSecondary }}>Events published</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>Free</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: colors.textSecondary }}>To start</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end lg:pr-20 mt-16 lg:mt-0">
          <div className="absolute top-10 -left-4 md:-left-20 z-20 bg-white rounded-2xl shadow-2xl p-4 md:p-5 border border-gray-100 w-48 md:w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-800 mb-3 md:mb-4 pb-2 border-b border-gray-50">
              <span>📅</span> Hosted Events
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-between gap-3 text-[10px]">
                <span className="font-semibold text-gray-700 truncate">親子瑜珈體驗班</span>
                <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold shrink-0">Published</span>
              </div>
              <div className="flex items-center justify-between gap-3 text-[10px]">
                <span className="font-semibold text-gray-700 truncate">追火車馬拉松</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold shrink-0">Draft</span>
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
              🔗 Share Event
            </div>
            <div className="flex gap-1.5 md:gap-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#06C755] flex items-center justify-center text-white text-[10px] md:text-xs font-bold">L</div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#E1306C] flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold italic">ig</div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white text-[10px] md:text-xs font-bold">f</div>
            </div>
            <div className="text-[8px] md:text-[10px] text-gray-400 font-medium truncate">wgp.app/event/yoga-kids</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Increase Participant Engagement',
      desc: 'Participants can easily explore attractions, event details, and nearby destinations — all within one app experience.',
      icon: Users,
      bg: 'bg-blue-50',
      color: 'text-blue-600',
    },
    {
      title: 'Simplify Event Coordination',
      desc: 'Centralize event details, destinations, schedules, and real-time updates in one place your whole team can manage.',
      icon: Calendar,
      bg: 'bg-emerald-50',
      color: 'text-emerald-600',
    },
    {
      title: 'Promote Your Organization',
      desc: 'Share a branded organization profile and event pages with a single link — perfect for social media bios and messaging apps.',
      icon: Users,
      bg: 'bg-indigo-50',
      color: 'text-indigo-600',
    },
    {
      title: 'Encourage Social Sharing',
      desc: 'Participants naturally share events, attractions, and experiences — turning every attendee into an ambassador for your brand.',
      icon: Share2,
      bg: 'bg-orange-50',
      color: 'text-orange-600',
    },
    {
      title: 'Weather-Aware Experiences',
      desc: 'Help participants adapt plans with smart, weather-sensitive attraction recommendations. Indoor options on rainy days, outdoor exploration when skies clear — the platform thinks ahead so your participants stay engaged.',
      icon: Activity,
      bg: 'bg-teal-50',
      color: 'text-teal-600',
      isWide: true,
    },
  ];

  return (
    <section id="features" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>Why Organizers Love It</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: colors.text }}>
            Built for organizers.<br />
            Loved by participants.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-md bg-white ${benefit.isWide ? 'lg:col-span-2' : ''}`}
              style={{ borderColor: colors.borderLight }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8`} style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>{benefit.title}</h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: colors.textSecondary }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureArchitectureSection = () => {
  const [activeTab, setActiveTab] = useState('A');

  const tabs = [
    { id: 'A', label: 'A. Smart Trip Planning' },
    { id: 'B', label: 'B. Event Management' },
    { id: 'C', label: 'C. Share Anywhere' }
  ];

  const content = {
    A: {
      features: [
        { title: 'Destination search', desc: 'Search any area by region, district, or name to surface nearby attractions and businesses.', icon: Search },
        { title: 'Attraction recommendations', desc: 'Curated locations — parks, museums, cafés, cultural sites — shown with distance and category tags.', icon: MapPin },
        { title: 'Indoor / outdoor suggestions', desc: 'Clearly labeled indoor and outdoor options so participants can plan around any weather condition.', icon: Home },
        { title: 'Weather-aware planning', desc: 'Trip suggestions dynamically shift based on forecast — rainy days surface indoor options automatically.', icon: Activity },
      ],
      visual: (
        <div className="bg-[#11253E] rounded-3xl p-6 border border-white/5 h-full">
          <div className="text-[10px] text-gray-400 font-bold mb-4 uppercase tracking-wider">Trip Planner — Participant View</div>
          <div className="bg-[#0A1A2F] rounded-xl p-4 aspect-[16/10] relative mb-4 border border-white/5 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0:10px_rgba(59,130,246,0.5)]"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0:10px_rgba(16,185,129,0.5)]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-rose-500 rounded-full shadow-[0_0:10px_rgba(244,63,94,0.5)]"></div>
            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-[10px] border border-white/10 text-gray-900 font-bold">搜尋此區域</div>
          </div>
          <div className="text-[10px] text-gray-400 font-bold uppercase mb-3">附近景點</div>
          <div className="space-y-2">
            {[
              { icon: '🍧', name: 'J 室冰鋪', type: 'IceShop · 0.1 km', badge: 'Indoor' },
              { icon: '🌳', name: '林本源園邸', type: 'Outdoor · 0.2 km', badge: 'Outdoor', badgeColor: 'bg-amber-400/20 text-amber-400' },
              { icon: '🏛️', name: '板橋慈惠宮', type: 'Indoor · 0.3 km', badge: 'Indoor' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-[#0A1A2F] p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-lg">{item.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-white">{item.name}</div>
                    <div className="text-[9px] text-gray-500">{item.type}</div>
                  </div>
                </div>
                <div className={`text-[9px] font-bold px-2 py-0.5 rounded ${item.badgeColor || 'bg-emerald-400/20 text-emerald-400'}`}>{item.badge}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    B: {
      features: [
        { title: 'Create events', desc: 'Add title, date, time, location, description, pricing, age group, and category.', icon: Plus },
        { title: 'Manage schedules', desc: 'Control event series, recurring dates, and session-based programs — all from one dashboard.', icon: Calendar },
        { title: 'Manage organization profile', desc: 'Set name, logo, contact info, and unique ID — your branded organizer page, public and shareable.', icon: User },
        { title: 'Publish & share', desc: 'One-click publish puts your event live on the Explore feed, map, and a shareable link.', icon: Upload },
      ],
      visual: (
        <div className="bg-[#11253E] rounded-3xl p-6 border border-white/5 h-full text-white">
          <div className="text-[10px] text-gray-400 font-bold mb-6 uppercase tracking-wider">Organizer dashboard — event list</div>
          <div className="bg-[#0A1A2F] rounded-2xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
              <div className="text-xs font-bold">Hosted Events</div>
              <div className="bg-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-md">+ Add Event</div>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { name: '親子瑜珈體驗班', date: '04/19/2026 · 10:00 AM', status: 'Published', pub: true },
                { name: '追火車馬拉松', date: '04/26/2026 · 06:00 AM', status: 'Draft' },
                { name: '銀髮社區健康講座', date: '05/03/2026 · 09:30 AM', status: 'Published', pub: true },
                { name: '週六親子繪本課', date: '05/10/2026 · 10:00 AM', status: 'Draft', active: true },
              ].map((event, i) => (
                <div key={i} className={`p-4 flex items-center justify-between ${event.active ? 'bg-white/10' : ''}`}>
                  <div>
                    <div className="text-xs font-bold mb-1">{event.name}</div>
                    <div className="text-[9px] text-gray-500">📅 {event.date}</div>
                  </div>
                  <div className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${event.pub ? 'bg-emerald-400/20 text-emerald-400' : 'bg-amber-400/20 text-amber-400'}`}>{event.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    C: {
      features: [
        { title: 'Shareable event pages', desc: 'Every event gets a unique URL with title, cover image, details, and booking — ready to share anywhere.', icon: LinkIcon },
        { title: 'Organization profile links', desc: 'Share your entire organization page — all events, contact info, and branding — with one link.', icon: User },
        { title: 'Attraction shares', desc: 'Participants share interesting attractions they find — driving discovery and word-of-mouth.', icon: MapPin },
        { title: 'Multi-platform sharing', desc: 'LINE, Instagram, Facebook, and direct link — every share channel covered out of the box.', icon: Share2 },
      ],
      visual: (
        <div className="relative h-full w-full min-h-[600px] flex items-center justify-center p-6 bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10" id="feature-sharing-flow">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[80px] -ml-32 -mb-32"></div>

          {/* Main Title Overlay (Mobile/Tablet Friendly) */}
          <div className="absolute top-8 left-8 right-8 z-20 md:max-w-[300px]">
            <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight text-white">分享活動・景點・主辦單位</h3>
            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-blue-400">讓更多人發現你的精彩！</h3>
            <p className="text-[10px] text-gray-400 leading-relaxed hidden sm:block">活動主辦必備的推廣利器，一次掌握，輕鬆分享，擴大影響力</p>
          </div>

          {/* Central Phone Mockup */}
          <div className="relative z-10 w-[220px] h-[450px] hidden md:block lg:block md:w-[260px] md:h-[530px] bg-gray-900 rounded-[2.5rem] p-2 border-[6px] border-gray-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] transform translate-y-8 md:translate-y-12">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
              <img src="/img/trip-planner/attraction_map_zh.PNG" className="w-full h-full object-cover" alt="Map View" />
              {/* Overlay Marker Detail */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-xs font-bold text-gray-800">國定古蹟林本源園邸</div>
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                </div>
                <div className="text-[8px] text-gray-400">現存超過百年的林本源園邸...</div>
              </div>
            </div>
          </div>

          {/* Floating Cards - Hidden on very small screens, responsive positions */}

          {/* Top Left: Event Preview Card */}
          <div className="absolute top-[25%] left-[5%] md:left-[5%] lg:left-[5%] z-20 w-44 md:w-52 bg-white rounded-2xl shadow-2xl p-2.5 border border-gray-100 rotate-[-3deg] hover:rotate-0 transition-all duration-500 group">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[9px] font-bold text-gray-800">分享活動</span>
            </div>
            <div className="rounded-xl overflow-hidden mb-2 aspect-video relative" id="event-image">
              <img src="/img/trip-planner/event_detail_share.PNG" className="w-full h-full object-cover" alt="Event" />
              <div className="absolute top-1.5 left-1.5 bg-blue-600 text-[6px] text-white px-1.5 py-0.5 rounded font-bold uppercase">Class</div>
            </div>
            <div className="text-[9px] font-bold text-gray-900 leading-tight mb-1 truncate">【台北】幼兒發展 | 高階-繽紛色彩世界</div>
            <div className="flex items-center gap-1 text-[7px] text-gray-400 mb-2">
              <Clock className="w-2.5 h-2.5" /> 2026/06/13 2:00 PM
            </div>
            <div className="flex gap-1 justify-end pt-1 border-t border-gray-50">
              {['bg-[#06C755]', 'bg-[#1877F2]', 'bg-[#E1306C]', 'bg-gray-200'].map((c, i) => (
                <div key={i} className={`w-4 h-4 rounded-full ${c} flex items-center justify-center text-[6px] text-white font-bold`}>{i === 3 ? '🔗' : ''}</div>
              ))}
            </div>
          </div>

          {/* Bottom Left: Organizer Profile Card */}
          <div className="absolute bottom-[15%] left-[5%] md:left-[5%] lg:left-[5%] z-20 w-40 md:w-48 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100 rotate-[2deg] hover:rotate-0 transition-all duration-500">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wider">分享主辦者</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-sm">
                <Home className="w-4 h-4" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="text-[9px] font-bold text-gray-900 truncate">我好你好親子共好空間</div>
                <div className="text-[7px] text-gray-400 truncate tracking-tight">heart@cwlf.org.tw</div>
              </div>
            </div>
            <div className="flex gap-1 justify-center pt-2 border-t border-gray-50">
              <div className="bg-[#06C755]/10 text-[#06C755] text-[6px] px-1.5 py-0.5 rounded font-bold">LINE 分享</div>
              <div className="bg-blue-600/10 text-blue-600 text-[6px] px-1.5 py-0.5 rounded font-bold">FB 粉絲專頁</div>
            </div>
          </div>

          {/* Top Right: Space Preview Card */}
          <div className="absolute top-[25%] right-[5%] md:right-[5%] lg:right-[5%] z-20 w-44 md:w-48 bg-white rounded-2xl shadow-2xl p-2.5 border border-gray-100 rotate-[4deg] hover:rotate-0 transition-all duration-500">
            <div className="text-[9px] font-bold text-gray-400 mb-2 uppercase tracking-tight">精選空間預覽</div>
            <div className="rounded-xl overflow-hidden mb-2 bg-gray-100 aspect-[4/3]" id="space-image">
              <img src="/img/trip-planner/organizer_detail_share.PNG" className="w-full h-full object-cover" alt="Space" />
            </div>
            <div className="text-[9px] font-bold text-gray-900 mb-1 leading-tight">我好，你好！親子共好空間</div>
            <div className="flex items-center gap-1 text-[7px] text-gray-400">
              <MapPin className="w-2.5 h-2.5" /> 台北市中山區民東路二段...
            </div>
          </div>

          {/* Bottom Right: Attraction Share Card */}
          <div className="absolute bottom-[20%] right-[5%] md:right-[5%] lg:right-[5%] z-20 w-44 md:w-52 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-[9px] font-bold text-gray-800 uppercase">分享景點</span>
            </div>
            <p className="text-[8px] text-gray-500 leading-normal mb-3">現存超過百年的林本源園邸，為高晴明精景展...</p>
            <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-[8px] font-bold text-gray-800">林本源園邸</div>
                <div className="text-[6px] text-gray-400 tracking-tighter uppercase">National Historic Site</div>
              </div>
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Share2 className="w-2 h-2 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="features-arch" className="py-24 text-white scroll-mt-20" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.accent }}>Feature architecture</span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Everything your event needs</h2>
          <p className="text-xl max-w-4xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Four interconnected systems — trip planning, event management, social sharing, and weather intelligence — working together seamlessly.
          </p>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 bg-white/5 p-1 rounded-2xl md:inline-flex border border-white/5 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                ? 'bg-white text-[#005FA0] shadow-xl'
                : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            {content[activeTab].features.map((feature, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7">
            {content[activeTab].visual}
          </div>
        </div>
      </div>
    </section>
  );
};

const OrganizerDashboardSection = () => (
  <section id="organizer" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.white }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>Organizer tools</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.text }}>Powerful Organizer Dashboard</h2>
        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: colors.textSecondary }}>Manage events, organization profiles, and participant engagement from one central portal.</p>
      </div>

      <div className="rounded-[2.5rem] p-4 md:p-8 border shadow-2xl mb-16 overflow-hidden" style={{ backgroundColor: colors.background, borderColor: colors.borderLight }}>
        {/* Mockup Header */}
        <div className="border-b p-4 md:px-6 md:py-3 flex items-center justify-between rounded-t-2xl shadow-sm bg-white" style={{ borderColor: colors.borderLight }}>
          <div className="flex items-center gap-8">
            <div className="font-black text-sm tracking-tight" style={{ color: colors.primary }}>WeatherGoPlan</div>
            <div className="hidden md:flex items-center gap-1 bg-gray-50 px-3 py-1 rounded text-[10px] text-gray-400 font-bold border border-gray-100">
              Dashboard <span className="text-gray-300">›</span> Organizer
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>週</div>
            <div className="hidden sm:block text-xs font-bold" style={{ color: colors.text }}>週六跑跑團 <span className="ml-1 font-normal" style={{ color: colors.textSecondary }}>Organizer</span></div>
          </div>
        </div>
        {/* Mockup Body */}
        <div className="flex min-h-[500px] bg-white rounded-b-2xl border-x border-b overflow-hidden" style={{ borderColor: colors.borderLight }}>
          {/* Sidebar */}
          <div className="w-48 border-r hidden md:block py-6" style={{ backgroundColor: `${colors.background}80`, borderColor: colors.borderLight }}>
            <div className="space-y-1 px-3">
              {[
                { label: 'Dashboard', icon: LayoutDashboard },
                { label: 'Merchants', icon: Home },
                { label: 'Organizers', icon: User, active: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${item.active ? 'text-white' : ''}`} style={{ backgroundColor: item.active ? colors.primary : 'transparent', color: item.active ? 'white' : colors.textSecondary }}>
                  <item.icon className="w-4 h-4" /> {item.label}
                </div>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8 overflow-x-auto bg-white">
            <div className="text-[10px] font-bold mb-6 uppercase tracking-wider" style={{ color: colors.textSecondary }}>Dashboard › Organizer › 週六跑跑團</div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="text-2xl font-extrabold" style={{ color: colors.text }}>週六跑跑團</h3>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <button className="border px-4 py-2 rounded-xl text-xs font-bold transition-all hover:bg-gray-50" style={{ backgroundColor: colors.background, borderColor: colors.border, color: colors.text }}>+ Add Event</button>
                <button className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg flex items-center gap-2 hover:opacity-90" style={{ backgroundColor: colors.primary, boxShadow: `0 10px 15px -3px ${colors.primary}33` }}><Edit2 className="w-3.5 h-3.5" /> Edit Organizer</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { val: '4', label: 'Total events', color: colors.primary },
                { val: '3', label: 'Published', color: '#10B981' },
                { val: '1', label: 'Draft', color: colors.accent },
              ].map((stat, i) => (
                <div key={i} className="border p-6 rounded-2xl" style={{ backgroundColor: `${colors.background}50`, borderColor: colors.borderLight }}>
                  <div className={`text-3xl md:text-4xl font-black mb-1`} style={{ color: stat.color }}>{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: colors.textSecondary }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="border rounded-2xl overflow-hidden" style={{ borderColor: colors.borderLight }}>
              <table className="w-full text-left border-collapse">
                <thead className="text-[10px] uppercase font-bold border-b" style={{ backgroundColor: `${colors.background}80`, color: colors.textSecondary, borderColor: colors.borderLight }}>
                  <tr>
                    <th className="px-6 py-4">Event name</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-xs" style={{ borderColor: colors.borderLight }}>
                  {[
                    { name: '親子瑜珈體驗班', date: '04/19/2026 · 10:00 AM', status: 'Published', pub: true, cat: '親子' },
                    { name: '追火車馬拉松', date: '04/26/2026 · 06:00 AM', status: 'Draft', cat: 'Festival' },
                    { name: '銀髮社區健康講座', date: '05/03/2026 · 09:30 AM', status: 'Published', pub: true, cat: '銀髮' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 font-bold" style={{ color: colors.text }}>{row.name}</td>
                      <td className="px-6 py-5" style={{ color: colors.textSecondary }}>{row.date}</td>
                      <td className="px-6 py-5">
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[10px]`} style={{ backgroundColor: row.pub ? '#10B98120' : `${colors.accent}20`, color: row.pub ? '#10B981' : '#B45309' }}>{row.status}</span>
                      </td>
                      <td className="px-6 py-5" style={{ color: colors.textSecondary }}>{row.cat}</td>
                      <td className="px-6 py-5 text-right"><span className="font-bold cursor-pointer flex items-center justify-end gap-1" style={{ color: colors.primary }}>View <Edit2 className="w-3 h-3" /></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Event creation & publishing',
            desc: 'Build event pages with all the details participants need — and publish to the live app in one click.',
            items: ['Add title, date, time, duration', 'Set price and audience age group', 'Attach location & category', 'Draft → Publish with one click']
          },
          {
            title: 'Organization profile management',
            desc: 'Your public-facing organizer page — manage branding, contact info, and event listings all in one place.',
            items: ['Set unique organizer ID & logo', 'Person or Organization type', 'Contact email and phone', 'All hosted events visible on profile']
          },
          {
            title: 'Participant sharing & reach',
            desc: 'Every event page is shareable — to LINE groups, Instagram, or a direct link for your newsletter.',
            items: ['Unique shareable event URL', 'Book Now CTA on every page', 'Participants invite friends via app', 'Organizer profile link shareable']
          },
          {
            title: 'Schedule & series management',
            desc: 'Run weekly classes or multi-session programs? Manage them as a series without recreating from scratch.',
            items: ['Multi-date event series support', 'Session duration & timing control', 'Event status tracking', 'Edit events at any time']
          },
        ].map((card, idx) => (
          <div key={idx} className="p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 bg-white" style={{ borderColor: colors.borderLight }}>
            <h4 className="text-xl font-bold mb-4 leading-tight" style={{ color: colors.text }}>{card.title}</h4>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>{card.desc}</p>
            <ul className="space-y-4">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#10B98115', color: '#10B981' }}>
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: colors.text }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialSharingSection = () => (
  <section id="sharing" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="font-bold tracking-widest text-xs uppercase mb-4 block" style={{ color: colors.primary }}>Viral growth, built in</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: colors.text }}>Built for Social Sharing</h2>
        <p className="text-xl max-w-4xl leading-relaxed" style={{ color: colors.textSecondary }}>
          Every attraction, event, and organization page has a shareable link — turning every participant into a natural promoter.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: '🎟️',
            title: 'Every event is shareable',
            desc: 'Each event has a clean, mobile-optimized page with details, pricing, and a Book Now button — ready to share via LINE, Instagram, or any messaging app.',
            link: 'wgp.app/event/baby-yoga-taichung',
            active: true
          },
          {
            icon: '🏢',
            title: 'Organizations get a profile link',
            desc: 'Your branded organizer page lists all your events in one place — perfect for bios, newsletters, and word-of-mouth referrals.',
            link: 'wgp.app/org/我好你好親子空間'
          },
          {
            icon: '📍',
            title: 'Attractions are also shareable',
            desc: 'Participants discovering a great café or park can share it directly with friends — keeping your event top-of-mind even after it ends.',
            link: 'wgp.app/place/lin-ben-yuan-garden'
          },
        ].map((card, idx) => (
          <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl bg-white`} style={{ borderColor: card.active ? `${colors.primary}50` : colors.borderLight, boxShadow: card.active ? `0 0 0 4px ${colors.primary}10` : 'none' }}>
            <div className="text-3xl mb-10">{card.icon}</div>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>{card.title}</h3>
            <p className="text-sm mb-10 leading-relaxed h-24 overflow-hidden" style={{ color: colors.textSecondary }}>{card.desc}</p>
            <div className="p-3 rounded-xl border text-[10px] font-bold truncate" style={{ backgroundColor: `${colors.primary}05`, borderColor: `${colors.primary}15`, color: colors.primary }}>
              {card.link}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoIsThisForSection = () => (
  <section id="for-who" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.white }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="font-bold tracking-widest text-[10px] uppercase mb-4 block" style={{ color: colors.primary }}>WHO IT'S FOR</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>Made for every kind <br className="hidden md:block" /> of event organizer</h2>
        <p className="text-lg max-w-2xl leading-relaxed font-medium" style={{ color: colors.textSecondary }}>
          Whether you run a weekly class, a school program, or a community workshop — WeatherGoPlan was built for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            emoji: '🎯',
            title: 'Event Organizer',
            desc: 'Fitness events, marathons, community activities, adult classes'
          },
          {
            emoji: '🏫',
            title: 'School Program',
            desc: 'Parent-child classes, early childhood programs, school excursions',
            active: true
          },
          {
            emoji: '🗺️',
            title: 'Tour Host',
            desc: 'Cultural tours, walking groups, guided experiences, travel itineraries'
          },
          {
            emoji: '🤝',
            title: 'Communities & Workshops',
            desc: 'Senior groups, craft meetups, hobbyist clubs, neighborhood programs'
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`p-10 rounded-[2rem] border transition-all duration-300 flex flex-col items-center text-center bg-white ${item.active
              ? 'shadow-2xl scale-[1.02] z-10'
              : 'hover:shadow-xl'
              }`}
            style={{
              borderColor: item.active ? colors.secondary : colors.borderLight,
              boxShadow: item.active ? `0 25px 50px -12px ${colors.secondary}33` : 'none'
            }}
          >
            <div className="text-4xl mb-8">{item.emoji}</div>
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

const HowItWorksSection = () => {
  const steps = [
    {
      title: 'Create organization',
      desc: 'Set up your organizer profile with name, logo, type, and contact info. Your public page is ready instantly.'
    },
    {
      title: 'Publish your event',
      desc: 'Fill in event details — date, location, price, audience — and hit publish. It appears on the map and Explore feed.'
    },
    {
      title: 'Share with participants',
      desc: 'Share your event page link via LINE, IG, or any channel. Participants tap through to book instantly.'
    },
    {
      title: 'Participants explore',
      desc: 'Attendees open the app, discover your event in context with nearby attractions and weather-smart suggestions.'
    },
  ];

  return (
    <section id="how" className="py-24 scroll-mt-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20">
          <span className="font-bold tracking-widest text-[10px] uppercase mb-4 block" style={{ color: colors.primary }}>HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>From signup to participants exploring</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: colors.textSecondary }}>
            Four simple steps to take your event from idea to engaged community.
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

const CTASection = () => (
  <section className="py-24 text-white overflow-hidden relative" style={{ backgroundColor: colors.secondary }}>
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">Ready to run better <br className="hidden sm:block" /> events?</h2>
        <p className="text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Join organizers across Taiwan using WeatherGoPlan to create events, engage participants, and grow their communities — for free.
        </p>

        <div className="flex flex-col gap-4 max-w-md">
          <button className="w-full px-8 py-5 rounded-2xl font-bold shadow-2xl transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]" style={{ backgroundColor: colors.white, color: colors.secondary }}>
            <User className="w-5 h-5" /> Become an Organizer — it's free
          </button>

          <button className="w-full bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 hover:bg-white/10">
            <Play className="w-5 h-5" /> Watch demo
          </button>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-3 hover:bg-white/10">
              <Smartphone className="w-4 h-4" /> App Store
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-3 hover:bg-white/10">
              <Play className="w-4 h-4" /> Google Play
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end lg:pr-12 group mt-20 lg:mt-0 px-4 sm:px-0">
        {/* Browser Mockup */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-[280px] sm:w-[420px] aspect-[4/3] border border-white/5 relative transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
          <div className="flex gap-1.5 mb-6 opacity-40">
            <div className="w-2 h-2 rounded-full bg-rose-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-4 bg-gray-200/80 rounded-full w-4/5"></div>
              <div className="h-4 bg-gray-900/80 rounded-full w-full"></div>
            </div>
            <div className="w-full h-8 bg-gray-200/50 rounded-lg"></div>
            <div className="w-full h-8 bg-gray-200/50 rounded-lg"></div>
            <div className="w-full h-8 bg-gray-200/50 rounded-lg"></div>
            <div className="w-1/2 h-10 bg-blue-600 rounded-xl mt-6"></div>
          </div>
        </div>

        {/* Phone Frame */}
        <div className="absolute top-10 md:top-20 right-0 z-30 transform translate-x-12 sm:translate-x-20 translate-y-8 sm:translate-y-10 group-hover:translate-x-8 sm:group-hover:translate-x-12 group-hover:translate-y-4 sm:group-hover:translate-y-5 transition-transform duration-700">
          <div className="w-[180px] md:w-[240px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-gray-800 overflow-hidden relative">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
              <div className="bg-blue-600 pt-6 pb-3 px-3 text-white text-center">
                <div className="text-[10px] font-bold mb-3 uppercase tracking-wider">Explore</div>
                <div className="flex justify-between items-center gap-1 px-1">
                  {['25°', '20°', '23°', '26°', '19°'].map((t, idx) => (
                    <div key={idx} className="flex flex-col items-center opacity-70">
                      <Sun className="w-2 h-2 mb-0.5" />
                      <span className="text-[7px] font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 flex-1 space-y-3">
                <div className="aspect-[16/10] bg-blue-100/50 rounded-xl"></div>
                <div className="text-[9px] font-bold text-gray-800 leading-tight">親子課程 · 週四上午</div>
                <div className="text-[8px] text-gray-500 font-medium">10:00 - 11:30 · $500</div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="text-[7px] font-bold text-gray-400 mb-2 uppercase">附近景點</div>
                  <div className="space-y-1.5">
                    {[
                      { name: '林本源園邸', color: 'text-green-500' },
                      { name: 'J 室冰鋪', color: 'text-blue-500' }
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[8px] font-bold text-gray-800 flex items-center gap-1.5">
                          <span className={loc.color}>●</span> {loc.name}
                        </span>
                        <span className="text-[7px] text-gray-400">0.{i + 1}km</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="text-white pt-24 pb-12" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="text-white font-bold text-2xl tracking-tight">
              WeatherGoPlan
            </div>
            <p className="text-lg max-w-sm leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Event and trip engagement platform for organizers and participants. Discover, plan, and share experiences — weather-aware and location-smart.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-all border border-white/10">
                <Smartphone className="w-5 h-5 opacity-70" /> App Store
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 transition-all border border-white/10">
                <Play className="w-5 h-5 fill-white" /> Google Play
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">For Organizers</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Become an Organizer</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Organizer Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Create Event</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Manage Organization</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">For Participants</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Download App</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Explore Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Trip Planner</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Nearby Attractions</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Coupons</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Company</h4>
              <ul className="space-y-4 font-medium list-none p-0 m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors no-underline text-inherit">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="font-medium text-sm mb-0" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 WeatherGoPlan · MeteoSync. All rights reserved.
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
    <div className="min-h-screen bg-white">
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