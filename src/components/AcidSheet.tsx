import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import clsx from 'clsx';
import './AcidSheet.css';

export interface AcidSheetProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    className?: string;
}

export const AcidSheet = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    side = 'right',
    className
}: AcidSheetProps) => {
    const slideVariants = {
        right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
        left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
        top: { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
        bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="ac-sheet-overlay"
                    />
                    <motion.div
                        initial={slideVariants[side].initial}
                        animate={slideVariants[side].animate}
                        exit={slideVariants[side].exit}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={clsx('ac-sheet', `ac-sheet-${side}`, className)}
                    >
                        <div className="ac-sheet-header">
                            <div className="ac-sheet-header-content">
                                {title && <h2 className="ac-sheet-title">{title}</h2>}
                                {description && <p className="ac-sheet-desc">{description}</p>}
                            </div>
                            <button className="ac-sheet-close" onClick={onClose}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="ac-sheet-content">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
