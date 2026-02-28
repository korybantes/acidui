import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import './AcidAccordion.css';

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface AcidAccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    className?: string;
}

export const AcidAccordion = ({
    items,
    allowMultiple = false,
    className
}: AcidAccordionProps) => {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
        } else {
            setOpenIds(prev => prev.includes(id) ? [] : [id]);
        }
    };

    return (
        <div className={clsx('ac-accordion', className)}>
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                    <div key={item.id} className={clsx('ac-accordion-item', isOpen && 'active')}>
                        <button
                            className="ac-accordion-trigger"
                            onClick={() => toggleItem(item.id)}
                        >
                            <span className="ac-accordion-title">{item.title}</span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown size={18} />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    className="ac-accordion-content-wrapper"
                                >
                                    <div className="ac-accordion-content">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};
