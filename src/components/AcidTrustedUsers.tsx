import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './AcidTrustedUsers.css';

export interface TrustedUser {
    id: string;
    logo: React.ReactNode;
    name: string;
}

export interface AcidTrustedUsersProps {
    users: TrustedUser[];
    title?: string;
    className?: string;
}

export const AcidTrustedUsers = ({
    users,
    title = "TRUSTED_NODES",
    className
}: AcidTrustedUsersProps) => {
    return (
        <div className={clsx('ac-trusted-container', className)}>
            <div className="ac-trusted-header">
                <div className="ac-trusted-line" />
                <span className="ac-trusted-title">{title}</span>
                <div className="ac-trusted-line" />
            </div>
            <div className="ac-trusted-grid">
                {users.map((user) => (
                    <motion.div
                        key={user.id}
                        whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                        className="ac-trusted-item"
                    >
                        <div className="ac-trusted-logo">
                            {user.logo}
                        </div>
                        <span className="ac-trusted-name">{user.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
