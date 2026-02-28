import { useState, useEffect } from 'react';
import clsx from 'clsx';

export interface AcidTypingTextProps {
    text: string;
    speed?: number;
    className?: string;
    onComplete?: () => void;
}

export const AcidTypingText = ({ text, speed = 50, className, onComplete }: AcidTypingTextProps) => {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed, onComplete]);

    return (
        <span className={clsx('ac-typing-text', className)}>
            {displayed}<span className="ac-typing-cursor" style={{ visibility: displayed.length < text.length ? 'visible' : 'hidden' }}>|</span>
        </span>
    );
};
