import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X, Sun, Moon, Github, Cpu, Book, Layout, Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './AcidNavbar.css';

export interface NavItem {
    id: string;
    name: string;
    link: string;
    icon?: React.ReactNode;
}

export const AcidNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    });
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const navItems: NavItem[] = [
        { id: 'home', name: 'HOME', link: '/', icon: <Cpu size={14} /> },
        { id: 'docs', name: 'DOCUMENTATION', link: '/docs', icon: <Book size={14} /> },
        { id: 'components', name: 'LIBRARY', link: '/library', icon: <Layout size={14} /> },
    ];

    return (
        <header className="ac-navbar">
            <div className="ac-navbar-top-bar">
                <div className="ac-container ac-navbar-inner">
                    <div className="ac-navbar-left">
                        <Link to="/" className="ac-navbar-brand">
                            <Terminal className="text-brand" size={18} />
                            <span className="brand-text">ACID_UI <span className="version">v1.2.0</span></span>
                        </Link>
                    </div>

                    <nav className="ac-navbar-links desktop-only">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={clsx('ac-navbar-link', location.pathname === item.link && 'active')}
                            >
                                <span className="link-icon">{item.icon}</span>
                                <span className="link-text">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="ac-navbar-actions">
                        <button
                            className="ac-btn-icon"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            title="Toggle Theme"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="ac-btn-icon desktop-only"
                            title="GitHub Repository"
                        >
                            <Github size={18} />
                        </a>

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
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="ac-navbar-mobile-overlay"
                    >
                        <div className="ac-navbar-mobile-menu">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="ac-mobile-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
