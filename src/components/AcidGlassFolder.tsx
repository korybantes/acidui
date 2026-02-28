import React from 'react';
import clsx from 'clsx';
import './AcidGlassFolder.css';

export interface AcidGlassFolderProps {
    icon?: React.ReactNode;
    title?: string;
    className?: string;
}

export const AcidGlassFolder = ({ icon, title, className }: AcidGlassFolderProps) => {
    return (
        <div className={clsx('ac-glass-folder-group', className)}>
            <div className="ac-glass-folder-container">
                {/* Top tab back */}
                <div className="ac-folder-back-tab"></div>

                {/* Back folder body */}
                <div className="ac-folder-back-body"></div>

                {/* Folder layers (Inner paper look) */}
                <div className="ac-folder-layer ac-layer-1"></div>
                <div className="ac-folder-layer ac-layer-2"></div>
                <div className="ac-folder-layer ac-layer-3"></div>

                {/* Front folder layer with icon */}
                <div className="ac-folder-front">
                    <div className="ac-folder-icon">{icon}</div>
                </div>
            </div>
            {title && <span className="ac-folder-label">{title}</span>}
        </div>
    );
};
