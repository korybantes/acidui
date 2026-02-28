import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidRadioGroup.css';

export interface AcidRadioOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}

export interface AcidRadioGroupProps {
    options: AcidRadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

export const AcidRadioGroup = ({
    options,
    value,
    defaultValue,
    onChange,
    label,
    orientation = 'vertical',
    className
}: AcidRadioGroupProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const selected = value !== undefined ? value : internalValue;

    const handleSelect = (val: string) => {
        setInternalValue(val);
        onChange?.(val);
    };

    return (
        <div className={clsx('ac-radio-group', className)}>
            {label && <span className="ac-radio-group-label">{label}</span>}
            <div className={clsx('ac-radio-group-list', `ac-radio-group-${orientation}`)}>
                {options.map((opt) => (
                    <label
                        key={opt.value}
                        className={clsx('ac-radio-item', opt.disabled && 'ac-radio-disabled', selected === opt.value && 'ac-radio-selected')}
                        onClick={() => !opt.disabled && handleSelect(opt.value)}
                    >
                        <div className={clsx('ac-radio-indicator', selected === opt.value && 'ac-radio-indicator-checked')}>
                            <motion.div
                                className="ac-radio-dot"
                                initial={false}
                                animate={{
                                    scale: selected === opt.value ? 1 : 0,
                                    opacity: selected === opt.value ? 1 : 0
                                }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <div className="ac-radio-text">
                            <span className="ac-radio-label">{opt.label}</span>
                            {opt.description && <span className="ac-radio-description">{opt.description}</span>}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};
