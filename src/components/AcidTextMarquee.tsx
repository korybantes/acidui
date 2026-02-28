
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidTextMarquee.css';

export interface AcidTextMarqueeProps {
    text: string;
    speed?: number;
    repeat?: number;
    className?: string;
    direction?: 'left' | 'right';
}

export const AcidTextMarquee = ({ text, speed = 20, repeat = 4, className, direction = 'left' }: AcidTextMarqueeProps) => {
    return (
        <div className={clsx('ac-text-marquee-wrap', className)}>
            <motion.div
                className="ac-text-marquee-content"
                animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i} className="ac-text-marquee-item">
                        {text}
                        <span className="ac-marquee-separator">::</span>
                    </span>
                ))}
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i + repeat} className="ac-text-marquee-item">
                        {text}
                        <span className="ac-marquee-separator">::</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
