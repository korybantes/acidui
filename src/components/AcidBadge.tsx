import React from 'react';
import clsx from 'clsx';
import './AcidBadge.css';

export interface AcidBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline' | 'subtle' | 'brand';
    size?: 'sm' | 'md' | 'lg';
}

export const AcidBadge = React.forwardRef<HTMLSpanElement, AcidBadgeProps>(
    ({ className, variant = 'solid', size = 'md', children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={clsx(
                    'ac-badge',
                    `ac-badge-${variant}`,
                    `ac-badge-${size}`,
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);
