import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import './AcidStaggeredMenu.css';

export interface StaggeredMenuItem {
    id: string;
    label: string;
    href?: string;
}

export interface AcidStaggeredMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    items: StaggeredMenuItem[];
    stagger?: number;
}

export const AcidStaggeredMenu = React.forwardRef<HTMLDivElement, AcidStaggeredMenuProps>(
    ({ className, items, stagger = 0.05, ...props }, ref) => {
        return (
            <div
                className={clsx('ac-staggered-menu', className)}
                ref={ref}
                {...props}
            >
                <div className="ac-staggered-menu-track">
                    {items.map((item, i) => (
                        <motion.a
                            key={item.id}
                            href={item.href || '#'}
                            className="ac-staggered-item"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: i * stagger,
                                type: 'spring',
                                stiffness: 400,
                                damping: 40
                            }}
                            whileHover={{ scale: 1.05, x: 10 }}
                        >
                            <span className="ac-staggered-index">[{String(i + 1).padStart(2, '0')}]</span>
                            <span className="ac-staggered-label">{item.label}</span>
                            <div className="ac-staggered-line" />
                        </motion.a>
                    ))}
                </div>
            </div>
        );
    }
);
