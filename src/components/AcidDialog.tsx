import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import clsx from 'clsx';
import './AcidDialog.css';

export interface AcidDialogProps {
    isOpen?: boolean;
    onClose?: () => void;
    trigger?: React.ReactNode;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'full';
}

export const AcidDialog = ({
    isOpen: controlledIsOpen,
    onClose: controlledOnClose,
    trigger,
    title,
    description,
    children,
    footer,
    className,
    size = 'md'
}: AcidDialogProps) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const onClose = () => {
        if (controlledOnClose) controlledOnClose();
        else setInternalIsOpen(false);
    };

    return (
        <>
            {trigger && (
                <div onClick={() => setInternalIsOpen(true)} style={{ display: 'inline-block' }}>
                    {trigger}
                </div>
            )}
            <AnimatePresence>
                {isOpen && (
                    <div className="ac-dialog-overlay-wrapper">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="ac-dialog-overlay"
                            onClick={onClose}
                        />
                        <div className="ac-dialog-container">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className={clsx('ac-dialog', `ac-dialog-${size}`, className)}
                            >
                                <header className="ac-dialog-header">
                                    <div className="ac-dialog-header-content">
                                        <h3 className="ac-dialog-title">{title || 'SYSTEM_DIALOG'}</h3>
                                        {description && <p className="ac-dialog-description">{description}</p>}
                                    </div>
                                    <button className="ac-dialog-close" onClick={onClose}>
                                        <X size={20} />
                                    </button>
                                </header>

                                <main className="ac-dialog-body">
                                    {children}
                                </main>

                                {footer && (
                                    <footer className="ac-dialog-footer">
                                        {footer}
                                    </footer>
                                )}
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
