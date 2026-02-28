import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidDrawer.css';

export interface AcidDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const AcidDrawer = ({
    isOpen,
    onClose,
    children,
    title,
    className
}: AcidDrawerProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="ac-drawer-overlay"
                    />
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={clsx('ac-drawer', className)}
                    >
                        <div className="ac-drawer-handle-wrapper">
                            <div className="ac-drawer-handle" />
                        </div>
                        {title && (
                            <div className="ac-drawer-header">
                                <h3 className="ac-drawer-title">{title}</h3>
                            </div>
                        )}
                        <div className="ac-drawer-content">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
