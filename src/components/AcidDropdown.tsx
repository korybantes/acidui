import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidDropdown.css';

export interface DropdownItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'default' | 'danger';
}

export interface AcidDropdownProps {
    trigger: React.ReactNode;
    items: DropdownItem[];
    align?: 'left' | 'right';
    className?: string;
}

export const AcidDropdown = ({
    trigger,
    items,
    align = 'right',
    className
}: AcidDropdownProps) => {
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
        <div className={clsx('ac-dropdown-container', className)} ref={containerRef}>
            <div className="ac-dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        className={clsx('ac-dropdown-menu', `ac-align-${align}`)}
                    >
                        <div className="ac-dropdown-inner">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    className={clsx(
                                        'ac-dropdown-item',
                                        item.variant === 'danger' && 'ac-item-danger',
                                        item.disabled && 'ac-item-disabled'
                                    )}
                                    disabled={item.disabled}
                                    onClick={() => {
                                        if (!item.disabled) {
                                            item.onClick?.();
                                            setIsOpen(false);
                                        }
                                    }}
                                >
                                    <div className="ac-item-left">
                                        {item.icon && <span className="ac-item-icon">{item.icon}</span>}
                                        <span className="ac-item-label">{item.label}</span>
                                    </div>
                                    {item.shortcut && <span className="ac-item-shortcut">{item.shortcut}</span>}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
