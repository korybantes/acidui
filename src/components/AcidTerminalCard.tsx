import React from 'react';
import clsx from 'clsx';
import './AcidTerminalCard.css';

export interface AcidTerminalCardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    showControls?: boolean;
}

export const AcidTerminalCard = ({
    title = 'terminal.sh',
    children,
    className,
    showControls = true
}: AcidTerminalCardProps) => {
    return (
        <div className={clsx('ac-terminal-card', className)}>
            <div className="ac-terminal-header">
                {showControls && (
                    <div className="ac-terminal-controls">
                        <span className="ac-control ac-control-close" />
                        <span className="ac-control ac-control-minimize" />
                        <span className="ac-control ac-control-maximize" />
                    </div>
                )}
                <div className="ac-terminal-title">{title}</div>
            </div>
            <div className="ac-terminal-body">
                {children}
            </div>
        </div>
    );
};
