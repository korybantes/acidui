import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

export interface AcidScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

export const AcidScrollReveal = ({ children, className }: AcidScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={clsx('ac-scroll-reveal', className)}
        >
            {children}
        </motion.div>
    );
};
