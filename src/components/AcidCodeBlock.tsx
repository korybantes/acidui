import React from 'react';
import clsx from 'clsx';
import { Copy } from 'lucide-react';
import './AcidCodeBlock.css';

export interface AcidCodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    prefix?: string;
}

export const AcidCodeBlock = React.forwardRef<HTMLDivElement, AcidCodeBlockProps>(
    ({ className, code, prefix = '>', ...props }, ref) => {
        return (
            <div className={clsx('ac-codeblock-wrapper', className)} ref={ref} {...props}>
                <div className="ac-codeblock-inner">
                    <span className="ac-codeblock-prefix">{prefix}</span>
                    <code className="ac-codeblock-text">{code}</code>
                    <button className="ac-codeblock-copy" aria-label="Copy code">
                        <Copy size={16} />
                    </button>
                </div>
            </div>
        );
    }
);
