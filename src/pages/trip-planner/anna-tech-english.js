import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { useTranslation } from 'react-i18next';

// Multilingual Content Dictionary from Docx Assets
const contentData = {
    zh: {
        hero: {
            title: "Anna 科技英語",
            subtitle: "接軌未來的英語學習群組",
            desc: "結合世界新聞、尖端 AI 知識、專業職場英語與跨文化交流，專為年輕世代、科技人士與語言學習者打造的線上與實體學習社群。",
            visionBtn: "了解我們的願景",
            coursesBtn: "瀏覽課程與活動",
        },
        langSwitchLabel: "切換語言 / Language:",
        sections: {
            visionTitle: "我們的使命與願景",
            ecosystemTitle: "無縫接軌的 O2O 學習生態與特色",
            galleryTitle: "課程精彩回顧",
            ageCatalogTitle: "全方位英語課程目錄 (按年齡與需求)",
            thematicTitle: "專題與特色課程 (Thematic Courses)",
            excursionsTitle: "免費實體戶外踏青與英文交流活動",
            aiTechTitle: "AI 實戰與前沿科技專題講座",
            contactTitle: "聯絡資訊與加入學習群組",
        },
        visionCards: [
            {
                icon: "👥",
                title: "我們的社群",
                desc: "專為年輕世代、科技專業人士與熱愛英文的學習者打造的專屬社群。在這裡，你不只學習語言，更建立跨領域連結。"
            },
            {
                icon: "🚀",
                title: "我們的核心",
                desc: "聚焦世界趨勢、前沿科技新聞、檢定證照與 AI 實戰英語。學會使用最強大的工具與語言力，掌握未來職場話語權。"
            },
            {
                icon: "⛪",
                title: "我們的願景",
                desc: "在科技與知識的交流中建立深厚連結，並在溫馨的社群中共享學習價值與跨文化思維，讓學習成為一份祝福。"
            }
        ],
        ageTabs: {
            all: "全部課程",
            highschool: "16-18歲 高中生",
            university: "19-22歲 大學生",
            adults: "22歲+ 社會人士"
        },
        ageGroupCourses: [
            {
                id: "highschool",
                ageTitle: "16–18歲 高中生課程",
                badgeColor: "anna-badge-blue",
                courses: [
                    {
                        title: "全民英檢課程 (GEPT Preparation)",
                        duration: "3 小時 (共 180 分鐘)",
                        fee: "NT$ 1,200",
                        size: "採小班制 (4–6人)",
                        startDate: "2026 年 11 月 22 日 (14:00–17:00)",
                        components: ["聽力訓練", "文法講授", "閱讀理解", "寫作技巧"],
                        desc: "扎實訓練 GEPT 聽、說、讀、寫四大核心能力，全面解析文法重點與寫作架構，奠定良好英語實力。"
                    }
                ]
            },
            {
                id: "university",
                ageTitle: "19–22歲 大學生英文課程",
                badgeColor: "anna-badge-emerald",
                courses: [
                    {
                        title: "多益證照班 (TOEIC Certification Prep)",
                        duration: "3 小時",
                        fee: "NT$ 1,200",
                        size: "採小班制 (4–6人)",
                        startDate: "2026 年 11 月 8 日 (14:00–17:00)",
                        components: ["聽力訓練", "文法講授", "閱讀測驗", "口說應用"],
                        desc: "系統化拆解多益聽力與閱讀高頻考點，兼顧口說實戰，助你順利達成畢業門檻與求職利器。"
                    },
                    {
                        title: "日常英文會話班 (Daily Conversational English)",
                        duration: "3 小時 (依主題收費)",
                        fee: "NT$ 1,200",
                        size: "情境互動班",
                        startDate: "2026 年 12 月 13 日 (14:00–17:00)",
                        components: ["社交溝通", "出國旅遊", "生活文化", "口說溝通技巧"],
                        desc: "情境式演練社交對話、旅遊英語與日常文化交流，重點培養自信開口與流暢表達技巧。"
                    },
                    {
                        title: "雅思備考班 (IELTS Prep)",
                        duration: "3 小時",
                        fee: "NT$ 1,200",
                        size: "採小班制 (4–6人)",
                        startDate: "2027 年 1 月 10 日 (14:00–17:00)",
                        components: ["聽力訓練", "文法講授", "閱讀理解", "口說演練"],
                        desc: "針對計畫海外留學與交換學生，深入解析雅思邏輯思維與學術/通用類應務備考策略。"
                    }
                ]
            },
            {
                id: "adults",
                ageTitle: "22歲以上 社會人士與職場菁英課程",
                badgeColor: "anna-badge-purple",
                courses: [
                    {
                        title: "商用英文與多益證照班 (Business English & TOEIC Certification)",
                        duration: "3 小時 (依主題收費)",
                        fee: "NT$ 1,200",
                        size: "精緻小班",
                        startDate: "2026 年 12 月 6 日 (14:00–17:00)",
                        components: ["口說實戰", "聽力理解", "商務文法", "專業字彙"],
                        topics: ["商務應用", "商務旅遊", "接待外賓", "商務會議", "面試英文技巧", "簡報能力"],
                        desc: "專為職場人士打造，著重國際商務溝通、簡報展示、會議談判與外賓接待實務技巧。"
                    },
                    {
                        title: "日常英文會話班 (Daily Conversational English)",
                        duration: "3 小時 (依主題收費)",
                        fee: "NT$ 1,200",
                        size: "情境互動班",
                        startDate: "2026 年 12 月 13 日 (14:00–17:00)",
                        components: ["社交對話", "出國旅遊", "生活文化", "口說表達技巧"],
                        desc: "打破開口恐懼，輕鬆掌握國際社交、旅遊與日常生活各類主題溝通能力。"
                    }
                ]
            }
        ],
        thematicCourses: [
            {
                title: "1. 辯論能力主題課程 (English Debate & Public Speaking)",
                fee: "NT$ 1,200 / 3小時",
                size: "採小班制 (4–6人)",
                startDate: "2027 年 1 月 24 日 (14:00–17:00)",
                benefits: [
                    "訓練英文演講的架構與表達邏輯",
                    "培養閱讀大量英文資料並尋找佐證支持論點的能力",
                    "擴充並靈活運用高階實用語彙",
                    "強化英文聽力理解與即時口語應對反應",
                    "鍛鍊批判性思考、邏輯能力與多角度分析利弊真相",
                    "探討國際觀點與全球時事議題",
                    "對高中生與大學生提供學測英文作文的架構邏輯訓練"
                ]
            },
            {
                title: "2. 跨文化主題課程 (Cross-Cultural Communication Topics)",
                fee: "NT$ 1,200 / 3小時",
                size: "採小班制 (4–6人)",
                startDate: "2027 年 2 月 21 日 (14:00–17:00)",
                benefits: [
                    "增進跨文化溝通與減少人際與職場跨文化衝突",
                    "提升職場全球移動力、跨國團隊適應力與談判協商能力",
                    "打破文化偏見，實踐多元、平等與包容 (DEI) 價值",
                    "跳脫單一文化本位思考，培養開闊國際視野與批判性思考"
                ]
            }
        ],
        excursions: [
            {
                title: "郊外踏青與英文交流 — 故宮博物院之旅",
                fee: "免費課程 (附講義)",
                size: "小班制 (6–10人)",
                startDate: "2026 年 10 月 4 日",
                desc: "結合戶外健走與故宮博物院導覽，在輕鬆大自然與文化氛圍中進行全英文討論與主題交流。"
            },
            {
                title: "郊外踏青 — 鶯歌老街 + 鶯歌陶瓷博物館之旅",
                fee: "免費課程 (附講義)",
                size: "小班制 (6–10人)",
                startDate: "2026 年 10 月 18 日",
                desc: "走訪臺灣陶瓷藝術重鎮鶯歌老街與陶瓷博物館，邊踏青邊學習用道地英文介紹臺灣傳統工藝。"
            }
        ],
        features: [
            {
                num: "01",
                title: "精準設計與外師補充教材",
                desc: "課本主題精心設計，並搭配來自外國老師生動活潑的實戰補充教材。"
            },
            {
                num: "02",
                title: "溫馨小班與豐富口說",
                desc: "堅持小班教學環境，提供最多口說練習機會，結交好友並享受歡樂學習。"
            },
            {
                num: "03",
                title: "專屬 Line 群組社群",
                desc: "加入「英語大講堂」LINE 社群，課前發送教材、發佈資訊與 monthly 主題互動。"
            },
            {
                num: "04",
                title: "實體多元戶外活動",
                desc: "搭配郊外踏青與博物館導覽，豐富英文實力，也讓學習走入日常生活。"
            }
        ],
        aiCourses: [
            {
                date: "3月15日 (14:00-17:00)",
                tagClass: "anna-tag-blue",
                title: "AI + English：再生能源與行銷工具",
                desc: "探索「釷」核能、固態電池等前沿技術，並學會使用 AI 工具加速專案流程。",
                bullets: [
                    "🔹 再生能源：釷 (Thorium) 核發電、波浪能、生質燃料、Donut labs 固態電池。",
                    "🔹 AI 工具：Google AI Studio, Gemini, SEEDREAM 等進階應用。",
                    "🔹 數位行銷：利用 AI 進行 IG/FB 品牌形象建立與自動化行銷。"
                ]
            },
            {
                date: "4月19日 (14:00-17:00)",
                tagClass: "anna-tag-green",
                title: "新一代 AI：從「對話」到「執行」",
                desc: "深入探討 AI Agents 是如何從被動問答進化為主動替你完成工作的「執行者」。",
                bullets: [
                    "🔹 AI 代理 (Agents)：掌握自動化工具，從數百頁 PDF 抓取數據並產出報表。",
                    "🔹 雙強對決：ChatGPT (跑腿助理) vs Gemini (辦公助手) 的實戰應用場景。",
                    "🔹 風險控管：破解「提示注入 (Prompt Injection)」陷阱，守護數據隱私。"
                ]
            },
            {
                date: "9月13日 (14:00-17:00)",
                tagClass: "anna-tag-purple",
                title: "Precision Research & Multi-Modal Communications in the AI Era",
                desc: "掌握 AI 時代的精準研究與多模態溝通技巧，利用 Gemini Notebook 進行深度分析與自動化代理實戰。",
                bullets: [
                    "🔹 Gemini Notebook 核心功能：掌握 Grounded sources、深度研究與分析、切換來源、建立資料表與心智圖。",
                    "🔹 多模態溝通與自訂報告：產生自訂報告、語音總覽 (Audio Overviews)、吸睛資訊圖表、互動式閃卡與學習指南。",
                    "🔹 AI 學習與電子郵件/行銷代理：將 Notebook 作為學習工具，建立對接電子郵件與行銷名單的 AI 代理人。"
                ]
            }
        ],
        contact: {
            title: "準備好接軌未來了嗎？",
            subtitle: "歡迎直接加入我們的學習社群！教室地點與戶外教學集合地點將於群組內正式公佈。",
            phoneTitle: "電話聯繫",
            phoneVal: "0984-452-489",
            lineTitle: "Line ID (加入學習群組)",
            lineVal: "0984-452-489",
            lineDesc: "請加 Anna 老師 Line ID，加 Line 後老師將引導您進入社群群組！",
            emailTitle: "電子郵件",
            emailVal: "cedrusanna@proton.me"
        }
    },
    en: {
        hero: {
            title: "Anna Tech English",
            subtitle: "Connecting You to the Future of English Learning",
            desc: "Combining world news, cutting-edge AI knowledge, professional English, and cross-cultural exchange. Designed for young adults, tech professionals, and language learners.",
            visionBtn: "Our Vision",
            coursesBtn: "Explore Courses",
        },
        langSwitchLabel: "Language / 語言選擇:",
        sections: {
            visionTitle: "Our Mission & Vision",
            ecosystemTitle: "Seamless O2O Learning Ecosystem & Highlights",
            galleryTitle: "Class Highlights & Moments",
            ageCatalogTitle: "Course Offerings by Age Group & Goal",
            thematicTitle: "Specialized Thematic Courses",
            excursionsTitle: "Free In-Person Outdoor Excursions & Language Exchange",
            aiTechTitle: "AI Practical & Tech Workshops",
            contactTitle: "Contact Information & Join Community",
        },
        visionCards: [
            {
                icon: "👥",
                title: "Our Community",
                desc: "An exclusive community built for young generations, tech professionals, and passionate English learners to build genuine connections."
            },
            {
                icon: "🚀",
                title: "Our Core Focus",
                desc: "Focusing on global trends, frontier tech news, standardized certification, and AI practical English to empower your career in the future."
            },
            {
                icon: "⛪",
                title: "Our Vision",
                desc: "Building meaningful relationships through tech discussions and knowledge sharing, while spreading positive values and cultural mindset."
            }
        ],
        ageTabs: {
            all: "All Courses",
            highschool: "Ages 16–18 (High School)",
            university: "Ages 19–22 (University)",
            adults: "Ages 22+ (Adults / Professionals)"
        },
        ageGroupCourses: [
            {
                id: "highschool",
                ageTitle: "High School Students (Ages 16–18)",
                badgeColor: "anna-badge-blue",
                courses: [
                    {
                        title: "GEPT Preparation (General English Proficiency Test)",
                        duration: "3 Hours (180 mins total)",
                        fee: "NT$ 1,200",
                        size: "Small class (4–6 students)",
                        startDate: "November 22, 2026 (14:00–17:00)",
                        components: ["Listening", "Grammar", "Reading", "Writing"],
                        desc: "Comprehensive preparation across listening, grammar, reading, and writing modules for GEPT success."
                    }
                ]
            },
            {
                id: "university",
                ageTitle: "University Students (Ages 19–22)",
                badgeColor: "anna-badge-emerald",
                courses: [
                    {
                        title: "TOEIC Certification Prep",
                        duration: "3 Hours",
                        fee: "NT$ 1,200",
                        size: "Small class (4–6 students)",
                        startDate: "November 8, 2026 (14:00–17:00)",
                        components: ["Listening", "Grammar", "Reading", "Speaking"],
                        desc: "Master high-frequency TOEIC listening and reading modules while enhancing speaking confidence for graduation and career goals."
                    },
                    {
                        title: "Daily Conversational English",
                        duration: "3 Hours (Priced per topic)",
                        fee: "NT$ 1,200",
                        size: "Interactive Class",
                        startDate: "December 13, 2026 (14:00–17:00)",
                        components: ["Socializing", "Travel Abroad", "Daily Life & Culture", "Speaking Skills"],
                        desc: "Scenario-based speaking practice covering social networking, overseas travel, and lifestyle culture."
                    },
                    {
                        title: "IELTS Prep",
                        duration: "3 Hours",
                        fee: "NT$ 1,200",
                        size: "Small class (4–6 students)",
                        startDate: "January 10, 2027 (14:00–17:00)",
                        components: ["Listening", "Grammar", "Reading", "Speaking"],
                        desc: "Designed for study abroad candidates, breaking down academic and general IELTS logic and exam strategies."
                    }
                ]
            },
            {
                id: "adults",
                ageTitle: "Adults / Working Professionals (Ages 22+)",
                badgeColor: "anna-badge-purple",
                courses: [
                    {
                        title: "Business English & TOEIC Certification",
                        duration: "3 Hours (Priced per topic)",
                        fee: "NT$ 1,200",
                        size: "Small class setting",
                        startDate: "December 6, 2026 (14:00–17:00)",
                        components: ["Speaking", "Listening", "Grammar", "Vocabulary"],
                        topics: ["Business Applications", "Business Travel", "Hosting Foreign Guests", "Business Meetings", "Job Interview Skills", "Presentation Skills"],
                        desc: "Tailored for working professionals to master business travel, hosting foreign guests, meetings, interviews, and presentations."
                    },
                    {
                        title: "Daily Conversational English",
                        duration: "3 Hours (Priced per topic)",
                        fee: "NT$ 1,200",
                        size: "Interactive Class",
                        startDate: "December 13, 2026 (14:00–17:00)",
                        components: ["Socializing", "Travel Abroad", "Daily Life & Culture", "Speaking Skills"],
                        desc: "Overcome speaking hesitation with engaging discussions on diverse real-world topics."
                    }
                ]
            }
        ],
        thematicCourses: [
            {
                title: "1. English Debate & Public Speaking",
                fee: "NT$ 1,200 / 3 Hours",
                size: "Small class (4–6 students)",
                startDate: "January 24, 2027 (14:00–17:00)",
                benefits: [
                    "Master English speech structures and public presentation flow",
                    "Build high-volume reading & evidence-gathering skills to back up arguments",
                    "Expand active vocabulary and sophisticated sentence patterns",
                    "Enhance real-time listening comprehension and spoken expression",
                    "Sharpen critical thinking, logic, and multi-perspective analysis",
                    "Explore global issues and factual truths across international perspectives",
                    "Train high school & university students in GSAT essay writing structure"
                ]
            },
            {
                title: "2. Cross-Cultural Communication Topics",
                fee: "NT$ 1,200 / 3 Hours",
                size: "Small class (4–6 students)",
                startDate: "February 21, 2027 (14:00–17:00)",
                benefits: [
                    "Improve cross-cultural communication and reduce interpersonal/workplace conflict",
                    "Boost career competitiveness, global mobility, and negotiation skills in multinational settings",
                    "Break down bias and practice Diversity, Equity, and Inclusion (DEI)",
                    "Cultivate critical thinking beyond single-culture perspectives"
                ]
            }
        ],
        excursions: [
            {
                title: "Outdoor Walk & English Exchange — National Palace Museum Tour",
                fee: "Free Event (Handouts Provided)",
                size: "Capacity: 6–10 people",
                startDate: "October 4, 2026",
                desc: "Combine outdoor walking with museum cultural tours, practicing English in an enjoyable social atmosphere."
            },
            {
                title: "Outdoor Excursion — Yingge Old Street & Ceramics Museum Tour",
                fee: "Free Event (Handouts Provided)",
                size: "Capacity: 6–10 people",
                startDate: "October 18, 2026",
                desc: "Explore Yingge ceramics heritage while practicing English descriptions of local art and Taiwanese traditional craft."
            }
        ],
        features: [
            {
                num: "01",
                title: "Tailored Curriculum & Native Materials",
                desc: "Custom-designed textbook modules supplemented with dynamic materials from native English-speaking teachers."
            },
            {
                num: "02",
                title: "Small Class Setting for Max Speaking",
                desc: "Intimate class environments ensuring maximum speaking practice, making friends, and enjoyable learning."
            },
            {
                num: "03",
                title: "Exclusive LINE Community Group",
                desc: "Join our LINE group chat for course materials, announcements, and monthly language exchange events."
            },
            {
                num: "04",
                title: "In-Person Outdoor Excursions",
                desc: "Regular outdoor walks and museum tours that bring English practice naturally into real life."
            }
        ],
        aiCourses: [
            {
                date: "March 15 (14:00-17:00)",
                tagClass: "anna-tag-blue",
                title: "AI + English: Renewable Energy & Marketing Tools",
                desc: "Explore Thorium nuclear energy, solid-state batteries, and learn AI tools to accelerate project workflows.",
                bullets: [
                    "🔹 Renewable Energy: Thorium nuclear power, wave energy, biofuels, Donut labs solid-state batteries.",
                    "🔹 AI Tools: Google AI Studio, Gemini, SEEDREAM advanced applications.",
                    "🔹 Digital Marketing: IG/FB brand image building and automated marketing with AI."
                ]
            },
            {
                date: "April 19 (14:00-17:00)",
                tagClass: "anna-tag-green",
                title: "Next-Gen AI: From Conversation to Execution",
                desc: "Explore how AI Agents evolve from passive Q&A into active task execution agents.",
                bullets: [
                    "🔹 AI Agents: Master automation tools to extract data from hundreds of PDF pages into reports.",
                    "🔹 Showdown: ChatGPT vs Gemini practical workflow scenarios.",
                    "🔹 Risk Control: Neutralize Prompt Injection risks and safeguard data privacy."
                ]
            },
            {
                date: "September 13 (14:00-17:00)",
                tagClass: "anna-tag-purple",
                title: "Precision Research & Multi-Modal Communications in the AI Era",
                desc: "Master precision research and multi-modal communications using Gemini Notebook.",
                bullets: [
                    "🔹 Gemini Notebook Core: Grounded sources, deep research, switching sources, table & mind map generation.",
                    "🔹 Multi-Modal & Reports: Custom reports, Audio Overviews, infographics, flashcards & study guides.",
                    "🔹 AI Agents: Build email & marketing list AI agents for practical hands-on exercises."
                ]
            }
        ],
        contact: {
            title: "Ready to Connect to the Future?",
            subtitle: "Join our learning community today! Classroom and outdoor meeting locations will be announced in the chat group.",
            phoneTitle: "Phone Contact",
            phoneVal: "0984-452-489",
            lineTitle: "Line ID (Join Chat Group)",
            lineVal: "0984-452-489",
            lineDesc: "Please add Teacher Anna on Line ID to be invited into the exclusive chat group!",
            emailTitle: "Email Contact",
            emailVal: "cedrusanna@proton.me"
        }
    }
};

