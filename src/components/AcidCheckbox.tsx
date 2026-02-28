import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import './AcidCheckbox.css';

export interface AcidCheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    description?: string;
    disabled?: boolean;
    className?: string;
}

export const AcidCheckbox = ({
    checked,
    defaultChecked = false,
    onChange,
    label,
    description,
    disabled = false,
    className
}: AcidCheckboxProps) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleToggle = () => {
        if (disabled) return;
        const next = !isChecked;
        setInternalChecked(next);
        onChange?.(next);
    };

    return (
        <label className={clsx('ac-checkbox-container', className, disabled && 'ac-checkbox-disabled')}>
            <div
                className={clsx('ac-checkbox-box', isChecked && 'ac-checkbox-checked')}
                onClick={handleToggle}
            >
                <motion.div
                    initial={false}
                    animate={{ scale: isChecked ? 1 : 0, opacity: isChecked ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    <Check size={14} strokeWidth={3} className="ac-checkbox-icon" />
                </motion.div>
            </div>
            {(label || description) && (
                <div className="ac-checkbox-text">
                    {label && <span className="ac-checkbox-label">{label}</span>}
                    {description && <span className="ac-checkbox-description">{description}</span>}
                </div>
            )}
        </label>
    );
};
