import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation, matchPath } from '@docusaurus/router';
import AttractionDetail from '../../components/AttractionDetail';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function AttractionPage() {
    const location = useLocation();
    const match = matchPath<{ publicId: string }>(location.pathname, {
        path: '/attraction/:publicId',
        exact: true,
    });
    const publicId = match?.params?.publicId;
    const [attractionData, setAttractionData] = useState<any>(null);

    const goToTripPlanner = () => {
        if (attractionData) {
            window.location.href = `/trip-planner?attractionId=${publicId}&lat=${attractionData.latitude}&lng=${attractionData.longitude}`;
        }
    };

    return (
        <div title={attractionData?.name ? `${attractionData.name} | Attraction Detail` : 'Attraction Detail'}>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />

                <main className="flex-grow py-12">
                    {publicId && attractionData && (
                        <div className="max-w-4xl mx-auto px-4 mb-4 flex justify-end">
                            <button
                                onClick={goToTripPlanner}
                                className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition font-medium border border-blue-100"
                            >
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16.2 7.8l-2 6.4-6.4 2 2-6.4 6.4-2z" /></svg>
                                </div>
                                <span>Trip Planner</span>
                            </button>
                        </div>
                    )}

                    {publicId ? (
                        <AttractionDetail
                            publicId={publicId}
                            onDataLoaded={setAttractionData}
                        />
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-bold text-gray-800">No Attraction ID provided</h2>
                            <p className="text-gray-600 mt-2">Please provide a valid attraction public ID in the URL.</p>
                        </div>
                    )}
                </main>

                <Footer />
            </div>
        </div>
    );
}
