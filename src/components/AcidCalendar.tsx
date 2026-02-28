import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import './AcidCalendar.css';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export interface AcidCalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    className?: string;
}

export const AcidCalendar = ({
    value,
    defaultValue,
    onChange,
    minDate,
    maxDate,
    className
}: AcidCalendarProps) => {
    const today = new Date();
    const [internalDate, setInternalDate] = useState(defaultValue || null);
    const [viewDate, setViewDate] = useState(defaultValue || today);
    const [direction, setDirection] = useState(0);

    const selected = value !== undefined ? value : internalDate;

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells: Array<{ day: number; type: 'prev' | 'current' | 'next' }> = [];
    for (let i = 0; i < firstDay; i++) {
        cells.push({ day: daysInPrevMonth - firstDay + 1 + i, type: 'prev' });
    }
    for (let i = 1; i <= daysInMonth; i++) {
        cells.push({ day: i, type: 'current' });
    }
    const remaining = 42 - cells.length;
    for (let i = 1; i <= remaining; i++) {
        cells.push({ day: i, type: 'next' });
    }

    const navigate = (dir: number) => {
        setDirection(dir);
        const next = new Date(viewDate);
        next.setMonth(next.getMonth() + dir);
        setViewDate(next);
    };

    const selectDay = (day: number, type: string) => {
        if (type !== 'current') return;
        const date = new Date(year, month, day);
        if (minDate && date < minDate) return;
        if (maxDate && date > maxDate) return;
        setInternalDate(date);
        onChange?.(date);
    };

    const isSelected = (day: number, type: string) => {
        if (!selected || type !== 'current') return false;
        return selected.getFullYear() === year && selected.getMonth() === month && selected.getDate() === day;
    };

    const isToday = (day: number, type: string) => {
        if (type !== 'current') return false;
        return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    };

    return (
        <div className={clsx('ac-calendar', className)}>
            <div className="ac-calendar-header">
                <button className="ac-calendar-nav" onClick={() => navigate(-1)}>
                    <ChevronLeft size={16} />
                </button>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.span
                        key={`${year}-${month}`}
                        className="ac-calendar-month-label"
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {MONTHS[month]} {year}
                    </motion.span>
                </AnimatePresence>
                <button className="ac-calendar-nav" onClick={() => navigate(1)}>
                    <ChevronRight size={16} />
                </button>
            </div>

            <div className="ac-calendar-grid">
                {DAYS.map(d => (
                    <div key={d} className="ac-calendar-day-label">{d}</div>
                ))}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`${year}-${month}-cells`}
                        className="ac-calendar-cells"
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -30 }}
                        transition={{ duration: 0.2 }}
                    >
                        {cells.map((cell, i) => (
                            <button
                                key={i}
                                className={clsx(
                                    'ac-calendar-cell',
                                    cell.type !== 'current' && 'ac-calendar-cell-other',
                                    isToday(cell.day, cell.type) && 'ac-calendar-cell-today',
                                    isSelected(cell.day, cell.type) && 'ac-calendar-cell-selected'
                                )}
                                onClick={() => selectDay(cell.day, cell.type)}
                            >
                                {cell.day}
                            </button>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {selected && (
                <div className="ac-calendar-footer">
                    <span className="ac-calendar-selected-label">
                        SELECTED: {selected.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
                    </span>
                </div>
            )}
        </div>
    );
};
