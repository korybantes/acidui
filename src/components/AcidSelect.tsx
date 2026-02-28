import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import clsx from 'clsx';
import './AcidSelect.css';

export interface SelectOption {
    value: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
}

export interface AcidSelectProps {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export const AcidSelect = ({
    options,
    value,
    defaultValue,
    onChange,
    placeholder = 'SELECT_OPTION...',
    label,
    className,
    disabled = false
}: AcidSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const containerRef = useRef<HTMLDivElement>(null);

    const currentValue = value !== undefined ? value : internalValue;
    const selectedOption = options.find(opt => opt.value === currentValue);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
        if (disabled) return;
        setInternalValue(val);
        onChange?.(val);
        setIsOpen(false);
    };

    return (
        <div className={clsx('ac-select-container', className, disabled && 'ac-select-disabled')} ref={containerRef}>
            {label && <label className="ac-select-label">{label}</label>}

            <div
                className={clsx('ac-select-trigger', isOpen && 'ac-select-trigger-open')}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                <div className="ac-select-value-area">
                    {selectedOption?.icon && <span className="ac-select-icon">{selectedOption.icon}</span>}
                    <span className={clsx('ac-select-display-value', !selectedOption && 'placeholder')}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <ChevronDown size={16} className={clsx('ac-select-chevron', isOpen && 'rotate')} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="ac-select-dropdown"
                    >
                        <div className="ac-select-options">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    className={clsx('ac-select-option', option.value === currentValue && 'selected')}
                                    onClick={() => handleSelect(option.value)}
                                >
                                    <div className="ac-option-main">
                                        {option.icon && <span className="ac-option-icon">{option.icon}</span>}
                                        <div className="ac-option-text">
                                            <span className="ac-option-label">{option.label}</span>
                                            {option.description && <span className="ac-option-desc">{option.description}</span>}
                                        </div>
                                    </div>
                                    {option.value === currentValue && <Check size={14} className="ac-option-check" />}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
