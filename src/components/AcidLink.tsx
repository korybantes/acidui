import React from 'react';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import './AcidLink.css';

export interface AcidLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

export const AcidLink = React.forwardRef<HTMLAnchorElement, AcidLinkProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <a className={clsx('ac-link', className)} ref={ref} {...props}>
                <span className="ac-link-text">{children}</span>
                <ArrowRight size={14} className="ac-link-arrow" />
            </a>
        );
    }
);
