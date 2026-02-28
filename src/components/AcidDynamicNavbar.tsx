import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Book, Layout, Github, Sun, Moon, Menu, X, Rocket, Zap } from 'lucide-react';
import clsx from 'clsx';
import './AcidDynamicNavbar.css';

export interface NavItem {
    id: string;
    label: string;
    path: string;
    icon: React.ReactNode;
}

export interface AcidDynamicNavbarProps {
    items?: NavItem[];
    className?: string;
}

const defaultItems: NavItem[] = [
    { id: 'home', label: 'Home', path: '/', icon: <Cpu size={18} /> },
    { id: 'docs', label: 'Docs', path: '/docs', icon: <Book size={18} /> },
    { id: 'library', label: 'Library', path: '/library', icon: <Layout size={18} /> },
];

export const AcidDynamicNavbar = ({ items = defaultItems, className }: AcidDynamicNavbarProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    });
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const activeIndex = items.findIndex(item => item.path === location.pathname);

    return (
        <div className={clsx('ac-dynamic-nav-container', className)} ref={navRef}>
            <nav className="ac-dynamic-nav">
                {/* Logo Section */}
                <Link to="/" className="ac-dynamic-nav-logo">
                    <div className="logo-icon-wrapper">
                        <Zap className="logo-icon" size={20} />
                    </div>
                    <span className="logo-text">ACID_UI</span>
                </Link>

                {/* Desktop Links */}
                <div className="ac-dynamic-nav-links desktop-only" onMouseLeave={() => setHoveredIndex(null)}>
                    {items.map((item, index) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={clsx('ac-dynamic-nav-link', activeIndex === index && 'active')}
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            <span className="nav-item-icon">{item.icon}</span>
                            <span className="nav-item-label">{item.label}</span>
                        </Link>
                    ))}

                    {/* Sliding Background */}
                    <AnimatePresence>
                        {(hoveredIndex !== null || activeIndex !== -1) && (
                            <motion.div
                                className="ac-dynamic-nav-indicator"
                                layoutId="nav-indicator"
                                initial={false}
                                animate={{
                                    left: hoveredIndex !== null
                                        ? `${(hoveredIndex / items.length) * 100}%`
                                        : activeIndex !== -1
                                            ? `${(activeIndex / items.length) * 100}%`
                                            : 0,
                                    width: `${100 / items.length}%`,
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Actions Section */}
                <div className="ac-dynamic-nav-actions">
                    <button
                        className="ac-nav-action-btn theme-toggle"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="ac-nav-action-btn desktop-only"
                    >
                        <Github size={18} />
                    </a>

                    <Link to="/docs#getting-started" className="ac-dynamic-nav-cta desktop-only">
                        <Rocket size={16} />
                        <span>Deploy</span>
                    </Link>

                    <button
                        className="ac-nav-action-btn mobile-only"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="ac-dynamic-nav-mobile-menu"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="mobile-menu-inner">
                            {items.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className={clsx('mobile-menu-link', location.pathname === item.path && 'active')}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="link-icon-bg">{item.icon}</div>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            <div className="mobile-menu-divider" />
                            <a href="https://github.com" className="mobile-menu-link">
                                <div className="link-icon-bg"><Github size={18} /></div>
                                <span>Github</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
