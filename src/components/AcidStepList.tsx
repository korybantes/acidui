
import clsx from 'clsx';
import './AcidStepList.css';

export interface StepItem {
    id: string;
    label: string;
}

export interface AcidStepListProps {
    steps: StepItem[];
    activeId?: string;
    className?: string;
}

export const AcidStepList = ({ steps, activeId, className }: AcidStepListProps) => {
    return (
        <ul className={clsx('ac-step-list', className)}>
            {steps.map((item, idx) => {
                const isActive = activeId === item.id;
                const number = (idx + 1).toString().padStart(2, '0');
                return (
                    <li key={item.id} className={clsx('ac-step-item', isActive && 'ac-step-active')}>
                        <span className="ac-step-num">{number}</span>
                        <span className="ac-step-label">{item.label}</span>
                    </li>
                );
            })}
        </ul>
    );
};
