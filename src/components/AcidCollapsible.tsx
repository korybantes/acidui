import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import './AcidCollapsible.css';

export interface AcidCollapsibleProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    showIcon?: boolean;
}

export const AcidCollapsible = ({
    title,
    children,
    defaultOpen = false,
    className,
    showIcon = true
}: AcidCollapsibleProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={clsx('ac-collapsible', isOpen && 'ac-collapsible-open', className)}>
            <button
                className="ac-collapsible-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="ac-collapsible-title">{title}</span>
                {showIcon && (
                    <ChevronDown
                        size={16}
                        className={clsx('ac-collapsible-icon', isOpen && 'ac-collapsible-icon-active')}
                    />
                )}
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="ac-collapsible-content-wrapper"
                    >
                        <div className="ac-collapsible-content">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
