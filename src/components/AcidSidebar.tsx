import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import './AcidSidebar.css';

export interface SidebarCategory {
    title: string;
    items: { name: string; isNew?: boolean }[];
}

export interface AcidSidebarProps {
    categories: SidebarCategory[];
    className?: string;
    children?: React.ReactNode;
}

export const AcidSidebar = ({ categories, className, children }: AcidSidebarProps) => {
    return (
        <div className={clsx('ac-sidebar', className)}>
            <div className="ac-sidebar-inner">
                {children}
                {categories.map((cat, i) => (
                    <div key={i} className="ac-sidebar-category">
                        <h4 className="ac-sidebar-cat-title">
                            <ChevronRight size={14} className="ac-sidebar-cat-icon" />
                            {cat.title}
                        </h4>
                        <ul className="ac-sidebar-list">
                            {cat.items.map((item, j) => (
                                <li key={j} className="ac-sidebar-item">
                                    <a href={`#${item.name.replace(/\s+/g, '-').toLowerCase()}`} className="ac-sidebar-link">
                                        {item.name}
                                        {item.isNew && (
                                            <span className="ac-sidebar-badge-new">NEW</span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
