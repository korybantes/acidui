import React, { useMemo } from 'react';
import clsx from 'clsx';
import './AcidChart.css';

export interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

export interface AcidChartProps {
    type: 'line' | 'bar' | 'area' | 'pie' | 'radar';
    data: ChartDataPoint[];
    title?: string;
    height?: number | string;
    className?: string;
    showGrid?: boolean;
    showLabels?: boolean;
}

export const AcidChart = ({
    type,
    data,
    title,
    height = 300,
    className,
    showGrid = true,
    showLabels = true
}: AcidChartProps) => {
    const maxValue = useMemo(() => Math.max(...data.map(d => d.value), 1), [data]);

    // Line / Bar / Area helpers
    const padding = 40;
    const viewWidth = 500;
    const viewHeight = 300;
    const chartWidth = viewWidth - padding * 2;
    const chartHeight = viewHeight - padding * 2;

    const points = useMemo(() => {
        return data.map((d, i) => ({
            x: padding + (i * (chartWidth / (data.length - 1 || 1))),
            y: viewHeight - padding - (d.value / maxValue * chartHeight)
        }));
    }, [data, maxValue, chartWidth, chartHeight]);

    const renderChart = () => {
        switch (type) {
            case 'line': {
                const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                return (
                    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="ac-chart-svg">
                        {showGrid && renderGrid()}
                        <path d={linePath} className="ac-chart-path-line" />
                        {points.map((p, i) => (
                            <circle key={i} cx={p.x} cy={p.y} r="4" className="ac-chart-point" />
                        ))}
                    </svg>
                );
            }
            case 'bar': {
                const barWidth = (chartWidth / data.length) * 0.8;
                return (
                    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="ac-chart-svg">
                        {showGrid && renderGrid()}
                        {data.map((d, i) => {
                            const x = padding + (i * (chartWidth / data.length)) + (chartWidth / data.length - barWidth) / 2;
                            const h = (d.value / maxValue) * chartHeight;
                            const y = viewHeight - padding - h;
                            return (
                                <rect
                                    key={i}
                                    x={x}
                                    y={y}
                                    width={barWidth}
                                    height={h}
                                    className="ac-chart-bar"
                                />
                            );
                        })}
                    </svg>
                );
            }
            case 'area': {
                const areaLine = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                const fillPath = `${areaLine} L ${points[points.length - 1].x} ${viewHeight - padding} L ${points[0].x} ${viewHeight - padding} Z`;
                return (
                    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="ac-chart-svg">
                        {showGrid && renderGrid()}
                        <path d={fillPath} className="ac-chart-path-area-fill" />
                        <path d={areaLine} className="ac-chart-path-area-line" />
                    </svg>
                );
            }
            case 'pie': {
                let currentAngle = 0;
                const total = data.reduce((acc, d) => acc + d.value, 0);
                const radius = 100;
                const cx = viewWidth / 2;
                const cy = viewHeight / 2;

                return (
                    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="ac-chart-svg">
                        {data.map((d, i) => {
                            const sliceAngle = (d.value / total) * 360;
                            const x1 = cx + radius * Math.cos((currentAngle - 90) * Math.PI / 180);
                            const y1 = cy + radius * Math.sin((currentAngle - 90) * Math.PI / 180);
                            currentAngle += sliceAngle;
                            const x2 = cx + radius * Math.cos((currentAngle - 90) * Math.PI / 180);
                            const y2 = cy + radius * Math.sin((currentAngle - 90) * Math.PI / 180);

                            const largeArc = sliceAngle > 180 ? 1 : 0;
                            const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

                            return (
                                <path
                                    key={i}
                                    d={pathData}
                                    className="ac-chart-pie-slice"
                                    style={{ '--slice-index': i } as React.CSSProperties}
                                />
                            );
                        })}
                        <circle cx={cx} cy={cy} r={radius * 0.6} className="ac-chart-pie-inner" />
                    </svg>
                );
            }
            case 'radar': {
                const rRadius = 100;
                const rCx = viewWidth / 2;
                const rCy = viewHeight / 2;
                const angleStep = (Math.PI * 2) / data.length;

                const radarPoints = data.map((d, i) => {
                    const r = (d.value / maxValue) * rRadius;
                    return {
                        x: rCx + r * Math.cos(i * angleStep - Math.PI / 2),
                        y: rCy + r * Math.sin(i * angleStep - Math.PI / 2)
                    };
                });

                const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

                return (
                    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="ac-chart-svg">
                        {/* Radar Grids */}
                        {[0.2, 0.4, 0.6, 0.8, 1].map(scale => (
                            <path
                                key={scale}
                                d={data.map((_, i) => {
                                    const r = scale * rRadius;
                                    const x = rCx + r * Math.cos(i * angleStep - Math.PI / 2);
                                    const y = rCy + r * Math.sin(i * angleStep - Math.PI / 2);
                                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                                }).join(' ') + ' Z'}
                                className="ac-chart-radar-grid"
                            />
                        ))}
                        <path d={radarPath} className="ac-chart-path-radar" />
                    </svg>
                );
            }
            default:
                return null;
        }
    };

    const renderGrid = () => (
        <g className="ac-chart-grid">
            {[0, 0.25, 0.5, 0.75, 1].map(v => {
                const y = padding + v * chartHeight;
                return <line key={v} x1={padding} y1={y} x2={viewWidth - padding} y2={y} />;
            })}
        </g>
    );

    return (
        <div className={clsx('ac-chart', className)} style={{ height }}>
            {title && (
                <div className="ac-chart-header">
                    <span className="ac-chart-dot" />
                    <span className="ac-chart-title">{title}</span>
                </div>
            )}
            <div className="ac-chart-container">
                {renderChart()}
            </div>
            {showLabels && type !== 'pie' && type !== 'radar' && (
                <div className="ac-chart-labels">
                    {data.map((d, i) => (
                        <div key={i} className="ac-chart-label-item">
                            {d.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
