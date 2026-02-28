import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import './AcidCubeGrid.css';

export interface AcidCubeGridProps extends React.HTMLAttributes<HTMLDivElement> {
    rows?: number;
    cols?: number;
    spacing?: number;
    color?: string;
}

export const AcidCubeGrid = React.forwardRef<HTMLDivElement, AcidCubeGridProps>(
    ({ className, rows = 3, cols = 3, spacing = 80, color = 'var(--ac-brand)', ...props }, ref) => {
        return (
            <div
                className={clsx('ac-cube-grid-container', className)}
                ref={ref}
                {...props}
            >
                <div
                    className="ac-cube-grid"
                    style={{
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: `${spacing}px`,
                        padding: `${spacing / 2}px`
                    }}
                >
                    {Array.from({ length: rows * cols }).map((_, i) => (
                        <div key={i} className="ac-cube-scene">
                            <motion.div
                                className="ac-cube"
                                animate={{
                                    rotateX: [0, 90, 180, 270, 360],
                                    rotateY: [0, 90, 180, 270, 360]
                                }}
                                transition={{
                                    duration: 10 + Math.random() * 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <div className="ac-cube-face ac-cube-front" style={{ borderColor: color }} />
                                <div className="ac-cube-face ac-cube-back" style={{ borderColor: color }} />
                                <div className="ac-cube-face ac-cube-left" style={{ borderColor: color }} />
                                <div className="ac-cube-face ac-cube-right" style={{ borderColor: color }} />
                                <div className="ac-cube-face ac-cube-top" style={{ borderColor: color }} />
                                <div className="ac-cube-face ac-cube-bottom" style={{ borderColor: color }} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);
