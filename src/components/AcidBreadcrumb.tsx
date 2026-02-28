import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import './AcidBreadcrumb.css';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    current?: boolean;
}

export interface AcidBreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const AcidBreadcrumb = ({ items, className }: AcidBreadcrumbProps) => {
    return (
        <nav className={clsx('ac-breadcrumb', className)} aria-label="Breadcrumb">
            <ol className="ac-breadcrumb-list">
                {items.map((item, index) => (
                    <li key={index} className="ac-breadcrumb-item">
                        {index > 0 && <ChevronRight className="ac-breadcrumb-separator" size={14} />}
                        <a
                            href={item.href || '#'}
                            className={clsx('ac-breadcrumb-link', item.current && 'ac-breadcrumb-current')}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};
