import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import clsx from 'clsx';
import './AcidTopStickyBar.css';

export interface AcidTopStickyBarProps {
    message: string;
    type?: 'info' | 'warning' | 'error';
    onClose?: () => void;
    className?: string;
}

export const AcidTopStickyBar = ({
    message,
    type = 'info',
    onClose,
    className
}: AcidTopStickyBarProps) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const Icon = type === 'error' ? AlertCircle : AlertCircle; // Simplified for now

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className={clsx('ac-sticky-bar', `ac-sticky-bar-${type}`, className)}
        >
            <div className="ac-sticky-bar-content">
                <Icon size={14} className="ac-sticky-bar-icon" />
                <span className="ac-sticky-bar-text">{message}</span>
            </div>
            {onClose && (
                <button
                    className="ac-sticky-bar-close"
                    onClick={() => {
                        setIsVisible(false);
                        onClose();
                    }}
                >
                    <X size={14} />
                </button>
            )}
            <div className="ac-sticky-bar-scanline" />
        </motion.div>
    );
};
