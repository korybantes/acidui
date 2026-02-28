import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import './AcidMagicCard.css';

export interface AcidMagicCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    style?: React.CSSProperties;
}

export const AcidMagicCard = ({
    children,
    className,
    glowColor = 'rgba(244, 67, 54, 0.15)',
    style
}: AcidMagicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={cardRef}
            className={clsx('ac-magic-card', className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
            style={style}
        >
            <div
                className="ac-magic-glow"
                style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`
                }}
            />
            <div className="ac-magic-content">
                {children}
            </div>
        </div>
    );
};
