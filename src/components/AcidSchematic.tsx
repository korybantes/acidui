import React from 'react';
import clsx from 'clsx';
import './AcidSchematic.css';

export interface AcidSchematicProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const AcidSchematic = React.forwardRef<HTMLDivElement, AcidSchematicProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className={clsx('ac-schematic', className)} ref={ref} {...props}>
                <div className="ac-schematic-svg-container">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="ac-schematic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <rect width="40" height="40" fill="none" />
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--ac-brand)" strokeWidth="0.5" strokeOpacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#ac-schematic-grid)" />

                        {/* Example wiring traces */}
                        <path className="ac-schematic-trace" d="M 0 50 L 50 50 L 50 150 L 150 150" fill="none" stroke="var(--ac-brand)" strokeWidth="1" />
                        <circle cx="0" cy="50" r="3" fill="var(--ac-brand)" />
                        <circle cx="150" cy="150" r="3" fill="var(--ac-brand)" />

                        <path className="ac-schematic-trace" d="M 250 0 L 250 100 L 350 100" fill="none" stroke="var(--ac-brand)" strokeWidth="1" />
                        <rect x="247" y="0" width="6" height="6" fill="var(--ac-brand)" />
                        <rect x="347" y="97" width="6" height="6" fill="var(--ac-brand)" />
                    </svg>
                </div>
                <div className="ac-schematic-content">
                    {children}
                </div>
            </div>
        );
    }
);
