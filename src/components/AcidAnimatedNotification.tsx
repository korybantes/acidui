import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import clsx from 'clsx';
import './AcidAnimatedNotification.css';

export interface AcidNotification {
    id: string;
    title: string;
    message: string;
    time?: string;
    icon?: React.ReactNode;
}

export interface AcidAnimatedNotificationProps {
    notifications: AcidNotification[];
    onDismiss?: (id: string) => void;
    className?: string;
}

export const AcidAnimatedNotification = ({
    notifications,
    onDismiss,
    className
}: AcidAnimatedNotificationProps) => {
    return (
        <div className={clsx('ac-notification-stack', className)}>
            <AnimatePresence mode="popLayout">
                {notifications.map((n) => (
                    <motion.div
                        key={n.id}
                        layout
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="ac-notification"
                    >
                        <div className="ac-notification-icon">
                            {n.icon || <Bell size={18} />}
                        </div>
                        <div className="ac-notification-content">
                            <div className="ac-notification-header">
                                <span className="ac-notification-title">{n.title}</span>
                                {n.time && <span className="ac-notification-time">{n.time}</span>}
                            </div>
                            <p className="ac-notification-message">{n.message}</p>
                        </div>
                        {onDismiss && (
                            <button
                                className="ac-notification-close"
                                onClick={() => onDismiss(n.id)}
                            >
                                <X size={14} />
                            </button>
                        )}
                        <div className="ac-notification-border" />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
