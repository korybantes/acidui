import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidMagicLoader.css';

export interface AcidMagicLoaderProps {
    className?: string;
    size?: number;
    color?: string;
}

export const AcidMagicLoader = ({
    className,
    size = 120,
    color = 'var(--ac-brand)'
}: AcidMagicLoaderProps) => {
    return (
        <div
            className={clsx('ac-magic-loader', className)}
            style={{ width: size, height: size } as React.CSSProperties}
        >
            <motion.div
                className="ac-loader-ring ac-ring-outer"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ borderColor: color } as React.CSSProperties}
            />
            <motion.div
                className="ac-loader-ring ac-ring-middle"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ borderColor: color, opacity: 0.6 } as React.CSSProperties}
            />
            <motion.div
                className="ac-loader-ring ac-ring-inner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                style={{ borderColor: color, opacity: 0.3 } as React.CSSProperties}
            />
            <div className="ac-loader-core" style={{ backgroundColor: color } as React.CSSProperties} />
        </div>
    );
};
