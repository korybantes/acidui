import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidTooltip.css';

export interface AcidTooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}

export const AcidTooltip = ({
    content,
    children,
    position = 'top',
    className
}: AcidTooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="ac-tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: (position === 'top' || position === 'bottom') ? '-50%' : 0, y: (position === 'left' || position === 'right') ? '-50%' : 0 }}
                        animate={{ opacity: 1, scale: 1, x: (position === 'top' || position === 'bottom') ? '-50%' : 0, y: (position === 'left' || position === 'right') ? '-50%' : 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className={clsx('ac-tooltip', `ac-tooltip-${position}`, className)}
                    >
                        {content}
                        <div className="ac-tooltip-arrow" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
