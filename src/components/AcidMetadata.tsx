import React from 'react';
import clsx from 'clsx';
import './AcidMetadata.css';

export interface AcidMetadataProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    version?: string;
    serial?: string;
}

export const AcidMetadata = React.forwardRef<HTMLDivElement, AcidMetadataProps>(
    ({ className, label = 'SYSTEM_CORE', version = 'v1.0.0', serial = 'SN-4096-XP-01', ...props }, ref) => {
        return (
            <div className={clsx('ac-metadata', className)} ref={ref} {...props}>
                <div className="ac-metadata-left">
                    <div className="ac-metadata-label">{label}</div>
                    <div className="ac-metadata-version">{version}</div>
                </div>
                <div className="ac-metadata-right">
                    <div className="ac-metadata-serial">{serial}</div>
                    <div className="ac-metadata-barcode" />
                </div>
            </div>
        );
    }
);
