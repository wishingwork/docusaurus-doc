import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  Calendar, MapPin, Users, Share2, Sun,
  CheckCircle, Globe, Navigation, ArrowRight, AppWindow,
  Briefcase, School, Play, Download, LayoutDashboard, CloudSun, Smartphone, Languages, Activity
} from 'lucide-react';
import '../../css/custom.css';
import Footer from '../../components/Layout/Footer';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set default language to Traditional Chinese if not already set
    if (i18n.language !== 'zh-Hant') {
      i18n.changeLanguage('zh-Hant');
    }
  }, [i18n]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-blue-900 font-bold text-xl no-underline hover:text-blue-600 transition-colors">
          <div className="bg-blue-600 p-1.5 rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
          </div>
          WeatherGoPlan
        </a>
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium list-none mb-0">
          <li><a href="#features" className="hover:text-blue-600 transition-colors no-underline">Features</a></li>
          <li><a href="#organizer" className="hover:text-blue-600 transition-colors no-underline">For Organizers</a></li>
          <li><a href="#for-who" className="hover:text-blue-600 transition-colors no-underline">Who It's For</a></li>
          <li><a href="#how" className="hover:text-blue-600 transition-colors no-underline">How It Works</a></li>
        </ul>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-2 py-1.5 hover:bg-gray-100 transition-colors">
            <Languages className="w-4 h-4 text-gray-400" />
            <select
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-sm font-semibold text-gray-600 border-none focus:ring-0 cursor-pointer outline-none"
            >
              <option value="en">EN</option>
              <option value="zh-Hant">繁中</option>
            </select>
          </div>
          <a href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors hidden sm:block no-underline">Sign In</a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-1 no-underline whitespace-nowrap">
            Become an Organizer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-white">
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full filter blur-[100px] opacity-40 z-0 animate-pulse"></div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="hero-content">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          Event & Trip Engagement Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
          Organize Better Events with <br />
          <span className="italic text-blue-600">Smart Trip Planning</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
          Create events, guide participants, discover attractions, and stay weather-ready with your branded event experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            Become an Organizer
          </button>
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2">
            <span className="text-sm">▶</span> Watch Demo
          </button>
        </div>

        <div className="flex items-center gap-12 border-t border-gray-100 pt-10">
          <div>
            <div className="text-3xl font-bold text-gray-900">10K+</div>
            <div className="text-sm text-gray-400 font-medium">App users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-400 font-medium">Events published</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">Free</div>
            <div className="text-sm text-gray-400 font-medium">To start</div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end pr-12 lg:pr-20">
        {/* Hosted Events Card */}
        <div className="absolute top-20 -left-10 md:-left-20 z-20 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-4 pb-2 border-b border-gray-50">
            <span>📅</span> Hosted Events
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-gray-700">親子瑜珈體驗班</span>
              <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold">Published</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-gray-700">週六跑跑趣</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold">Draft</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-gray-700">銀髮社區講座</span>
              <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold">Published</span>
            </div>
          </div>
        </div>

        {/* Phone Frame */}
        <div className="relative z-10 w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-gray-800 overflow-hidden">
          <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
            <div className="bg-blue-600 pt-10 pb-6 px-5 text-white">
              <div className="text-lg font-bold mb-4">Explore</div>
              <div className="flex justify-between items-center gap-1">
                {[
                  { d: 'MON', i: '☀️', t: '25°' },
                  { d: 'TUE', i: '🌧️', t: '22°' },
                  { d: 'WED', i: '⛅', t: '24°', active: true },
                  { d: 'THU', i: '☀️', t: '26°' },
                  { d: 'FRI', i: '🌧️', t: '21°' },
                ].map((w, idx) => (
                  <div key={idx} className={`flex flex-col items-center gap-1 p-1.5 rounded-lg transition-colors ${w.active ? 'bg-white/20 ring-1 ring-white/30' : ''}`}>
                    <span className="text-[10px] font-bold opacity-70">{w.d}</span>
                    <span className="text-sm">{w.i}</span>
                    <span className="text-[10px] font-bold">{w.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex border-b border-gray-100">
              <div className="flex-1 text-center py-3 text-xs font-bold text-blue-600 border-b-2 border-blue-600">All</div>
              <div className="flex-1 text-center py-3 text-xs font-bold text-gray-400">親子</div>
              <div className="flex-1 text-center py-3 text-xs font-bold text-gray-400">銀髮</div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-50">
                <div className="aspect-[16/9] bg-blue-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="1.5" opacity="0.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                </div>
                <div className="inline-block px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold text-white mb-2">親子</div>
                <div className="text-sm font-bold text-gray-800 mb-1 leading-tight">【台北】幼兒發展 | 中階課程</div>
                <div className="text-[10px] text-gray-400 mb-2">🕙 10:00 – 11:30 · 2 yrs – 2.5 yrs</div>
                <div className="text-xs font-bold text-blue-600">$ 500.00</div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: '🌳', name: '林本源園邸', type: 'Outdoor', dist: '0.2 km' },
                  { icon: '🏛️', name: '板橋慈惠宮', type: 'Indoor', dist: '0.3 km' },
                  { icon: '🍧', name: 'J 室冰鋪', type: 'IceShop', dist: '0.1 km' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">{a.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-800">{a.name}</div>
                      <div className="text-[10px] text-gray-400">{a.type}</div>
                    </div>
                    <div className="text-[10px] font-bold text-gray-400">{a.dist}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Share Card */}
        <div className="absolute bottom-10 -right-10 md:-right-20 z-20 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 w-56 transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="text-sm font-bold text-gray-800 mb-4 pb-2 border-b border-gray-50">
            🔗 Share Event
          </div>
          <div className="flex gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#06C755] flex items-center justify-center text-white text-xs font-bold">L</div>
            <div className="w-8 h-8 rounded-lg bg-[#E1306C] flex items-center justify-center text-white text-[10px] font-bold italic">ig</div>
            <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white text-xs font-bold">f</div>
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold">🔗</div>
          </div>
          <div className="text-[10px] text-gray-400 font-medium">wgp.app/event/yoga-kids</div>
        </div>
      </div>
    </div>
  </section>
);

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
    <section id="features" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Why Organizers Love It</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Built for organizers.<br />
            Loved by participants.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md ${benefit.isWide ? 'lg:col-span-2' : ''}`}
            >
              <div className={`w-12 h-12 ${benefit.bg} ${benefit.color} rounded-xl flex items-center justify-center mb-8`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureArchitectureSection = () => (
  <section id="organizer" className="py-24 bg-white overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      {/* 5.A Smart Trip Planning */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-green-100 rounded-full filter blur-3xl opacity-50"></div>
            <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 font-semibold tracking-wide text-sm border border-green-200 mb-4">Smart Trip Planning</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Intelligent Exploration</h2>
            <ul className="space-y-5">
              {['Destination search and discovery', 'Curated attraction recommendations', 'Indoor and outdoor activity suggestions', 'Weather-aware smart planning'].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <div className="bg-green-100 rounded-full p-1 mr-4 group-hover:bg-green-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-emerald-50 transform rotate-3 rounded-3xl shadow-lg transition-transform group-hover:rotate-6"></div>
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
              <MapPin className="w-40 h-40 text-green-200 drop-shadow-sm transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* 5.B Organizer Event Management */}
      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse lg:flex-row">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 transform -rotate-3 rounded-3xl shadow-lg transition-transform group-hover:-rotate-6"></div>
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
              <Calendar className="w-40 h-40 text-indigo-200 drop-shadow-sm transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-3xl opacity-50"></div>
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 font-semibold tracking-wide text-sm border border-indigo-200 mb-4">Organizer Event Management</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Powerful Organizer Dashboard</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">Manage events, organization profiles, and participant engagement from one central portal.</p>
            <ul className="space-y-5">
              {['Create and customize events effortlessly', 'Manage event schedules and itineraries', 'Maintain dynamic organization profiles', 'Publish responsive event landing pages', 'Monitor participant sharing and reach'].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <div className="bg-indigo-100 rounded-full p-1 mr-4 group-hover:bg-indigo-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5.C Share Anywhere */}
      <div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
            <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-700 font-semibold tracking-wide text-sm border border-purple-200 mb-4">Share Anywhere</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Built for Social Sharing</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">Expand your reach naturally through integrated sharing features.</p>
            <ul className="space-y-5">
              {['Every attraction has shareable magic links', 'Every event has a dedicated shareable web page', 'Organizations can promote themselves organically', 'Participants can seamlessly invite friends'].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <div className="bg-purple-100 rounded-full p-1 mr-4 group-hover:bg-purple-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-fuchsia-50 transform rotate-3 rounded-3xl shadow-lg transition-transform group-hover:rotate-6"></div>
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
              <Share2 className="w-40 h-40 text-purple-200 drop-shadow-sm transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoIsThisForSection = () => (
  <section id="for-who" className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-20">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Who Is This For?</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Built for organizers across industries to elevate their group experiences.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {[
          { title: 'Event Organizers', icon: Calendar, color: 'text-blue-400' },
          { title: 'School Programs', icon: School, color: 'text-green-400' },
          { title: 'Tour Hosts', icon: Navigation, color: 'text-indigo-400' },
          { title: 'Communities & Workshops', icon: Users, color: 'text-purple-400' },
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl text-center hover:bg-gray-700 hover:-translate-y-2 transition-all duration-300 shadow-lg">
            <item.icon className={`w-16 h-16 mx-auto mb-6 ${item.color} drop-shadow-md`} />
            <h3 className="font-bold text-xl">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section id="how" className="py-24 bg-gray-50 border-t border-gray-100 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-20 text-gray-900">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-10">
        {[
          { step: '01', title: 'Create Organization', desc: 'Set up your branded organization profile in minutes.' },
          { step: '02', title: 'Publish Event', desc: 'Add detailed itineraries, schedules, and destinations.' },
          { step: '03', title: 'Share with Participants', desc: 'Distribute beautiful event links directly to your audience.' },
          { step: '04', title: 'Explore Together', desc: 'Participants engage and navigate via our smart app.' },
        ].map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="text-7xl font-black text-gray-200 mb-6 group-hover:text-blue-100 transition-colors">{item.step}</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
            {idx < 3 && <ArrowRight className="hidden md:block absolute top-10 -right-8 text-gray-300 w-10 h-10 transform group-hover:translate-x-2 transition-transform" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to Transform Your Events?</h2>
      <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
        Join the platform that combines smart trip planning with powerful event management.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center">
          Become an Organizer <ArrowRight className="ml-3 w-6 h-6" />
        </button>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-lg border border-blue-500 hover:border-blue-400 transition-all text-lg flex items-center justify-center">
          <Download className="mr-3 w-6 h-6" /> Download App & Demo
        </button>
      </div>

      {/* Decorative Graphics */}
      <div className="mt-20 flex justify-center items-end gap-8 opacity-90 relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-600 to-transparent z-20"></div>
        <div className="bg-blue-800/60 p-6 rounded-t-2xl border border-blue-400/40 border-b-0 w-[400px] h-[250px] hidden md:flex flex-col backdrop-blur-md shadow-2xl relative z-10 transform translate-x-12 translate-y-4">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-blue-400/50"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400/50"></div>
          </div>
          <div className="w-full flex-1 border border-blue-400/30 rounded-lg bg-blue-900/60 flex flex-col items-center justify-center text-blue-300">
            <LayoutDashboard className="w-16 h-16 mb-4 opacity-50" />
            <span className="font-semibold text-lg">Dashboard</span>
          </div>
        </div>
        <div className="bg-blue-800/80 p-5 rounded-t-3xl border border-blue-400/50 border-b-0 w-[220px] h-[350px] flex flex-col backdrop-blur-md shadow-2xl relative z-30">
          <div className="w-16 h-1.5 bg-blue-400/40 rounded-full mx-auto mb-6"></div>
          <div className="w-full flex-1 border border-blue-400/30 rounded-2xl bg-blue-900/80 flex flex-col items-center justify-center text-blue-300 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.1))]"></div>
            <Smartphone className="w-16 h-16 mb-4 opacity-50" />
            <span className="font-semibold text-lg">Mobile App</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function TripPlannerWebsite() {
  return (
    <Layout
      title="Organize Better Events"
      description="Event and trip engagement platform for organizers and participants">
      <div className="trip-planner-redesign antialiased selection:bg-blue-200">
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <FeatureArchitectureSection />
        <WhoIsThisForSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </Layout>
  );
}