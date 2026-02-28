import React, { useState } from 'react';
import clsx from 'clsx';
import './AcidKeypad.css';

export interface AcidKeypadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit' | 'onKeyPress'> {
    onKeyPress?: (key: string) => void;
    onClear?: () => void;
    onSubmit?: (value: string) => void;
}

export const AcidKeypad = React.forwardRef<HTMLDivElement, AcidKeypadProps>(
    ({ className, onKeyPress, onClear, onSubmit, ...props }, ref) => {
        const [value, setValue] = useState("");

        const handleKeyPress = (key: string) => {
            const newValue = value + key;
            setValue(newValue);
            onKeyPress?.(key);
        };

        const handleClear = () => {
            setValue("");
            onClear?.();
        };

        const handleSubmit = () => {
            onSubmit?.(value);
            setValue("");
        };

        const keys = [
            '1', '2', '3',
            '4', '5', '6',
            '7', '8', '9',
            'CLR', '0', 'ENT'
        ];

        return (
            <div className={clsx('ac-keypad', className)} ref={ref} {...props}>
                <div className="ac-keypad-display">
                    {value || "____"}
                </div>
                <div className="ac-keypad-grid">
                    {keys.map((k) => (
                        <button
                            key={k}
                            type="button"
                            className={clsx(
                                'ac-keypad-btn',
                                k === 'CLR' && 'ac-keypad-btn-clr',
                                k === 'ENT' && 'ac-keypad-btn-ent'
                            )}
                            onClick={() => {
                                if (k === 'CLR') handleClear();
                                else if (k === 'ENT') handleSubmit();
                                else handleKeyPress(k);
                            }}
                        >
                            {k}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
);
