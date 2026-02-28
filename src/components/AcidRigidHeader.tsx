import React from 'react';
import clsx from 'clsx';
import './AcidRigidHeader.css';

export interface AcidRigidHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
}

export const AcidRigidHeader = React.forwardRef<HTMLDivElement, AcidRigidHeaderProps>(
    ({ className, title, subtitle, ...props }, ref) => {
        return (
            <div className={clsx('ac-rigid-header', className)} ref={ref} {...props}>
                <div className="ac-rigid-line" />
                <div className="ac-rigid-content">
                    <h2 className="ac-rigid-title">{title}</h2>
                    {subtitle && <p className="ac-rigid-subtitle">{subtitle}</p>}
                </div>
            </div>
        );
    }
);
