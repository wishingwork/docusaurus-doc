import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    MapPin,
    Calendar,
    Phone,
    Mail,
    Share2,
    Globe,
    ExternalLink,
    ChevronRight,
    User,
    Store,
} from 'lucide-react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import dayjs from 'dayjs';

interface OrganizerData {
    id: string;
    name: string;
    description: string;
    image_url: string;
    contact_email: string;
    contact_phone: string;
    website_url?: string;
    manager_name?: string;
    merchant?: {
        public_id: string;
        merchant_name: string;
    };
    events?: Array<{
        id: string;
        title: string;
        category: string;
        image_url: string;
        start_time: string;
        end_time: string;
    }>;
}

export default function OrganizerDetail({ organizerId }: { organizerId: string }) {
    const { t } = useTranslation();
    const [item, setItem] = useState<OrganizerData | null>(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { siteConfig } = useDocusaurusContext();
    const { apiUrl } = siteConfig.customFields;

    useEffect(() => {
        if (organizerId) {
            const getOrganizer = async () => {
                setFetching(true);
                setError(null);
                try {
                    const response = await fetch(`${apiUrl}/organizers/${organizerId}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const result = await response.json();
                    if (result.data) {
                        setItem(result.data);
                    } else {
                        setError(t('organizer.organizerNotFound'));
                    }
                } catch (error) {
                    console.error("Error fetching organizer:", error);
                    setError(t('organizer.failedToFetchOrganizerDetails'));
                } finally {
                    setFetching(false);
                }
            };
            getOrganizer();
        }
    }, [organizerId]);

    if (fetching) {
        return (
            <div className="flex flex-col justify-center items-center py-20">
                <div style={{ width: '300px', height: '300px' }}>
                    <DotLottiePlayer
                        src={`${siteConfig.baseUrl}lottie/Weather_app_animation.lottie`}
                        autoplay
                        loop
                    />
                </div>
                <p className="mt-4 text-gray-600 font-medium">{t('organizer.loadingOrganizerDetails')}</p>
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
    console.log(item)
    return (
        <div className="bg-[#F5F7FA] min-h-screen">
            <Head>
                <title>{item.name} | {t('organizer.organizerDetail')}</title>
                <meta name="description" content={item.description?.substring(0, 160)} />
                <link rel="canonical" href={`https://www.meteosync.com/organizer/${organizerId}`} />

                <meta property="og:title" content={item.name} />
                <meta property="og:description" content={item.description?.substring(0, 160)} />
                {item.image_url && <meta property="og:image" content={item.image_url} />}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.meteosync.com/organizer/${organizerId}`} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": item.name,
                        "description": item.description,
                        "image": item.image_url,
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": item.contact_email,
                            "telephone": item.contact_phone
                        },
                        "url": `https://www.meteosync.com/organizer/${organizerId}`
                    })
                }} />
            </Head>

            <div className="max-w-4xl mx-auto pb-12">
                <div className="relative bg-white rounded-b-3xl shadow-sm overflow-hidden">
                    {item.image_url ? (
                        <div className="h-64 md:h-96 w-full">
                            <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="h-32 md:h-48 bg-gray-100" />
                    )}

                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: item.name,
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">{item.name}</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            <div className="flex items-start gap-3 text-gray-600 min-w-0">
                                <Mail className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                <span className="font-medium break-all">{item.contact_email}</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-600 min-w-0">
                                <User className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                <span className="font-medium">{t('organizer.manager')}: {item.manager_name}</span>
                            </div>
                            {item.contact_phone && (
                                <div className="flex items-start gap-3 text-blue-600 min-w-0">
                                    <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <a href={`tel:${item.contact_phone}`} className="font-medium hover:underline break-all">{item.contact_phone}</a>
                                </div>
                            )}
                            {item.website_url && (
                                <div className="flex items-start gap-3 text-blue-600 min-w-0">
                                    <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <a href={item.website_url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline break-all">{item.website_url}</a>
                                </div>
                            )}
                            {item.merchant && (
                                <div className="flex items-start gap-3 text-blue-600 cursor-pointer hover:underline md:col-span-2 min-w-0 pt-2" onClick={() => window.location.href = `/attraction/${item.merchant?.public_id}`}>
                                    <Store className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="font-medium">{t('organizer.location')}: {item.merchant.merchant_name}</span>
                                    <ChevronRight className="w-4 h-4 shrink-0 mt-1" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{t('organizer.about')}</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.description || 'No description available.'}</p>
                </div>

                {item.events && item.events.length > 0 && (
                    <div className="mt-6 mx-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 px-2">{t('organizer.hostedEvents')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.events.map((event) => {
                                const isExpired = event.end_time ? dayjs().isAfter(dayjs(event.end_time)) : false;
                                return (
                                    <div
                                        key={event.id}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
                                        onClick={() => window.location.href = `/event/${event.id}`}
                                    >
                                        <div className="h-40 w-full relative">
                                            <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
                                            {isExpired && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">{t('event.expired')}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs font-bold text-blue-600 uppercase mb-2 block">{event.category}</span>
                                            <h3 className="font-bold text-gray-900 line-clamp-2">{event.title}</h3>
                                            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                                                <Calendar className="w-3 h-3" />
                                                <span>{dayjs(event.start_time).format('MM/DD HH:mm')}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                {item.cohostedEvents && item.cohostedEvents.length > 0 && (
                    <div className="mt-6 mx-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">{t('organizer.coHostedEvents')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.cohostedEvents.map((event) => {
                                const isExpired = event.end_time ? dayjs().isAfter(dayjs(event.end_time)) : false;
                                return (
                                    <div
                                        key={event.id}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
                                        onClick={() => window.location.href = `/event/${event.id}`}
                                    >
                                        <div className="h-40 w-full relative">
                                            <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
                                            {isExpired && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">{t('event.expired')}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs font-bold text-blue-600 uppercase mb-2 block">{event.category}</span>
                                            <h3 className="font-bold text-gray-900 line-clamp-2">{event.title}</h3>
                                            <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                                                <Calendar className="w-3 h-3" />
                                                <span>{dayjs(event.start_time).format('MM/DD HH:mm')}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
