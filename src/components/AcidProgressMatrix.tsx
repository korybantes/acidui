import React from 'react';
import clsx from 'clsx';
import './AcidProgressMatrix.css';

export interface AcidProgressMatrixProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    columns?: number;
}

export const AcidProgressMatrix = React.forwardRef<HTMLDivElement, AcidProgressMatrixProps>(
    ({ className, value = 50, max = 100, columns = 20, ...props }, ref) => {
        const blocks = Math.floor((value / max) * columns);

        return (
            <div className={clsx('ac-progress-matrix', className)} ref={ref} {...props}>
                {Array.from({ length: columns }).map((_, i) => (
                    <div
                        key={i}
                        className={clsx('ac-progress-matrix-block', i < blocks && 'ac-progress-matrix-active')}
                    />
                ))}
            </div>
        );
    }
);
