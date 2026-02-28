import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import clsx from 'clsx';
import './AcidScrollStack.css';

export interface AcidScrollStackProps {
    children: React.ReactNode[];
    className?: string;
}

export const AcidScrollStack = ({
    children,
    className
}: AcidScrollStackProps) => {
    return (
        <div className={clsx('ac-scroll-stack', className)}>
            {children.map((child, index) => (
                <StackItem key={index} index={index}>
                    {child}
                </StackItem>
            ))}
        </div>
    );
};

const StackItem = ({ children, index }: { children: React.ReactNode, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
                position: 'sticky',
                top: `${40 + index * 20}px`,
                zIndex: index
            }}
            className="ac-stack-item-wrapper"
        >
            <div className="ac-stack-card">
                <div className="ac-stack-tag">SEC_0{index + 1}</div>
                {children}
            </div>
        </motion.div>
    );
};
