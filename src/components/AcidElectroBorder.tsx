import React from 'react';
import clsx from 'clsx';
import './AcidElectroBorder.css';

export interface AcidElectroBorderProps {
    children: React.ReactNode;
    className?: string;
    thickness?: number;
    speed?: number;
    color?: string;
    style?: React.CSSProperties;
}

export const AcidElectroBorder = ({
    children,
    className,
    thickness = 2,
    speed = 2,
    color = 'var(--ac-brand)',
    style
}: AcidElectroBorderProps) => {
    return (
        <div className={clsx('ac-electro-wrapper', className)} style={style}>
            <div className="ac-electro-content">
                {children}
            </div>
            <div className="ac-electro-border">
                <div
                    className="ac-electro-line ac-electro-top"
                    style={{ background: color, height: thickness, animationDuration: `${speed}s` } as React.CSSProperties}
                />
                <div
                    className="ac-electro-line ac-electro-right"
                    style={{ background: color, width: thickness, animationDuration: `${speed}s` } as React.CSSProperties}
                />
                <div
                    className="ac-electro-line ac-electro-bottom"
                    style={{ background: color, height: thickness, animationDuration: `${speed}s` } as React.CSSProperties}
                />
                <div
                    className="ac-electro-line ac-electro-left"
                    style={{ background: color, width: thickness, animationDuration: `${speed}s` } as React.CSSProperties}
                />
            </div>
            <div className="ac-electro-corners">
                <span className="ac-corner ac-corner-tl" />
                <span className="ac-corner ac-corner-tr" />
                <span className="ac-corner ac-corner-bl" />
                <span className="ac-corner ac-corner-br" />
            </div>
        </div>
    );
};
