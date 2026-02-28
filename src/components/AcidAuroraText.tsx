import React from 'react';
import clsx from 'clsx';
import './AcidAuroraText.css';

export interface AcidAuroraTextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    intensity?: 'low' | 'medium' | 'high';
}

export const AcidAuroraText = ({ children, className, style, intensity = 'medium' }: AcidAuroraTextProps) => {
    return (
        <span className={clsx('ac-aurora-text', `ac-aurora-${intensity}`, className)} style={style}>
            {children}
            <span className="ac-aurora-overlay" aria-hidden="true">{children}</span>
        </span>
    );
};
