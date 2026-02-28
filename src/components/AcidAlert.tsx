import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import './AcidAlert.css';

export type AcidAlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AcidAlertProps {
    variant?: AcidAlertVariant;
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
    icon?: boolean;
}

const icons = {
    info: <Info size={18} />,
    success: <CheckCircle size={18} />,
    warning: <AlertTriangle size={18} />,
    error: <AlertCircle size={18} />,
};

export const AcidAlert = ({
    variant = 'info',
    title,
    children,
    onClose,
    className,
    icon = true
}: AcidAlertProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className={clsx('ac-alert', `ac-alert-${variant}`, className)}
        >
            {icon && <div className="ac-alert-icon">{icons[variant]}</div>}
            <div className="ac-alert-content">
                {title && <h5 className="ac-alert-title">{title}</h5>}
                <div className="ac-alert-description">{children}</div>
            </div>
            {onClose && (
                <button className="ac-alert-close" onClick={onClose}>
                    <X size={16} />
                </button>
            )}
        </motion.div>
    );
};
