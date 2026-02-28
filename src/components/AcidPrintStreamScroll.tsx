import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';
import './AcidPrintStreamScroll.css';

export interface AcidPrintStreamScrollProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string;
    speed?: number; // Pixels per second
    reverse?: boolean;
}

export const AcidPrintStreamScroll = React.forwardRef<HTMLDivElement, AcidPrintStreamScrollProps>(
    ({ className, text = "PRINTSTREAM_OVERRIDE_ACTIVE // SYSTEM_CORE_v2.0", speed = 100, reverse = false, ...props }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const contentRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const container = containerRef.current;
            const content = contentRef.current;
            if (!container || !content) return;

            // Simple infinite loop using GSAP
            const contentWidth = content.offsetWidth / 2; // We double the content in JSX
            const duration = contentWidth / speed;

            const tl = gsap.timeline({ repeat: -1 });

            tl.to(content, {
                x: reverse ? contentWidth : -contentWidth,
                duration: duration,
                ease: 'none'
            });

            return () => {
                tl.kill();
            };
        }, [speed, reverse, text]);

        return (
            <div
                className={clsx('ac-printstream-scroll', className)}
                ref={(node) => {
                    if (typeof ref === 'function') ref(node);
                    else if (ref) ref.current = node;
                    (containerRef as any).current = node;
                }}
                {...props}
            >
                <div className="ac-printstream-track" ref={contentRef}>
                    <div className="ac-printstream-segment">
                        <span className="ac-ps-block" />
                        <span className="ac-ps-text">{text}</span>
                        <span className="ac-ps-geometric" />
                        <span className="ac-ps-text">{text}</span>
                    </div>
                    {/* Duplicate for seamless looping */}
                    <div className="ac-printstream-segment">
                        <span className="ac-ps-block" />
                        <span className="ac-ps-text">{text}</span>
                        <span className="ac-ps-geometric" />
                        <span className="ac-ps-text">{text}</span>
                    </div>
                </div>
            </div>
        );
    }
);
