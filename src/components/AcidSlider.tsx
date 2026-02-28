import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidSlider.css';

export interface AcidSliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    label?: string;
    className?: string;
    disabled?: boolean;
}

export const AcidSlider = ({
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    value,
    onChange,
    label,
    className,
    disabled = false
}: AcidSliderProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const trackRef = useRef<HTMLDivElement>(null);
    const resolvedValue = value !== undefined ? value : internalValue;

    const percentage = ((resolvedValue - min) / (max - min)) * 100;

    const handleUpdate = (clientX: number) => {
        if (disabled || !trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const offsetX = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        const ratio = offsetX / rect.width;
        const rawValue = ratio * (max - min) + min;
        const steppedValue = Math.round(rawValue / step) * step;
        const finalValue = Math.min(Math.max(steppedValue, min), max);

        setInternalValue(finalValue);
        onChange?.(finalValue);
    };

    const onMouseDown = (e: React.MouseEvent) => {
        handleUpdate(e.clientX);
        const onMouseMove = (moveEvent: MouseEvent) => handleUpdate(moveEvent.clientX);
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div className={clsx('ac-slider-container', className, disabled && 'ac-slider-disabled')}>
            <div className="ac-slider-header">
                {label && <span className="ac-slider-label">{label}</span>}
                <span className="ac-slider-value">{resolvedValue}</span>
            </div>

            <div className="ac-slider-track-wrapper" ref={trackRef} onMouseDown={onMouseDown}>
                <div className="ac-slider-track">
                    <motion.div
                        className="ac-slider-fill"
                        style={{ width: `${percentage}%` }}
                        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    />
                </div>
                <motion.div
                    className="ac-slider-thumb"
                    animate={{ left: `${percentage}%` }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
            </div>

            <div className="ac-slider-markers">
                <span className="ac-marker">{min}</span>
                <span className="ac-marker">{max}</span>
            </div>
        </div>
    );
};
