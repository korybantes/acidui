
import clsx from 'clsx';
import { motion } from 'framer-motion';
import './AcidMeter.css';

export interface AcidMeterProps {
    value: number; // 0 to 100
    label?: string;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

export const AcidMeter = ({ value, label, orientation = 'vertical', className }: AcidMeterProps) => {
    return (
        <div className={clsx('ac-meter-control', `ac-meter-${orientation}`, className)}>
            {label && <div className="ac-meter-label">{label}</div>}
            <div className="ac-meter-track">
                {/* Top Dot Empty */}
                <div className="ac-meter-dot-top" />

                {/* Fill element */}
                <motion.div
                    className="ac-meter-fill"
                    initial={orientation === 'vertical' ? { height: 0 } : { width: 0 }}
                    whileInView={orientation === 'vertical' ? { height: `${value}%` } : { width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                >
                    <div className="ac-meter-fill-dot" />
                </motion.div>

                {/* Bottom Dot Fill (anchor) */}
                <div className="ac-meter-dot-bottom" />
            </div>
        </div>
    );
};
