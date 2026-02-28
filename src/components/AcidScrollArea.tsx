import React from 'react';
import clsx from 'clsx';
import './AcidScrollArea.css';

export interface AcidScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    maxHeight?: string | number;
}

export const AcidScrollArea = ({ children, className, maxHeight = '300px', ...props }: AcidScrollAreaProps) => {
    return (
        <div
            className={clsx('ac-scroll-area', className)}
            style={{ maxHeight }}
            {...props}
        >
            <div className="ac-scroll-content">
                {children}
            </div>
        </div>
    );
};
