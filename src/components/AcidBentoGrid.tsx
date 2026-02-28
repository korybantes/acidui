import React from 'react';
import clsx from 'clsx';
import './AcidBentoGrid.css';

export interface AcidBentoGridProps {
    children: React.ReactNode;
    className?: string;
    cols?: number;
}

export const AcidBentoGrid = ({
    children,
    className,
    cols = 4
}: AcidBentoGridProps) => {
    return (
        <div
            className={clsx('ac-bento-grid', className)}
            style={{ '--bento-cols': cols } as React.CSSProperties}
        >
            {children}
        </div>
    );
};

export interface AcidBentoItemProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
    colSpan?: number;
    rowSpan?: number;
}

export const AcidBentoItem = ({
    children,
    title,
    description,
    icon,
    className,
    colSpan = 1,
    rowSpan = 1
}: AcidBentoItemProps) => {
    return (
        <div
            className={clsx('ac-bento-item', className)}
            style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`
            } as React.CSSProperties}
        >
            {children && (
                <div className="ac-bento-content">
                    {children}
                </div>
            )}
            <div className="ac-bento-footer">
                {icon && <div className="ac-bento-icon">{icon}</div>}
                <div className="ac-bento-text">
                    {title && <h3 className="ac-bento-title">{title}</h3>}
                    {description && <p className="ac-bento-desc">{description}</p>}
                </div>
            </div>
            <div className="ac-bento-corner" />
        </div>
    );
};
