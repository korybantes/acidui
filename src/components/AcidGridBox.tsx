import React from 'react';
import clsx from 'clsx';
import './AcidGridBox.css';

export interface AcidGridBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    showCrosshairs?: boolean;
}

export const AcidGridBox = React.forwardRef<HTMLDivElement, AcidGridBoxProps>(
    ({ className, showCrosshairs = true, children, ...props }, ref) => {
        return (
            <div className={clsx('ac-grid-box', className)} ref={ref} {...props}>
                {showCrosshairs && (
                    <>
                        <div className="ac-ch ac-ch-tl" />
                        <div className="ac-ch ac-ch-tr" />
                        <div className="ac-ch ac-ch-bl" />
                        <div className="ac-ch ac-ch-br" />
                    </>
                )}
                <div className="ac-grid-inner">{children}</div>
            </div>
        );
    }
);
