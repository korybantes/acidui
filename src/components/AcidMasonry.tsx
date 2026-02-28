import { useEffect, useLayoutEffect, useMemo, useRef, useState, forwardRef } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';
import './AcidMasonry.css';

export interface MasonryItem {
    id: string;
    img: string;
    height: number;
    url?: string;
    label?: string;
}

export interface AcidMasonryProps extends React.HTMLAttributes<HTMLDivElement> {
    items: MasonryItem[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
}

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
    const get = () => {
        if (typeof window === 'undefined') return defaultValue;
        const index = queries.findIndex(q => window.matchMedia(q).matches);
        return values[index] ?? defaultValue;
    };

    const [value, setValue] = useState(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queries]);

    return value;
};

const useMeasure = (): [React.RefObject<HTMLDivElement | null>, { width: number; height: number }] => {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size];
};

const preloadImages = async (urls: string[]) => {
    await Promise.all(
        urls.map(
            src =>
                new Promise<void>(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

export const AcidMasonry = forwardRef<HTMLDivElement, AcidMasonryProps>(({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.98,
    blurToFocus = true,
    className,
    ...rest
}, ref) => {
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
        [5, 4, 3, 2],
        1
    );

    const [localContainerRef, { width }] = useMeasure();
    const [imagesReady, setImagesReady] = useState(false);

    useEffect(() => {
        preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }, [items]);

    const grid = useMemo(() => {
        if (!width) return [];

        const colHeights = new Array(columns).fill(0);
        const columnWidth = width / columns;

        return items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = columnWidth * col;
            const height = child.height / 2;
            const y = colHeights[col];

            colHeights[col] += height;

            return { ...child, x, y, w: columnWidth, h: height };
        });
    }, [columns, items, width]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {
        if (!imagesReady) return;

        grid.forEach((item, index) => {
            const selector = `[data-key="${item.id}"]`;
            const animationProps = {
                x: item.x,
                y: item.y,
                width: item.w,
                height: item.h
            };

            if (!hasMounted.current) {
                let startX = item.x;
                let startY = item.y;

                let direction = animateFrom;
                if (animateFrom === 'random') {
                    const directions: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
                    direction = directions[Math.floor(Math.random() * directions.length)];
                }

                switch (direction) {
                    case 'top': startY = -200; break;
                    case 'bottom': startY = window.innerHeight + 200; break;
                    case 'left': startX = -200; break;
                    case 'right': startX = window.innerWidth + 200; break;
                    case 'center':
                        startX = width / 2 - item.w / 2;
                        startY = 300; // mid pointish
                        break;
                    default: startY = item.y + 100;
                }

                gsap.fromTo(selector, {
                    opacity: 0,
                    x: startX,
                    y: startY,
                    width: item.w,
                    height: item.h,
                    scale: 0.8,
                    ...(blurToFocus && { filter: 'blur(10px)' })
                }, {
                    opacity: 1,
                    ...animationProps,
                    scale: 1,
                    ...(blurToFocus && { filter: 'blur(0px)' }),
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: index * stagger,
                    overwrite: 'auto'
                });
            } else {
                gsap.to(selector, {
                    ...animationProps,
                    duration: duration,
                    ease: ease,
                    overwrite: 'auto'
                });
            }
        });

        hasMounted.current = true;
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease, width]);

    const handleMouseEnter = (item: MasonryItem) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${item.id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    const handleMouseLeave = (item: MasonryItem) => {
        if (scaleOnHover) {
            gsap.to(`[data-key="${item.id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    return (
        <div
            ref={(node) => {
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as any).current = node;
                (localContainerRef as any).current = node;
            }}
            className={clsx('ac-masonry-container', className)}
            {...rest}
        >
            {grid.map(item => (
                <div
                    key={item.id}
                    data-key={item.id}
                    className="ac-masonry-item-wrapper"
                    onClick={() => item.url && window.open(item.url, '_blank', 'noopener')}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={() => handleMouseLeave(item)}
                >
                    <div className="ac-masonry-item">
                        <div
                            className="ac-masonry-img"
                            style={{ backgroundImage: `url(${item.img})` }}
                        />
                        <div className="ac-masonry-overlay">
                            <div className="ac-masonry-label">
                                <span className="ac-ps-meta">OBJ_ID: {item.id}</span>
                            </div>
                        </div>
                        <div className="ac-bento-corner-tl" style={{ opacity: 0.5 }} />
                    </div>
                </div>
            ))}
        </div>
    );
});
