import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation, matchPath } from '@docusaurus/router';
import { X } from 'lucide-react';
import EventDetail from '../../components/EventDetail';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import logoImg from '../../assets/images/TripPlanner/logo.png';

const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.wishingwork.weatherplanb";
const IOS_URL = "https://apps.apple.com/us/app/weathergo%E9%A5%97%E6%A8%82/id6753878511";

export default function EventPage() {
    console.log(11, 'EventPage')
    const location = useLocation();
    const matchSimple = matchPath<{ eventId: string }>(location.pathname, {
        path: '/event/:eventId',
        exact: true,
    });
    const eventId = matchSimple?.params?.eventId;
    const [showAppBanner, setShowAppBanner] = useState(true);

    const getAppStoreUrl = () => {
        if (typeof window === 'undefined') return ANDROID_URL;
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) return IOS_URL;
        return ANDROID_URL;
    };

    return (
        <Layout title="Event Detail">
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <div className="sticky top-0 z-50">
                    {/* Smart App Banner */}
                    {showAppBanner && (
                        <div className="bg-gray-50 border-b border-gray-200 px-4 shadow-sm md:hidden">
                            <div className="flex items-center justify-between max-w-4xl mx-auto">
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setShowAppBanner(false)}
                                        className="p-1 hover:bg-gray-200 rounded-full text-gray-400"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center p-1 overflow-hidden shadow-sm">
                                        <img src={logoImg} alt="App Icon" className="w-12 h-12 object-contain rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 leading-tight">WeatherGo饗樂</h4>
                                        <p className="text-xs text-gray-500">立即開啟APP，查看活動詳情</p>
                                    </div>
                                </div>
                                <a
                                    href={getAppStoreUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#007BFF] text-white text-sm font-bold px-4 py-2 rounded-full hover:opacity-90 transition active:scale-95 shadow-sm"
                                >
                                    立即開啟
                                </a>
                            </div>
                        </div>
                    )}
                    <Header className="relative" />
                </div>

                <main className="flex-grow py-12">
                    {eventId ? (
                        <EventDetail eventId={eventId} />
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-bold text-gray-800">No Event ID provided</h2>
                            <p className="text-gray-600 mt-2">Please provide a valid event ID in the URL.</p>
                        </div>
                    )}
                </main>

                <Footer />
            </div>
        </Layout>
    );
}
