import clsx from 'clsx';
import './AcidNavigationMenu.css';

export interface NavItem {
    label: string;
    href: string;
    active?: boolean;
}

export interface AcidNavigationMenuProps {
    items: NavItem[];
    className?: string;
    orientation?: 'horizontal' | 'vertical';
}

export const AcidNavigationMenu = ({
    items,
    className,
    orientation = 'horizontal'
}: AcidNavigationMenuProps) => {
    return (
        <nav className={clsx('ac-nav-menu', `ac-nav-${orientation}`, className)}>
            <ul className="ac-nav-list">
                {items.map((item, index) => (
                    <li key={index} className="ac-nav-item">
                        <a
                            href={item.href}
                            className={clsx('ac-nav-link', item.active && 'ac-active')}
                        >
                            <span className="ac-nav-label">{item.label}</span>
                            {item.active && <div className="ac-nav-indicator" />}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
