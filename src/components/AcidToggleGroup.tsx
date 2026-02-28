import { useState } from 'react';
import clsx from 'clsx';
import './AcidToggleGroup.css';

export interface AcidToggleGroupItem {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}

export interface AcidToggleGroupProps {
    items: AcidToggleGroupItem[];
    value?: string | string[];
    defaultValue?: string | string[];
    type?: 'single' | 'multiple';
    onChange?: (value: string | string[]) => void;
    variant?: 'default' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const AcidToggleGroup = ({
    items,
    value,
    defaultValue,
    type = 'single',
    onChange,
    variant = 'default',
    size = 'md',
    className
}: AcidToggleGroupProps) => {
    const getDefault = () => {
        if (defaultValue !== undefined) return defaultValue;
        return type === 'multiple' ? [] : '';
    };

    const [internalValue, setInternalValue] = useState<string | string[]>(getDefault());
    const selected = value !== undefined ? value : internalValue;

    const isSelected = (val: string) => {
        if (type === 'multiple') return (selected as string[]).includes(val);
        return selected === val;
    };

    const handleToggle = (val: string) => {
        let next: string | string[];
        if (type === 'multiple') {
            const arr = selected as string[];
            next = arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val];
        } else {
            next = selected === val ? '' : val;
        }
        setInternalValue(next);
        onChange?.(next);
    };

    return (
        <div className={clsx('ac-toggle-group', `ac-toggle-group-${variant}`, `ac-toggle-group-${size}`, className)}>
            {items.map((item) => (
                <button
                    key={item.value}
                    className={clsx(
                        'ac-toggle-group-item',
                        isSelected(item.value) && 'ac-toggle-group-selected',
                        item.disabled && 'ac-toggle-group-item-disabled'
                    )}
                    onClick={() => !item.disabled && handleToggle(item.value)}
                    aria-pressed={isSelected(item.value)}
                    disabled={item.disabled}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};
