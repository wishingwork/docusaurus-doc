import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  Calendar, MapPin, Users, Share2, Sun,
  CheckCircle, Globe, Navigation, ArrowRight, AppWindow,
  Briefcase, School, Play, Download, LayoutDashboard, CloudSun, Smartphone, Languages, Activity,
  Search, Home, Plus, User, Link as LinkIcon, Clock, Upload, Trash2, Edit2, ExternalLink
} from 'lucide-react';
import '../../css/custom.css';
import Footer from '../../components/Layout/Footer';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
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
          <li><a href="#sharing" className="hover:text-blue-600 transition-colors no-underline">Social Growth</a></li>
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
              <span className="font-semibold text-gray-700">追火車馬拉松</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold">Draft</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-gray-700">銀髮社區講座</span>
              <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-bold">Published</span>
            </div>
          </div>
        </div>

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

const FeatureArchitectureSection = () => {
  const [activeTab, setActiveTab] = useState('A');

  const tabs = [
    { id: 'A', label: 'A. Smart Trip Planning' },
    { id: 'B', label: 'B. Event Management' },
    { id: 'C', label: 'C. Share Anywhere' },
    { id: 'D', label: 'D. Weather Intelligence' },
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
        <div className="bg-[#11253E] rounded-3xl p-8 border border-white/5 h-full text-white">
          <div className="text-[10px] text-gray-400 font-bold mb-8 uppercase tracking-wider">Sharing flows</div>
          <div className="space-y-4">
            {[
              { name: 'Share via LINE', desc: 'Send event to contacts & groups', icon: 'L', color: 'bg-[#06C755]' },
              { name: 'Post to Instagram', desc: 'Story or feed with event card', icon: <Sun className="w-3.5 h-3.5" />, color: 'bg-[#E1306C]' },
              { name: 'Copy event link', desc: 'wgp.app/event/yoga-kids-taipei', icon: <LinkIcon className="w-3.5 h-3.5" />, color: 'bg-white/15' },
              { name: 'Organizer profile link', desc: 'wgp.app/org/我好你好空間', icon: <User className="w-3.5 h-3.5" />, color: 'bg-white/15' },
            ].map((flow, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#0A1A2F] p-4 rounded-2xl border border-white/5">
                <div className={`w-10 h-10 rounded-xl ${flow.color} flex items-center justify-center font-bold text-sm`}>{flow.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-bold">{flow.name}</div>
                  <div className="text-[10px] text-gray-500">{flow.desc}</div>
                </div>
                <div className="text-gray-500 font-serif">›</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    D: {
      features: [
        { title: 'Live weather on every screen', desc: 'Current conditions and 5-day forecast shown on the Explore feed, event details, and trip planner.', icon: CloudSun },
        { title: 'Smart indoor/outdoor routing', desc: 'Rainy forecast? The app prioritizes indoor venues. Sunny? Outdoor parks and trails rise to the top.', icon: Home },
        { title: 'Event-day weather context', desc: 'Participants see what to expect on your event day — temperature, conditions, and what to bring.', icon: Activity },
        { title: 'Forecast-driven planning', desc: 'Organizers and participants can plan ahead with a week-ahead view integrated into every event and trip card.', icon: Clock },
      ],
      visual: (
        <div className="bg-[#11253E] rounded-3xl p-6 border border-white/5 h-full text-white">
          <div className="text-[10px] text-gray-400 font-bold mb-6 uppercase tracking-wider">Weather-smart recommendations</div>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {[
              { d: 'Mon', i: '☀️', t: '25°' },
              { d: 'Tue', i: '🌧️', t: '20°', rec: true },
              { d: 'Wed', i: '⛅', t: '23°' },
              { d: 'Thu', i: '☀️', t: '26°' },
              { d: 'Fri', i: '🌧️', t: '19°' },
            ].map((day, i) => (
              <div key={i} className={`py-3 rounded-xl flex flex-col items-center border ${day.rec ? 'bg-emerald-400/20 border-emerald-400/30' : 'bg-[#0A1A2F] border-white/5'}`}>
                <div className="text-[9px] text-gray-400 mb-2">{day.d}</div>
                <div className="text-sm mb-1">{day.i}</div>
                <div className="text-[10px] font-bold">{day.t}</div>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-emerald-400 font-bold mb-4">Tuesday (rainy): Indoor recommendations</div>
          <div className="space-y-3">
             {[
               { icon: '🏛️', name: '板橋慈惠宮', type: 'Indoor · 0.3 km' },
               { icon: '🍧', name: 'J 室冰鋪', type: 'IceShop · 0.1 km' },
               { icon: '🦋', name: '兜長的鍬大 昆蟲館', type: 'Indoor · 0.2 km' },
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between bg-[#0A1A2F] p-3 rounded-xl border border-white/5">
                 <div className="flex items-center gap-3">
                   <div className="text-base">{item.icon}</div>
                   <div>
                     <div className="text-xs font-bold">{item.name}</div>
                     <div className="text-[9px] text-gray-500">{item.type}</div>
                   </div>
                 </div>
                 <div className="text-[8px] font-bold text-emerald-400 px-2 py-0.5 rounded border border-emerald-400/30">Recommended</div>
               </div>
             ))}
          </div>
        </div>
      )
    }
  };

  return (
    <section id="features-arch" className="py-24 bg-[#05192D] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4 block">Feature architecture</span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Everything your event needs</h2>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
            Four interconnected systems — trip planning, event management, social sharing, and weather intelligence — working together seamlessly.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 bg-white/5 p-1 rounded-2xl inline-flex border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-[#05192D] shadow-xl'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
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
  <section id="organizer" className="py-24 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Organizer dashboard</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Powerful Organizer Dashboard</h2>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">Manage events, organization profiles, and participant engagement from one central portal.</p>
      </div>

      <div className="bg-[#F8F9FA] rounded-[2.5rem] p-4 md:p-8 border border-gray-100 shadow-2xl mb-16 overflow-hidden">
         {/* Mockup Header */}
         <div className="bg-white border-b border-gray-100 p-4 md:px-6 md:py-3 flex items-center justify-between rounded-t-2xl shadow-sm">
            <div className="flex items-center gap-8">
               <div className="text-blue-600 font-black text-sm tracking-tight">WeatherGoPlan</div>
               <div className="hidden md:flex items-center gap-1 bg-gray-50 px-3 py-1 rounded text-[10px] text-gray-400 font-bold border border-gray-100">
                 Dashboard <span className="text-gray-300">›</span> Organizer
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">週</div>
               <div className="hidden sm:block text-xs font-bold text-gray-800">週六跑跑團 <span className="text-gray-400 ml-1 font-normal">Organizer</span></div>
            </div>
         </div>
         {/* Mockup Body */}
         <div className="flex min-h-[500px] bg-white rounded-b-2xl border-x border-b border-gray-100 overflow-hidden">
            {/* Sidebar */}
            <div className="w-48 bg-gray-50/50 border-r border-gray-100 hidden md:block py-6">
               <div className="space-y-1 px-3">
                  {[
                    { label: 'Dashboard', icon: LayoutDashboard },
                    { label: 'Merchants', icon: Home },
                    { label: 'Organizers', icon: User, active: true },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}>
                      <item.icon className="w-4 h-4" /> {item.label}
                    </div>
                  ))}
               </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8 overflow-x-auto">
               <div className="text-[10px] text-gray-400 font-bold mb-6 uppercase tracking-wider">Dashboard › Organizer › 週六跑跑團</div>
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-2xl font-extrabold text-gray-900">週六跑跑團</h3>
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <button className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">+ Add Event</button>
                    <button className="bg-blue-600 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg shadow-blue-200 flex items-center gap-2"><Edit2 className="w-3.5 h-3.5" /> Edit Organizer</button>
                  </div>
               </div>
               
               <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { val: '4', label: 'Total events', color: 'text-blue-600' },
                    { val: '3', label: 'Published', color: 'text-emerald-600' },
                    { val: '1', label: 'Draft', color: 'text-amber-600' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50/50 border border-gray-100 p-6 rounded-2xl">
                      <div className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.val}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
               </div>

               <div className="border border-gray-100 rounded-2xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/80 text-[10px] text-gray-400 uppercase font-bold border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4">Event name</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-xs">
                      {[
                        { name: '親子瑜珈體驗班', date: '04/19/2026 · 10:00 AM', status: 'Published', pub: true, cat: '親子' },
                        { name: '追火車馬拉松', date: '04/26/2026 · 06:00 AM', status: 'Draft', cat: 'Festival' },
                        { name: '銀髮社區健康講座', date: '05/03/2026 · 09:30 AM', status: 'Published', pub: true, cat: '銀髮' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-5 font-bold text-gray-900">{row.name}</td>
                          <td className="px-6 py-5 text-gray-400">{row.date}</td>
                          <td className="px-6 py-5">
                            <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${row.pub ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{row.status}</span>
                          </td>
                          <td className="px-6 py-5 text-gray-400">{row.cat}</td>
                          <td className="px-6 py-5 text-right"><span className="text-blue-600 font-bold cursor-pointer flex items-center justify-end gap-1">View <Edit2 className="w-3 h-3" /></span></td>
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
          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{card.title}</h4>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">{card.desc}</p>
            <ul className="space-y-4">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{item}</span>
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
  <section id="sharing" className="py-24 bg-gray-50 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">Viral growth, built in</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Built for Social Sharing</h2>
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
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
          <div key={idx} className={`bg-white p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl ${card.active ? 'border-blue-200 ring-4 ring-blue-50' : 'border-gray-100 shadow-sm'}`}>
            <div className="text-3xl mb-10">{card.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed h-24 overflow-hidden">{card.desc}</p>
            <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-50 text-[10px] font-bold text-blue-600 truncate">
              {card.link}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoIsThisForSection = () => (
  <section id="for-who" className="py-24 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">WHO IT'S FOR</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">Made for every kind <br className="hidden md:block" /> of event organizer</h2>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
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
            className={`bg-white p-10 rounded-[2rem] border transition-all duration-300 flex flex-col items-center text-center ${
              item.active 
                ? 'border-gray-900 shadow-2xl shadow-gray-200/50 scale-[1.02] z-10' 
                : 'border-gray-100 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200'
            }`}
          >
            <div className="text-4xl mb-8">{item.emoji}</div>
            <h3 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-medium px-2">
              {item.desc}
            </p>
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
        <OrganizerDashboardSection />
        <SocialSharingSection />
        <WhoIsThisForSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </Layout>
  );
}