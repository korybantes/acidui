import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X, Sun, Moon, Github, Cpu, Book, Layout, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './AcidFloatingNavbar.css';

export interface NavItem {
    id: string;
    name: string;
    link: string;
    icon?: React.ReactNode;
}

export interface AcidFloatingNavbarProps {
    items?: NavItem[];
    className?: string;
}

export const AcidFloatingNavbar = ({ items, className }: AcidFloatingNavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    });
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const defaultItems: NavItem[] = [
        { id: 'home', name: 'HOME', link: '/', icon: <Cpu size={16} /> },
        { id: 'docs', name: 'DOCS', link: '/docs', icon: <Book size={16} /> },
        { id: 'components', name: 'COMPONENTS', link: '/docs#button', icon: <Layout size={16} /> },
    ];

    const navItems = items || defaultItems;

    return (
        <nav className={clsx('ac-navbar-wrapper', className)}>
            <div className="ac-navbar-inner">
                <div className="ac-navbar-left">
                    <Link to="/" className="ac-nav-logo">
                        <MessageSquare className="text-brand" size={20} />
                        <span>ACID<span className="text-secondary">UI</span></span>
                    </Link>
                </div>

                <div className="ac-navbar-center ac-desktop-only">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            className={clsx('ac-nav-item', location.pathname === item.link && 'active')}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="ac-navbar-right">
                    <button
                        className="ac-icon-btn"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a href="https://github.com" target="_blank" rel="noreferrer" className="ac-icon-btn ac-desktop-only">
                        <Github size={18} />
                    </a>

                    <button className="ac-menu-toggle ac-mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ac-mobile-dropdown"
                    >
                        <div className="ac-mobile-items">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="ac-mobile-item"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="ac-mobile-item">
                                <Github size={16} />
                                <span>GITHUB</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
