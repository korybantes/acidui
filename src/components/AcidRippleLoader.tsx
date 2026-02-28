import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidRippleLoader.css';

export interface AcidRippleLoaderProps {
    size?: number;
    color?: string;
    className?: string;
}

export const AcidRippleLoader = ({
    size = 100,
    color = 'var(--ac-brand)',
    className
}: AcidRippleLoaderProps) => {
    return (
        <div
            className={clsx('ac-ripple-loader', className)}
            style={{ width: size, height: size } as React.CSSProperties}
        >
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="ac-ripple-ring"
                    style={{ borderColor: color } as React.CSSProperties}
                    initial={{ scale: 0.1, opacity: 0.8 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut"
                    }}
                />
            ))}
            <div className="ac-ripple-center" style={{ backgroundColor: color } as React.CSSProperties} />
        </div>
    );
};
