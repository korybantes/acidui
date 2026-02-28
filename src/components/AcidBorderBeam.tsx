import React from 'react';
import clsx from 'clsx';
import './AcidBorderBeam.css';

export interface AcidBorderBeamProps {
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    borderThickness?: number;
    className?: string;
}

export const AcidBorderBeam = ({
    size = 150,
    duration = 8,
    delay = 0,
    colorFrom = 'var(--ac-brand)',
    colorTo = '#ec4899',
    borderThickness = 2,
    className
}: AcidBorderBeamProps) => {
    return (
        <div
            className={clsx('ac-border-beam', className)}
            style={{
                '--size': `${size}px`,
                '--duration': `${duration}s`,
                '--delay': `${delay}s`,
                '--color-from': colorFrom,
                '--color-to': colorTo,
                '--thickness': `${borderThickness}px`,
            } as React.CSSProperties}
        />
    );
};
