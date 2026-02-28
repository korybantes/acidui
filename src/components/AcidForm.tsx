import React from 'react';
import clsx from 'clsx';
import './AcidForm.css';

export interface AcidFormFieldProps {
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
}

export interface AcidFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    className?: string;
    gap?: 'sm' | 'md' | 'lg';
}

export const AcidFormField = ({
    label,
    description,
    error,
    required,
    children,
    className
}: AcidFormFieldProps) => (
    <div className={clsx('ac-form-field', error && 'ac-form-field-error', className)}>
        {label && (
            <label className="ac-form-label">
                {label}
                {required && <span className="ac-form-required">*</span>}
            </label>
        )}
        {description && <p className="ac-form-description">{description}</p>}
        <div className="ac-form-control">{children}</div>
        {error && <p className="ac-form-error">{error}</p>}
    </div>
);

export const AcidForm = ({ children, className, gap = 'md', ...props }: AcidFormProps) => (
    <form className={clsx('ac-form', `ac-form-gap-${gap}`, className)} {...props}>
        {children}
    </form>
);
