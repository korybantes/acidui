import React from 'react';
import clsx from 'clsx';
import './AcidAspectRatio.css';

export interface AcidAspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}

export const AcidAspectRatio = ({ ratio = 16 / 9, children, className, ...props }: AcidAspectRatioProps) => {
    return (
        <div
            className={clsx('ac-aspect-ratio', className)}
            style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
            {...props}
        >
            <div className="ac-aspect-ratio-content">
                {children}
            </div>
        </div>
    );
};
