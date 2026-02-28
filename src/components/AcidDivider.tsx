import clsx from 'clsx';
import './AcidDivider.css';

export interface AcidDividerProps {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export const AcidDivider = ({
    orientation = 'horizontal',
    label,
    align = 'center',
    className
}: AcidDividerProps) => {
    return (
        <div className={clsx(
            'ac-divider',
            `ac-divider-${orientation}`,
            label && 'ac-divider-has-label',
            label && `ac-divider-align-${align}`,
            className
        )}>
            {label && <span className="ac-divider-label">{label}</span>}
        </div>
    );
};
