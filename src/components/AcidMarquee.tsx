import clsx from 'clsx';
import { motion } from 'framer-motion';
import './AcidMarquee.css';

export interface AcidMarqueeProps {
    text: string;
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
    color?: 'lime' | 'pink' | 'cyan' | 'purple';
}

export const AcidMarquee = ({ text, speed = 20, direction = 'left', className, color = 'lime' }: AcidMarqueeProps) => {
    return (
        <div className={clsx('ac-marquee-container', `ac-marquee-${color}`, className)}>
            <motion.div
                className="ac-marquee-content"
                animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
            >
                <span className="ac-marquee-text">{text}</span>
                <span className="ac-marquee-text">{text}</span>
                <span className="ac-marquee-text">{text}</span>
                <span className="ac-marquee-text">{text}</span>
            </motion.div>
        </div>
    );
};
