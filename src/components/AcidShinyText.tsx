import clsx from 'clsx';
import './AcidShinyText.css';

export interface AcidShinyTextProps {
    children: string;
    className?: string;
    style?: React.CSSProperties;
    speed?: number;
}

export const AcidShinyText = ({ children, className, style, speed = 2 }: AcidShinyTextProps) => {
    return (
        <span
            className={clsx('ac-shiny-text', className)}
            style={{ ...style, '--shiny-duration': `${speed}s` } as React.CSSProperties}
        >
            {children}
        </span>
    );
};
