import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import './AcidCountUp.css';

export interface AcidCountUpProps {
    end: number;
    start?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
    label?: string;
}

export const AcidCountUp = ({
    end,
    start = 0,
    duration = 2000,
    prefix = '',
    suffix = '',
    decimals = 0,
    className,
    label
}: AcidCountUpProps) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        let animationFrameId: number;

        const updateCount = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = start + easeProgress * (end - start);

            setCount(currentCount);
            countRef.current = currentCount;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(updateCount);
            }
        };

        animationFrameId = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, start, duration]);

    const formattedCount = count.toFixed(decimals);

    return (
        <div className={clsx('ac-count-up', className)}>
            <div className="ac-count-up-main">
                {prefix && <span className="ac-count-up-prefix">{prefix}</span>}
                <span className="ac-count-up-value">{formattedCount}</span>
                {suffix && <span className="ac-count-up-suffix">{suffix}</span>}
            </div>
            {label && <div className="ac-count-up-label">{label}</div>}
            <div className="ac-count-up-scanline" />
        </div>
    );
};
