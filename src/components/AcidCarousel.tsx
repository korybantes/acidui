import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import './AcidCarousel.css';

export interface AcidCarouselItem {
    id: string;
    title: string;
    label?: string;
    description: string;
    content?: React.ReactNode;
}

export interface AcidCarouselProps {
    items: AcidCarouselItem[];
    direction?: 'horizontal' | 'vertical';
    autoPlay?: boolean;
    interval?: number;
    className?: string;
}

export const AcidCarousel = ({
    items,
    direction = 'horizontal',
    autoPlay = false,
    interval = 5000,
    className
}: AcidCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);
    const lastTimeRef = useRef(0);
    const requestRef = useRef<number | undefined>(undefined);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
        setProgress(0);
        progressRef.current = 0;
    }, [items.length]);

    const selectSlide = (index: number) => {
        setActiveIndex(index);
        setProgress(0);
        progressRef.current = 0;
    };

    const animate = useCallback((time: number) => {
        if (!autoPlay) return;

        if (lastTimeRef.current !== undefined) {
            const deltaTime = time - lastTimeRef.current;
            progressRef.current += (deltaTime / interval) * 100;

            if (progressRef.current >= 100) {
                nextSlide();
            } else {
                setProgress(progressRef.current);
            }
        }

        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }, [autoPlay, interval, nextSlide]);

    useEffect(() => {
        if (autoPlay) {
            requestRef.current = requestAnimationFrame(animate);
            return () => {
                if (requestRef.current) cancelAnimationFrame(requestRef.current);
            };
        } else {
            setProgress(0);
            progressRef.current = 0;
        }
    }, [autoPlay, animate]);

    // Asterisk icon to match the aesthetic
    const Asterisk = ({ active }: { active: boolean }) => (
        <motion.div
            className={clsx('ac-asterisk', active && 'active')}
            animate={{ rotate: active ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5L7 19M22 12H2M19 17L5 7" />
            </svg>
        </motion.div>
    );

    return (
        <div className={clsx('ac-carousel-container', `ac-${direction}`, className)}>
            <div className="ac-carousel-controls">
                {items.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={item.id}
                            className={clsx('ac-carousel-tab', isActive && 'active')}
                            onClick={() => selectSlide(idx)}
                        >
                            <div className="ac-tab-header">
                                <div className="ac-tab-indicator">
                                    <Asterisk active={isActive} />
                                </div>
                                <div className="ac-tab-title-group">
                                    {item.label && <span className="ac-tab-label">{item.label}</span>}
                                    <h3 className="ac-tab-title">{item.title}</h3>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="ac-tab-content"
                                    >
                                        <p>{item.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Progress Bar for Autoplay */}
                            {autoPlay && (
                                <div className="ac-tab-progress-bg">
                                    <motion.div
                                        className="ac-tab-progress-fill"
                                        initial={{ width: '0%' }}
                                        animate={{ width: isActive ? `${progress}%` : (idx < activeIndex ? '100%' : '0%') }}
                                        transition={{ duration: 0 }}
                                    />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="ac-carousel-display">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="ac-carousel-visual"
                    >
                        {items[activeIndex].content || (
                            <div className="ac-carousel-placeholder">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2 }}>
                                        <path d="M12 2v20M17 5L7 19M22 12H2M19 17L5 7" />
                                    </svg>
                                </motion.div>
                                <span>{items[activeIndex].title} VISUAL_MODULE</span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
