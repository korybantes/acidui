import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './AcidCardNav.css';

export interface CardNavItem {
    id: string;
    label: string;
    desc?: string;
    icon?: React.ReactNode;
    href?: string;
}

export interface AcidCardNavProps extends React.HTMLAttributes<HTMLDivElement> {
    items: CardNavItem[];
    columns?: number;
}

export const AcidCardNav = React.forwardRef<HTMLDivElement, AcidCardNavProps>(
    ({ className, items, columns = 3, ...props }, ref) => {
        return (
            <div
                className={clsx('ac-card-nav', className)}
                ref={ref}
                style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                {...props}
            >
                {items.map((item, i) => (
                    <motion.a
                        key={item.id}
                        href={item.href || '#'}
                        className="ac-card-nav-item"
                        whileHover="hover"
                        initial="initial"
                    >
                        <div className="ac-card-nav-header">
                            <span className="ac-card-nav-index">{String(i + 1).padStart(2, '0')}</span>
                            {item.icon && <div className="ac-card-nav-icon">{item.icon}</div>}
                        </div>
                        <div className="ac-card-nav-body">
                            <h3 className="ac-card-nav-title">{item.label}</h3>
                            {item.desc && <p className="ac-card-nav-desc">{item.desc}</p>}
                        </div>
                        <motion.div
                            className="ac-card-nav-footer"
                            variants={{
                                initial: { y: 20, opacity: 0 },
                                hover: { y: 0, opacity: 1 }
                            }}
                        >
                            <span className="ac-ps-meta">ACCESS_NODE</span>
                            <ChevronRight size={14} />
                        </motion.div>
                        <div className="ac-card-nav-border" />
                    </motion.a>
                ))}
            </div>
        );
    }
);
