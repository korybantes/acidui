import React from 'react';
import clsx from 'clsx';
import './AcidIconBox.css';

export interface AcidIconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
}

export const AcidIconBox = React.forwardRef<HTMLDivElement, AcidIconBoxProps>(
    ({ className, icon, children, ...props }, ref) => {
        return (
            <div className={clsx('ac-icon-box-wrapper', className)} ref={ref} {...props}>
                <div className="ac-icon-box">{icon}</div>
                <div className="ac-icon-box-content">{children}</div>
            </div>
        );
    }
);
