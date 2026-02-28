import React from 'react';
import clsx from 'clsx';
import './AcidShineButton.css';

export interface AcidShineButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shineColor?: string;
}

export const AcidShineButton = ({
    children,
    className,
    shineColor = 'rgba(255, 255, 255, 0.4)',
    ...props
}: AcidShineButtonProps) => {
    return (
        <button className={clsx('ac-shine-btn', className)} {...props}>
            <span className="ac-btn-text">{children}</span>
            <div
                className="ac-shine-overlay"
                style={{ '--shine-color': shineColor } as React.CSSProperties}
            />
        </button>
    );
};
