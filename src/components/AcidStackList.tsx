import clsx from 'clsx';
import './AcidStackList.css';

export interface AcidStackItem {
    id: string;
    label: string;
    value: string | number;
    subLabel?: string;
}

export interface AcidStackListProps {
    items: AcidStackItem[];
    title?: string;
    className?: string;
}

export const AcidStackList = ({
    items,
    title,
    className
}: AcidStackListProps) => {
    return (
        <div className={clsx('ac-stack-list', className)}>
            {title && <div className="ac-stack-header">{title}</div>}
            <div className="ac-stack-items">
                {items.map((item) => (
                    <div key={item.id} className="ac-stack-item">
                        <div className="ac-stack-main">
                            <span className="ac-stack-label">{item.label}</span>
                            <span className="ac-stack-value">{item.value}</span>
                        </div>
                        {item.subLabel && <div className="ac-stack-sub">{item.subLabel}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
