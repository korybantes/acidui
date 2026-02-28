
import clsx from 'clsx';
import './AcidSkeleton.css';

export interface AcidSkeletonProps {
    width?: string | number;
    height?: string | number;
    shape?: 'rectangle' | 'circle' | 'industrial';
    className?: string;
}

export const AcidSkeleton = ({
    width = '100%',
    height = '1rem',
    shape = 'rectangle',
    className
}: AcidSkeletonProps) => {
    const style = {
        width,
        height,
    };

    return (
        <div
            className={clsx('ac-skeleton', `ac-skeleton-${shape}`, className)}
            style={style}
        />
    );
};
