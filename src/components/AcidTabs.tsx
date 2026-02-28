import React, { useState } from 'react';
import clsx from 'clsx';
import './AcidTabs.css';

export interface AcidTabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface AcidTabsProps {
    tabs: AcidTabItem[];
    defaultOpen?: string;
    className?: string;
    variant?: 'industrial' | 'outline' | 'pills';
    onChange?: (id: string) => void;
}

export const AcidTabs = ({ tabs, defaultOpen, className, variant = 'industrial', onChange }: AcidTabsProps) => {
    const [active, setActive] = useState(defaultOpen || tabs[0]?.id);

    const handleTabClick = (id: string) => {
        setActive(id);
        onChange?.(id);
    };

    const activeContent = tabs.find(t => t.id === active)?.content;

    return (
        <div className={clsx('ac-tabs-system', `ac-tabs-${variant}`, className)}>
            <div className="ac-tabs-list">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={clsx('ac-tab-trigger', active === tab.id && 'ac-tab-active')}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="ac-tabs-content">
                {activeContent}
            </div>
        </div>
    );
};
