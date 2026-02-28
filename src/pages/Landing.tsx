import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AcidTextMarquee } from '../components/AcidTextMarquee';
import { AcidCarousel } from '../components/AcidCarousel';
import { AcidTypingText } from '../components/AcidTypingText';
import { AcidVideoText } from '../components/AcidVideoText';
import { AcidProgress } from '../components/AcidProgress';
import { AcidTerminalCard } from '../components/AcidTerminalCard';
import { AcidCodeBlock } from '../components/AcidCodeBlock';
import { AcidBadge } from '../components/AcidBadge';
import { Github, Activity, Layout, ArrowRight, Monitor, Cpu } from 'lucide-react';
import { AcidSEO } from '../components/AcidSEO';
import './Landing.css';

export function Landing() {
    const browseItems = [
        { title: 'Core UI', count: 12, icon: <Layout size={20} />, id: 'ui' },
        { title: 'Navigation', count: 8, icon: <Activity size={20} />, id: 'nav' },
        { title: 'Layouts', count: 14, icon: <Monitor size={20} />, id: 'layout' },
        { title: 'Visuals', count: 9, icon: <Cpu size={20} />, id: 'viz' },
    ];

    return (
        <div className="landing-min-container">
            <AcidSEO
                title="Industrial Grade React Interface"
                description="AcidUI Core - The only structural UI library that focuses on absolute precision, high-performance web applications, and kinetic feedback."
                keywords="React, UI Library, Framer Motion, Industrial UI, Web Development, Tailwind"
            />

            <div className="landing-noise" />

            {/* ---- HERO NO.1: Factory.ai style ---- */}
            <section className="hero-min-section ac-container">
                <div className="hero-min-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-min-left"
                    >
                        <div className="hero-status">
                            <span className="status-dot pulse" />
                            <span className="status-text">SYSTEM_READY // v1.2.0</span>
                        </div>
                        <h1 className="hero-min-title">
                            Agent-Native <br />
                            Software <br />
                            Development
                        </h1>

                        <p className="hero-min-desc">
                            The first structural UI library engineered for the agentic era.
                            Build mission-critical interfaces with absolute precision and
                            zero-latency visual feedback.
                        </p>

                        <div className="hero-min-actions">
                            <Link to="/docs" className="hero-primary-btn">
                                GET_STARTED <ArrowRight size={16} />
                            </Link>
                            <a href="https://github.com/korybantes/acidui" className="hero-secondary-btn">
                                <Github size={18} /> VIEW_SOURCE
                            </a>
                        </div>

                        <div className="hero-install-box">
                            <span className="install-label">DEPLOY_INSTANCE:</span>
                            <AcidCodeBlock code="npm i acidui-core" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-min-right"
                    >
                        <AcidTerminalCard title="registry_sync.log">
                            <AcidTypingText
                                text={'> Connecting to AcidUI Core...\n> Synchronizing structural nodes... [DONE]\n> Optimizing kinetic buffers... [DONE]\n\nSYSTEM_BOOT: SUCCESSFUL'}
                                speed={20}
                            />
                            <div className="terminal-stats">
                                <div className="stat-node">
                                    <span className="stat-label">LATENCY</span>
                                    <span className="stat-value">0.4ms</span>
                                    <AcidProgress value={95} variant="brand" />
                                </div>
                                <div className="stat-node">
                                    <span className="stat-label">UPTIME</span>
                                    <span className="stat-value">99.9%</span>
                                    <AcidProgress value={99} variant="success" />
                                </div>
                            </div>
                        </AcidTerminalCard>
                    </motion.div>
                </div>
            </section>

            {/* ---- MARQUEE ---- */}
            <div className="marquee-divider">
                <AcidTextMarquee text="* ACIDUI_CORE_V1 * ACIDUI_CORE_V1 * STRUCTURAL_INTEGRITY * METRICS_ONLINE * HIGH_DENSITY_INTERFACE" speed={25} />
            </div>

            {/* ---- BROWSE ALL SECTION (Grid Layout) ---- */}
            <section className="landing-browse-section ac-container">
                <div className="section-header">
                    <span className="ps-tag">CATALOG_INDEX</span>
                    <h2 className="section-title">Explore the Ecosystem.</h2>
                </div>

                <div className="browse-grid">
                    {browseItems.map((item) => (
                        <Link to={`/docs#${item.id}`} key={item.id} className="browse-card">
                            <div className="browse-card-inner">
                                <div className="browse-icon">{item.icon}</div>
                                <div className="browse-content">
                                    <h3 className="browse-title">{item.title}</h3>
                                    <span className="browse-count">{item.count} UNITS</span>
                                </div>
                                <div className="browse-arrow">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="browse-card cta-card">
                        <div className="browse-card-inner">
                            <div className="browse-content">
                                <h3 className="browse-title">Studio Alpha</h3>
                                <span className="browse-count">COMING_SOON</span>
                            </div>
                            <AcidBadge variant="outline">EARLY_ACCESS</AcidBadge>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- SHOWCASE ADVERTISING (Bento Grid) ---- */}
            <section className="landing-showcase-section ac-container">
                <div className="section-header">
                    <span className="ps-tag">COMPONENT_SHOWCASE</span>
                    <h2 className="section-title">Engineered for Precision.</h2>
                </div>

                <div className="bento-grid">
                    <div className="bento-item main-unit">
                        <div className="bento-card-inner">
                            <div className="bento-label">* CORE_INTERFACE</div>
                            <h3 className="bento-card-title">AcidTerminalCard</h3>
                            <p className="bento-card-desc">Low-latency command input with built-in typing simulation and memory markers.</p>
                            <div className="bento-visual">
                                <AcidTerminalCard title="deploy.sh">
                                    <span className="text-brand">$ npx acidui create project</span>
                                    <div className="flex gap-2 mt-4">
                                        <AcidBadge variant="brand">PRIMARY</AcidBadge>
                                        <AcidBadge variant="outline">SECURE</AcidBadge>
                                    </div>
                                </AcidTerminalCard>
                            </div>
                        </div>
                    </div>

                    <div className="bento-item sub-unit">
                        <div className="bento-card-inner">
                            <div className="bento-label">* NAVIGATION_PROTOCOL</div>
                            <h3 className="bento-card-title">Kinetic Navbar</h3>
                            <p className="bento-card-desc">Magnetic indicators that track user focus with sub-pixel accuracy.</p>
                            <div className="bento-visual-mini">
                                <Activity size={32} className="text-brand opacity-50" />
                            </div>
                        </div>
                    </div>

                    <div className="bento-item sub-unit">
                        <div className="bento-card-inner">
                            <div className="bento-label">* VISUAL_LAYERS</div>
                            <h3 className="bento-card-title">AcidVideoText</h3>
                            <p className="bento-card-desc">Cinematic masking for high-impact brand statements.</p>
                            <div className="bento-visual-mini">
                                <Monitor size={32} className="text-brand opacity-50" />
                            </div>
                        </div>
                    </div>

                    <div className="bento-item wide-unit">
                        <div className="bento-card-inner">
                            <div className="bento-label">* ARCHITECTURE</div>
                            <h3 className="bento-card-title">Structural Grid System</h3>
                            <p className="bento-card-desc">Hardened layout engines that maintain integrity under extreme data density.</p>
                            <div className="bento-visual-stats">
                                <div className="stat-row">
                                    <span>FPS_STABILITY</span>
                                    <AcidProgress value={100} variant="brand" />
                                </div>
                                <div className="stat-row">
                                    <span>BUNDLE_SIZE</span>
                                    <AcidProgress value={12} variant="success" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- CAROUSEL SHOWCASE ---- */}
            <section className="showcase-min-section ac-container">
                <div className="showcase-min-header">
                    <div className="hero-min-tag">
                        <span className="orange-dot" /> DYNAMIC_MODULES
                    </div>
                    <h2 className="showcase-min-title">
                        Adaptive Kinetic <br />
                        Systems.
                    </h2>
                </div>

                <div className="showcase-carousel-wrap">
                    <AcidCarousel
                        direction="vertical"
                        autoPlay={true}
                        interval={6000}
                        items={[
                            {
                                id: '01',
                                label: '01 - Cinematic Text',
                                title: 'Video Masking',
                                description: 'Project cinematic motion onto typography with zero performance overhead.',
                                content: (
                                    <div className="visual-box-dark">
                                        <AcidVideoText
                                            text="ACID"
                                            videoSrc="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1730-large.mp4"
                                            className="h-full w-full"
                                        />
                                        <div className="absolute top-4 left-4 font-mono text-[10px] text-brand opacity-50">STREAMPACK_LINK: ACTIVE</div>
                                    </div>
                                )
                            },
                            {
                                id: '02',
                                label: '02 - Global Navigation',
                                title: 'Industrial Mega Menu',
                                description: 'Multi-tier hierarchical access for massive application architectures.',
                                content: (
                                    <div className="visual-box-dark flex items-center justify-center p-12">
                                        <div style={{ width: '100%', height: '100%', border: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(45deg, rgba(255,255,255,0.02) 0%, transparent 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ padding: '2rem', border: '1px solid var(--ac-brand)', background: 'rgba(var(--ac-brand-rgb), 0.05)', color: 'var(--ac-brand)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                                                [ COMPONENT_PREVIEW: MEGA_MENU ]
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </div>
            </section>

            {/* ---- FOOTER ---- */}
            <footer className="footer-min ac-container">
                <div className="footer-min-layout">
                    <div className="footer-min-brand">
                        <span className="text-brand" style={{ fontSize: '1.2rem', fontWeight: 900 }}>*</span>
                        <span>ACID_UI // INDUSTRIAL</span>
                    </div>
                    <div className="footer-min-links">
                        <a href="https://npmjs.org/package/acidui-core" target="_blank" rel="noreferrer">NPMJS</a>
                        <a href="https://github.com/korybantes/acidui" className="flex gap-2 items-center"><Github size={14} /> GITHUB</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
