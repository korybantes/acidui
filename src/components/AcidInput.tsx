import React from 'react';
import clsx from 'clsx';
import './AcidInput.css';

export interface AcidInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: 'outline' | 'filled' | 'terminal';
}

export const AcidInput = React.forwardRef<HTMLInputElement, AcidInputProps>(
    ({ className, label, variant = 'outline', placeholder, ...props }, ref) => {
        return (
            <div className={clsx('ac-input-container', className)}>
                {label && <label className="ac-input-label">{label}</label>}
                <div className="ac-input-wrapper">
                    {variant === 'terminal' && <span className="ac-input-prefix">{'>'}</span>}
                    <input
                        ref={ref}
                        className={clsx('ac-input-field', `ac-input-${variant}`)}
                        placeholder={placeholder || " "}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);
