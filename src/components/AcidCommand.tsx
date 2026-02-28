import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command as CommandIcon, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import './AcidCommand.css';

export interface CommandAction {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    shortcut?: string[];
    onSelect?: () => void;
}

export interface AcidCommandProps {
    isOpen: boolean;
    onClose: () => void;
    actions: CommandAction[];
    placeholder?: string;
}

export const AcidCommand = ({
    isOpen,
    onClose,
    actions,
    placeholder = 'TYPE_A_COMMAND_OR_SEARCH...'
}: AcidCommandProps) => {
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredActions = actions.filter(action =>
        action.label.toLowerCase().includes(query.toLowerCase()) ||
        action.description?.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
                setActiveIndex(0);
            }, 10);
        }
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev + 1) % filteredActions.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const action = filteredActions[activeIndex];
            if (action) {
                action.onSelect?.();
                onClose();
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="ac-command-overlay">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ac-overlay-backdrop"
                        onClick={onClose}
                    />
                    <div className="ac-command-wrapper">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -20 }}
                            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                            className="ac-command-box"
                        >
                            <div className="ac-command-header">
                                <Search size={18} className="ac-search-icon" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="ac-command-input"
                                    placeholder={placeholder}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <div className="ac-esc-hint">ESC</div>
                            </div>

                            <div className="ac-command-list">
                                {filteredActions.length > 0 ? (
                                    filteredActions.map((action, idx) => (
                                        <div
                                            key={action.id}
                                            className={clsx('ac-command-item', idx === activeIndex && 'active')}
                                            onMouseEnter={() => setActiveIndex(idx)}
                                            onClick={() => {
                                                action.onSelect?.();
                                                onClose();
                                            }}
                                        >
                                            <div className="ac-item-left">
                                                <div className="ac-item-icon-box">
                                                    {action.icon || <CommandIcon size={16} />}
                                                </div>
                                                <div className="ac-item-info">
                                                    <span className="ac-item-label">{action.label}</span>
                                                    {action.description && <span className="ac-item-desc">{action.description}</span>}
                                                </div>
                                            </div>
                                            <div className="ac-item-right">
                                                {action.shortcut && (
                                                    <div className="ac-item-shortcuts">
                                                        {action.shortcut.map(s => <span key={s} className="ac-kbd">{s}</span>)}
                                                    </div>
                                                )}
                                                <ArrowRight size={14} className="ac-arrow" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="ac-no-results">NO_MATCHING_COMMANDS_FOUND</div>
                                )}
                            </div>

                            <div className="ac-command-footer">
                                <div className="ac-footer-hint">
                                    <span className="ac-kbd">↑↓</span> TO_NAVIGATE
                                </div>
                                <div className="ac-footer-hint">
                                    <span className="ac-kbd">ENTER</span> TO_SELECT
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
