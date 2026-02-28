import React, { useState } from 'react';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Sun, Moon } from 'lucide-react';
import './AcidCodeDisplay.css';

export interface AcidCodeDisplayProps {
    title: string;
    code: string;
    language?: string;
    className?: string;
}
export const AcidCodeDisplay = ({ title, code, language = 'tsx', className }: AcidCodeDisplayProps) => {
    const [copied, setCopied] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [needsExpansion, setNeedsExpansion] = React.useState(false);
    const [isLightMode, setIsLightMode] = useState(false);
    const preRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (preRef.current && preRef.current.scrollHeight > 300) {
            setNeedsExpansion(true);
        } else {
            setNeedsExpansion(false);
        }
    }, [code, isExpanded]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={clsx('ac-code-display', className)}>
            <div className="ac-code-display-header">
                <div className="ac-code-display-title">
                    <span className="ac-code-display-dot" />
                    {title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                        className="ac-code-display-theme-toggle"
                        onClick={() => setIsLightMode(!isLightMode)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--ac-text-secondary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '4px'
                        }}
                    >
                        {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
                    </button>
                    <button className="ac-code-display-copy" onClick={handleCopy}>
                        {copied ? 'COPIED' : 'COPY'}
                    </button>
                </div>
            </div>
            <div className="ac-code-display-container" style={{ position: 'relative', background: isLightMode ? '#ffffff' : '#1e1e1e' }}>
                <div
                    ref={preRef}
                    className="ac-code-display-pre"
                    style={{
                        maxHeight: isExpanded ? 'none' : '300px',
                        overflow: 'hidden',
                        position: 'relative',
                        paddingBottom: isExpanded ? '4rem' : 'auto'
                    }}
                >
                    <SyntaxHighlighter
                        language={language === 'js' ? 'tsx' : language}
                        style={isLightMode ? vs : vscDarkPlus}
                        customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            background: 'transparent',
                            fontSize: '0.85rem',
                            fontFamily: 'var(--font-mono)'
                        }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>

                {needsExpansion && !isExpanded && (
                    <div className="ac-code-display-expand-overlay" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: isLightMode ? 'linear-gradient(to bottom, transparent, #ffffff)' : 'linear-gradient(to bottom, transparent, #1e1e1e)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingBottom: '1rem'
                    }}>
                        <button className="ac-code-display-expand-btn" onClick={() => setIsExpanded(true)} style={{
                            background: isLightMode ? '#f4f4f5' : '#18181b',
                            border: isLightMode ? '1px solid #e4e4e7' : '1px solid #27272a',
                            color: isLightMode ? '#000' : '#fff',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '99px',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            zIndex: 10
                        }}>
                            Expand code
                        </button>
                    </div>
                )}
                {needsExpansion && isExpanded && (
                    <div className="ac-code-display-collapse" style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button className="ac-code-display-collapse-btn" onClick={() => setIsExpanded(false)} style={{
                            background: isLightMode ? '#f4f4f5' : '#18181b',
                            border: isLightMode ? '1px solid #e4e4e7' : '1px solid #27272a',
                            color: isLightMode ? '#000' : '#fff',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '99px',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            zIndex: 10
                        }}>
                            Collapse code
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
