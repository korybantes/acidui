import React from 'react';
import clsx from 'clsx';
import { AcidLabel } from './AcidLabel';
import './AcidSolidCard.css';

export interface AcidSolidCardProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    title?: string;
    children?: React.ReactNode;
}

export const AcidSolidCard = React.forwardRef<HTMLDivElement, AcidSolidCardProps>(
    ({ className, label, title, children, ...props }, ref) => {
        return (
            <div className={clsx('ac-solid-card', className)} ref={ref} {...props}>
                {label && (
                    <div className="ac-solid-header">
                        <AcidLabel>{label}</AcidLabel>
                        <span className="ac-solid-ghost-text">START BUILDING</span>
                    </div>
                )}
                <div className="ac-solid-content">
                    <div className="ac-solid-graphic">
                        {/* Fake asterix icon mimicking the factory logo graphic */}
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                        </svg>
                    </div>
                    {title && <h2 className="ac-solid-title">{title}</h2>}
                    {children}
                </div>
            </div>
        );
    }
);
