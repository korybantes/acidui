import React from 'react';
import clsx from 'clsx';
import './AcidCircuitGrid.css';

export interface AcidCircuitGridProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const AcidCircuitGrid = React.forwardRef<HTMLDivElement, AcidCircuitGridProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className={clsx('ac-circuit-grid', className)} ref={ref} {...props}>
                <div className="ac-circuit-pattern" />
                <div className="ac-circuit-content">{children}</div>
            </div>
        );
    }
);
