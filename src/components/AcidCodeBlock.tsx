import React from 'react';
import clsx from 'clsx';
import { Copy, Check } from 'lucide-react';
import { AcidTooltip } from './AcidTooltip';
import './AcidCodeBlock.css';

export interface AcidCodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    prefix?: string;
}

export const AcidCodeBlock = React.forwardRef<HTMLDivElement, AcidCodeBlockProps>(
    ({ className, code, prefix = '>', ...props }, ref) => {
        const [copied, setCopied] = React.useState(false);

        const handleCopy = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };

        return (
            <div className={clsx('ac-codeblock-wrapper', className)} ref={ref} {...props}>
                <div className="ac-codeblock-inner">
                    <span className="ac-codeblock-prefix">{prefix}</span>
                    <code className="ac-codeblock-text">{code}</code>
                    <AcidTooltip content={copied ? "Copied!" : "Copy code"} position="top">
                        <button className="ac-codeblock-copy" aria-label="Copy code" onClick={handleCopy}>
                            {copied ? <Check size={16} color="#22c55e" /> : <Copy size={16} />}
                        </button>
                    </AcidTooltip>
                </div>
            </div>
        );
    }
);
