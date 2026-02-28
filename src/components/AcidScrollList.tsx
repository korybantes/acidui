import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import './AcidScrollList.css';

export interface AcidScrollListItem {
    id: string;
    content: React.ReactNode;
    title?: string;
    timestamp?: string;
}

export interface AcidScrollListProps {
    items: AcidScrollListItem[];
    maxHeight?: string | number;
    className?: string;
}

export const AcidScrollList = ({
    items,
    maxHeight = '400px',
    className
}: AcidScrollListProps) => {
    return (
        <div
            className={clsx('ac-scroll-list-container', className)}
            style={{ maxHeight }}
        >
            <div className="ac-scroll-list-mask ac-mask-top" />
            <div className="ac-scroll-list-viewport">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="ac-scroll-item"
                    >
                        <div className="ac-scroll-item-indicator" />
                        <div className="ac-scroll-item-content">
                            {item.title && (
                                <div className="ac-scroll-item-header">
                                    <span className="ac-scroll-item-title">{item.title}</span>
                                    {item.timestamp && <span className="ac-scroll-item-time">{item.timestamp}</span>}
                                </div>
                            )}
                            <div className="ac-scroll-item-body">
                                {item.content}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="ac-scroll-list-mask ac-mask-bottom" />
        </div>
    );
};
