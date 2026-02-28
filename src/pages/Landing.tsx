import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AcidButton } from '../components/AcidButton';
import { AcidTextMarquee } from '../components/AcidTextMarquee';
import { AcidCarousel } from '../components/AcidCarousel';
import { AcidTypingText } from '../components/AcidTypingText';
import { AcidVideoText } from '../components/AcidVideoText';
import { AcidProgress } from '../components/AcidProgress';
import { AcidTerminalCard } from '../components/AcidTerminalCard';
import { AcidCodeBlock } from '../components/AcidCodeBlock';
import { AcidBadge } from '../components/AcidBadge';
import { Terminal, Github, Activity } from 'lucide-react';
import { AcidSEO } from '../components/AcidSEO';
import './Landing.css';

export function Landing() {


    return (
        <div className="landing-min-container">
            <AcidSEO
                title="Industrial Grade React Interface"
                description="AcidUI Core - The only structural UI library that focuses on absolute precision, high-performance web applications, and kinetic feedback."
                keywords="React, UI Library, Framer Motion, Industrial UI, Web Development, Tailwind"
            />
            {/* Minimal Background Noise */}
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
                        <AcidBadge variant="brand" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>VISION_PROTOCOL</AcidBadge>
                        <h1 className="hero-min-title" style={{ marginTop: '0.5rem' }}>
                            Industrial-Grade <br />
                            React Interface <br />
                            Architecture
                        </h1>

                        <p className="hero-min-desc" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
                            The only structural UI library that focuses
                            on absolute precision and kinetic feedback.
                            <br /><br />
                            From high-frequency trading dashboards to
                            mission-critical AI terminals &mdash; delegate visual
                            complexity to AcidUI without compromising
                            performance or aesthetic.
                        </p>

                        <div className="hero-min-actions" style={{ width: '100%', maxWidth: '400px' }}>
                            <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', opacity: 0.6, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>INITIALIZE_CORE:</div>
                            <AcidCodeBlock code="npm i acidui-core" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-min-right"
                    >
                        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                            <AcidTerminalCard title="acid_core_link.sh">
                                <AcidTypingText
                                    text={'Initializing structural system... [OK]\nLoading visual protocols... [OK]\nBinding coordinates... [SUCCESS]\n\n> Welcome to AcidUI.'}
                                    speed={15}
                                />
                                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', width: '100%' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>SYSTEM_LOAD</div>
                                        <AcidProgress value={84} variant="brand" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>MEMORY_ALLOC</div>
                                        <AcidProgress value={45} variant="success" />
                                    </div>
                                </div>
                            </AcidTerminalCard>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ---- MARQUEE ---- */}
            <div className="marquee-divider">
                <AcidTextMarquee text="* ACIDUI_CORE_V1 * ACIDUI_CORE_V1 * STRUCTURAL_INTEGRITY * METRICS_ONLINE * HIGH_DENSITY_INTERFACE" speed={25} />
            </div>

            {/* ---- CAROUSEL SHOWCASE (Factory.ai style) ---- */}
            <section className="showcase-min-section ac-container">
                <div className="showcase-min-header">
                    <div className="hero-min-tag">
                        <span className="orange-dot" /> COMPONENTS
                    </div>
                    <h2 className="showcase-min-title">
                        Modules meet you <br />
                        wherever you work.
                    </h2>
                    <p className="showcase-min-desc">
                        Components embed directly into your workflow.
                        Dashboards, SaaS, AI Agents, Tooling.
                        Delegate layouts to AcidUI.
                    </p>
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
                                title: 'Video Text Masking',
                                description: 'Blend cinematic footage right into massive typography. Captivate users instantly with the power of CSS mix-blend modes packed into a simple component.',
                                content: (
                                    <div className="visual-box-dark">
                                        <div className="visual-box-header">01 - CINEMATIC TEXT</div>
                                        <AcidVideoText
                                            text="ACID"
                                            videoSrc="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1730-large.mp4"
                                            className="h-full w-full rounded-lg"
                                        />
                                    </div>
                                )
                            },
                            {
                                id: '02',
                                label: '02 - Kinetic Elements',
                                title: 'Interactive Surfaces',
                                description: 'Fluid motions that track user intent and system state. Achieve perfectly eased animations through framer-motion built natively into the core.',
                                content: (
                                    <div className="visual-box-dark flex items-center justify-center p-8">
                                        <div className="visual-box-header absolute top-4 right-4 text-xs tracking-widest text-[#555] font-mono z-10">02 - KINETIC</div>
                                        <div style={{ textAlign: 'center', width: '100%', maxWidth: '24rem', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.02)' }}>
                                            <Activity size={32} className="text-brand mx-auto mb-4 animate-pulse" style={{ display: 'block', margin: '0 auto 1rem auto' }} />
                                            <AcidButton variant="brand" style={{ width: '100%' }}>ENGAGE_MODULE</AcidButton>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: '03',
                                label: '03 - Developer Ready',
                                title: 'Zero Configuration',
                                description: 'Install exclusively what you need. Each component comes strictly with essential props and standalone raw source code, giving you full ownership.',
                                content: (
                                    <div className="visual-box-dark flex items-center justify-center p-8">
                                        <div className="visual-box-header absolute top-4 right-4 text-xs tracking-widest text-[#555] font-mono z-10">03 - DEVELOPER</div>
                                        <div style={{ width: '100%', maxWidth: '28rem', background: '#0a0a0a', border: '1px solid #222', borderRadius: '0.25rem', padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                                            <div className="text-brand" style={{ color: 'var(--ac-brand)', marginBottom: '1rem' }}>$ npx acidui add carousel</div>
                                            <div style={{ color: 'var(--ac-text-muted)', marginBottom: '0.25rem' }}>✔ Fetching registry...</div>
                                            <div style={{ color: 'var(--ac-text-muted)', marginBottom: '0.25rem' }}>✔ Resolving dependencies...</div>
                                            <div style={{ color: 'var(--ac-text-muted)', marginBottom: '1.5rem' }}>✔ Writing AcidCarousel.tsx...</div>
                                            <div style={{ color: '#fff' }}>Ready to deploy.</div>
                                        </div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </div>
            </section>

            {/* ---- FINAL CTA ---- */}
            <section className="cta-min-section ac-container">
                <div className="cta-min-box">
                    <h2 className="cta-min-title">Initialize<br />the Core.</h2>
                    <div className="cta-min-actions">
                        <Link to="/docs">
                            <AcidButton size="lg" variant="primary" style={{ background: '#fff', color: '#000', borderRadius: '4px', fontWeight: 600 }}>GET_STARTED</AcidButton>
                        </Link>
                        <Link to="/library">
                            <AcidButton size="lg" variant="ghost" className="text-muted">BROWSE_COMPONENTS</AcidButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---- FOOTER ---- */}
            <footer className="footer-min ac-container">
                <div className="footer-min-layout">
                    <div className="footer-min-brand">
                        <Terminal size={14} className="text-brand" />
                        <span>ACID_UI_CORE</span>
                    </div>
                    <div className="footer-min-links">
                        <a href="https://npmjs.org/package/acidui-core" target="_blank" rel="noreferrer">NPMJS</a>
                        <a href="#" className="flex gap-2 items-center"><Github size={14} /> GITHUB</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
