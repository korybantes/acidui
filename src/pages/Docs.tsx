import { useState, useEffect, useMemo } from 'react';
import { AcidSidebar } from '../components/AcidSidebar';
import { AcidCodeBlock } from '../components/AcidCodeBlock';
import { AcidCodeDisplay } from '../components/AcidCodeDisplay';
import { AcidButton } from '../components/AcidButton';
import { AcidBadge } from '../components/AcidBadge';
import { AcidLabel } from '../components/AcidLabel';
import { AcidTabs } from '../components/AcidTabs';
import { AcidMeter } from '../components/AcidMeter';
import { AcidCard } from '../components/AcidCard';
import { AcidAlert } from '../components/AcidAlert';
import { AcidAvatar } from '../components/AcidAvatar';
import { AcidCarousel } from '../components/AcidCarousel';
import { AcidDropdown } from '../components/AcidDropdown';
import { AcidProgress } from '../components/AcidProgress';
import { AcidSkeleton } from '../components/AcidSkeleton';
import { AcidTooltip } from '../components/AcidTooltip';
import { AcidCheckbox } from '../components/AcidCheckbox';
import { AcidCommand } from '../components/AcidCommand';
import { AcidSelect } from '../components/AcidSelect';
import { AcidSlider } from '../components/AcidSlider';
import { AcidTextarea } from '../components/AcidTextarea';
import { AcidAccordion } from '../components/AcidAccordion';
import { AcidDivider } from '../components/AcidDivider';
import { AcidSwitch } from '../components/AcidSwitch';
import { useToast } from '../components/AcidToast';
import { AcidInput } from '../components/AcidInput';
import { AcidTimeline } from '../components/AcidTimeline';
import { AcidStepList } from '../components/AcidStepList';
import { AcidGridBox } from '../components/AcidGridBox';
import { AcidSolidCard } from '../components/AcidSolidCard';
import { AcidDialog } from '../components/AcidDialog';
import { AcidCalendar } from '../components/AcidCalendar';
import { AcidForm, AcidFormField } from '../components/AcidForm';
import { AcidInputOtp } from '../components/AcidInputOtp';
import { AcidRadioGroup } from '../components/AcidRadioGroup';
import { AcidToggle } from '../components/AcidToggle';
import { AcidToggleGroup } from '../components/AcidToggleGroup';
import { AcidLayout, AcidPanel } from '../components/AcidLayout';
import { AcidAspectRatio } from '../components/AcidAspectRatio';
import { AcidResizable } from '../components/AcidResizable';
import { AcidScrollArea } from '../components/AcidScrollArea';
import { AcidSeparator } from '../components/AcidSeparator';
import { AcidBreadcrumb } from '../components/AcidBreadcrumb';
import { AcidPagination } from '../components/AcidPagination';
import { AcidNavigationMenu } from '../components/AcidNavigationMenu';
import { AcidBorderBeam } from '../components/AcidBorderBeam';
import { AcidConfettiButton } from '../components/AcidConfettiButton';
import { AcidGradientButton } from '../components/AcidGradientButton';
import { AcidRippleButton } from '../components/AcidRippleButton';
import { AcidShineButton } from '../components/AcidShineButton';
import { AcidTrialButton } from '../components/AcidTrialButton';
import { AcidNavbar } from '../components/AcidNavbar';
import { AcidTable } from '../components/AcidTable';
import { AcidMarquee } from '../components/AcidMarquee';
import { AcidGlassFolder } from '../components/AcidGlassFolder';
import { AcidIconBox } from '../components/AcidIconBox';
import { AcidLink } from '../components/AcidLink';
import { AcidAuroraText } from '../components/AcidAuroraText';
import { AcidScrollReveal } from '../components/AcidScrollReveal';
import { AcidShinyText } from '../components/AcidShinyText';
import { AcidTextMarquee } from '../components/AcidTextMarquee';
import { AcidTypewriterInput } from '../components/AcidTypewriterInput';
import { AcidTypingText } from '../components/AcidTypingText';
import { AcidVideoText } from '../components/AcidVideoText';
import { AcidChart } from '../components/AcidChart';
import { AcidCollapsible } from '../components/AcidCollapsible';
import { AcidContextMenu } from '../components/AcidContextMenu';
import { AcidSheet } from '../components/AcidSheet';
import { AcidDrawer } from '../components/AcidDrawer';
import { AcidCountUp } from '../components/AcidCountUp';
import { AcidTerminalCard } from '../components/AcidTerminalCard';
import { AcidBentoGrid, AcidBentoItem } from '../components/AcidBentoGrid';
import { AcidDock } from '../components/AcidDock';
import { AcidAnimatedNotification } from '../components/AcidAnimatedNotification';
import { AcidMagicCard } from '../components/AcidMagicCard';
import { AcidElectroBorder } from '../components/AcidElectroBorder';
import { AcidDragOrderList } from '../components/AcidDragOrderList';
import { AcidTopLoader } from '../components/AcidTopLoader';
import { AcidMagicLoader } from '../components/AcidMagicLoader';
import { AcidStackList } from '../components/AcidStackList';
import { AcidScrollList } from '../components/AcidScrollList';
import { AcidScrollStack } from '../components/AcidScrollStack';
import { AcidTopStickyBar } from '../components/AcidTopStickyBar';
import { AcidTrustedUsers } from '../components/AcidTrustedUsers';
import { AcidRippleLoader } from '../components/AcidRippleLoader';
import { AcidDynamicNavbar } from '../components/AcidDynamicNavbar';
import clsx from 'clsx';

import { sidebarData } from '../data/sidebar';
import { componentSnippets } from '../data/snippets';
import { Shield, ChevronRight, ChevronUp, ChevronDown, RefreshCw, Github, Terminal, MessageSquare, Code, Layout, Settings, Sun, Moon, Search as SearchIcon, Activity, X, Table, Zap, Link, BarChart3, Layers, PanelRight, MousePointer2, Bell, Monitor, Grid, Wand2, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Docs.css';

const SheetDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-sheet-demo', handleOpen);
        return () => window.removeEventListener('open-sheet-demo', handleOpen);
    }, []);
    return (
        <AcidSheet title="MODULE_A_CONFIGURATION" description="Adjust terminal parameters and network protocols." isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', border: '1px solid var(--ac-border-muted)', borderRadius: '4px' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.75rem', color: 'var(--ac-brand)' }}>NODE_LATENCY</h4>
                    <AcidSlider defaultValue={45} />
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--ac-border-muted)', borderRadius: '4px' }}>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.75rem', color: 'var(--ac-brand)' }}>PROTOCOL_X</h4>
                    <AcidSwitch label="ENABLE_ENCRYPTION" />
                </div>
                <AcidButton style={{ width: '100%' }} onClick={() => setIsOpen(false)}>COMMIT_CHANGES</AcidButton>
            </div>
        </AcidSheet>
    );
};

const DrawerDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-drawer-demo', handleOpen);
        return () => window.removeEventListener('open-drawer-demo', handleOpen);
    }, []);
    return (
        <AcidDrawer title="MOBILE_COMMAND_UNIT" isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <AcidButton variant="outline" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>DASHBOARD_VIEW</AcidButton>
                <AcidButton variant="outline" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>SYSTEM_METRICS</AcidButton>
                <AcidButton variant="outline" style={{ justifyContent: 'flex-start' }} onClick={() => setIsOpen(false)}>NETWORK_SYNC</AcidButton>
                <AcidButton variant="brand" style={{ marginTop: '1rem' }} onClick={() => setIsOpen(false)}>DISCONNECT_SESSION</AcidButton>
            </div>
        </AcidDrawer>
    );
};

const TopLoaderDemo = () => {
    const [loading, setLoading] = useState(false);
    const trigger = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    };
    return (
        <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--ac-border-muted)', borderRadius: '8px' }}>
            <AcidTopLoader visible={loading} />
            <AcidButton onClick={trigger}>TRIGGER_LOADER</AcidButton>
            <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--ac-text-muted)' }}>Loader will persist for 3s</p>
        </div>
    );
};

const NotificationDemo = () => {
    const [notifications, setNotifications] = useState([
        { id: '1', title: 'SYSTEM_SYNC', message: 'Nodes synchronized with cluster A.', time: 'Just now' },
        { id: '2', title: 'CORE_TEMP', message: 'Warning: Core temperature rising.', time: '2m ago' },
    ]);
    const dismiss = (id: string) => setNotifications(n => n.filter(x => x.id !== id));
    return (
        <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden', border: '1px dashed var(--ac-border-muted)', borderRadius: '8px', padding: '1rem' }}>
            <AcidButton
                onClick={() => setNotifications(prev => [{ id: Math.random().toString(), title: 'EVENT_LOG', message: 'New system event recorded.', time: 'Now' }, ...prev])}
            >
                ADD_ALERT
            </AcidButton>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
                <AcidAnimatedNotification notifications={notifications} onDismiss={dismiss} />
            </div>
        </div>
    );
};

const ToastDemo = () => {
    const { toast } = useToast();
    return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <AcidButton onClick={() => toast("SYSTEM_STATUS_NOMINAL", "success")}>TRIGGER_SUCCESS</AcidButton>
            <AcidButton variant="outline" onClick={() => toast("CORE_TEMP_CRITICAL", "error")}>TRIGGER_ERROR</AcidButton>
        </div>
    );
};

const CommandDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ textAlign: 'center' }}>
            <AcidButton onClick={() => setIsOpen(true)}>OPEN_COMMAND_PALETTE (⌘K)</AcidButton>
            <AcidCommand
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                actions={[
                    { id: '1', label: 'DEPLOY_TO_PRODUCTION', description: 'Immediate cluster sync.', shortcut: ['⌘', 'D'] },
                    { id: '2', label: 'GENERATE_COMPONENT', description: 'Scaffold new industrial unit.', shortcut: ['⌘', 'G'] },
                    { id: '3', label: 'REBOOT_ADAPTER', description: 'Cold reload of network layer.' },
                ]}
            />
        </div>
    );
};

