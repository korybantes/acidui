import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidToggle.css';

export interface AcidToggleProps {
    pressed?: boolean;
    defaultPressed?: boolean;
    onChange?: (pressed: boolean) => void;
    children?: React.ReactNode;
    variant?: 'default' | 'outline' | 'brand';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    className?: string;
}

export const AcidToggle = ({
    pressed,
    defaultPressed = false,
    onChange,
    children,
    variant = 'default',
    size = 'md',
    disabled = false,
    className
}: AcidToggleProps) => {
    const [internalPressed, setInternalPressed] = useState(defaultPressed);
    const isPressed = pressed !== undefined ? pressed : internalPressed;

    const handleToggle = () => {
        if (disabled) return;
        const next = !isPressed;
        setInternalPressed(next);
        onChange?.(next);
    };

    return (
        <motion.button
            className={clsx(
                'ac-toggle',
                `ac-toggle-${variant}`,
                `ac-toggle-${size}`,
                isPressed && 'ac-toggle-pressed',
                disabled && 'ac-toggle-disabled',
                className
            )}
            onClick={handleToggle}
            whileHover={!disabled ? { y: -1 } : {}}
            whileTap={!disabled ? { scale: 0.97 } : {}}
            aria-pressed={isPressed}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};
