import React from 'react';
import clsx from 'clsx';
import './AcidScanline.css';

export interface AcidScanlineProps extends React.HTMLAttributes<HTMLDivElement> {
    speed?: number;
    opacity?: number;
    color?: string;
}

export const AcidScanline = React.forwardRef<HTMLDivElement, AcidScanlineProps>(
    ({ className, speed = 4, opacity = 0.1, color = '#fff', ...props }, ref) => {
        return (
            <div
                className={clsx('ac-scanline-container', className)}
                ref={ref}
                {...props}
            >
                <div
                    className="ac-scanline"
                    style={{
                        animationDuration: `${speed}s`,
                        opacity: opacity,
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`
                    }}
                />
            </div>
        );
    }
);
