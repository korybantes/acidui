import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidProgress.css';

export interface AcidProgressProps {
    value: number; // 0 to 100
    max?: number;
    showLabel?: boolean;
    className?: string;
    variant?: 'default' | 'brand' | 'success' | 'warning';
}

export const AcidProgress = ({
    value,
    max = 100,
    showLabel = false,
    className,
    variant = 'default'
}: AcidProgressProps) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className={clsx('ac-progress-container', className)}>
            {showLabel && (
                <div className="ac-progress-header">
                    <span className="ac-progress-label">STATUS_UPDATE</span>
                    <span className="ac-progress-value">{Math.round(percentage)}%</span>
                </div>
            )}
            <div className="ac-progress-track">
                <motion.div
                    className={clsx('ac-progress-bar', `ac-variant-${variant}`)}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                />
            </div>
        </div>
    );
};
