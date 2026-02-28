import React, { useState } from 'react';
import clsx from 'clsx';
import './AcidResizable.css';

export interface AcidResizableProps {
    children: [React.ReactNode, React.ReactNode];
    defaultSize?: number; // percentage
    className?: string;
}

export const AcidResizable = ({ children, defaultSize = 50, className }: AcidResizableProps) => {
    const [size, setSize] = useState(defaultSize);

    const onMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;
        const startSize = size;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const delta = ((moveEvent.clientX - startX) / window.innerWidth) * 100;
            const newSize = Math.min(Math.max(startSize + delta, 10), 90);
            setSize(newSize);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div className={clsx('ac-resizable-container', className)}>
            <div className="ac-resizable-panel" style={{ width: `${size}%` }}>
                {children[0]}
            </div>
            <div className="ac-resizable-handle" onMouseDown={onMouseDown}>
                <div className="ac-handle-line" />
            </div>
            <div className="ac-resizable-panel" style={{ flex: 1 }}>
                {children[1]}
            </div>
        </div>
    );
};
