import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { 
  Calendar, MapPin, Users, Share2, Sun, 
  CheckCircle, Globe, Navigation, ArrowRight, AppWindow,
  Briefcase, School, Play, Download, LayoutDashboard, CloudSun, Smartphone
} from 'lucide-react';
import '../../css/custom.css';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24 px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm border border-blue-200 shadow-sm">
        For Event Organizers
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
        Organize Better Events with <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Trip Planning</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Create events, guide participants, discover attractions, and stay weather-ready with your branded event experience.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
          Become an Organizer <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full shadow-md border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center">
          Watch Demo <Play className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const SocialProofSection = () => (
  <section className="py-12 bg-white border-b border-gray-100 relative z-20">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by Community Leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2"><Briefcase className="w-8 h-8 text-gray-700"/> <span className="font-bold text-2xl text-gray-700">TechCon</span></div>
        <div className="flex items-center gap-2"><School className="w-8 h-8 text-gray-700"/> <span className="font-bold text-2xl text-gray-700">EduTours</span></div>
        <div className="flex items-center gap-2"><Globe className="w-8 h-8 text-gray-700"/> <span className="font-bold text-2xl text-gray-700">Global Summits</span></div>
        <div className="flex items-center gap-2"><Users className="w-8 h-8 text-gray-700"/> <span className="font-bold text-2xl text-gray-700">Local Hub</span></div>
      </div>
      
      {/* Dashboard Mockup */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white transform -translate-y-4 hover:-translate-y-6 transition-transform duration-500">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <div className="ml-4 flex-1 flex justify-center">
            <div className="bg-white rounded-md text-xs text-gray-500 font-mono py-1 px-4 border border-gray-200 shadow-inner flex items-center gap-2">
              <LayoutDashboard className="w-3 h-3" /> organizer.trip-planner.com
            </div>
          </div>
        </div>
        <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <LayoutDashboard className="w-24 h-24 mb-6 text-blue-300 drop-shadow-md z-10" />
          <h3 className="text-2xl font-bold text-gray-700 z-10">Organizer Dashboard Interface</h3>
          <p className="text-gray-500 z-10 mt-2">Manage all your events and participants in one place</p>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => {
  const benefits = [
    { title: 'Increase Participant Engagement', desc: 'Participants can easily explore attractions and event information seamlessly.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Simplify Event Coordination', desc: 'Centralize event details, destinations, and updates in one unified space.', icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { title: 'Promote Your Organization', desc: 'Share branded event and organization pages with a single custom link.', icon: Globe, color: 'text-teal-600', bg: 'bg-teal-100' },
    { title: 'Encourage Social Sharing', desc: 'Participants naturally share events and curated attractions with others.', icon: Share2, color: 'text-purple-600', bg: 'bg-purple-100' },
    { title: 'Weather-Aware Experiences', desc: 'Help participants adapt plans safely with smart, real-time attraction recommendations.', icon: CloudSun, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Organizers Love Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to deliver an unforgettable, stress-free event experience.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureArchitectureSection = () => (
  <section className="py-24 bg-white overflow-hidden">
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
  <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
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
  <section className="py-24 bg-gray-50 border-t border-gray-100">
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
        <Header />
        <HeroSection />
        <SocialProofSection />
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