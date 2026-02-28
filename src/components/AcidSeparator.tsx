import React from 'react';
import clsx from 'clsx';
import './AcidSeparator.css';

export interface AcidSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
}

export const AcidSeparator = ({
    orientation = 'horizontal',
    decorative = true,
    className,
    ...props
}: AcidSeparatorProps) => {
    return (
        <div
            role={decorative ? 'none' : 'separator'}
            aria-orientation={decorative ? undefined : orientation}
            className={clsx('ac-separator', `ac-separator-${orientation}`, className)}
            {...props}
        />
    );
};
