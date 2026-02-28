import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AcidTopLoader.css';

export interface AcidTopLoaderProps {
    visible?: boolean;
    color?: string;
    height?: number;
    speed?: number;
}

export const AcidTopLoader = ({
    visible = false,
    color = 'var(--ac-brand)',
    height = 3,
    speed = 0.5
}: AcidTopLoaderProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (visible) {
            const resetTimer = setTimeout(() => setProgress(0), 0);
            timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) return prev;
                    return prev + (Math.random() * 5);
                });
            }, 300);
            return () => {
                clearTimeout(resetTimer);
                clearInterval(timer);
            };
        } else {
            setProgress(100);
        }
    }, [visible]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.2 } }}
                    className="ac-top-loader-container"
                    style={{ height }}
                >
                    <motion.div
                        className="ac-top-loader-bar"
                        style={{ background: color }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: speed }}
                    />
                    <div className="ac-top-loader-glow" style={{ backgroundColor: color }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
