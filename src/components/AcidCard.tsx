import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import './AcidCard.css';

export interface AcidCardProps extends HTMLMotionProps<"div"> {
    variant?: 'flat' | 'outline' | 'dashed';
}

export const AcidCard = React.forwardRef<HTMLDivElement, AcidCardProps>(
    ({ className, variant = 'outline', children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={clsx('ac-card', `ac-card-${variant}`, className)}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
