import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    MapPin,
    Phone,
    Clock,
    Copy,
    ExternalLink,
    ArrowLeft,
    Star,
    BadgeCheck,
    Globe,
    Facebook,
    Instagram,
    Store,
    Bike,
    Utensils,
    List,
    Share2,
    Coffee,
    IceCream,
    Library,
    Palette,
    Factory,
    Signpost,
    GraduationCap,
    Leaf,
    PawPrint,
    Fish,
    Ship,
    ShoppingCart,
    Droplets,
    Bed,
    Gamepad2
} from 'lucide-react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';


interface AttractionData {
    name: string;
    public_id: string;
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
    isVerified?: boolean;
    rating?: number;
    reviews?: number;
    web?: Array<{
        url: string;
        name?: string;
        label?: string;
        platform?: string;
    }>;
    facilities?: Array<{
        name: string;
        description: string;
        category: string;
    }>;
    ticket_pricing?: any;
    status?: string;
}


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

    const { siteConfig } = useDocusaurusContext();
    const { apiUrl } = siteConfig.customFields;


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
            <div className="flex flex-col justify-center items-center py-20">
                <div style={{ width: '300px', height: '300px' }}>
                    <DotLottiePlayer
                        src={`${siteConfig.baseUrl}lottie/Weather_Travel_is_fun.lottie`}
                        autoplay
                        loop
                    />
                </div>
                <p className="mt-4 text-gray-600 font-medium">{t('loadingAttractionDetails') || 'Loading attraction details...'}</p>
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

    const copyToClipboard = async () => {
        const address = item.address || item.add || '';
        await navigator.clipboard.writeText(address);
        alert('Address copied to clipboard!');
    };

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || item.add || item.name)}`;
        window.open(url, '_blank');
    };

    const getClassificationIcon = (category: string | undefined) => {
        if (!category) return MapPin;
        const cat = category.toLowerCase();
        if (cat.includes('咖啡') || cat.includes('下午茶') || cat.includes('茶')) return Coffee;
        if (cat.includes('餐') || cat.includes('食') || cat.includes('酒') || cat.includes('味屋')) return Utensils;
        if (cat.includes('冰') || cat.includes('甜點')) return IceCream;
        if (cat.includes('博') || cat.includes('館')) return Library;
        if (cat.includes('美術') || cat.includes('藝術') || cat.includes('畫')) return Palette;
        if (cat.includes('工廠') || cat.includes('製造')) return Factory;
        if (cat.includes('歷史') || cat.includes('蹟') || cat.includes('文化') || cat.includes('廟')) return Signpost;
        if (cat.includes('校') || cat.includes('教室')) return GraduationCap;
        if (cat.includes('公園') || cat.includes('林') || cat.includes('園區') || cat.includes('步道') || cat.includes('瀑布')) return Leaf;
        if (cat.includes('農場') || cat.includes('牧場') || cat.includes('獸') || cat.includes('鳥')) return PawPrint;
        if (cat.includes('水族') || cat.includes('魚')) return Fish;
        if (cat.includes('海') || cat.includes('島') || cat.includes('岸')) return Ship;
        if (cat.includes('商') || cat.includes('買') || cat.includes('伴手禮') || cat.includes('購') || cat.includes('集')) return ShoppingCart;
        if (cat.includes('溫泉') || cat.includes('泳') || cat.includes('水') || cat.includes('戲水')) return Droplets;
        if (cat.includes('宿') || cat.includes('飯店') || cat.includes('旅館')) return Bed;
        if (cat.includes('玩') || cat.includes('親') || cat.includes('遊樂') || cat.includes('運')) return Gamepad2;
        return MapPin;
    };

    const getClassificationColor = (item: AttractionData) => {
        if (item.classification === 'Outdoor') return '#4CD964';
        if (item.classification === 'Indoor') return '#FF3B30';
        if (item.status === 'active') return '#FF9500';
        return '#8E8E93';
    };

    const getFacilityIcon = (category: string) => {
        switch (category) {
            case 'equipment': return Store;
            case 'activity': return Bike;
            case 'restaurant': return Utensils;
            default: return List;
        }
    };

    const ClassificationIcon = getClassificationIcon(item.classification);
    const classificationColor = getClassificationColor(item);

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
        <div className="bg-[#F5F7FA] min-h-screen">
            <Head>
                {/* Dynamic SEO Meta Tags */}
                <title>{item.name} | Weather Intelligence</title>
                <meta name="description" content={item.toldescribe?.substring(0, 160)} />
                <link rel="canonical" href={`https://www.meteosync.com/attraction/${publicId}`} />

                {/* OpenGraph / Facebook */}
                <meta property="og:title" content={item.name} />
                <meta property="og:description" content={item.toldescribe?.substring(0, 160)} />
                {item.picture1 && <meta property="og:image" content={item.picture1} />}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.meteosync.com/attraction/${publicId}`} />

                {/* Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>

            <div className="max-w-4xl mx-auto pb-12">
                {/* Section 1: Header/Hero */}
                <div className="relative bg-white rounded-b-3xl shadow-sm overflow-hidden">
                    {item.picture1 ? (
                        <div className="h-64 md:h-96 w-full">
                            <img src={item.picture1} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="h-32 md:h-48" />
                    )}

                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: item.name,
                                        text: item.toldescribe,
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
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
                            {item.isVerified && (
                                <BadgeCheck className="w-6 h-6 text-[#007AFF]" />
                            )}
                            <div
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold"
                                style={{ backgroundColor: `${classificationColor}20`, color: classificationColor }}
                            >
                                <ClassificationIcon className="w-4 h-4" />
                                <span>{item.classification || t('attraction')}</span>
                            </div>
                        </div>

                        {item.rating && item.reviews && (
                            <div className="flex items-center gap-1.5">
                                <Star className="w-5 h-5 text-[#FF9500] fill-[#FF9500]" />
                                <span className="text-lg font-bold text-[#FF9500]">{item.rating}</span>
                                <span className="text-gray-400 text-sm">({item.reviews})</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Section 2: About */}
                <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{t('attraction.about') || '關於'} {item.name}</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.toldescribe}</p>
                </div>

                {/* Section 3: Facilities & Social */}
                {((item.web && item.web.length > 0) || (item.facilities && item.facilities.length > 0)) && (
                    <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('attraction.facilitiesAndWeb') || '活動設施與網站'}</h2>

                        {item.web && item.web.length > 0 && (
                            <div className="flex items-center gap-4 mb-8">
                                {item.web.map((link, index) => {
                                    const isFB = link.name?.includes('Facebook') || link.label?.includes('Facebook') || link.platform?.includes('Facebook');
                                    const isIG = link.name?.includes('Instagram') || link.label?.includes('Instagram') || link.platform?.includes('Instagram');
                                    return (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:text-[#007AFF] hover:bg-blue-50 transition"
                                        >
                                            {isFB ? <Facebook className="w-6 h-6" /> : isIG ? <Instagram className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                                        </a>
                                    );
                                })}
                                <a
                                    href={item.web[0]?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#007AFF] font-medium hover:underline ml-2"
                                >
                                    {t('attraction.officialSite') || '官方網站'}
                                </a>
                            </div>
                        )}

                        <div className="space-y-6">
                            {item.facilities?.map((facility, index) => {
                                const FacilityIcon = getFacilityIcon(facility.category);
                                return (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-10 h-10 shrink-0 bg-[#F5F7FA] rounded-xl flex items-center justify-center text-[#007AFF]">
                                            <FacilityIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{facility.name}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{facility.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Section 4: Practical Info */}
                <div className="mt-6 mx-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">{t('attraction.practicalInfo') || '實用資訊'}</h2>

                    <div className="space-y-5">
                        <div className="flex gap-4">
                            <div className="w-30 shrink-0 text-sm font-bold text-gray-400 uppercase tracking-wider">{t('attraction.address') || '地址'}</div>
                            <div className="flex-1 flex gap-2 items-start">
                                <span className="text-gray-900 font-medium">{item.address || item.add}</span>
                                <button onClick={copyToClipboard} className="p-1 hover:bg-gray-100 rounded transition text-gray-400 hover:text-blue-500">
                                    <Copy className="w-4 h-4" />
                                </button>
                                <button onClick={openGoogleMaps} className="p-1 hover:bg-blue-50 rounded transition text-blue-500">
                                    <MapPin className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-30 shrink-0 text-sm font-bold text-gray-400 uppercase tracking-wider">{t('openHour') || '營業時間'}</div>
                            <div className="text-gray-900 font-medium">{item.opentime || 'N/A'}</div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-30 shrink-0 text-sm font-bold text-gray-400 uppercase tracking-wider">{t('telephone') || '電話'}</div>
                            <a href={`tel:${item.phone}`} className="text-gray-900 font-medium hover:text-[#007AFF] transition">{item.phone || 'N/A'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
