import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X, Sun, Moon, Github, Terminal, Zap, Shield, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AcidMegaMenu } from './AcidMegaMenu';
import './AcidNavbar.css';

export interface NavItem {
    id: string;
    name: string;
    link: string;
    icon?: React.ReactNode;
}

export const AcidNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    });
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sidebarItems = [
        { id: 's1', label: 'Docs', description: 'Technical documentation.', icon: <Terminal size={16} /> },
        { id: 's2', label: 'Library', description: 'Visual component gallery.', icon: <Activity size={16} /> }
    ];

    const megaMenuSections = [
        {
            title: 'CORE_COMPONENTS',
            items: [
                { id: '1', label: 'Buttons', description: 'Interactive trigger units.', icon: <Zap size={14} />, href: '/docs#button' },
                { id: '2', label: 'Navigation', description: 'Pathfinding modules.', icon: <Activity size={14} />, href: '/docs#navbar' },
                { id: '3', label: 'Layouts', description: 'Structural grid systems.', icon: <Shield size={14} />, href: '/docs#grid' },
                { id: '4', label: 'Visuals', description: 'High-impact display.', icon: <Terminal size={14} />, href: '/docs#bento' }
            ]
        },
        {
            title: 'RESOURCES',
            items: [
                { id: '5', label: 'Blocks', description: 'Ready-to-use patterns.', icon: <Zap size={14} />, tag: 'NEW', href: '/library' },
                { id: '6', label: 'Icons', description: 'Industrial symbol set.', icon: <Shield size={14} />, href: '/docs' }
            ]
        }
    ];

    return (
        <header className={clsx('ac-navbar', scrolled && 'scrolled')}>
            <div className="ac-navbar-scanline" />

            <div className="ac-container ac-navbar-inner">
                <div className="ac-navbar-left">
                    <Link to="/" className="ac-navbar-brand">
                        <span className="text-brand" style={{ fontSize: '1.5rem', fontWeight: 900 }}>*</span>
                        <span className="brand-text">ACID_UI</span>
                    </Link>
                </div>

                <nav className="ac-navbar-links desktop-only">
                    <Link to="/docs" className={clsx('ac-navbar-link', location.pathname === '/docs' && 'active')}>
                        <span>DOCS</span>
                    </Link>

                    <Link to="/library" className={clsx('ac-navbar-link', location.pathname === '/library' && 'active')}>
                        <span>LIBRARY</span>
                    </Link>

                    <AcidMegaMenu
                        trigger="COMPONENTS"
                        sections={megaMenuSections}
                        sidebarItems={sidebarItems}
                        browseAllHref="/docs"
                    />
                </nav>

                <div className="ac-navbar-right">
                    <div className="ac-navbar-actions">
                        <button
                            className="ac-btn-icon theme-toggle"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                        >
                            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        <a href="https://github.com/korybantes/acidui" target="_blank" rel="noreferrer" className="ac-btn-icon desktop-only">
                            <Github size={16} />
                        </a>

                        <div className="ac-navbar-cta-group">
                            <Link to="/docs" className="ac-nav-btn-solid">GET_STARTED</Link>
                        </div>

                        <button
                            className="ac-btn-icon mobile-only"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="ac-navbar-mobile-overlay"
                    >
                        <div className="ac-navbar-mobile-menu">
                            <Link to="/" className="ac-mobile-link" onClick={() => setIsOpen(false)}>HOME</Link>
                            <Link to="/docs" className="ac-mobile-link" onClick={() => setIsOpen(false)}>DOCS</Link>
                            <Link to="/library" className="ac-mobile-link" onClick={() => setIsOpen(false)}>LIBRARY</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