const CarouselDemo = () => {
    const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
    const [autoPlay, setAutoPlay] = useState(true);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ width: '100%', margin: '0 auto', minHeight: direction === 'vertical' ? '400px' : '500px' }}>
                <AcidCarousel
                    direction={direction}
                    autoPlay={autoPlay}
                    interval={4000}
                    items={[
                        {
                            id: 'node-alpha',
                            label: 'CORE_SYNC',
                            title: 'Node Alpha Synchronization',
                            description: 'Establishing bidirectional telemetry with core network clusters. Latency remains at optimal levels under heavy computational load.',
                            content: (
                                <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, rgba(0,255,136,0.1), transparent)', border: '1px solid rgba(0,255,136,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h2 style={{ fontSize: '2rem', color: 'var(--ac-brand)' }}>NODE_ALPHA_READY</h2>
                                </div>
                            )
                        },
                        {
                            id: 'node-beta',
                            label: 'DATA_LINK',
                            title: 'Encrypted Packet Routing',
                            description: 'Analyzing packet loss across designated sub-modules. Asterisk marker confirms continuous secure connections during transmission.',
                            content: (
                                <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, rgba(0,97,255,0.1), transparent)', border: '1px solid rgba(0,97,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h2 style={{ fontSize: '2rem', color: '#0061ff' }}>DATA_STREAM_BETA</h2>
                                </div>
                            )
                        },
                        {
                            id: 'node-gamma',
                            label: 'SYS_METRICS',
                            title: 'Dynamic Resource Allocation',
                            description: 'Autonomic redistribution of memory and CPU cycles based on predictive algorithms and current load balancing matrices.',
                            content: (
                                <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, rgba(255,0,128,0.1), transparent)', border: '1px solid rgba(255,0,128,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h2 style={{ fontSize: '2rem', color: '#ff0080' }}>CORE_RESOURCES_OPT</h2>
                                </div>
                            )
                        }
                    ]}
                />
            </div>
            {/* Customizer specific to Carousel */}
            <div className="component-customizer" style={{ padding: '1.5rem', border: '1px dashed var(--ac-border-muted)', borderRadius: '8px', background: 'var(--ac-bg-secondary)', marginTop: '2rem' }}>
                <div className="customizer-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <Settings size={14} className="text-brand" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--ac-text-muted)' }}>CONFIGURE_MODULE</span>
                </div>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <AcidLabel style={{ marginBottom: '0.5rem', display: 'block' }}>LAYOUT_AXIS</AcidLabel>
                        <AcidRadioGroup
                            options={[
                                { value: 'horizontal', label: 'X_AXIS (Horizontal)', description: 'Horizontal layout mode.' },
                                { value: 'vertical', label: 'Y_AXIS (Vertical)', description: 'Classic industrial vertical mode.' },
                            ]}
                            defaultValue={direction}
                            onChange={(val) => setDirection(val as any)}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <AcidLabel style={{ marginBottom: '0.5rem', display: 'block' }}>AUTOPLAY_SYSTEM</AcidLabel>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <AcidSwitch
                                label="Autoplay Slides"
                                checked={autoPlay}
                                onChange={setAutoPlay}
                            />
                            <span style={{ fontSize: '0.8rem', color: 'var(--ac-text-muted)' }}>Automatically advance sequence.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function Docs() {
    const [activeTab, setActiveTab] = useState('preview');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showDocs, setShowDocs] = useState(true);

    // Get component from URL hash or default to Introduction
    const [currentComponent, setCurrentComponent] = useState(() => {
        const hash = window.location.hash.replace('#', '');
        return hash || 'introduction';
    });

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                setCurrentComponent(hash);
                window.scrollTo(0, 0);
            }
        };
        handleHashChange(); // Run on mount to catch initial hash
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Filter components based on search
    const filteredSidebar = useMemo(() => {
        if (!searchQuery) return sidebarData;
        return sidebarData.map(cat => ({
            ...cat,
            items: cat.items.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(cat => cat.items.length > 0);
    }, [searchQuery]);

    interface ComponentConfig {
        name: string;
        desc: string;
        longDesc?: string;
        icon?: React.ReactNode;
        preview?: React.ReactNode;
        code?: string;
        cli?: string;
        props?: { name: string; type: string; default?: string; desc: string }[];
        compact?: boolean;
        importSnippet?: string;
        usageSnippet?: string;
        usage?: { label: string; demo: React.ReactNode }[];
        variants?: { name: string; desc: string }[];
    }

    const components: Record<string, ComponentConfig> = {
        'introduction': {
            name: 'INTRODUCTION',
            desc: 'The technical blueprint for high-performance React interfaces.',
            icon: <MessageSquare size={32} />,
            preview: (
                <div className="preview-layout docs-page-content">
                    <section className="docs-intro-hero">
                        <AcidLabel color="brand">SYS.INIT.NOMINAL</AcidLabel>
                        <h2 className="content-h1">THE_FACTORY_IS_OPEN</h2>
                        <p className="content-p">
                            AcidUI is an open-source collection of carefully designed industrial UI components that aim to enhance your React web applications with absolute structural integrity.
                        </p>
                        <p className="content-p">
                            This is not your typical component library. While we provide the essentials, we provide them with a rigid 1px coordinate system optimized for industrial AI, FinTech, and Enterprise dashboards.
                        </p>
                        <p className="content-p">
                            Basically, these components are here to help you stand out and make a statement visually by adding a touch of technical creativity to your projects.
                        </p>
                    </section>

                    <section className="docs-grid-section">
                        <div className="docs-grid-header">
                            <h3 className="content-h3">MISSION</h3>
                            <div className="header-line"></div>
                        </div>
                        <p className="content-p">
                            The goal of AcidUI is simple - provide flexible, visually stunning and most importantly, industrial-grade components that take web projects to the next level.
                        </p>
                        <div className="docs-principles-grid">
                            <AcidCard className="principle-card">
                                <h4>FREE_FOR_ALL</h4>
                                <p>You own the code, and it's free to use in your projects.</p>
                            </AcidCard>
                            <AcidCard className="principle-card">
                                <h4>PROP_FIRST</h4>
                                <p>Every component is designed to be flexible and customizable.</p>
                            </AcidCard>
                            <AcidCard className="principle-card">
                                <h4>FULLY_MODULAR</h4>
                                <p>Install strictly what you need. AcidUI is not a heavy dependency.</p>
                            </AcidCard>
                            <AcidCard className="principle-card">
                                <h4>FREE_CHOICE</h4>
                                <p>JS or TS, plain CSS or Tailwind, the code is all here.</p>
                            </AcidCard>
                        </div>
                    </section>

                    <section className="docs-grid-section">
                        <div className="docs-grid-header">
                            <h3 className="content-h3">PERFORMANCE</h3>
                            <div className="header-line"></div>
                        </div>
                        <ul className="docs-list">
                            <li><strong>Less Is More:</strong> Using more than 2-3 complex components on a page is not advised to maintain optimal animation performance.</li>
                            <li><strong>Mobile Optimization:</strong> Consider disabling certain effects on mobile devices for better stability.</li>
                            <li><strong>Test Thoroughly:</strong> Always test on multiple devices to ensure a consistent industrial experience.</li>
                        </ul>
                    </section>
                </div>
            ),
            code: '// npx acidui init',
            cli: 'npx acidui init',
            props: []
        },

        'dynamic-navbar': {
            name: 'DYNAMIC_NAVBAR',
            desc: 'High-performance interactive navigation unit.',
            longDesc: 'A glassmorphic, floating navigation bar with fluid indicator animations and responsive mobile states.',
            icon: <Monitor size={32} />,
            preview: (
                <div style={{ height: '300px', position: 'relative', background: 'var(--ac-bg-secondary)', borderRadius: '12px', border: '1px dashed var(--ac-border)', overflow: 'hidden' }}>
                    <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center' }}>
                        <AcidDynamicNavbar className="relative-nav" />
                    </div>
                    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
                        <h4 style={{ opacity: 0.5 }}>PAGE_PREVIEW_AREA</h4>
                        <p style={{ fontSize: '0.8rem', opacity: 0.3, marginTop: '1rem' }}>Navbar stays fixed/relative based on configuration.</p>
                    </div>
                </div>
            ),
            code: `<AcidDynamicNavbar items={[...]} />`,
            cli: 'npx acidui add dynamic-navbar',
            props: [
                { name: 'items', type: 'NavItem[]', desc: 'Array of nav links with icons.' },
                { name: 'className', type: 'string', desc: 'Custom container styles.' }
            ]
        },
        'installation': {
            name: 'INSTALLATION',
            desc: 'Sequence order for system initialization.',
            icon: <Settings size={32} />,
            preview: (
                <div className="preview-layout docs-page-content">
                    <AcidCodeBlock code="npm install @acidui/react framer-motion lucide-react clsx" />
                </div>
            ),
            code: 'npm install @acidui/react',
            cli: 'npm install @acidui/react',
            props: []
        },
        'alert': {
            name: 'ALERT',
            desc: 'System feedback triggers.',
            longDesc: 'Alert components provide contextual feedback messages for typical user actions with various intensity levels.',
            icon: <MessageSquare size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
                    <AcidAlert variant="info" title="CORE_READY">System is standing by.</AcidAlert>
                    <AcidAlert variant="error" title="CRITICAL_FAILURE">Encryption bridge severed.</AcidAlert>
                </div>
            ),
            code: `<AcidAlert variant="error" title="Title">Content</AcidAlert>`,
            cli: 'npx acidui add alert',
            props: [
                { name: 'variant', type: '"info" | "error" | "success" | "warning"', default: 'info', desc: 'Visual state intent.' },
                { name: 'title', type: 'string', desc: 'Header text for the alert.' }
            ],
            importSnippet: `import { AcidAlert } from "@/components/acidui/alert"`,
            usageSnippet: `function Demo() {
  return (
    <div className="space-y-4">
      <AcidAlert variant="info" title="SYNC_STATUS" description="All clusters nominal." />
      <AcidAlert variant="error" title="SUBSYSTEM_FAIL" description="Node_04 offline." />
    </div>
  )
}`
        },
        'avatar': {
            name: 'AVATAR',
            desc: 'Operator identifiers.',
            longDesc: 'Visual representations of user entities, optimized for industrial dashboard aesthetics.',
            icon: <Shield size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <AcidAvatar shape="industrial" size="xl" fallback="AO" />
                    <AcidAvatar shape="circle" size="lg" fallback="SYS" />
                </div>
            ),
            code: `<AcidAvatar shape="industrial" size="xl" fallback="AO" />`,
            cli: 'npx acidui add avatar',
            props: [
                { name: 'shape', type: '"industrial" | "circle"', default: 'circle', desc: 'Outer boundary geometry.' },
                { name: 'size', type: '"sm" | "md" | "lg" | "xl"', default: 'md', desc: 'Scale factor.' }
            ],
            importSnippet: `import { AcidAvatar } from "@/components/acidui/avatar"`,
            usageSnippet: `<AcidAvatar shape="industrial" size="xl" fallback="AO" />`
        },
        'badge': {
            name: 'BADGE',
            desc: 'Metadata status tags.',
            longDesc: 'Compact labels used to signal status, category, or metadata snippets.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <AcidBadge variant="brand">PREMIUM</AcidBadge>
                    <AcidBadge variant="outline">PENDING</AcidBadge>
                </div>
            ),
            code: `<AcidBadge variant="brand">STABLE</AcidBadge>`,
            cli: 'npx acidui add badge',
            props: [
                { name: 'variant', type: '"brand" | "outline" | "ghost"', default: 'brand', desc: 'Color intensity.' }
            ],
            usage: [
                { label: 'STATUS_INDICATOR', demo: <AcidBadge variant="brand">ACTIVE</AcidBadge> },
                { label: 'SUBTLE_TAG', demo: <AcidBadge variant="subtle">METADATA</AcidBadge> }
            ]
        },
        'button': {
            name: 'BUTTON',
            desc: 'Technical triggers.',
            longDesc: 'The primary interaction primitive. Supports multiple industrial variants and framer-motion micro-interactions.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <AcidButton variant="primary">EXECUTE</AcidButton>
                    <AcidButton variant="outline">DEBUG</AcidButton>
                </div>
            ),
            code: `<AcidButton variant="primary">ACTION</AcidButton>`,
            cli: 'npx acidui add button',
            props: [
                { name: 'variant', type: '"primary" | "outline" | "ghost"', default: 'primary', desc: 'Action weight.' },
                { name: 'size', type: '"sm" | "md" | "lg"', default: 'md', desc: 'Touch target size.' }
            ],
            usage: [
                { label: 'INDUSTRIAL_PRIMARY', demo: <AcidButton variant="primary">CONFIRM</AcidButton> },
                { label: 'MINIMAL_GHOST', demo: <AcidButton variant="ghost">CANCEL</AcidButton> }
            ]
        },
        'card': {
            name: 'CARD',
            desc: 'Industrial data containers.',
            longDesc: 'Structural layout units designed to group related information in a technical, grid-aligned fashion.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <AcidCard>
                        <AcidLabel color="brand">MODULE_01</AcidLabel>
                        <h4 style={{ margin: '0.5rem 0' }}>CORE_DYNAMICS</h4>
                        <p style={{ opacity: 0.7, fontSize: '0.8rem' }}>Active monitoring of internal state clusters.</p>
                    </AcidCard>
                    <AcidCard>
                        <AcidLabel color="muted">MODULE_02</AcidLabel>
                        <h4 style={{ margin: '0.5rem 0' }}>SYNC_STATUS</h4>
                        <p style={{ opacity: 0.7, fontSize: '0.8rem' }}>Latency within acceptable 0.4ms range.</p>
                    </AcidCard>
                </div>
            ),
            code: `<AcidCard>\n  <AcidLabel>Label</AcidLabel>\n  <h4>Title</h4>\n</AcidCard>`,
            cli: 'npx acidui add card',
        },
        'carousel': {
            name: 'CAROUSEL',
            desc: 'Technical slide scroller.',
            longDesc: 'Horizontal/Vertical data scroller with precise geometric navigation and fluid slide transitions.',
            icon: <Layout size={32} />,
            preview: <CarouselDemo />,
            code: `<AcidCarousel items={[\n  { id: '1', title: 'Slide', description: '...', content: <div /> }\n]} />`,
            cli: 'npx acidui add carousel',
            props: [
                { name: 'items', type: 'AcidCarouselItem[]', desc: 'Array of data slides.' },
                { name: 'direction', type: '"horizontal" | "vertical"', default: 'horizontal', desc: 'Layout axis.' },
                { name: 'autoPlay', type: 'boolean', default: 'false', desc: 'Auto sequence progression.' }
            ]
        },
        'dialog': {
            name: 'DIALOG',
            desc: 'System modal for critical confirmation.',
            longDesc: 'High-priority overlay unit used for critical task confirmation or data input while maintaining background context through glassmorphism.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidDialog
                        trigger={<AcidButton>OPEN_MODAL</AcidButton>}
                        title="TERMINATE_SEQUENCE?"
                        description="This action cannot be undone. System buffers will be cleared."
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                            <AcidButton variant="ghost">CANCEL</AcidButton>
                            <AcidButton variant="primary">CONFIRM</AcidButton>
                        </div>
                    </AcidDialog>
                </div>
            ),
            code: `<AcidDialog trigger={<Button />} title="Title">Content</AcidDialog>`,
            cli: 'npx acidui add dialog',
            props: [
                { name: 'trigger', type: 'ReactNode', desc: 'The anchor element.' },
                { name: 'title', type: 'string', desc: 'Header text.' },
                { name: 'description', type: 'string', desc: 'Secondary metadata text.' }
            ]
        },
        'dropdown': {
            name: 'DROPDOWN',
            desc: 'Contextual actions.',
            longDesc: 'Compact menu system for grouping related technical actions without polluting the global layout.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidDropdown
                        trigger={<AcidButton>ACTIONS <ChevronRight size={14} /></AcidButton>}
                        items={[
                            { id: '1', label: 'SYNC', icon: <RefreshCw size={14} /> },
                            { id: '2', label: 'EXIT', icon: <X size={14} />, variant: 'danger' },
                        ]}
                    />
                </div>
            ),
            code: `<AcidDropdown trigger={<Button />} items={[]} />`,
            cli: 'npx acidui add dropdown',
            props: [
                { name: 'items', type: 'DropdownItem[]', desc: 'Array of menu entries.' }
            ]
        },
        'progress': {
            name: 'PROGRESS',
            desc: 'Status tracking bars.',
            longDesc: 'Technical progress bars for monitoring long-running operations or resource allocation.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
                    <AcidProgress value={65} showLabel variant="brand" />
                    <AcidProgress value={90} showLabel variant="success" />
                </div>
            ),
            code: `<AcidProgress value={65} variant="brand" />`,
            cli: 'npx acidui add progress',
            props: [
                { name: 'value', type: 'number', desc: '0-100 completion percentage.' },
                { name: 'variant', type: 'string', desc: 'Brand vs Status coloring.' }
            ]
        },
        'skeleton': {
            name: 'SKELETON',
            desc: 'Loading placeholders.',
            longDesc: 'Animated structural placeholders used during async data fetching to prevent layout shifts.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <AcidSkeleton shape="industrial" width={50} height={50} />
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '8px' }}>
                            <AcidSkeleton width="70%" height="0.8rem" />
                        </div>
                        <AcidSkeleton width="40%" height="0.6rem" />
                    </div>
                </div>
            ),
            code: `<AcidSkeleton width={100} height={20} />`,
            cli: 'npx acidui add skeleton',
            props: [
                { name: 'shape', type: '" industrial" | "circle"', default: 'industrial', desc: 'Inner geometry.' }
            ]
        },
        'toast': {
            name: 'TOAST',
            desc: 'Direct system feedback.',
            longDesc: 'Floating notifications that provide non-intrusive feedback on background processes.',
            icon: <MessageSquare size={32} />,
            compact: true,
            preview: <ToastDemo />,
            code: `const { toast } = useToast();\ntoast("MSG", "success");`,
            cli: 'npx acidui add toast',
        },
        'tooltip': {
            name: 'TOOLTIP',
            desc: 'Hover metadata.',
            longDesc: 'Compact overlays that provide additional technical context on hover or focus of an action element.',
            icon: <MessageSquare size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidTooltip content="PROTO_44_ACTIVE" position="top">
                        <AcidBadge variant="outline">HOVER_ME</AcidBadge>
                    </AcidTooltip>
                </div>
            ),
            code: `<AcidTooltip content="Tip">Child</AcidTooltip>`,
            cli: 'npx acidui add tooltip',
            props: [{ name: 'content', type: 'string', desc: 'Text to display.' }]
        },
        'calendar': {
            name: 'CALENDAR',
            desc: 'Industrial date selection.',
            longDesc: 'A high-precision calendar component engineered for technical date selection with smooth transitions.',
            icon: <Activity size={32} />,
            preview: <AcidCalendar defaultValue={new Date()} />,
            cli: 'npx acidui add calendar',
            props: [
                { name: 'value', type: 'Date', desc: 'Controlled selection state.' },
                { name: 'onChange', type: 'function', desc: 'Selection callback.' }
            ]
        },
        'checkbox': {
            name: 'CHECKBOX',
            desc: 'Binary selection core.',
            longDesc: 'Basic industrial toggle for enabling/disabling system flags or list selection.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ width: 'fit-content', margin: '0 auto' }}>
                    <AcidCheckbox label="AUTH_GATE" description="Enable biometric layer." defaultChecked />
                </div>
            ),
            code: `<AcidCheckbox label="Title" />`,
            cli: 'npx acidui add checkbox',
            props: [
                { name: 'label', type: 'string', desc: 'Primary label.' },
                { name: 'description', type: 'string', desc: 'Subtext metadata.' }
            ]
        },
        'form': {
            name: 'FORM',
            desc: 'Technical orchestration layer for industrial data entry.',
            longDesc: 'A powerful form system integrated with React Hook Form and Zod for rigid validation and structural grouping of complex operations.',
            icon: <Terminal size={32} />,
            importSnippet: `import { AcidForm, AcidFormField } from "@/components/acidui/form"`,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <AcidForm gap="md">
                        <div style={{ marginBottom: '1rem' }}>
                            <AcidLabel color="brand" style={{ marginBottom: '0.5rem', display: 'block' }}>SECURITY_AUTH_GATE</AcidLabel>
                            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Enter credentials to access restricted sub-nodes.</p>
                        </div>
                        <AcidFormField label="OPERATOR_EMAIL" required>
                            <AcidInput placeholder="operator@acid.sys" type="email" />
                        </AcidFormField>
                        <AcidFormField label="ACCESS_CREDENTIAL" required>
                            <AcidInput placeholder="••••••••" type="password" />
                        </AcidFormField>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1rem 0' }}>
                            <AcidCheckbox label="PERSIST_TOKEN" />
                            <AcidButton variant="ghost" size="sm">DEBUG_KEY</AcidButton>
                        </div>
                        <AcidButton variant="primary" className="w-full">INITIALIZE_SYNC</AcidButton>
                    </AcidForm>
                </div>
            ),
            cli: 'npx acidui add form',
            props: [
                { name: 'onSubmit', type: 'function', desc: 'Handler called on valid submission.' },
                { name: 'gap', type: '"sm" | "md" | "lg"', default: 'md', desc: 'Vertical spacing between fields.' },
                { name: 'className', type: 'string', desc: 'Override container styles.' }
            ],
            usageSnippet: `// Implementation with React Hook Form & Zod
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  })
  
  return (
    <AcidForm onSubmit={form.handleSubmit(v => console.log(v))} gap="lg">
      <AcidFormField label="OPERATOR_IDENT" required>
        <AcidInput {...form.register("email")} placeholder="name@sys.com" />
      </AcidFormField>
      <AcidFormField label="SEC_KEY" required>
        <AcidInput type="password" {...form.register("password")} placeholder="••••" />
      </AcidFormField>
      <AcidButton type="submit">AUTH</AcidButton>
    </AcidForm>
  )
}`,
            usage: [
                {
                    label: 'REGISTER_SEQUENCE',
                    demo: (
                        <div style={{ width: '100%', maxWidth: '400px', padding: '2rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--ac-border-muted)' }}>
                            <AcidForm gap="md">
                                <AcidLabel color="brand">CREATE_OPERATOR_LOG</AcidLabel>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <AcidFormField label="FIRST_NAME">
                                        <AcidInput placeholder="J..." />
                                    </AcidFormField>
                                    <AcidFormField label="LAST_NAME">
                                        <AcidInput placeholder="D..." />
                                    </AcidFormField>
                                </div>
                                <AcidFormField label="EMAIL_ID">
                                    <AcidInput placeholder="operator@sys..." />
                                </AcidFormField>
                                <AcidFormField label="ASSIGN_SECURITY_LEVEL">
                                    <AcidSelect options={[{ value: '1', label: 'LEVEL_01' }, { value: '2', label: 'LEVEL_02' }]} />
                                </AcidFormField>
                                <AcidButton variant="primary">REGISTER_MODULE</AcidButton>
                            </AcidForm>
                        </div>
                    )
                }
            ]
        },
        'input-otp': {
            name: 'INPUT_OTP',
            desc: 'One-time-passcode buffer.',
            longDesc: 'A secure sequence of numeric inputs for multi-factor authentication pulses.',
            icon: <Shield size={32} />,
            compact: true,
            preview: <AcidInputOtp length={6} />,
            cli: 'npx acidui add input-otp',
            props: [
                { name: 'length', type: 'number', default: '6', desc: 'Length of passcode.' },
                { name: 'mask', type: 'boolean', desc: 'Conceal numeric entry.' }
            ]
        },
        'input': {
            name: 'INPUT',
            desc: 'Technical data entry.',
            longDesc: 'Industrial input fields with support for labels, variants, and rigid structural styling.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                    <AcidInput label="SYSTEM_ID" placeholder="Enter identifier..." />
                </div>
            ),
            cli: 'npx acidui add input',
            props: [
                { name: 'label', type: 'string', desc: 'Technical identifier.' },
                { name: 'variant', type: '"outline" | "filled"', default: 'outline', desc: 'Visual skin.' }
            ]
        },
        'label': {
            name: 'LABEL',
            desc: 'Metadata identifiers.',
            longDesc: 'Subtle technical labels for tagging system components, data points, or interface sections.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <AcidLabel color="brand">SYS.INIT</AcidLabel>
                    <AcidLabel color="muted">STANDING_BY</AcidLabel>
                    <AcidLabel color="brand">LINK_SYNC</AcidLabel>
                </div>
            ),
            cli: 'npx acidui add label',
        },
        'command': {
            name: 'COMMAND',
            desc: 'Global palette.',
            longDesc: 'A powerful, searchable command interface for high-speed technical navigation.',
            icon: <SearchIcon size={32} />,
            compact: true,
            preview: <CommandDemo />,
            cli: 'npx acidui add command',
        },
        'radio-group': {
            name: 'RADIO_GROUP',
            desc: 'Exclusive binary clusters.',
            longDesc: 'Sets of mutually exclusive industrial controls with support for metadata descriptions.',
            icon: <Layout size={32} />,
            preview: (
                <AcidRadioGroup
                    label="NETWORK_PROTOCOL"
                    options={[
                        { value: 'udp', label: 'UDP', description: 'Priority: Low latency.' },
                        { value: 'tcp', label: 'TCP', description: 'Priority: Data integrity.' },
                    ]}
                    defaultValue="udp"
                />
            ),
            cli: 'npx acidui add radio-group',
            props: [
                { name: 'options', type: 'AcidRadioOption[]', desc: 'Selection entries.' },
                { name: 'orientation', type: '"vertical" | "horizontal"', desc: 'Stack direction.' }
            ]
        },
        'select': {
            name: 'SELECT',
            desc: 'Technical state picker.',
            longDesc: 'An industrial dropdown for selecting a single item from a list of options.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                    <AcidSelect
                        label="LEVEL"
                        options={[
                            { value: '1', label: 'KERNEL' },
                            { value: '2', label: 'USERSPACE' },
                        ]}
                    />
                </div>
            ),
            cli: 'npx acidui add select',
        },
        'slider': {
            name: 'SLIDER',
            desc: 'Continuous value hardware.',
            longDesc: 'Precision slider for granular value adjustment within defined technical boundaries.',
            icon: <Settings size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '350px', margin: '0 auto' }}>
                    <AcidSlider label="VOLTAGE" min={0} max={100} defaultValue={44} />
                </div>
            ),
            cli: 'npx acidui add slider',
        },
        'switch': {
            name: 'SWITCH',
            desc: 'Binary gate toggle.',
            longDesc: 'A technical switch for controlling boolean states with immediate visual feedback.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidSwitch label="LIVE_MODE" defaultChecked />
                </div>
            ),
            cli: 'npx acidui add switch',
        },
        'textarea': {
            name: 'TEXTAREA',
            desc: 'Technical log entry.',
            longDesc: 'Industrial multi-line textual buffer for high-density data entry.',
            icon: <Terminal size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                    <AcidTextarea label="LOG_DUMP" placeholder="Paste buffer content..." />
                </div>
            ),
            cli: 'npx acidui add textarea',
        },
        'toggle': {
            name: 'TOGGLE',
            desc: 'Single press logic.',
            longDesc: 'A binary button unit for persistent technical states.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <AcidToggle variant="brand">SYNC</AcidToggle>
                    <AcidToggle variant="outline">DEBUG</AcidToggle>
                </div>
            ),
            cli: 'npx acidui add toggle',
        },
        'toggle-group': {
            name: 'TOGGLE_GROUP',
            desc: 'Segmented logic arrays.',
            longDesc: 'Groups of technical toggles for selecting one or multiple operational modes.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidToggleGroup
                        items={[
                            { value: '1', label: 'A' },
                            { value: '2', label: 'B' },
                            { value: '3', label: 'C' },
                        ]}
                        defaultValue="1"
                    />
                </div>
            ),
            cli: 'npx acidui add toggle-group',
        },
        'accordion': {
            name: 'ACCORDION',
            desc: 'Collapsible info.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                    <AcidAccordion
                        items={[
                            { id: '1', title: 'HARDWARE_REPORTS', content: 'All clusters operational.' },
                            { id: '2', title: 'SECURITY_AUDIT', content: 'No violations detected.' },
                        ]}
                    />
                </div>
            ),
            code: `<AcidAccordion items={[]} />`,
            cli: 'npx acidui add accordion',
        },
        'divider': {
            name: 'DIVIDER',
            desc: 'Geometric structural separators.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%' }}>
                    <AcidDivider label="GRID_ALPHA" align="left" />
                    <AcidDivider label="GRID_BETA" align="right" />
                </div>
            ),
            code: `<AcidDivider label="Label" align="right" />`,
            cli: 'npx acidui add divider',
        },
        'tabs': {
            name: 'TABS',
            desc: 'Segmented view switches.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <p style={{ fontSize: '0.7rem', opacity: 0.4, marginBottom: '0.5rem' }}>BASIC_TABS</p>
                        <AcidTabs
                            variant="industrial"
                            tabs={[
                                { id: '1', label: 'Account', content: <div style={{ padding: '1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>Manage your account settings and preferences.</div> },
                                { id: '2', label: 'Password', content: <div style={{ padding: '1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>Security authorization protocols.</div> },
                                { id: '3', label: 'Settings', content: <div style={{ padding: '1.5rem', opacity: 0.6, fontSize: '0.9rem' }}>Global system configuration.</div> }
                            ]}
                        />
                    </div>
                </div>
            ),
            cli: 'npx acidui add tabs',
            usage: [
                {
                    label: 'USER_PROFILE',
                    demo: (
                        <div style={{ padding: '2rem', background: '#000', borderRadius: '8px', border: '1px solid var(--ac-border-muted)' }}>
                            <h2 style={{ marginTop: 0 }}>User Profile</h2>
                            <AcidTabs
                                variant="industrial"
                                tabs={[
                                    {
                                        id: '1',
                                        label: 'Profile',
                                        content: (
                                            <div style={{ padding: '2rem 0', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(45deg, #f97316, #ec4899)', flexShrink: 0 }} />
                                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                    <AcidInput label="First Name" defaultValue="John" />
                                                    <AcidInput label="Last Name" defaultValue="Doe" />
                                                    <div style={{ gridColumn: 'span 2' }}>
                                                        <AcidInput label="Email" defaultValue="john.doe@example.com" />
                                                    </div>
                                                    <div style={{ gridColumn: 'span 2' }}>
                                                        <AcidTextarea label="Bio" defaultValue="Full-stack developer with 5 years of experience." />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    },
                                    { id: '2', label: 'Settings', content: <div style={{ padding: '2rem 0' }}>Settings Protocol Active</div> },
                                    { id: '3', label: 'Notifications', content: <div style={{ padding: '2rem 0' }}>Telemetry Alerts Active</div> }
                                ]}
                            />
                        </div>
                    )
                }
            ]
        },
        'border-beam': {
            name: 'BORDER_BEAM',
            desc: 'Animated structural highlight.',
            longDesc: 'High-speed border traversal animation for highlighting premium structural containers.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ padding: '4rem', background: 'var(--ac-bg)', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '300px', height: '200px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--ac-border-muted)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700 }}>Interactive Border</span>
                        <AcidBorderBeam size={100} duration={4} />
                    </div>
                </div>
            ),
            cli: 'npx acidui add border-beam',
            props: [
                { name: 'size', type: 'number', default: '150', desc: 'Beam traversal scale.' },
                { name: 'duration', type: 'number', default: '8', desc: 'Animation cycle speed.' },
                { name: 'colorFrom', type: 'string', desc: 'Starting gradient pulse.' },
                { name: 'colorTo', type: 'string', desc: 'Ending gradient pulse.' }
            ]
        },
        'confetti-button': {
            name: 'CONFETTI_BUTTON',
            desc: 'Celebratory trigger unit.',
            longDesc: 'Technical trigger button that deploys high-density particle arrays on successful operation execution.',
            icon: <MessageSquare size={32} />,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidConfettiButton variant="primary">DEPLOY_CELEBRATION</AcidConfettiButton>
                </div>
            ),
            cli: 'npx acidui add confetti-button',
        },
        'gradient-button': {
            name: 'GRADIENT_BUTTON',
            desc: 'Premium animated trigger.',
            longDesc: 'Rotating conic-gradient triggers for high-visibility operational entry points.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', padding: '2rem' }}>
                    <AcidGradientButton gradientType="orange" size="md">Medium</AcidGradientButton>
                    <AcidGradientButton gradientType="cool" size="lg">Large</AcidGradientButton>
                    <AcidGradientButton gradientType="purple" size="xl">Extra Large</AcidGradientButton>
                </div>
            ),
            cli: 'npx acidui add gradient-button',
            usage: [
                {
                    label: 'VARIANTS',
                    demo: (
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <AcidGradientButton gradientType="orange">Orange Sunrise</AcidGradientButton>
                            <AcidGradientButton gradientType="cool">Cool Breeze</AcidGradientButton>
                            <AcidGradientButton gradientType="purple">Purple Rain</AcidGradientButton>
                        </div>
                    )
                }
            ]
        },
        'ripple-button': {
            name: 'RIPPLE_BUTTON',
            desc: 'Kinetic frequency trigger.',
            longDesc: 'Pressure-sensitive trigger component with outward-radiating kinetic feedback pulses.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidRippleButton rippleColor="rgba(255,255,255,0.4)">INIT_RIPPLE_PULSE</AcidRippleButton>
                </div>
            ),
            cli: 'npx acidui add ripple-button',
        },
        'shine-button': {
            name: 'SHINE_BUTTON',
            desc: 'Reflective structural trigger.',
            longDesc: 'High-intensity sweep highlights that pass over the trigger on hover initialization.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidShineButton>SHINE_MODULE_SYNC</AcidShineButton>
                </div>
            ),
            cli: 'npx acidui add shine-button',
        },
        'trial-button': {
            name: 'TRIAL_BUTTON',
            desc: 'Conversion funnel trigger.',
            longDesc: 'Premium call-to-action component optimized for trial initialization and high-impact operations.',
            icon: <Shield size={32} />,
            preview: (
                <div style={{ textAlign: 'center' }}>
                    <AcidTrialButton>START_FREE_TRIAL</AcidTrialButton>
                </div>
            ),
            cli: 'npx acidui add trial-button',
        },
        'timeline': {
            name: 'TIMELINE',
            desc: 'Sequential event logger.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                    <AcidTimeline
                        data={[
                            { title: 'CORE_SYNC', content: <p>Handshake complete at 04:22:01</p> },
                            { title: 'GATE_OPEN', content: <p>Flowing clusters at 04:22:15</p> },
                            { title: 'FINAL_INIT', content: <p>Standing by at 04:23:00</p> },
                        ]}
                    />
                </div>
            ),
            code: `<AcidTimeline items={[]} />`,
            cli: 'npx acidui add timeline',
        },
        'meter': {
            name: 'METER',
            desc: 'Technical gauges.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <AcidMeter value={75} label="CPU_LOAD" />
                        <AcidMeter value={42} label="NET_TRAFFIC" />
                    </div>
                    <AcidMeter value={60} label="STORAGE" orientation="horizontal" />
                </div>
            ),
            code: `<AcidMeter value={75} label="Label" orientation="horizontal" />`,
            cli: 'npx acidui add meter',
        },
        'step-list': {
            name: 'STEP_LIST',
            desc: 'Linear execution sequence.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                    <AcidStepList
                        steps={[
                            { id: '1', label: 'INIT_HARDWARE' },
                            { id: '2', label: 'LOAD_DRIVERS' },
                        ]}
                        activeId="1"
                    />
                </div>
            ),
            code: `<AcidStepList steps={[]} activeId="1" />`,
            cli: 'npx acidui add steplist',
        },
        'grid-box': {
            name: 'GRID_BOX',
            desc: 'Geometric structural grid.',
            icon: <Layout size={32} />,
            preview: (
                <AcidGridBox>
                    <div style={{ padding: '4rem', textAlign: 'center' }}>GRID_UNIT_CONTENT</div>
                </AcidGridBox>
            ),
            code: `<AcidGridBox>Children</AcidGridBox>`,
            cli: 'npx acidui add gridbox',
        },
        'solid-card': {
            name: 'SOLID_CARD',
            desc: 'High-density cards.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <AcidSolidCard label="TX_44" title="MODULE_A" />
                    <AcidSolidCard label="RX_99" title="MODULE_B" />
                </div>
            ),
            code: `<AcidSolidCard title="Label" value="Data" />`,
            cli: 'npx acidui add solidcard',
        },
        'layout': {
            name: 'LAYOUT',
            desc: 'Structural scaffolding.',
            longDesc: 'Industrial layout primitives for building high-density technical interfaces with rigid coordinate systems.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', height: '300px' }}>
                    <AcidLayout>
                        <AcidPanel title="PANEL_LEFT" style={{ width: '200px' }}>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                                <AcidSkeleton width="80%" height="8px" />
                                <AcidSkeleton width="60%" height="8px" />
                                <AcidSkeleton width="40%" height="8px" />
                            </div>
                        </AcidPanel>
                        <div style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr', gap: '1px', background: 'var(--ac-border-muted)' }}>
                            <div style={{ background: 'var(--ac-bg)', padding: '1rem' }}>
                                <AcidLabel color="muted">HEADER_UNIT</AcidLabel>
                            </div>
                            <div style={{ background: 'var(--ac-bg)', padding: '1rem' }}>
                                <AcidLabel color="brand">MAIN_VIEWPORT</AcidLabel>
                            </div>
                        </div>
                    </AcidLayout>
                </div>
            ),
            cli: 'npx acidui add layout',
        },
        'aspect-ratio': {
            name: 'ASPECT_RATIO',
            desc: 'Geometric preservation.',
            longDesc: 'Structural unit for maintaining rigid pixel ratios across dynamic viewport scaling.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '300px' }}>
                    <AcidAspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden border border-muted">
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--ac-brand), #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>16:9_RATIO</span>
                        </div>
                    </AcidAspectRatio>
                </div>
            ),
            cli: 'npx acidui add aspect-ratio',
            props: [{ name: 'ratio', type: 'number', default: '16/9', desc: 'Width to height ratio.' }]
        },
        'resizable': {
            name: 'RESIZABLE',
            desc: 'Dynamic panel sizing.',
            longDesc: 'Interactive split-pane system for adjusting technical workspace allocation.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', height: '200px', border: '1px solid var(--ac-border-muted)' }}>
                    <AcidResizable defaultSize={30}>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>SIDEBAR_NODE</div>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>CONTENT_NODE</div>
                    </AcidResizable>
                </div>
            ),
            cli: 'npx acidui add resizable',
        },
        'scroll-area': {
            name: 'SCROLL_AREA',
            desc: 'Virtualized buffer view.',
            longDesc: 'Custom-engineered scroll viewport for navigating deep technical logs and high-density data buffers.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px', border: '1px solid var(--ac-border-muted)' }}>
                    <AcidScrollArea maxHeight="200px">
                        <div style={{ padding: '1.5rem' }}>
                            <AcidLabel color="brand" style={{ marginBottom: '1rem', display: 'block' }}>LOG_BUFFER_INIT</AcidLabel>
                            {Array.from({ length: 20 }).map((_, i) => (
                                <p key={i} style={{ fontSize: '0.85rem', opacity: 0.5, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                                    [{new Date().toISOString().split('T')[1].slice(0, 8)}] EVENT_ID_{1000 + i}_LOGGED_SYSTEM_OK
                                </p>
                            ))}
                            <AcidLabel color="brand">END_OF_BUFFER</AcidLabel>
                        </div>
                    </AcidScrollArea>
                </div>
            ),
            cli: 'npx acidui add scroll-area',
            props: [{ name: 'maxHeight', type: 'string | number', default: '300px', desc: 'Maximum vertical scale.' }]
        },
        'separator': {
            name: 'SEPARATOR',
            desc: 'Geometric structural breaks.',
            longDesc: '1px rigid lines for visually segmenting technical interface modules.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span>TOP_MODULE</span>
                        <AcidSeparator />
                        <span>BOTTOM_MODULE</span>
                        <div style={{ display: 'flex', height: '20px', alignItems: 'center', gap: '1rem' }}>
                            <span>LEFT</span>
                            <AcidSeparator orientation="vertical" />
                            <span>RIGHT</span>
                        </div>
                    </div>
                </div>
            ),
            cli: 'npx acidui add separator',
        },
        'sidebar': {
            name: 'SIDEBAR',
            desc: 'System navigation anchor.',
            longDesc: 'Global navigational scaffolding for accessing hierarchical system nodes and module configurations.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '300px', height: '400px', border: '1px solid var(--ac-border-muted)', overflow: 'hidden' }}>
                    <AcidSidebar categories={[
                        { title: 'SYS_CORE', items: [{ name: 'DASHBOARD' }, { name: 'METRICS' }] },
                        { title: 'MODULES', items: [{ name: 'STORAGE' }, { name: 'NETWORK' }] }
                    ]} />
                </div>
            ),
            cli: 'npx acidui add sidebar',
        },
        'breadcrumb': {
            name: 'BREADCRUMB',
            desc: 'Hierarchical path tracking.',
            longDesc: 'Industrial navigational trail for mapping the operator\'s position within deep system architectures.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <AcidBreadcrumb items={[
                    { label: 'ACIDUI' },
                    { label: 'COMPONENTS' },
                    { label: 'BREADCRUMB', current: true }
                ]} />
            ),
            cli: 'npx acidui add breadcrumb',
        },
        'navigation-menu': {
            name: 'NAVIGATION_MENU',
            desc: 'Contextual access points.',
            longDesc: 'Hierarchical menu system for global system navigation and rapid module switching.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <AcidNavigationMenu items={[
                    { label: 'OVERVIEW', href: '#', active: true },
                    { label: 'REPORTS', href: '#' },
                    { label: 'AUDIT', href: '#' }
                ]} />
            ),
            cli: 'npx acidui add navigation-menu',
        },
        'navbar': {
            name: 'NAVBAR',
            desc: 'Global layout header.',
            longDesc: 'Fixed system header containing primary brand identifiers and global operational controls.',
            icon: <Layout size={32} />,
            preview: (
                <div style={{ width: '100%', borderBottom: '1px solid var(--ac-border-muted)' }}>
                    <AcidNavbar />
                </div>
            ),
            cli: 'npx acidui add navbar',
        },
        'pagination': {
            name: 'PAGINATION',
            desc: 'Sequential buffer navigation.',
            longDesc: 'Technical split-buffer controls for navigating multi-node data sets and paginated logs.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <AcidPagination currentPage={1} totalPages={10} />
            ),
            cli: 'npx acidui add pagination',
        },
        'table': {
            name: 'TABLE',
            desc: 'Rigid data structures.',
            longDesc: 'High-density technical tables designed for displaying serialized system states and data buffers.',
            icon: <Table size={32} />,
            preview: (
                <AcidTable
                    columns={[
                        { header: 'NODE_ID', accessor: 'id' },
                        { header: 'STATUS', accessor: 'status' },
                        { header: 'UPTIME', accessor: 'uptime' },
                    ]}
                    data={[
                        { id: 'ALPHA_01', status: 'ACTIVE', uptime: '144h' },
                        { id: 'BETA_02', status: 'STANDBY', uptime: '12h' },
                        { id: 'GAMMA_03', status: 'ERROR', uptime: '0h' },
                    ]}
                />
            ),
            cli: 'npx acidui add table',
        },
        'marquee': {
            name: 'MARQUEE',
            desc: 'Horizontal telemetry stream.',
            longDesc: 'High-speed scrolling text components for secondary system feedback and environmental metadata.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <AcidMarquee text="SYSTEM_HEARTBEAT_NOMINAL // CORE_SYNC_ACTIVE // ALL_NODES_STANDBY" speed={15} color="pink" />
                </div>
            ),
            cli: 'npx acidui add marquee',
        },
        'glass-folder': {
            name: 'GLASS_FOLDER',
            desc: 'Aesthetic file containers.',
            longDesc: 'Semi-transparent structural units for visually organizing system files or configuration clusters.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <AcidGlassFolder icon={<Zap size={16} />} title="CONFIG.sys" />
                    <AcidGlassFolder icon={<Shield size={16} />} title="SEC_AUTH" />
                </div>
            ),
            cli: 'npx acidui add glass-folder',
        },
        'icon-box': {
            name: 'ICON_BOX',
            desc: 'Framed technical identifiers.',
            longDesc: 'Minimalist container for technical icons with metadata description support.',
            icon: <Layout size={32} />,
            compact: true,
            preview: (
                <AcidIconBox icon={<Terminal size={20} />}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>SHELL_INIT_v2</div>
                </AcidIconBox>
            ),
            cli: 'npx acidui add icon-box',
        },
        'link': {
            name: 'LINK',
            desc: 'Inter-node traversal.',
            longDesc: 'Technical hyperlinks with integrated kinetic feedback and destination vectors.',
            icon: <Link size={32} />,
            compact: true,
            preview: (
                <AcidLink href="#">ACCESS_SUB_ROUTINE</AcidLink>
            ),
            cli: 'npx acidui add link',
        },
        'aurora-text': {
            name: 'AURORA_TEXT',
            desc: 'High-impact kinetic glow.',
            longDesc: 'Dynamic typography unit utilizing a flowing multi-color gradient and Gaussian blur to create a premium biological light effect.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <AcidAuroraText intensity="high" style={{ fontSize: '3rem' }}>
                    AURORA_PROTOCOL
                </AcidAuroraText>
            ),
            cli: 'npx acidui add aurora-text',
        },
        'scroll-reveal': {
            name: 'SCROLL_REVEAL',
            desc: 'Viewport-triggered kinematics.',
            longDesc: 'Motion wrapper that reveals content based on its vertical position within the viewport, enhancing the scanning experience.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--ac-border-muted)' }}>
                    <AcidScrollReveal>
                        <div style={{ textAlign: 'center' }}>
                            <AcidLabel color="brand">SCROLL_TO_ACTIVATE</AcidLabel>
                            <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>REVEALED_CONTENT</h2>
                        </div>
                    </AcidScrollReveal>
                </div>
            ),
            cli: 'npx acidui add scroll-reveal',
        },
        'shiny-text': {
            name: 'SHINY_TEXT',
            desc: 'Polished specular scan.',
            longDesc: 'Technical text effect with a periodic light sweep, simulating the reflection of high-end metallic or crystalline surfaces.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <AcidShinyText speed={1.5} style={{ fontSize: '2.5rem', fontWeight: 900 }}>
                    SPECULAR_REFRACTION
                </AcidShinyText>
            ),
            cli: 'npx acidui add shiny-text',
        },
        'text-marquee': {
            name: 'TEXT_MARQUEE',
            desc: 'Infinite telemetry loop.',
            longDesc: 'Horizontal scrolling text buffer designed for presenting high-frequency metadata and system status strings.',
            icon: <Activity size={32} />,
            preview: (
                <AcidTextMarquee text="SYSTEM_HEARTBEAT_NOMINAL // SYNC_ACTIVE // ALL_NODES_STANDBY" speed={15} />
            ),
            cli: 'npx acidui add text-marquee',
        },
        'typewriter-input': {
            name: 'TYPEWRITER_INPUT',
            desc: 'Animated input labeling.',
            longDesc: 'Input unit with character-by-character label animation, perfect for interactive boot sequences and immersive terminals.',
            icon: <Terminal size={32} />,
            preview: (
                <AcidTypewriterInput
                    label="ENTER_ACCESS_CREDENTIALS"
                    placeholder="Operator ID..."
                    style={{ maxWidth: '400px' }}
                />
            ),
            cli: 'npx acidui add typewriter-input',
        },
        'typing-text': {
            name: 'TYPING_TEXT',
            desc: 'Character-by-character reveal.',
            longDesc: 'Dynamic text display that simulates human or machine input, ideal for system dialogues and mission briefings.',
            icon: <Activity size={32} />,
            compact: true,
            preview: (
                <AcidTypingText
                    text="Initializing neural link... Connection established. Accessing core database."
                    speed={40}
                    className="font-mono text-brand"
                />
            ),
            cli: 'npx acidui add typing-text',
        },
        'video-text': {
            name: 'VIDEO_TEXT',
            desc: 'Cinematic mask typography.',
            longDesc: 'Advanced typography layout using CSS blending modes to use video footage as a texture for large-scale letterforms.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                    <AcidVideoText
                        text="CORE"
                        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1730-large.mp4"
                    />
                </div>
            ),
            cli: 'npx acidui add video-text',
        },
        'chart': {
            name: 'CHART',
            desc: 'High-density data visualization.',
            longDesc: 'Industrial charting units for mapping complex system telemetry and module performance metrics.',
            icon: <BarChart3 size={32} />,
            preview: (
                <div style={{ width: '100%', maxWidth: '500px' }}>
                    <AcidChart
                        type="line"
                        title="SYSTEM_THROUGHPUT"
                        data={[
                            { label: '00:00', value: 30 },
                            { label: '04:00', value: 85 },
                            { label: '08:00', value: 45 },
                            { label: '12:00', value: 90 },
                            { label: '16:00', value: 65 },
                        ]}
                    />
                </div>
            ),
            cli: 'npx acidui add chart',
            usage: [
                {
                    label: 'BAR_CHART_UNIT',
                    demo: (
                        <AcidChart
                            type="bar"
                            title="MODULE_LATENCY"
                            data={[
                                { label: 'CPU', value: 65 },
                                { label: 'RAM', value: 82 },
                                { label: 'DISK', value: 41 },
                                { label: 'NET', value: 94 },
                            ]}
                        />
                    )
                },
                {
                    label: 'AREA_CHART_UNIT',
                    demo: (
                        <AcidChart
                            type="area"
                            title="NETWORK_TRAFFIC"
                            data={[
                                { label: '10:00', value: 20 },
                                { label: '11:00', value: 55 },
                                { label: '12:00', value: 40 },
                                { label: '13:00', value: 75 },
                                { label: '14:00', value: 60 },
                            ]}
                        />
                    )
                },
                {
                    label: 'PIE_CHART_UNIT',
                    demo: (
                        <AcidChart
                            type="pie"
                            title="RESOURCE_ALLOCATION"
                            data={[
                                { label: 'ACTIVE', value: 60 },
                                { label: 'IDLE', value: 25 },
                                { label: 'BUFFER', value: 15 },
                            ]}
                        />
                    )
                },
                {
                    label: 'RADAR_CHART_UNIT',
                    demo: (
                        <AcidChart
                            type="radar"
                            title="NODE_CAPABILITIES"
                            data={[
                                { label: 'SPEED', value: 90 },
                                { label: 'STABILITY', value: 70 },
                                { label: 'MEMORY', value: 85 },
                                { label: 'IO', value: 60 },
                                { label: 'COMPUTE', value: 95 },
                            ]}
                        />
                    )
                }
            ],
            variants: [
                { name: 'Line Chart', desc: 'A line chart to display data trends' },
                { name: 'Bar Chart', desc: 'A bar chart to compare data values' },
                { name: 'Area Chart', desc: 'An area chart to show data volume over time' },
                { name: 'Pie Chart', desc: 'A pie chart to display data composition' },
                { name: 'Radar Chart', desc: 'A radar chart to compare multiple quantitative variables' },
            ]
        },
        'collapsible': {
            name: 'COLLAPSIBLE',
            desc: 'Kinetic structural segments.',
            longDesc: 'Expandable containers for managing high-density technical content without compromising dashboard space.',
            icon: <Layers size={32} />,
            compact: true,
            preview: (
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <AcidCollapsible title="PRIMARY_STORAGE_METRICS">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>TOTAL_CAPACITY</span>
                                <span>2.4 PB</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>USED_SPACE</span>
                                <span style={{ color: 'var(--ac-brand)' }}>1.8 PB</span>
                            </div>
                        </div>
                    </AcidCollapsible>
                </div>
            ),
            cli: 'npx acidui add collapsible',
        },
        'context-menu': {
            name: 'CONTEXT_MENU',
            desc: 'Interceptive action sets.',
            longDesc: 'Premium right-click override systems for providing contextual module controls and system operations.',
            icon: <MousePointer2 size={32} />,
            preview: (
                <div style={{ width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--ac-border-muted)', borderRadius: '8px' }}>
                    <AcidContextMenu items={[
                        { label: 'SYS_REBOOT', onClick: () => console.log('Rebooting...') },
                        { label: 'SYNC_NODES', onClick: () => console.log('Syncing...') },
                        { divider: true },
                        { label: 'DELETE_LOGS', destructive: true, onClick: () => console.log('Deleting...') },
                    ]}>
                        <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.6 }}>
                            RIGHT_CLICK_FOR_CONTROL
                        </div>
                    </AcidContextMenu>
                </div>
            ),
            cli: 'npx acidui add context-menu',
        },
        'sheet': {
            name: 'SHEET',
            desc: 'Secondary control viewports.',
            longDesc: 'Advanced sliding side panels for deep system configuration and multi-module management.',
            icon: <PanelRight size={32} />,
            preview: (
                <div>
                    <AcidButton onClick={() => window.dispatchEvent(new CustomEvent('open-sheet-demo'))}>
                        TRIGGER_OVERLAY_PANEL
                    </AcidButton>
                    <SheetDemo />
                </div>
            ),
            cli: 'npx acidui add sheet',
        },
        'drawer': {
            name: 'DRAWER',
            desc: 'Mobile-first auxiliary modules.',
            longDesc: 'Tactile bottom sheets designed for efficient system interaction on handheld technical devices.',
            icon: <Layers size={32} />,
            preview: (
                <div>
                    <AcidButton onClick={() => window.dispatchEvent(new CustomEvent('open-drawer-demo'))}>
                        TRIGGER_DRAWER_UNIT
                    </AcidButton>
                    <DrawerDemo />
                </div>
            ),
            cli: 'npx acidui add drawer',
        },
        'bento-grid': {
            name: 'BENTO_GRID',
            desc: 'Multi-span tectonic layouts.',
            longDesc: 'A rigid grid system for high-density information architecture, supporting dynamic column and row spanning for technical dashboards.',
            icon: <Grid size={32} />,
            preview: (
                <AcidBentoGrid cols={3}>
                    <AcidBentoItem colSpan={2} title="SYSTEM_TELEMETRY" description="Real-time node performance tracking." icon={<Activity size={18} />}>
                        <div style={{ height: '100px', background: 'rgba(var(--ac-brand-rgb), 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ac-brand)', fontSize: '0.7rem' }}>CORE_ACTIVE</div>
                    </AcidBentoItem>
                    <AcidBentoItem title="SEC_STATUS" description="Encrypted link established." icon={<Shield size={18} />}>
                        <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>99.9%</div>
                    </AcidBentoItem>
                    <AcidBentoItem title="NET_LOAD" description="Packets processed per cycle." icon={<Zap size={18} />}>
                        <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1.2 TB/s</div>
                    </AcidBentoItem>
                    <AcidBentoItem colSpan={2} title="MODULE_SYNC" description="Cluster synchronization status." icon={<RefreshCw size={18} />}>
                        <div style={{ height: '100px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SYNC_COMPLETE</div>
                    </AcidBentoItem>
                </AcidBentoGrid>
            ),
            cli: 'npx acidui add bento-grid',
        },
        'dock': {
            name: 'DOCK',
            desc: 'Kinetic application launchers.',
            longDesc: 'A glassmorphic, spring-loaded application dock for providing quick access to primary system modules with magnetic scaling effects.',
            icon: <Monitor size={32} />,
            preview: (
                <div style={{ padding: '2rem 0' }}>
                    <AcidDock items={[
                        { id: '1', icon: <Activity size={20} />, label: 'METRICS', onClick: () => console.log('Metrics') },
                        { id: '2', icon: <Shield size={20} />, label: 'SECURITY', onClick: () => console.log('Security') },
                        { id: '3', icon: <Settings size={20} />, label: 'CONFIG', onClick: () => console.log('Config') },
                        { id: '4', icon: <Terminal size={20} />, label: 'SHELL', onClick: () => console.log('Shell') },
                    ]} />
                </div>
            ),
            cli: 'npx acidui add dock',
        },
        'animated-notification': {
            name: 'ANIMATED_NOTIFICATION',
            desc: 'Kinetic system alerts.',
            longDesc: 'High-contrast notification modules designed for high-density information relay with timed progress indicators.',
            icon: <Bell size={32} />,
            preview: <NotificationDemo />,
            cli: 'npx acidui add animated-notification',
        },
        'magic-card': {
            name: 'MAGIC_CARD',
            desc: 'Premium depth-glow modules.',
            longDesc: 'High-performance interactive cards featuring mouse-tracking radial gradients that emphasize focus and spatial hierarchy.',
            icon: <Wand2 size={32} />,
            preview: (
                <div style={{ padding: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <AcidMagicCard className="p-8" style={{ width: '300px', height: '180px' }}>
                        <div style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '0.9rem' }}>NEURAL_INTERFACE_A</h3>
                            <p style={{ fontSize: '0.7rem', color: 'var(--ac-text-muted)', marginTop: '0.5rem' }}>Active link established. Synchronizing telemetry.</p>
                        </div>
                    </AcidMagicCard>
                    <AcidMagicCard glowColor="rgba(39, 201, 63, 0.15)" style={{ width: '300px', height: '180px' }}>
                        <div style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '0.9rem', color: '#27c93f' }}>SECURE_ENCLAVE_B</h3>
                            <p style={{ fontSize: '0.7rem', color: 'var(--ac-text-muted)', marginTop: '0.5rem' }}>Encrypted channel established. High-speed sync active.</p>
                        </div>
                    </AcidMagicCard>
                </div>
            ),
            cli: 'npx acidui add magic-card',
        },
        'electro-border': {
            name: 'ELECTRO_BORDER',
            desc: 'Kinetic current-fed boundaries.',
            longDesc: 'Dynamic structural borders that simulate electrical current flow, ideal for highlighting high-priority system modules and active states.',
            icon: <Zap size={32} />,
            preview: (
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <AcidElectroBorder style={{ width: '280px' }}>
                        <div style={{ padding: '1rem' }}>
                            <h4 style={{ margin: 0, fontSize: '0.8rem' }}>PRIMARY_CORE</h4>
                            <p style={{ fontSize: '0.7rem', marginTop: '4px' }}>Voltage stable at 1.2V</p>
                        </div>
                    </AcidElectroBorder>
                    <AcidElectroBorder color="#27c93f" speed={1} style={{ width: '280px' }}>
                        <div style={{ padding: '1rem' }}>
                            <h4 style={{ margin: 0, fontSize: '0.8rem', color: '#27c93f' }}>SYNC_NODE_X</h4>
                            <p style={{ fontSize: '0.7rem', marginTop: '4px' }}>Burst transmission active.</p>
                        </div>
                    </AcidElectroBorder>
                </div>
            ),
            cli: 'npx acidui add electro-border',
        },
        'drag-order-list': {
            name: 'DRAG_ORDER_LIST',
            desc: 'Kinetic task reordering.',
            longDesc: 'A high-performance sortable list module for organizing system priorities, network nodes, and technical tasks.',
            icon: <GripVertical size={32} />,
            preview: (
                <div style={{ maxWidth: '400px' }}>
                    <AcidDragOrderList items={[
                        { id: '1', content: 'SYSTEM_OPTIMIZATION_TASK_ALPHA' },
                        { id: '2', content: 'NETWORK_SECURITY_AUDIT_OMEGA' },
                        { id: '3', content: 'DATA_INTEGRITY_VERIFICATION' },
                        { id: '4', content: 'NODE_SYNCHRONIZATION_MODULE' },
                    ]} />
                </div>
            ),
            cli: 'npx acidui add drag-order-list',
        },
        'top-loader': {
            name: 'TOP_LOADER',
            desc: 'Global loading telemetry.',
            longDesc: 'A viewport-level progress indicator that provides high-visibility feedback during long-running system operations and navigation transitions.',
            icon: <RefreshCw size={32} />,
            preview: <TopLoaderDemo />,
            cli: 'npx acidui add top-loader',
        },
        'magic-loader': {
            name: 'MAGIC_LOADER',
            desc: 'Kinetic synchronization rings.',
            longDesc: 'A sophisticated concentric-ring loader that provides deep technical feedback during high-priority system cycles and module initialization.',
            icon: <RefreshCw size={32} />,
            preview: (
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <AcidMagicLoader />
                </div>
            ),
            cli: 'npx acidui add magic-loader',
        },
        'stack-list': {
            name: 'STACK_LIST',
            desc: 'High-density telemetry stacks.',
            longDesc: 'A clean, mono-spaced data list for displaying key-value structural data and module status summaries.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ maxWidth: '400px' }}>
                    <AcidStackList
                        title="MODULE_TELEMETRY"
                        items={[
                            { id: '1', label: 'CORE_TEMP', value: '42°C', subLabel: 'SENS_A_ESTABLISHED' },
                            { id: '2', label: 'NODE_LATENCY', value: '12ms', subLabel: 'CLUSTER_SYNC_NOMINAL' },
                            { id: '3', label: 'VOLTAGE_LOAD', value: '1.2V', subLabel: 'LOAD_BALANCER_ACTIVE' },
                            { id: '4', label: 'SEC_PROTOCOL', value: 'AES_256', subLabel: 'LINK_ENCRYPTED' },
                        ]}
                    />
                </div>
            ),
            cli: 'npx acidui add stack-list',
        },
        'scroll-list': {
            name: 'SCROLL_LIST',
            desc: 'Kinetic telemetry revealing.',
            longDesc: 'A high-density technical list with viewport-aware entrance animations and structural progression indicators, ideal for large-scale system logs.',
            icon: <Activity size={32} />,
            preview: (
                <AcidScrollList
                    items={[
                        { id: '1', title: 'AUTH_SERVICE', timestamp: '14:20:01', content: 'Node successfully initialized on cluster Alpha.' },
                        { id: '2', title: 'NET_GATEWAY', timestamp: '14:20:05', content: 'Encrypted tunnel established. Handshake complete.' },
                        { id: '3', title: 'SEC_AUDIT', timestamp: '14:21:12', content: 'Integrity check passed. 0 vulnerabilities detected.' },
                        { id: '4', title: 'DATABASE_SYNC', timestamp: '14:22:00', content: 'Replication factor maintained. All nodes active.' },
                        { id: '5', title: 'HEARTBEAT', timestamp: '14:23:45', content: 'System sentiment: NOMINAL.' },
                    ]}
                />
            ),
            cli: 'npx acidui add scroll-list',
        },
        'scroll-stack': {
            name: 'SCROLL_STACK',
            desc: 'Tectonic sticky layering.',
            longDesc: 'A layered stacking container where modules stick and peel away progressively, creating deep spatial hierarchy during navigation.',
            icon: <Layers size={32} />,
            preview: (
                <div style={{ height: '400px', overflowY: 'auto', border: '1px dashed var(--ac-border-muted)', padding: '20px' }}>
                    <AcidScrollStack>
                        <div style={{ padding: '40px' }}>
                            <h3>MODULE_01_PRIMARY</h3>
                            <p>Calibration complete. All sensors online.</p>
                        </div>
                        <div style={{ padding: '40px' }}>
                            <h3>MODULE_02_SECONDARY</h3>
                            <p>Redundant links active. No data loss.</p>
                        </div>
                        <div style={{ padding: '40px' }}>
                            <h3>MODULE_03_AUXILIARY</h3>
                            <p>Cooling system maintaining 24°C.</p>
                        </div>
                    </AcidScrollStack>
                </div>
            ),
            cli: 'npx acidui add scroll-stack',
        },
        'top-sticky-bar': {
            name: 'TOP_STICKY_BAR',
            desc: 'Global system status headers.',
            longDesc: 'A kinetic, high-visibility status bar that sticks to the top of its context, featuring integrated scanline effects and alert states.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden', border: '1px dashed var(--ac-border-muted)' }}>
                    <AcidTopStickyBar message="SYSTEM_UPDATE_PENDING: Reboot required for kernel synchronization." type="warning" onClose={() => console.log('closed')} />
                    <div style={{ padding: '1rem' }}>Main content continues here...</div>
                </div>
            ),
            cli: 'npx acidui add top-sticky-bar',
        },
        'trusted-users': {
            name: 'TRUSTED_USERS',
            desc: 'Rigid node social proof.',
            longDesc: 'A tactile grid for displaying partner or user logos as integrated system nodes, featuring grayscale-to-active hover states.',
            icon: <Shield size={32} />,
            preview: (
                <AcidTrustedUsers users={[
                    { id: '1', name: 'CYBER_DYNE', logo: <Activity size={32} /> },
                    { id: '2', name: 'TYRELL_CORP', logo: <Shield size={32} /> },
                    { id: '3', name: 'W_Y_CORP', logo: <Zap size={32} /> },
                    { id: '4', name: 'OSCORP', logo: <RefreshCw size={32} /> },
                ]} />
            ),
            cli: 'npx acidui add trusted-users',
        },
        'ripple-loader': {
            name: 'RIPPLE_LOADER',
            desc: 'Expansion-wave signal indicators.',
            longDesc: 'A kinetic loading animation featuring expanding resonance waves, ideal for indicating active network signals or background sync.',
            icon: <RefreshCw size={32} />,
            preview: (
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <AcidRippleLoader />
                </div>
            ),
            cli: 'npx acidui add ripple-loader',
        },
        'count-up': {
            name: 'COUNT_UP',
            desc: 'Precise terminal numeric metrics.',
            longDesc: 'A high-precision numeric counter with quad-easing animations, designed for mapping live system values and telemetry.',
            icon: <Activity size={32} />,
            preview: (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <AcidCountUp end={85.4} decimals={1} suffix="%" label="CORE_LOAD" />
                    <AcidCountUp end={1240} prefix="$" label="REVENUE_MTD" />
                    <AcidCountUp end={99} suffix="ms" label="API_LATENCY" />
                </div>
            ),
            cli: 'npx acidui add count-up',
        },
        'terminal-card': {
            name: 'TERMINAL_CARD',
            desc: 'Technical command containers.',
            longDesc: 'A stylized card module that simulates a technical terminal interface, ideal for code, logs, and technical telemetry.',
            icon: <Terminal size={32} />,
            preview: (
                <AcidTerminalCard title="sys_init.sh">
                    <div style={{ color: '#27c93f' }}>[OK] Primary core initialized.</div>
                    <div style={{ color: '#27c93f' }}>[OK] Secondary link established.</div>
                    <div style={{ color: '#ffbd2e' }}>[WARN] Cooling system at 75% capacity.</div>
                    <div style={{ paddingLeft: '1rem' }}>&gt; Initializing neural link...</div>
                    <div style={{ paddingLeft: '1rem' }}>&gt; Connection secure. Welcome, Operator.</div>
                </AcidTerminalCard>
            ),
            cli: 'npx acidui add terminal-card',
        },
    };

    const config = components[currentComponent] || components['introduction'];

    // Pagination Logic
    const allItems = useMemo(() => sidebarData.flatMap(cat => cat.items.map(item => item.name)), []);
    const currentIndex = allItems.findIndex(name => name.toLowerCase().replace(/\s+/g, '-') === currentComponent);
    const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
    const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

    const getHash = (name: string) => `#${name.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="docs-container">
            <AcidSidebar categories={filteredSidebar} className="docs-sidebar">
                <div className="sidebar-search">
                    <SearchIcon size={16} />
                    <input
                        type="text"
                        placeholder="SEARCH COMPONENTS..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </AcidSidebar>

            <div className="docs-main">
                <nav className="docs-breadcrumbs">
                    <span>AcidUI</span>
                    <ChevronRight size={14} />
                    <span>Components</span>
                    <ChevronRight size={14} />
                    <span className="current">{config.name}</span>
                </nav>

                <header className="docs-page-header">
                    <div className="header-left">
                        <h1 className="docs-title">{config.name}</h1>
                        <p className="docs-description">{config.desc}</p>
                    </div>
                </header>

                <div className="docs-action-bar">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="action-tabs">
                            {['preview', 'code', 'cli'].map(tab => (
                                <button
                                    key={tab}
                                    className={clsx('action-tab', activeTab === tab && 'active')}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab === 'preview' ? <SearchIcon size={14} /> : tab === 'code' ? <Code size={14} /> : '>_'} {tab.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button
                            className="docs-control-btn"
                            style={{ width: 'auto', padding: '0 1rem', display: 'flex', gap: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
                            onClick={() => setShowDocs(!showDocs)}
                        >
                            {showDocs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            {showDocs ? 'HIDE_DOCUMENTATION' : 'SHOW_DOCUMENTATION'}
                        </button>
                    </div>
                    <div className="action-right">
                        <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} style={{ border: '1px solid var(--ac-border-muted)', background: 'transparent', padding: '8px', cursor: 'pointer', display: 'flex' }}>
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <div className="github-pill">
                            <Github size={14} />
                            <span>v1.0.0</span>
                        </div>
                    </div>
                </div>

                <div className={clsx('docs-showcase-container', config.compact && 'compact')}>
                    <div className="showcase-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${currentComponent}-${activeTab}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "circOut" }}
                                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                            >
                                {activeTab === 'preview' ? config.preview :
                                    activeTab === 'code' ? (
                                        <div className="code-view" style={{ width: '100%' }}>
                                            <AcidCodeDisplay
                                                title={`${config.name}.tsx`}
                                                code={componentSnippets[currentComponent] || config.code || ''}
                                            />
                                        </div>
                                    ) : (
                                        <div className="cli-view" style={{ width: '100%' }}>
                                            <AcidCodeBlock code={config.cli || ''} />
                                        </div>
                                    )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Content Sections */}
                {showDocs && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="docs-sections"
                    >
                        {/* Import Section */}
                        {config.importSnippet && (
                            <section className="docs-doc-section">
                                <h2 className="section-title">HOW_TO_IMPORT</h2>
                                <p className="docs-section-desc">Add this import to your component file</p>
                                <AcidCodeBlock code={config.importSnippet} />
                            </section>
                        )}

                        {/* Description Section */}
                        <section className="docs-desc-section">
                            <h2 className="section-title">DESCRIPTION</h2>
                            <div className="docs-desc-text">
                                {config.longDesc || config.desc}
                            </div>
                        </section>

                        {/* Props Table */}
                        <section className="docs-doc-section">
                            <h2 className="section-title">PROPS_CONFIGURATION</h2>
                            <p className="docs-section-desc">Properties and options for customizing this component</p>
                            <div className="docs-table-wrapper">
                                <table className="docs-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Default</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(config.props || []).map((prop, i) => (
                                            <tr key={i}>
                                                <td className="prop-name">{prop.name}</td>
                                                <td className="prop-type">{prop.type}</td>
                                                <td className="prop-default">{prop.default || '-'}</td>
                                                <td className="prop-desc">{prop.desc}</td>
                                            </tr>
                                        ))}
                                        {(!config.props || config.props.length === 0) && (
                                            <tr>
                                                <td colSpan={4} style={{ textAlign: 'center', opacity: 0.5 }}>NO_PROPS_REQUIRED</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Basic Usage Section */}
                        {config.usageSnippet && (
                            <section className="docs-doc-section">
                                <h2 className="section-title">BASIC_USAGE</h2>
                                <p className="docs-section-desc">Here’s a simple example of how to use this component</p>
                                <AcidCodeDisplay code={config.usageSnippet} title="Example.tsx" />
                            </section>
                        )}

                        {/* Usage Examples (Grid) */}
                        {config.usage && (
                            <section className="docs-usage-section">
                                <h2 className="section-title">VISUAL_EXAMPLES</h2>
                                <div className="usage-grid">
                                    {config.usage.map((use, i) => (
                                        <div key={i} className="usage-card">
                                            <span className="usage-label">{use.label}</span>
                                            <div className="usage-content">{use.demo}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Variants Section */}
                        {config.variants && (
                            <section className="docs-doc-section">
                                <h2 className="section-title">VARIANTS</h2>
                                <p className="docs-section-desc">Different visual and behavioral variants of the component</p>
                                <div className="docs-table-wrapper">
                                    <table className="docs-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {config.variants.map((variant, i) => (
                                                <tr key={i}>
                                                    <td className="prop-name">{variant.name}</td>
                                                    <td className="prop-type">{variant.desc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}
                    </motion.div>
                )}

                {/* Pagination */}
                <nav className="docs-pagination">
                    {prevItem ? (
                        <a href={getHash(prevItem)} className="pagination-btn prev">
                            <span className="dir">PREVIOUS</span>
                            <span className="title">{prevItem.toUpperCase()}</span>
                        </a>
                    ) : <div />}
                    {nextItem && (
                        <a href={getHash(nextItem)} className="pagination-btn next">
                            <span className="dir">NEXT_UNIT</span>
                            <span className="title">{nextItem.toUpperCase()}</span>
                        </a>
                    )}
                </nav>
            </div>
        </div>
    );
}
