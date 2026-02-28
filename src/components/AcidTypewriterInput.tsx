import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './AcidTypewriterInput.css';

export interface AcidTypewriterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    typingSpeed?: number;
}

export const AcidTypewriterInput = ({ label, typingSpeed = 100, className, ...props }: AcidTypewriterInputProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(label.slice(0, i + 1));
            i++;
            if (i >= label.length) clearInterval(interval);
        }, typingSpeed);
        return () => clearInterval(interval);
    }, [label, typingSpeed]);

    return (
        <div className={clsx('ac-typewriter-input-wrap', className)}>
            <label className="ac-typewriter-label">
                {displayText}<span className="ac-cursor">_</span>
            </label>
            <input className="ac-typewriter-field" {...props} />
        </div>
    );
};
