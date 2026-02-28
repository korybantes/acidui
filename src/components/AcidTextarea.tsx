import React from 'react';
import clsx from 'clsx';
import './AcidInput.css';

export interface AcidTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const AcidTextarea = React.forwardRef<HTMLTextAreaElement, AcidTextareaProps>(
    ({ label, error, helperText, className, ...props }, ref) => {
        return (
            <div className={clsx('ac-input-wrapper', className)}>
                {label && <label className="ac-input-label">{label}</label>}
                <textarea
                    ref={ref}
                    className={clsx(
                        'ac-input-field ac-textarea-field',
                        error && 'ac-input-error'
                    )}
                    {...props}
                />
                {(error || helperText) && (
                    <span className={clsx('ac-input-helper', error && 'error')}>
                        {error || helperText}
                    </span>
                )}
            </div>
        );
    }
);
