import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function GloryLightPage() {
    const { siteConfig } = useDocusaurusContext();
    const title = '中華榮耀之光關懷協會 — 點亮社區與青年的希望';
    const description = '以服務社會族群，培訓人才，推展社區再造及福利公益，結合地區資源照顧各地需要幫助的人。';
    const ogImage = useBaseUrl('/img/organizers/glory-light.png');

    return (
        <div className="glory-container">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Header />

            <main>
                {/* 1. Hero Section */}
                <section className="glory-hero">
                    <div className="glory-hero-content">
                        <span className="glory-badge">服務 • 培訓 • 共好</span>
                        <h1 className="glory-title">
                            匯聚<span>榮耀之光</span> <br />
                            點亮無數可能
                        </h1>
                        <div className="glory-mission-card">
                            「以服務社會族群，培訓人才，推展社區再造及福利公益，結合地區資源照顧各地需要幫助的為宗旨。」
                        </div>
                        <div style={{ marginTop: '3rem' }}>
                            <a href="#vision" className="glory-btn">深入了解我們的行動</a>
                        </div>
                    </div>
                </section>

                {/* 2. Four Pillars Section */}
                <section id="vision" className="glory-section">
                    <h2 className="glory-section-title">行動的四大支柱</h2>
                    <p className="glory-section-subtitle">
                        我們透過多維度的支持體系，致力於建立一個更具包容與活力的社會。
                    </p>
                    <div className="glory-pillar-grid">
                        <div className="glory-pillar-card">
                            <span className="glory-pillar-icon">🤝</span>
                            <h3>社會服務</h3>
                            <p>服務社會多元族群，深入基層，帶來實質改變。</p>
                        </div>
                        <div className="glory-pillar-card">
                            <span className="glory-pillar-icon">📈</span>
                            <h3>人才培訓</h3>
                            <p>賦能青年與弱勢，培養具備未來競爭力的關鍵人才。</p>
                        </div>
                        <div className="glory-pillar-card">
                            <span className="glory-pillar-icon">🏠</span>
                            <h3>社區再造</h3>
                            <p>推展福利公益，活化社區能量，建立互助共好的環境。</p>
                        </div>
                        <div className="glory-pillar-card">
                            <span className="glory-pillar-icon">🧩</span>
                            <h3>資源整合</h3>
                            <p>串聯地區網絡，精準對接需求，照顧各地需要幫助的人。</p>
                        </div>
                    </div>
                </section>

                {/* 3. Project Spotlight Section (The Eagle Project) */}
                <section className="bg-white/5 py-24">
                    <div className="glory-section">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 text-white">專案焦點: 《天鷹展翅計劃》</h2>
                                <div className="p-4 bg-yellow-500/20 border-l-4 border-yellow-500 rounded mb-8">
                                    <span className="text-yellow-500 font-bold">🤝 華碩 (ASUS) 再生電腦數位培育計畫合作專案</span>
                                </div>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    走出台灣，走入越南山區。我們透過教育與數位科技，陪伴當地青年突破地理與資源的限制，勇敢展翅高飛。
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mt-1">✓</div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">數位賦能培訓</h4>
                                            <p className="text-sm text-gray-500">透過數位設備與教育，引導青年掌握未來工具。</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mt-1">✓</div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">跨國文化連結</h4>
                                            <p className="text-sm text-gray-500">串聯國際志願資源，實現更深遠的社會影響價值。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <img
                                    src={useBaseUrl('/img/organizers/glory-light.png')}
                                    alt="Glory Light Eagle"
                                    className="relative rounded-3xl w-full shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Impact Journey Section */}
                <section className="glory-section">
                    <h2 className="glory-section-title">數位賦能的改變軌跡</h2>
                    <p className="glory-section-subtitle">How We Create Impact</p>

                    <div className="glory-impact-container">
                        <div className="glory-impact-item">
                            <div className="glory-impact-num">01</div>
                            <div className="glory-impact-content">
                                <h3>引入資源 (Inputs)</h3>
                                <ul className="glory-impact-list">
                                    <li>華碩再生電腦硬體支援</li>
                                    <li>系統化數位課程開發</li>
                                    <li>專業領域職場培訓</li>
                                </ul>
                            </div>
                        </div>
                        <div className="glory-impact-item">
                            <div className="glory-impact-num">02</div>
                            <div className="glory-impact-content" style={{ borderColor: '#3b82c4' }}>
                                <h3>陪伴突破 (Process)</h3>
                                <ul className="glory-impact-list">
                                    <li>深入越南偏鄉山區開展長期計畫</li>
                                    <li>幫助學員跨越地理與資源限制</li>
                                    <li>提供長期的教育陪伴與導航服務</li>
                                </ul>
                            </div>
                        </div>
                        <div className="glory-impact-item">
                            <div className="glory-impact-num">03</div>
                            <div className="glory-impact-content" style={{ borderColor: '#10b981' }}>
                                <h3>展翅高飛 (Outcomes)</h3>
                                <ul className="glory-impact-list">
                                    <li>培養在地青年核心自信心與溝通力</li>
                                    <li>激發在地數位創新力與解決問題能力</li>
                                    <li>實現個人社會價值，共創永續未來</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Video Section */}
                <section className="bg-black py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">實錄：點亮微光</h2>
                        <p className="text-gray-500 mb-4">本專案為華碩數位培育計畫影片徵件活動之精選作品</p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="glory-video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/0dtqnirxZUo"
                                title="Glory Light Action Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* 6. Basic Information Section */}
                <section className="glory-section">
                    <div className="glory-info-card">
                        <div className="hidden md:block">
                            <img src={useBaseUrl('/img/organizers/glory-light.png')} alt="Logo Center" className="glory-info-img" />
                        </div>
                        <div className="glory-info-details">
                            <h3 style={{ color: 'white' }}>協會基本資訊</h3>
                            <div className="glory-info-item">
                                <span className="glory-info-label">法人全稱</span>
                                <span className="glory-info-value">社團法人中華榮耀之光關懷協會</span>
                            </div>
                            <div className="glory-info-item">
                                <span className="glory-info-label">設立日期</span>
                                <span className="glory-info-value">民國 108 年 07 月 02 日</span>
                            </div>
                            <div className="glory-info-item">
                                <span className="glory-info-label">服務項目</span>
                                <span className="glory-info-value">社區再造、人才培訓、弱勢照顧</span>
                            </div>
                            <div className="glory-info-item">
                                <span className="glory-info-label">核心理念</span>
                                <span className="glory-info-value">點亮微光，勇往直前</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Footer CTA */}
                <section className="glory-section">
                    <div className="glory-cta">
                        <h2>與我們一同點亮希望</h2>
                        <p>協會以優異的治理為底氣，持續串聯全球與在地資源。我們深信，只要有光穿透限制，每一個需要幫助的生命都能綻放屬於自己的榮耀光芒。</p>
                        <a href="mailto:info@glorylight.org" className="glory-btn">聯絡協會團隊</a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
