import React from 'react';
import clsx from 'clsx';
import { Sparkles } from 'lucide-react';
import './AcidTrialButton.css';

export interface AcidTrialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    secondaryText?: string;
}

export const AcidTrialButton = ({
    children,
    className,
    secondaryText = 'NO_CREDIT_CARD_REQUIRED',
    ...props
}: AcidTrialButtonProps) => {
    return (
        <button className={clsx('ac-trial-btn', className)} {...props}>
            <div className="ac-trial-main">
                <Sparkles size={16} className="ac-trial-icon" />
                <span>{children}</span>
            </div>
            {secondaryText && <span className="ac-trial-secondary">{secondaryText}</span>}
            <div className="ac-trial-glow" />
        </button>
    );
};
