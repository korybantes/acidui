import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { motion, useMotionValue } from 'framer-motion';
import './AcidKnob.css';

export interface AcidKnobProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
    size?: number;
}

export const AcidKnob = React.forwardRef<HTMLDivElement, AcidKnobProps>(
    ({ className, value = 0, min = 0, max = 100, onChange, size = 80, ...props }, ref) => {
        const [currentValue, setCurrentValue] = useState(value);
        const knobRef = useRef<HTMLDivElement>(null);
        const [isDragging, setIsDragging] = useState(false);
        const rotation = useMotionValue(0);

        useEffect(() => {
            // Map value to degrees (-135 to 135)
            const degrees = ((currentValue - min) / (max - min)) * 270 - 135;
            rotation.set(degrees);
        }, [currentValue, min, max, rotation]);

        const handlePointerDown = (e: React.PointerEvent) => {
            setIsDragging(true);
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
        };

        const handlePointerMove = (e: React.PointerEvent) => {
            if (!isDragging || !knobRef.current) return;

            const rect = knobRef.current.getBoundingClientRect();
            const center = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            // Calculate angle
            const rad = Math.atan2(e.clientY - center.y, e.clientX - center.x);
            let deg = (rad * 180) / Math.PI + 90;

            // Normalize
            if (deg > 180) deg -= 360;

            // Clamp to -135 to 135
            const clampedDeg = Math.max(-135, Math.min(135, deg));

            // Convert to value
            const newValue = Math.round(((clampedDeg + 135) / 270) * (max - min) + min);

            if (newValue !== currentValue) {
                setCurrentValue(newValue);
                onChange?.(newValue);
            }
        };

        const handlePointerUp = (e: React.PointerEvent) => {
            setIsDragging(false);
            (e.target as HTMLElement).releasePointerCapture(e.pointerId);
        };

        return (
            <div
                className={clsx('ac-knob-container', className)}
                ref={ref}
                style={{ width: size, height: size }}
                {...props}
            >
                <div
                    ref={knobRef}
                    className="ac-knob-base"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    style={{ touchAction: 'none' }}
                >
                    <motion.div
                        className="ac-knob-dial"
                        style={{ rotate: rotation }}
                    >
                        <div className="ac-knob-indicator" />
                    </motion.div>
                </div>
            </div>
        );
    }
);
