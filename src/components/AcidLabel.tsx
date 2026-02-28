import React from 'react';
import clsx from 'clsx';
import './AcidLabel.css';

export interface AcidLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: 'brand' | 'muted';
}

export const AcidLabel = React.forwardRef<HTMLSpanElement, AcidLabelProps>(
    ({ className, color = 'brand', children, ...props }, ref) => {
        return (
            <span className={clsx('ac-label', className)} ref={ref} {...props}>
                <span className={clsx('ac-label-dot', `ac-dot-${color}`)} />
                {children}
            </span>
        );
    }
);
