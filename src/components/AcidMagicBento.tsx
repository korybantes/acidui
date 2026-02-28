import { useRef, useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';
import './AcidMagicBento.css';

const DEFAULT_PARTICLE_COUNT = 15;

export interface MagicBentoItem {
    id: string;
    title: string;
    description: string;
    label: string;
    color?: string;
    icon?: React.ReactNode;
}

const createParticleElement = (x: number, y: number, color: string) => {
    const el = document.createElement('div');
    el.className = 'ac-bento-particle';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 8px ${color}`;
    return el;
};

const ParticleCard = ({
    children,
    className = '',
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = 'var(--ac-brand)',
    enableTilt = true,
    enableMagnetism = true,
    style
}: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        const spawnParticles = () => {
            if (!isHoveredRef.current) return;
            const { width, height } = element.getBoundingClientRect();

            for (let i = 0; i < particleCount; i++) {
                setTimeout(() => {
                    if (!isHoveredRef.current) return;
                    const px = Math.random() * width;
                    const py = Math.random() * height;
                    const p = createParticleElement(px, py, glowColor);
                    element.appendChild(p);
                    particlesRef.current.push(p);

                    gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.8, duration: 0.4 });
                    gsap.to(p, {
                        x: (Math.random() - 0.5) * 80,
                        y: (Math.random() - 0.5) * 80,
                        opacity: 0,
                        duration: 1.5 + Math.random(),
                        onComplete: () => {
                            p.remove();
                            particlesRef.current = particlesRef.current.filter(item => item !== p);
                        }
                    });
                }, i * 150);
            }
        };

        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            spawnParticles();
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
                const rx = ((y - centerY) / centerY) * -8;
                const ry = ((x - centerX) / centerX) * 8;
                gsap.to(element, { rotateX: rx, rotateY: ry, duration: 0.2, transformPerspective: 1000 });
            }

            if (enableMagnetism) {
                const mx = (x - centerX) * 0.05;
                const my = (y - centerY) * 0.05;
                gsap.to(element, { x: mx, y: my, duration: 0.3 });
            }

            // Update CSS properties for glow
            element.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
            element.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, [particleCount, glowColor, enableTilt, enableMagnetism]);

    return (
        <div ref={cardRef} className={clsx('ac-magic-bento-card', className)} style={style}>
            {children}
            <div className="ac-bento-border-glow" />
        </div>
    );
};

export interface AcidMagicBentoProps extends React.HTMLAttributes<HTMLDivElement> {
    items: MagicBentoItem[];
    enableSpotlight?: boolean;
}

export const AcidMagicBento = forwardRef<HTMLDivElement, AcidMagicBentoProps>(
    ({ className, items, enableSpotlight = true, ...props }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);

        return (
            <div
                ref={(node) => {
                    if (typeof ref === 'function') ref(node);
                    else if (ref) ref.current = node;
                    (containerRef as any).current = node;
                }}
                className={clsx('ac-magic-bento-container', className)}
                {...props}
            >
                <div className="ac-magic-bento-grid">
                    {items.map((item, idx) => (
                        <ParticleCard
                            key={item.id || idx}
                            className={clsx('ac-bento-cell', `cell-${idx}`)}
                            style={{ backgroundColor: item.color || '#000' }}
                        >
                            <div className="ac-bento-content">
                                <div className="ac-bento-header">
                                    <span className="ac-bento-label">{item.label}</span>
                                    {item.icon && <div className="ac-bento-icon">{item.icon}</div>}
                                </div>
                                <div className="ac-bento-body">
                                    <h3 className="ac-bento-title">{item.title}</h3>
                                    <p className="ac-bento-desc">{item.description}</p>
                                </div>
                            </div>
                            <div className="ac-bento-tech-deco">
                                <div className="ac-bento-corner-tl" />
                                <div className="ac-bento-barcode" />
                            </div>
                        </ParticleCard>
                    ))}
                </div>
            </div>
        );
    }
);
