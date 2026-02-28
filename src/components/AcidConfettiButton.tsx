import React from 'react';
import confetti from 'canvas-confetti';
import { AcidButton } from './AcidButton';
import type { AcidButtonProps } from './AcidButton';

export interface AcidConfettiButtonProps extends AcidButtonProps {
    confettiOptions?: confetti.Options;
}

export const AcidConfettiButton = ({
    children,
    confettiOptions,
    onClick,
    ...props
}: AcidConfettiButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            ...confettiOptions,
            origin: { x, y },
            particleCount: 100,
            spread: 70,
            colors: ['#00ff00', '#ec4899', '#3b82f6'] // Industrial palette
        });

        if (onClick) onClick(e);
    };

    return (
        <AcidButton onClick={handleClick} {...props}>
            {children}
        </AcidButton>
    );
};
