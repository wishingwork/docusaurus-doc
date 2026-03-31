import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Calendar,
    Clock,
    MapPin,
    User,
    Share2,
    ExternalLink,
    ChevronRight,
    Hourglass
} from 'lucide-react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import dayjs from 'dayjs';

interface EventData {
    id: string;
    title: string;
    description: string;
    category: string;
    start_time: string;
    end_time: string;
    duration_minutes: number;
    price: number;
    currency: string;
    image_url: string;
    external_url?: string;
    age_min?: number;
    age_max?: number;
    merchant?: {
        public_id: string;
        merchant_name: string;
    };
    organizer?: {
        id: string;
        name: string;
    };
    cohost_organizations?: Array<{
        id: string;
        name: string;
    }>;
}

export default function EventDetail({ eventId }: { eventId: string }) {
    const { t } = useTranslation();
    const [item, setItem] = useState<EventData | null>(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { siteConfig } = useDocusaurusContext();
    const { apiUrl } = siteConfig.customFields;

    useEffect(() => {
        console.log(54, eventId)
        if (eventId) {
            const getEvent = async () => {
                setFetching(true);
                setError(null);
                console.log(61, eventId)
                try {
                    const response = await fetch(`${apiUrl}/events/${eventId}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const result = await response.json();
                    if (result.data) {
                        setItem(result.data);
                    } else {
                        setError('Event not found');
                    }
                } catch (error) {
                    console.error("Error fetching event:", error);
                    setError('Failed to fetch event details');
                } finally {
                    setFetching(false);
                }
            };
            getEvent();
        }
    }, [eventId]);

    if (fetching) {
        return (
            <div className="flex flex-col justify-center items-center py-20">
                <div style={{ width: '300px', height: '300px' }}>
                    <DotLottiePlayer
                        src={`${siteConfig.baseUrl}lottie/Weather_Travel_is_fun.lottie`}
                        autoplay
                        loop
                    />
                </div>
                <p className="mt-4 text-gray-600 font-medium">Loading event details...</p>
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="text-center py-20">
                <p className="text-red-500 text-xl font-semibold">{error || 'Something went wrong'}</p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-4 px-6 py-2 bg-[#007BFF] text-white rounded-lg hover:opacity-90 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const startTime = dayjs(item.start_time);
    const isExpired = item.end_time ? dayjs().isAfter(dayjs(item.end_time)) : false;

    return (
        <div className="bg-[#F5F7FA] min-h-screen">
            <Head>
                <title>{item.title} | Event Detail</title>
                <meta name="description" content={item.description?.substring(0, 160)} />
                <meta property="og:title" content={item.title} />
                <meta property="og:description" content={item.description?.substring(0, 160)} />
                {item.image_url && <meta property="og:image" content={item.image_url} />}
            </Head>

            <div className="max-w-4xl mx-auto pb-12">
                <div className="relative bg-white rounded-b-3xl shadow-sm overflow-hidden">
                    {item.image_url ? (
                        <div className="h-64 md:h-96 w-full">
                            <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="h-32 md:h-48 bg-gray-100" />
                    )}

                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: item.title,
                                        text: item.description,
                                        url: window.location.href,
                                    });
                                }
                            }}
                            className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                {item.category || 'Event'}
                            </span>
                            {isExpired && (
                                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                    Expired
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <span className="font-medium">{startTime.format('YYYY/MM/DD')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <span className="font-medium">{startTime.format('h:mm A')}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Hourglass className="w-5 h-5 text-gray-400" />
                                <span className="font-medium">{item.duration_minutes} minutes</span>
                            </div>
                            {item.merchant && (
                                <div className="flex items-center gap-3 text-blue-600 cursor-pointer hover:underline" onClick={() => window.location.href = `/attraction/${item.merchant?.public_id}`}>
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <span className="font-medium">{item.merchant.merchant_name}</span>
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.description}</p>
                </div>

                <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-500 font-medium">Price</span>
                        <span className="text-2xl font-bold text-blue-600">
                            {item.currency === 'TWD' ? '$' : (item.currency || '$')} {item.price}
                        </span>
                    </div>
                    {item.external_url && !isExpired && (
                        <a
                            href={item.external_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                        >
                            Book Now
                        </a>
                    )}
                </div>

                {item.organizer && (
                    <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Hosted by</h2>
                        <div
                            className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
                            onClick={() => window.location.href = `/organizer/${item.organizer?.id}`}
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <User className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900">{item.organizer.name}</h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                )}
                {item.cohost_organizations && item.cohost_organizations.length > 0 && (
                    <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Co-hosted by</h2>
                        {item.cohost_organizations.map((cohost, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition"
                                onClick={() => window.location.href = `/organizer/${cohost.id}`}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900">{cohost.name}</h3>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
