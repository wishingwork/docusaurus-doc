import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function JIceShop() {
    const {siteConfig} = useDocusaurusContext();
    const canonicalUrl = `${siteConfig.url}${useBaseUrl('/trip-planner/j-ice-shop')}`;
    // Use a large image suitable for social preview (2048x1152)
    const ogImage = `${siteConfig.url}${useBaseUrl('/img/j-ice-shop/shop-front2.jpg')}`;
    const title = 'J室冰舖 — 一碗冰，一個故事 | 新北板橋手作冰品';
    const description = '位於新北市板橋的手作冰品小店，主打麵茶剉冰與健康黑糖與手工配料。店家資訊、招牌推薦與地圖連結一覽。';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FoodEstablishment',
        name: 'J室冰舖',
        image: ogImage,
        telephone: '0979721192',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '西門街1巷1號F棟',
            addressLocality: '板橋區',
            addressRegion: '新北市',
            addressCountry: 'TW',
        },
        url: canonicalUrl,
        description,
    };

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:secure_url" content={ogImage} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="2048" />
                <meta property="og:image:height" content="1152" />
                <meta property="og:image:alt" content="J室冰舖店面與招牌甜品" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:image:alt" content="J室冰舖店面與招牌甜品" />

                <meta name="robots" content="index,follow" />

                {/* JSON-LD */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>
        {/* Header (extracted) */}
        <Header />    
        <main className="j-ice-container">
            
            {/* 1. Hero Section */}
            {/* Uses the atmospheric shop background */}
            <div 
                className="j-hero" 
                style={{backgroundImage: 'url(/img/j-ice-shop/hero-bg.jpg)'}}
            >
                <div className="j-hero-overlay">
                    <h1>一碗冰，一個故事</h1>
                    <p>J室冰舖的純粹滋味之旅</p>
                </div>
            </div>

            {/* 2. Intro / Mission */}
            <section className="j-section j-quote-section">
                <div className="j-quote-text">
                    <p>「無論是炎炎夏日還是冷冷冬日，J室冰舖都是您放鬆心情、享受甜蜜時光的好去處！我們希望帶給大家最純粹的美味與幸福感。」</p>
                </div>
            </section>

            {/* 3. Location Story */}
            <section className="j-section">
                <div className="j-grid-2">
                    <div className="j-text-content">
                        <h3>巷弄中的溫暖角落</h3>
                        <p>
                            座落於板橋舊市區，鄰近林家花園與傳統市場。J室冰舖靜靜地座落在北門街與西門街交匯處的一角。
                        </p>
                        <p>
                            在這個充滿過度加工甜品的世界，我們選擇回歸傳統。每一份甜品，都是我們用心製作，為您獻上的真誠問候。
                        </p>
                        <p><strong>📍 地點：</strong>新北市板橋區西門街1巷1號F棟 (近林家花園)</p>
                        <p><strong>📞 電話：</strong>0979721192</p>
                    </div>
                    <div className="j-image-wrapper">
                        <img src="/img/j-ice-shop/shop-front.jpg" alt="J室冰舖店面" />
                    </div>
                </div>
            </section>

            {/* 4. Signature Dish: Miancha Ice */}
            <section className="j-section" style={{backgroundColor: '#fffcf5'}}>
                <h2 className="j-section-title">鎮店之寶：麵茶剉冰</h2>
                <div className="j-grid-2 j-grid-reverse">
                    <div className="j-image-wrapper">
                        <img src="/img/j-ice-shop/miancha-ice.jpg" alt="麵茶剉冰" />
                    </div>
                    <div className="j-text-content">
                        <h3>一碗與眾不同的滋味</h3>
                        <ul>
                            <li>
                                <strong>清脆冰體：</strong>以清水清冰打底，口感細脆，不易融化。
                            </li>
                            <li>
                                <strong>健康甘甜：</strong>嚴選健康黑糖，自然的甘甜滋味清爽不甜膩。麵茶自帶獨特香氣，無需額外加糖，身體負擔更少。
                            </li>
                            <li>
                                <strong>豐富層次：</strong>搭配多種新鮮配料，每一口都充滿驚喜與層次。這是我們姊妹倆用心製作，最純粹的幸福滋味。
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Gallery / Menu Highlights */}
            <section className="j-section">
                <h2 className="j-section-title">手作堅持</h2>
                <div className="j-features-grid">
                    
                    {/* Card 1: Pudding */}
                    <div className="j-feature-card">
                        <img src="/img/j-ice-shop/red-beans.JPG" alt="手工布丁" className="j-card-image" />
                        <div className="j-card-body">
                            <h4>新鮮食材</h4>
                            <p>每日備料，新鮮現煮。</p>
                        </div>
                    </div>

                    {/* Card 2: Toppings */}
                    <div className="j-feature-card">
                        <img src="/img/j-ice-shop/materials.JPG" alt="手工配料" className="j-card-image" />
                        <div className="j-card-body">
                            <h4>純粹配料</h4>
                            <p>用心熬煮的芋圓與配料，無添加的自然風味。</p>
                        </div>
                    </div>

                    {/* Card 3: Atmosphere */}
                    <div className="j-feature-card">
                        <img src="/img/j-ice-shop/shop-front2.jpg" alt="店內環境" className="j-card-image" />
                        <div className="j-card-body">
                            <h4>舒適空間</h4>
                            <p>等待每一個想尋求片刻甜蜜的過路人。</p>
                        </div>
                    </div>

                </div>
            </section>

        {/* ========================================= */}
                {/* NEW SECTION: Owner's Story (新增：姊妹創業故事) */}
                {/* ========================================= */}
                <div className="j-story-section">
                <div className="j-story-content">
                    <h2>姊妹的創業初心</h2>
                    <p>
                    我們是自家姊妹經營的冰品店，從冰涼品到熱甜品都有賣唷！當初創業是圓我們姊妹的一個夢，更是走出我們自己生命不同的路。
                    </p>
                    <p>
                    決定要開店那刻起，從裝潢、設備選購到食材的嚴選都親力親為。為此我們還先去上豆花的製作過程及甜品的煮法，吸收了不少食材的相關知識。
                    </p>
                    <p>
                    對於食材的選擇也有一定的堅持，希望能讓客人感覺到乾淨、吃起來健康又美味。未來我們也會依循自己規劃的腳步、穩扎穩打，不斷推陳出新來回饋我們的冰友們。
                    </p>
                </div>
                </div>

            {/* 6. Footer CTA */}
            <section className="j-section" style={{textAlign: 'center', padding: '4rem 1rem'}}>
                <h3>準備好來一碗純粹的幸福了嗎？</h3>
                <p style={{marginBottom: '2rem'}}>期待您的光臨</p>
                <div style={{marginTop: '20px'}}>
                     <a
                         href="https://maps.app.goo.gl/dHTQGsXJkQCwCkpy9"
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label="Open Google Maps for J Ice Shop location"
                         style={{
                             display: 'inline-block',
                             background: '#d35400', 
                             color: 'white', 
                             textDecoration: 'none',
                             padding: '12px 24px', 
                             fontSize: '1.2rem', 
                             borderRadius: '50px',
                             cursor: 'pointer'
                         }}
                     >
                         查看地圖
                     </a>
                </div>
            </section>

        </main>
        <Footer />
    </div>    
);
}