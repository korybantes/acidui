import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import './AcidButton.css';

export interface AcidButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'brand';
  size?: 'sm' | 'md' | 'lg';
}

export const AcidButton = React.forwardRef<HTMLButtonElement, AcidButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          'ac-button',
          `ac-btn-${variant}`,
          `ac-btn-size-${size}`,
          className
        )}
        {...props}
      >
        <span className="ac-btn-text">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
