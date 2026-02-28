import React from 'react';
import clsx from 'clsx';
import './AcidCautionTape.css';

export interface AcidCautionTapeProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string;
    thickness?: number;
}

export const AcidCautionTape = React.forwardRef<HTMLDivElement, AcidCautionTapeProps>(
    ({ className, text = "AUTHORIZED PERSONNEL ONLY", thickness = 40, ...props }, ref) => {
        return (
            <div
                className={clsx('ac-caution-tape', className)}
                ref={ref}
                style={{ height: thickness }}
                {...props}
            >
                <div className="ac-caution-content">
                    <span className="ac-caution-text">{text}</span>
                    <span className="ac-caution-text">{text}</span>
                    <span className="ac-caution-text">{text}</span>
                    <span className="ac-caution-text">{text}</span>
                </div>
            </div>
        );
    }
);
