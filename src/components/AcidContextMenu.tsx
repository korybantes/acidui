import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidContextMenu.css';

export interface ContextMenuItem {
    label?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    destructive?: boolean;
    disabled?: boolean;
    divider?: boolean;
}

export interface AcidContextMenuProps {
    items: ContextMenuItem[];
    children: React.ReactNode;
    className?: string;
}

export const AcidContextMenu = ({
    items,
    children,
    className
}: AcidContextMenuProps) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
    }, []);

    const closeMenu = useCallback(() => {
        setVisible(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };

        if (visible) {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('scroll', closeMenu);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', closeMenu);
        };
    }, [visible, closeMenu]);

    return (
        <div
            className={clsx('ac-context-menu-wrapper', className)}
            onContextMenu={handleContextMenu}
        >
            {children}

            <AnimatePresence>
                {visible && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        className="ac-context-menu"
                        style={{ top: position.y, left: position.x }}
                    >
                        <div className="ac-context-menu-inner">
                            {items.map((item, i) => {
                                if (item.divider) {
                                    return <div key={i} className="ac-context-menu-divider" />;
                                }

                                return (
                                    <button
                                        key={i}
                                        className={clsx(
                                            'ac-context-menu-item',
                                            item.destructive && 'ac-context-menu-item-destructive',
                                            item.disabled && 'ac-context-menu-item-disabled'
                                        )}
                                        onClick={() => {
                                            if (!item.disabled) {
                                                item.onClick?.();
                                                closeMenu();
                                            }
                                        }}
                                        disabled={item.disabled}
                                    >
                                        <div className="ac-context-menu-item-content">
                                            {item.icon && <span className="ac-context-menu-icon">{item.icon}</span>}
                                            <span className="ac-context-menu-label">{item.label}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
