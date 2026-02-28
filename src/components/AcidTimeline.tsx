import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import './AcidTimeline.css';

export interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export interface AcidTimelineProps {
    data: TimelineEntry[];
    className?: string;
}

export const AcidTimeline = ({ data, className }: AcidTimelineProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 90%', 'end 50%'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div className={clsx('ac-timeline-wrapper', className)} ref={containerRef}>
            <div className="ac-timeline-container">

                {/* Core background brutal line */}
                <div className="ac-timeline-track"></div>

                {/* Animated progressive core line */}
                <motion.div
                    className="ac-timeline-progress"
                    style={{ height: lineHeight }}
                />

                {data.map((item, index) => (
                    <div key={index} className="ac-timeline-item">
                        <div className="ac-timeline-node-container">
                            {/* Node dot */}
                            <div className="ac-timeline-node">
                                <div className="ac-timeline-node-inner" />
                            </div>
                        </div>
                        <div className="ac-timeline-content-container">
                            <h3 className="ac-timeline-title">{item.title}</h3>
                            <div className="ac-timeline-content">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};
