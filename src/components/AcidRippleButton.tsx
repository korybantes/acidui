import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import './AcidRippleButton.css';

export interface AcidRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    rippleColor?: string;
    duration?: number;
}

export const AcidRippleButton = ({
    children,
    className,
    rippleColor = 'rgba(255, 255, 255, 0.3)',
    duration = 600,
    onClick,
    ...props
}: AcidRippleButtonProps) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = { x, y, size, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        if (onClick) onClick(event);
    };

    useLayoutEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => {
                setRipples((prev) => prev.slice(1));
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [ripples, duration]);

    return (
        <button className={clsx('ac-ripple-btn', className)} onClick={createRipple} {...props}>
            <span className="ac-btn-label">{children}</span>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="ac-ripple"
                    style={{
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size,
                        backgroundColor: rippleColor,
                        animationDuration: `${duration}ms`,
                    }}
                />
            ))}
        </button>
    );
};
