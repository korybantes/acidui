import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ChevronDown, ExternalLink } from 'lucide-react';
import './AcidMegaMenu.css';

export interface MegaMenuItem {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    href?: string;
    tag?: string;
}

export interface MegaMenuSection {
    title: string;
    items: MegaMenuItem[];
}

export interface AcidMegaMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    trigger: string;
    sections: MegaMenuSection[];
    sidebarItems?: MegaMenuItem[];
    browseAllLabel?: string;
    browseAllHref?: string;
}

export const AcidMegaMenu: React.FC<AcidMegaMenuProps> = ({
    trigger,
    sections,
    sidebarItems,
    browseAllLabel = 'BROWSE_ALL_COMPONENTS',
    browseAllHref,
    className,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            className={clsx('ac-megamenu-container', className)}
            ref={containerRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            {...props}
        >
            <button
                className={clsx('ac-megamenu-trigger', isOpen && 'active')}
                onClick={() => setIsOpen(!isOpen)}
            >
                {trigger}
                <ChevronDown className={clsx('ac-megamenu-chevron', isOpen && 'open')} size={14} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="ac-megamenu-panel"
                    >
                        <div className="ac-megamenu-content-wrapper">
                            {sidebarItems && (
                                <div className="ac-megamenu-sidebar">
                                    <div className="ac-megamenu-sidebar-header">
                                        <span className="ac-ps-meta">OVERVIEW</span>
                                    </div>
                                    <div className="ac-megamenu-sidebar-list">
                                        {sidebarItems.map(item => (
                                            <a key={item.id} href={item.href || '#'} className="ac-megamenu-sidebar-item">
                                                <div className="ac-megamenu-sidebar-icon">
                                                    {item.icon}
                                                </div>
                                                <div className="ac-megamenu-sidebar-content">
                                                    <span className="ac-megamenu-sidebar-label">{item.label}</span>
                                                    {item.description && <span className="ac-megamenu-sidebar-desc">{item.description}</span>}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="ac-megamenu-grid-container">
                                <div className="ac-megamenu-grid">
                                    {sections.map((section, idx) => (
                                        <div key={idx} className="ac-megamenu-section">
                                            <h3 className="ac-megamenu-section-title">
                                                <span className="ac-ps-meta">REGION_{String(idx + 1).padStart(2, '0')}</span>
                                                {section.title}
                                            </h3>
                                            <div className="ac-megamenu-items">
                                                {section.items.map((item) => (
                                                    <a
                                                        key={item.id}
                                                        href={item.href || '#'}
                                                        className="ac-megamenu-item"
                                                    >
                                                        <div className="ac-megamenu-item-icon">
                                                            {item.icon}
                                                        </div>
                                                        <div className="ac-megamenu-item-content">
                                                            <div className="ac-megamenu-item-header">
                                                                <span className="ac-megamenu-item-label">{item.label}</span>
                                                                {item.tag && <span className="ac-megamenu-item-tag">{item.tag}</span>}
                                                            </div>
                                                            {item.description && (
                                                                <p className="ac-megamenu-item-desc">{item.description}</p>
                                                            )}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="ac-megamenu-footer">
                            <div className="ac-megamenu-footer-content">
                                <span className="ac-ps-meta">AUTH_TOKEN: VALID</span>
                                <span className="ac-megamenu-footer-text">SECURE_LINK_REDUNDANCY_ENABLED</span>
                            </div>

                            {browseAllHref && (
                                <a href={browseAllHref} className="ac-megamenu-browse-all">
                                    {browseAllLabel}
                                    <ExternalLink size={12} />
                                </a>
                            )}
                        </div>

                        <div className="ac-megamenu-scanline" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
