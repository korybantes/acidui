import React from 'react';
import clsx from 'clsx';
import './AcidLayout.css';

export interface AcidLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'industrial';
}

export const AcidLayout = ({ variant = 'default', className, children, ...props }: AcidLayoutProps) => {
    return (
        <div className={clsx('ac-layout', `ac-layout-${variant}`, className)} {...props}>
            {children}
        </div>
    );
};

export interface AcidPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
}

export const AcidPanel = ({ className, children, title, ...props }: AcidPanelProps) => {
    return (
        <div className={clsx('ac-panel', className)} {...props}>
            {title && (
                <div className="ac-panel-header">
                    <span className="ac-panel-dot" />
                    <span className="ac-panel-title">{title}</span>
                </div>
            )}
            <div className="ac-panel-content">
                {children}
            </div>
        </div>
    );
};
