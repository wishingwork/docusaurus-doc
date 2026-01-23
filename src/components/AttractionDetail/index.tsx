import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, Copy, ExternalLink, ArrowLeft, X } from 'lucide-react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import logoImg from '../../assets/images/TripPlanner/logo.png';

interface AttractionData {
    name: string;
    picture1?: string;
    picture2?: string;
    picture3?: string;
    toldescribe?: string;
    phone?: string;
    address?: string;
    add?: string;
    opentime?: string;
    classification?: string;
    latitude?: number;
    longitude?: number;
}

const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.wishingwork.weatherplanb";
const IOS_URL = "https://apps.apple.com/us/app/weathergo%E9%A5%97%E6%A8%82/id6753878511";

const LOCATION_CLASSES: Record<string, { labelKey: string, icon: string }> = {
    Indoor: { labelKey: 'indoor', icon: '🏛️' },
    Outdoor: { labelKey: 'outdoor', icon: '🌳' },
    Business: { labelKey: 'business', icon: '🛍️' },
    IceShop: { labelKey: 'iceShop', icon: '🍧' },
    Coffeeshop: { labelKey: 'coffeeshop', icon: '☕️' },
    Restaurant: { labelKey: 'restaurant', icon: '🍽️' },
    Classroom: { labelKey: 'classroom', icon: '🏫' },
    BoardgameCafe: { labelKey: 'boardgameCafe', icon: '🎲' },
};

export default function AttractionDetail({ publicId, onDataLoaded }: { publicId: string, onDataLoaded?: (data: AttractionData) => void }) {
    const { t } = useTranslation();
    const [item, setItem] = useState<AttractionData | null>(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showAppBanner, setShowAppBanner] = useState(true);

    const { siteConfig } = useDocusaurusContext();
    const { apiUrl } = siteConfig.customFields;

    const getAppStoreUrl = () => {
        if (typeof window === 'undefined') return ANDROID_URL;
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(userAgent)) return IOS_URL;
        return ANDROID_URL;
    };

    useEffect(() => {
        if (publicId) {
            const getAttraction = async () => {
                setFetching(true);
                setError(null);
                try {
                    const response = await fetch(`${apiUrl}/attractions/${publicId}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const result = await response.json();
                    if (result.data) {
                        setItem(result.data);
                        if (onDataLoaded) onDataLoaded(result.data);
                    } else {
                        setError('Attraction not found');
                    }
                } catch (error) {
                    console.error("Error fetching attraction:", error);
                    setError('Failed to fetch attraction details');
                } finally {
                    setFetching(false);
                }
            };
            getAttraction();
        }
    }, [publicId]);

    if (fetching) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="ml-4 text-gray-600">Loading attraction details...</p>
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="text-center py-20">
                <p className="text-red-500 text-xl font-semibold">{error || 'Something went wrong'}</p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const copyToClipboard = async () => {
        const address = item.address || item.add || '';
        await navigator.clipboard.writeText(address);
        alert('Address copied to clipboard!');
    };

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || item.add || item.name)}`;
        window.open(url, '_blank');
    };

    const locationType = item.classification ? LOCATION_CLASSES[item.classification] : null;

    // JSON-LD Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": item.name,
        "description": item.toldescribe,
        "image": [item.picture1, item.picture2, item.picture3].filter(Boolean),
        "address": {
            "@type": "PostalAddress",
            "streetAddress": item.address || item.add
        },
        "telephone": item.phone,
        "geo": item.latitude && item.longitude ? {
            "@type": "GeoCoordinates",
            "latitude": item.latitude,
            "longitude": item.longitude
        } : undefined
    };

    return (
        <>
            <Head>
                {/* Dynamic SEO Meta Tags */}
                <title>{item.name} | Weather Intelligence</title>
                <meta name="description" content={item.toldescribe?.substring(0, 160)} />
                <link rel="canonical" href={`https://www.meteosync.com/attraction/${publicId}`} />

                {/* OpenGraph / Facebook */}
                <meta property="og:title" content={item.name} />
                <meta property="og:description" content={item.toldescribe?.substring(0, 160)} />
                {item.picture1 && (
                    <>
                        <meta property="og:image" content={item.picture1} />
                        <link rel="image_src" href={item.picture1} />
                        <meta itemProp="image" content={item.picture1} />
                        <meta name="image" content={item.picture1} />
                        <meta property="og:image:secure_url" content={item.picture1} />
                        <meta property="og:image:alt" content={item.name} />
                    </>
                )}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.meteosync.com/attraction/${publicId}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={item.name} />
                <meta name="twitter:description" content={item.toldescribe?.substring(0, 160)} />
                {item.picture1 && (
                    <>
                        <meta name="twitter:image" content={item.picture1} />
                        <meta name="twitter:image:alt" content={item.name} />
                    </>
                )}

                <meta name="robots" content="index,follow" />

                {/* Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>

            {/* Smart App Banner */}
            {showAppBanner && (
                <div className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 px-4 py-3 shadow-sm md:hidden">
                    <div className="flex items-center justify-between max-w-4xl mx-auto">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => setShowAppBanner(false)}
                                className="p-1 hover:bg-gray-200 rounded-full text-gray-400"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center p-1 overflow-hidden shadow-sm">
                                <img src={logoImg} alt="App Icon" className="w-full h-full brightness-0 invert" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-900 leading-tight">WeatherGo Plan</h4>
                                <p className="text-xs text-gray-500">立即開啟APP，解鎖更多功能</p>
                            </div>
                        </div>
                        <a
                            href={getAppStoreUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition active:scale-95 shadow-sm"
                        >
                            立即開啟
                        </a>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-sm rounded-xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{item.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {item.picture1 && (
                        <img src={item.picture1} alt={item.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
                    )}
                    <div className="grid grid-cols-2 gap-2">
                        {item.picture2 && (
                            <img src={item.picture2} alt={`${item.name} 2`} className="w-full h-64 md:h-32 object-cover rounded-lg shadow-sm" />
                        )}
                        {item.picture3 && (
                            <img src={item.picture3} alt={`${item.name} 3`} className="w-full h-64 md:h-32 object-cover rounded-lg shadow-sm" />
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <section>
                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{item.toldescribe}</p>
                    </section>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                        <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Telephone</p>
                                <p className="text-gray-600">{item.phone || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900">Address</p>
                                <div className="flex items-center group">
                                    <p className="text-gray-600 mr-2">{item.address || item.add}</p>
                                    <button onClick={copyToClipboard} className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600 transition">
                                        <Copy className="w-4 h-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={openGoogleMaps}
                                    className="mt-2 text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium transition"
                                >
                                    View on Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Clock className="w-5 h-5 text-blue-600 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Open Hours</p>
                                <p className="text-gray-600">{item.opentime || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-5 h-5 flex items-center justify-center mt-1">
                                <span className="text-xl">{locationType?.icon || '📍'}</span>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Location Type</p>
                                <p className="text-gray-600">
                                    {locationType ? t(locationType.labelKey) : (item.classification || 'N/A')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
