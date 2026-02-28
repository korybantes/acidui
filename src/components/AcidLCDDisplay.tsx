import React from 'react';
import clsx from 'clsx';
import './AcidLCDDisplay.css';

export interface AcidLCDDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label?: string;
    color?: 'green' | 'blue' | 'yellow' | 'red';
}

export const AcidLCDDisplay = React.forwardRef<HTMLDivElement, AcidLCDDisplayProps>(
    ({ className, value, label, color = 'green', ...props }, ref) => {
        return (
            <div className={clsx('ac-lcd-display', `ac-lcd-color-${color}`, className)} ref={ref} {...props}>
                {label && <div className="ac-lcd-label">{label}</div>}
                <div className="ac-lcd-value">
                    <span className="ac-lcd-ghost">88888888</span>
                    <span className="ac-lcd-real">{value}</span>
                </div>
            </div>
        );
    }
);
