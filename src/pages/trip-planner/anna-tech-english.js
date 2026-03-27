import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function AnnaTechEnglish() {
    const { siteConfig } = useDocusaurusContext();
    const title = 'Anna 科技英語 — 接軌未來的英語學習群組';
    const description = '專為年輕人與科技人士打造的英語學習社群，結合 AI 實戰、世界新聞與跨文化交流，重新定義語言學習體驗。';
    const ogImage = useBaseUrl('/img/anna-tech-english/hero-bg.png');

    return (
        <div className="anna-container">
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
                <section
                    className="anna-hero"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${useBaseUrl('/img/anna-tech-english/hero-bg.png')})` }}
                >
                    <div className="anna-glass-card text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                            Anna 科技英語 <br />
                            <span className="text-blue-600">接軌未來的學習群組</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            結合世界新聞、尖端 AI 知識與跨文化交流，重新定義你的語言學習體驗。
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#vision" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition transform hover:-translate-y-1">
                                了解我們的願景
                            </a>
                            <a href="#courses" className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold hover:bg-blue-50 transition transform hover:-translate-y-1">
                                近期課程
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. Vision / Golden Circle Section */}
                <section id="vision" className="anna-section">
                    <h2 className="anna-section-title">我們的使命與願景</h2>
                    <div className="anna-circle-container">
                        {/* Card 1: Our Community */}
                        <div className="anna-circle-card">
                            <div className="anna-circle-icon">👥</div>
                            <h3 className="text-2xl font-bold mb-4">我們的社群</h3>
                            <p className="text-gray-600">
                                專為年輕世代、科技專業人士與熱愛英文的學習者打造的專屬社群。在這裡，你不只學習語言，更建立連結。
                            </p>
                        </div>
                        {/* Card 2: Our Core */}
                        <div className="anna-circle-card border-blue-200 bg-blue-50">
                            <div className="anna-circle-icon">🚀</div>
                            <h3 className="text-2xl font-bold mb-4">我們的核心</h3>
                            <p className="text-gray-600">
                                聚焦世界趨勢、前沿科技新聞與 AI 實戰英語。學會使用最強大的工具，讓你在未來職場中掌握對話的話語權。
                            </p>
                        </div>
                        {/* Card 3: Our Vision */}
                        <div className="anna-circle-card">
                            <div className="anna-circle-icon">⛪</div>
                            <h3 className="text-2xl font-bold mb-4">我們的願景</h3>
                            <p className="text-gray-600">
                                在科技與知識的交流中建立深厚連結，並在社群中廣傳福音、分享信仰的價值。讓學習也成為一份祝福。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. O2O Ecosystem Section */}
                <section className="bg-gray-50 py-20">
                    <div className="anna-section">
                        <h2 className="anna-section-title">無縫接軌的 O2O 學習生態</h2>
                        <div className="anna-eco-grid">
                            <div className="anna-eco-step">
                                <span className="anna-eco-num">01</span>
                                <h4 className="text-xl font-bold mb-2">專屬 LINE 群組</h4>
                                <p className="text-gray-600">課前一個月公佈資訊，外籍顧問即時互動與發送重要教材。</p>
                            </div>
                            <div className="anna-eco-step">
                                <span className="anna-eco-num">02</span>
                                <h4 className="text-xl font-bold mb-2">彈性實體空間</h4>
                                <p className="text-gray-600">上課前一週確認並公佈優質租借會議室，打造沉浸式線下交流。</p>
                            </div>
                            <div className="anna-eco-step">
                                <span className="anna-eco-num">03</span>
                                <h4 className="text-xl font-bold mb-2">頂尖外師陣容</h4>
                                <p className="text-gray-600">邀請來自國際學校與外商銀行的專業人士，親自授課分享實戰經驗。</p>
                            </div>
                            <div className="anna-eco-step">
                                <span className="anna-eco-num">04</span>
                                <h4 className="text-xl font-bold mb-2">Google Classroom</h4>
                                <p className="text-gray-600">所有課程資料與高畫質錄影永久保存，方便學員隨時複習。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Gallery Section */}
                <section className="anna-section">
                    <h2 className="anna-section-title">課程精彩回顧</h2>
                    <div className="anna-gallery-grid">
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-1.jpg')} alt="Class Moment 2" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-4.jpg')} alt="Class Moment 4" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-5.jpg')} alt="Class Moment 5" className="anna-gallery-img" />
                        </div>
                    </div>
                </section>

                {/* 4. Upcoming Courses Section */}
                <section id="courses" className="anna-section">
                    <h2 className="anna-section-title">近期活動與課程</h2>
                    <div className="anna-course-grid">
                        {/* Course 1 */}
                        <div className="anna-course-card">
                            <div
                                className="anna-course-img"
                                style={{ backgroundImage: `url(${useBaseUrl('/img/anna-tech-english/course-315.png')})` }}
                            ></div>
                            <div className="anna-course-content">
                                <span className="anna-tag anna-tag-blue">3月15日 (14:00-17:00)</span>
                                <h3 className="text-2xl font-bold mb-4 text-blue-900">AI + English：再生能源與行銷工具</h3>
                                <p className="text-gray-600 mb-6 font-semibold">
                                    探索「釷」核能、固態電池等前沿技術，並學會使用 AI 工具加速專案流程。
                                </p>
                                <div className="space-y-4 text-sm text-gray-500">
                                    <p>🔹 <strong>再生能源：</strong>釷 (Thorium) 核發電、波浪能、生質燃料、Donut labs 固態電池。</p>
                                    <p>🔹 <strong>AI 工具：</strong>Google AI Studio, Gemini, SEEDREAM 等進階應用。</p>
                                    <p>🔹 <strong>數位行銷：</strong>利用 AI 進行 IG/FB 品牌形象建立與自動化行銷。</p>
                                </div>
                            </div>
                        </div>

                        {/* Course 2 */}
                        <div className="anna-course-card">
                            <div
                                className="anna-course-img"
                                style={{ backgroundImage: `url(${useBaseUrl('/img/anna-tech-english/course-419.png')})` }}
                            ></div>
                            <div className="anna-course-content">
                                <span className="anna-tag anna-tag-green">4月19日 (14:00-17:00)</span>
                                <h3 className="text-2xl font-bold mb-4 text-green-900">新一代 AI：從「對話」到「執行」</h3>
                                <p className="text-gray-600 mb-6 font-semibold">
                                    深入探討 AI Agents 是如何從被動問答進化為主動替你完成工作的「執行者」。
                                </p>
                                <div className="space-y-4 text-sm text-gray-500">
                                    <p>🔹 <strong>AI 代理 (Agents)：</strong>掌握自動化工具，從數百頁 PDF 抓取數據並產出報表。</p>
                                    <p>🔹 <strong>雙強對決：</strong>ChatGPT (跑腿助理) vs Gemini (辦公助手) 的實戰應用場景。</p>
                                    <p>🔹 <strong>風險控管：</strong>破解「提示注入 (Prompt Injection)」陷阱，守護數據隱私。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Contact / Call to Action */}
                <section className="anna-section text-center bg-gray-900 text-white rounded-3xl mb-20 mx-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">準備好接軌未來了嗎？</h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                        未來我們計畫開設中高階線上課程，並持續邀請外籍顧問參與。<br />
                        歡迎直接聯繫 Anna，加入我們的學習社群。
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-2xl">
                                📞
                            </div>
                            <span className="text-gray-400 text-sm mb-1">電話聯繫</span>
                            <a href="tel:0984452489" className="text-2xl font-bold hover:text-blue-400 transition">
                                0984-452-489
                            </a>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                                ✉️
                            </div>
                            <span className="text-gray-400 text-sm mb-1">電子郵件</span>
                            <a href="mailto:cedrusanna@proton.me" className="text-2xl font-bold hover:text-green-400 transition">
                                cedrusanna@proton.me
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