export default function AnnaTechEnglish() {
    const { siteConfig, i18n: docusaurusI18n } = useDocusaurusContext();
    const { i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');

    // Language determination connected to Header dropdown / i18n
    const currentLang = i18n?.language || docusaurusI18n?.currentLocale || 'zh';
    const lang = currentLang.startsWith('en') ? 'en' : 'zh';

    const data = contentData[lang];
    const title = lang === 'zh' ? 'Anna 科技英語 — 接軌未來的英語學習群組' : 'Anna Tech English — Connecting You to the Future';
    const description = data.hero.desc;
    const ogImage = useBaseUrl('/img/anna-tech-english/hero-bg.png');

    // Filter courses by age group
    const filteredAgeGroups = activeTab === 'all'
        ? data.ageGroupCourses
        : data.ageGroupCourses.filter(g => g.id === activeTab);

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
                            {data.hero.title} <br />
                            <span className="text-blue-600">{data.hero.subtitle}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            {data.hero.desc}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#vision" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition transform hover:-translate-y-1">
                                {data.hero.visionBtn}
                            </a>
                            <a href="#courses" className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold hover:bg-blue-50 transition transform hover:-translate-y-1">
                                {data.hero.coursesBtn}
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. Vision Section */}
                <section id="vision" className="anna-section">
                    <h2 className="anna-section-title">{data.sections.visionTitle}</h2>
                    <div className="anna-circle-container">
                        {data.visionCards.map((card, idx) => (
                            <div key={idx} className={`anna-circle-card ${idx === 1 ? 'border-blue-200 bg-blue-50' : ''}`}>
                                <div className="anna-circle-icon">{card.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                <p className="text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Course Features & Ecosystem Section */}
                <section className="bg-gray-50 py-20">
                    <div className="anna-section">
                        <h2 className="anna-section-title">{data.sections.ecosystemTitle}</h2>
                        <div className="anna-eco-grid">
                            {data.features.map((item, idx) => (
                                <div key={idx} className="anna-eco-step">
                                    <span className="anna-eco-num">{item.num}</span>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Age Group Course Catalog Section */}
                <section id="courses" className="anna-section">
                    <h2 className="anna-section-title">{data.sections.ageCatalogTitle}</h2>

                    {/* Age Tabs */}

                    {/* Age Tabs */}
                    <div className="anna-tab-group">
                        <button
                            className={`anna-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            {data.ageTabs.all}
                        </button>
                        <button
                            className={`anna-tab-btn ${activeTab === 'highschool' ? 'active' : ''}`}
                            onClick={() => setActiveTab('highschool')}
                        >
                            {data.ageTabs.highschool}
                        </button>
                        <button
                            className={`anna-tab-btn ${activeTab === 'university' ? 'active' : ''}`}
                            onClick={() => setActiveTab('university')}
                        >
                            {data.ageTabs.university}
                        </button>
                        <button
                            className={`anna-tab-btn ${activeTab === 'adults' ? 'active' : ''}`}
                            onClick={() => setActiveTab('adults')}
                        >
                            {data.ageTabs.adults}
                        </button>
                    </div>

                    {/* Age Group Grids */}
                    <div className="space-y-12">
                        {filteredAgeGroups.map((group) => (
                            <div key={group.id} className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`anna-badge ${group.badgeColor}`}>
                                        {lang === 'zh' ? '年齡分層' : 'Age Group'}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800">{group.ageTitle}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.courses.map((course, idx) => (
                                        <div key={idx} className="anna-catalog-card">
                                            <h4 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h4>
                                            <p className="text-gray-600 text-sm mb-4">{course.desc}</p>

                                            <div className="anna-detail-grid">
                                                <div className="anna-detail-item">
                                                    <span className="anna-detail-label">{lang === 'zh' ? '時數/費用' : 'Fee'}</span>
                                                    <span className="anna-detail-val text-blue-700">{course.fee}</span>
                                                </div>
                                                <div className="anna-detail-item">
                                                    <span className="anna-detail-label">{lang === 'zh' ? '班級人數' : 'Class Size'}</span>
                                                    <span className="anna-detail-val">{course.size}</span>
                                                </div>
                                                <div className="anna-detail-item col-span-2">
                                                    <span className="anna-detail-label">{lang === 'zh' ? '開課時間' : 'Start Date'}</span>
                                                    <span className="anna-detail-val text-emerald-700">{course.startDate}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-slate-100">
                                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                                    {lang === 'zh' ? '課程涵蓋核心 (Components)' : 'Course Focus & Components'}
                                                </span>
                                                <ul className="anna-checklist">
                                                    {course.components.map((comp, cIdx) => (
                                                        <li key={cIdx}>{comp}</li>
                                                    ))}
                                                </ul>

                                                {course.topics && (
                                                    <div className="mt-3 pt-2">
                                                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                            {lang === 'zh' ? '主題單元 (Topics)' : 'Key Business Topics'}
                                                        </span>
                                                        <div className="flex flex-wrap gap-1">
                                                            {course.topics.map((top, tIdx) => (
                                                                <span key={tIdx} className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded text-xs font-semibold">
                                                                    {top}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Specialized Thematic Courses */}
                <section className="anna-section bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                    <h2 className="anna-section-title">{data.sections.thematicTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.thematicCourses.map((tc, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
                                <div>
                                    <span className="anna-badge anna-badge-purple mb-3">
                                        {lang === 'zh' ? '進階實戰' : 'Advanced Focus'}
                                    </span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{tc.title}</h3>

                                    <div className="anna-detail-grid">
                                        <div className="anna-detail-item">
                                            <span className="anna-detail-label">{lang === 'zh' ? '費用/時數' : 'Fee'}</span>
                                            <span className="anna-detail-val text-blue-700">{tc.fee}</span>
                                        </div>
                                        <div className="anna-detail-item">
                                            <span className="anna-detail-label">{lang === 'zh' ? '班級人數' : 'Class Size'}</span>
                                            <span className="anna-detail-val">{tc.size}</span>
                                        </div>
                                        <div className="anna-detail-item col-span-2">
                                            <span className="anna-detail-label">{lang === 'zh' ? '開課日期' : 'Start Date'}</span>
                                            <span className="anna-detail-val text-purple-700">{tc.startDate}</span>
                                        </div>
                                    </div>

                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                                        {lang === 'zh' ? '學習核心效益 (Core Benefits)' : 'Core Learning Benefits'}
                                    </h4>
                                    <ul className="anna-checklist">
                                        {tc.benefits.map((b, bIdx) => (
                                            <li key={bIdx}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Free Outdoor Excursions Section */}
                <section className="anna-section">
                    <h2 className="anna-section-title">{data.sections.excursionsTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.excursions.map((exc, idx) => (
                            <div key={idx} className="bg-emerald-50/60 rounded-2xl p-6 md:p-8 border border-emerald-200">
                                <span className="anna-badge anna-badge-emerald mb-3">
                                    {lang === 'zh' ? '免費實體活動' : 'Free Outdoor Activity'}
                                </span>
                                <h3 className="text-2xl font-bold text-emerald-950 mb-3">{exc.title}</h3>
                                <p className="text-slate-700 mb-4">{exc.desc}</p>
                                <div className="anna-detail-grid bg-white">
                                    <div className="anna-detail-item">
                                        <span className="anna-detail-label">{lang === 'zh' ? '費用' : 'Fee'}</span>
                                        <span className="anna-detail-val text-emerald-600">{exc.fee}</span>
                                    </div>
                                    <div className="anna-detail-item">
                                        <span className="anna-detail-label">{lang === 'zh' ? '人數限制' : 'Capacity'}</span>
                                        <span className="anna-detail-val">{exc.size}</span>
                                    </div>
                                    <div className="anna-detail-item col-span-2">
                                        <span className="anna-detail-label">{lang === 'zh' ? '活動日期' : 'Date'}</span>
                                        <span className="anna-detail-val text-emerald-800">{exc.startDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. AI & Tech Workshops */}
                <section className="anna-section">
                    <h2 className="anna-section-title">{data.sections.aiTechTitle}</h2>
                    <div className="anna-course-grid">
                        {data.aiCourses.map((aiC, idx) => (
                            <div key={idx} className="anna-course-card">
                                <div
                                    className="anna-course-img"
                                    style={{
                                        backgroundImage: `url(${useBaseUrl(
                                            idx === 0 ? '/img/anna-tech-english/course-315.png' :
                                                idx === 1 ? '/img/anna-tech-english/course-419.png' :
                                                    '/img/anna-tech-english/ai-era-research-communication.jpeg'
                                        )})`
                                    }}
                                ></div>
                                <div className="anna-course-content">
                                    <span className={`anna-tag ${aiC.tagClass}`}>{aiC.date}</span>
                                    <h3 className="text-2xl font-bold mb-4 text-blue-900">{aiC.title}</h3>
                                    <p className="text-gray-600 mb-6 font-semibold">{aiC.desc}</p>
                                    <div className="space-y-3 text-sm text-gray-600">
                                        {aiC.bullets.map((b, bIdx) => (
                                            <p key={bIdx}>{b}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. Gallery Section */}
                <section className="anna-section">
                    <h2 className="anna-section-title">{data.sections.galleryTitle}</h2>
                    <div className="anna-gallery-grid">
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-1.jpg')} alt="Class Moment 1" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-4.jpg')} alt="Class Moment 2" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/class-5.jpg')} alt="Class Moment 3" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/20260531-photo1.JPG')} alt="Class Moment 4" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/20260531-photo2.JPG')} alt="Class Moment 5" className="anna-gallery-img" />
                        </div>
                        <div className="anna-gallery-item">
                            <img src={useBaseUrl('/img/anna-tech-english/20260531-photo3.JPG')} alt="Class Moment 6" className="anna-gallery-img" />
                        </div>
                    </div>
                </section>

                {/* 9. Contact Section */}
                <section className="anna-section text-center bg-slate-900 text-white rounded-3xl mb-20 mx-4 p-8 md:p-14">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{data.contact.title}</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {data.contact.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Phone */}
                        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
                            <div className="w-14 h-14 bg-blue-600/30 rounded-full flex items-center justify-center mb-3 text-2xl text-blue-400">
                                📞
                            </div>
                            <span className="text-gray-400 text-sm mb-1">{data.contact.phoneTitle}</span>
                            <a href={`tel:${data.contact.phoneVal}`} className="text-xl font-bold text-white hover:text-blue-400 transition">
                                {data.contact.phoneVal}
                            </a>
                        </div>

                        {/* LINE ID */}
                        <div className="bg-slate-800/80 p-6 rounded-2xl border border-emerald-500/30 flex flex-col items-center">
                            <div className="w-14 h-14 bg-emerald-500/30 rounded-full flex items-center justify-center mb-3 text-2xl text-emerald-400">
                                💬
                            </div>
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{data.contact.lineTitle}</span>
                            <a href={`https://line.me/ti/p/~${data.contact.lineVal}`} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-emerald-400 transition">
                                {data.contact.lineVal}
                            </a>
                            <p className="text-xs text-gray-400 mt-2">{data.contact.lineDesc}</p>
                        </div>

                        {/* Email */}
                        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col items-center">
                            <div className="w-14 h-14 bg-purple-600/30 rounded-full flex items-center justify-center mb-3 text-2xl text-purple-400">
                                ✉️
                            </div>
                            <span className="text-gray-400 text-sm mb-1">{data.contact.emailTitle}</span>
                            <a href={`mailto:${data.contact.emailVal}`} className="text-lg font-bold text-white hover:text-purple-400 transition break-all">
                                {data.contact.emailVal}
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
