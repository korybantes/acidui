import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidDock.css';

export interface AcidDockItem {
    id: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

export interface AcidDockProps {
    items: AcidDockItem[];
    className?: string;
}

export const AcidDock = ({
    items,
    className
}: AcidDockProps) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className={clsx('ac-dock-container', className)}>
            <div className="ac-dock">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="ac-dock-item-wrapper"
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={item.onClick}
                    >
                        <motion.div
                            className="ac-dock-item"
                            whileHover={{
                                y: -10,
                                scale: 1.1,
                                boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                            <div className="ac-dock-item-inner">
                                {item.icon}
                            </div>
                        </motion.div>
                        <AnimatePresence>
                            {hoveredId === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    className="ac-dock-tooltip"
                                >
                                    {item.label}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};
