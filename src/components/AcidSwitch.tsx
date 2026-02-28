import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidSwitch.css';

export interface AcidSwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export const AcidSwitch = ({
    checked,
    defaultChecked = false,
    onChange,
    label,
    className,
    disabled = false
}: AcidSwitchProps) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleToggle = () => {
        if (disabled) return;
        const next = !isChecked;
        setInternalChecked(next);
        onChange?.(next);
    };

    return (
        <label className={clsx('ac-switch-container', className, disabled && 'ac-switch-disabled')}>
            {label && <span className="ac-switch-label">{label}</span>}
            <div
                className={clsx('ac-switch-root', isChecked && 'ac-switch-checked')}
                onClick={handleToggle}
            >
                <motion.div
                    className="ac-switch-thumb"
                    animate={{ x: isChecked ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>
        </label>
    );
};
