import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import clsx from 'clsx';
import './AcidDragOrderList.css';

export interface AcidDragOrderItem {
    id: string;
    content: React.ReactNode;
}

export interface AcidDragOrderListProps {
    items: AcidDragOrderItem[];
    onChange?: (items: AcidDragOrderItem[]) => void;
    className?: string;
}

export const AcidDragOrderList = ({
    items: initialItems,
    onChange,
    className
}: AcidDragOrderListProps) => {
    const [items, setItems] = useState(initialItems);

    const handleReorder = (newOrder: AcidDragOrderItem[]) => {
        setItems(newOrder);
        onChange?.(newOrder);
    };

    return (
        <Reorder.Group
            axis="y"
            values={items}
            onReorder={handleReorder}
            className={clsx('ac-drag-list', className)}
        >
            {items.map((item) => (
                <Reorder.Item
                    key={item.id}
                    value={item}
                    className="ac-drag-item"
                    whileDrag={{
                        scale: 1.02,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        borderColor: 'var(--ac-brand)'
                    }}
                >
                    <div className="ac-drag-handle">
                        <GripVertical size={16} />
                    </div>
                    <div className="ac-drag-content">
                        {item.content}
                    </div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
};
