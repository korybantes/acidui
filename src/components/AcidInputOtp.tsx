import { useState, useRef } from 'react';
import clsx from 'clsx';
import './AcidInputOtp.css';

export interface AcidInputOtpProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    mask?: boolean;
    className?: string;
    label?: string;
}

export const AcidInputOtp = ({
    length = 6,
    value,
    onChange,
    onComplete,
    disabled = false,
    mask = false,
    className,
    label
}: AcidInputOtpProps) => {
    const [internalValue, setInternalValue] = useState(value || '');
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const digits = value !== undefined ? value : internalValue;

    const getDigit = (index: number) => digits[index] || '';

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (digits[index]) {
                const next = digits.substring(0, index) + digits.substring(index + 1);
                setInternalValue(next);
                onChange?.(next);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
                const next = digits.substring(0, index - 1) + digits.substring(index);
                setInternalValue(next);
                onChange?.(next);
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const raw = e.target.value;
        const char = raw.replace(/\D/g, '').slice(-1);
        if (!char) return;

        const arr = digits.split('');
        arr[index] = char;
        const next = arr.join('').substring(0, length);
        setInternalValue(next);
        onChange?.(next);

        if (next.length === length) {
            onComplete?.(next);
        } else if (index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').substring(0, length);
        setInternalValue(pasted);
        onChange?.(pasted);
        if (pasted.length === length) onComplete?.(pasted);
        const focusIndex = Math.min(pasted.length, length - 1);
        inputRefs.current[focusIndex]?.focus();
    };

    return (
        <div className={clsx('ac-otp-wrapper', className)}>
            {label && <span className="ac-otp-label">{label}</span>}
            <div className="ac-otp-inputs">
                {Array.from({ length }).map((_, i) => (
                    <input
                        key={i}
                        ref={el => { inputRefs.current[i] = el; }}
                        className={clsx('ac-otp-cell', getDigit(i) && 'ac-otp-cell-filled')}
                        type={mask ? 'password' : 'text'}
                        inputMode="numeric"
                        maxLength={1}
                        value={mask && getDigit(i) ? '•' : getDigit(i)}
                        onChange={(e) => handleInput(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onPaste={handlePaste}
                        disabled={disabled}
                        autoComplete="off"
                    />
                ))}
            </div>
        </div>
    );
};
