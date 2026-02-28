import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import './AcidTerminalLogs.css';

export interface AcidTerminalLogsProps extends React.HTMLAttributes<HTMLDivElement> {
    logs?: string[];
    speedMs?: number;
}

export const AcidTerminalLogs = React.forwardRef<HTMLDivElement, AcidTerminalLogsProps>(
    ({ className, logs = [], speedMs = 500, ...props }, ref) => {
        const [displayedLogs, setDisplayedLogs] = useState<{ time: string; text: string }[]>([]);
        const containerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (logs.length === 0) return;

            let index = 0;
            const interval = setInterval(() => {
                if (index < logs.length) {
                    const now = new Date();
                    const timestamp = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;

                    setDisplayedLogs(prev => [...prev, { time: timestamp, text: logs[index] }]);
                    index++;

                    // Auto-scroll
                    if (containerRef.current) {
                        containerRef.current.scrollTop = containerRef.current.scrollHeight;
                    }
                } else {
                    clearInterval(interval);
                }
            }, speedMs);

            return () => clearInterval(interval);
        }, [logs, speedMs]);

        return (
            <div
                className={clsx('ac-terminal-logs', className)}
                ref={(node) => {
                    // Handle both refs
                    if (typeof ref === 'function') ref(node);
                    else if (ref) ref.current = node;
                    (containerRef as any).current = node;
                }}
                {...props}
            >
                {displayedLogs.map((log, i) => (
                    <div key={i} className="ac-terminal-log-line">
                        <span className="ac-terminal-time">{log.time}</span>
                        <span className="ac-terminal-text">{log.text}</span>
                    </div>
                ))}
                <div className="ac-terminal-cursor" />
            </div>
        );
    }
);
