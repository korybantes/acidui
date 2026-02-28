import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import './AcidPagination.css';

export interface AcidPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    className?: string;
}

export const AcidPagination = ({
    currentPage,
    totalPages,
    onPageChange,
    className
}: AcidPaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className={clsx('ac-pagination', className)}>
            <button
                className="ac-pagination-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange?.(currentPage - 1)}
            >
                <ChevronLeft size={16} />
            </button>

            <div className="ac-pagination-pages">
                {pages.map(page => (
                    <button
                        key={page}
                        className={clsx('ac-pagination-page', currentPage === page && 'ac-active')}
                        onClick={() => onPageChange?.(page)}
                    >
                        {page.toString().padStart(2, '0')}
                    </button>
                ))}
            </div>

            <button
                className="ac-pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange?.(currentPage + 1)}
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
};
