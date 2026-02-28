import React from 'react';
import clsx from 'clsx';
import './AcidGradientButton.css';

export interface AcidGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    animationSpeed?: 'fast' | 'normal' | 'slow';
    gradientType?: 'orange' | 'cool' | 'purple';
}

export const AcidGradientButton = ({
    children,
    className,
    variant = 'default',
    size = 'md',
    animationSpeed = 'normal',
    gradientType = 'orange',
    ...props
}: AcidGradientButtonProps) => {
    return (
        <button
            className={clsx(
                'ac-gradient-btn',
                `ac-btn-${variant}`,
                `ac-btn-${size}`,
                `ac-anim-${animationSpeed}`,
                `ac-grad-${gradientType}`,
                className
            )}
            {...props}
        >
            <span className="ac-btn-content">{children}</span>
            <div className="ac-btn-gradient-overlay" />
        </button>
    );
};
