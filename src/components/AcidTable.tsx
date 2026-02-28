
import clsx from 'clsx';
import './AcidTable.css';

export interface AcidTableColumn {
    header: string;
    accessor: string;
    className?: string;
}

export interface AcidTableProps {
    columns: AcidTableColumn[];
    data: Record<string, unknown>[];
    className?: string;
}

export const AcidTable = ({ columns, data, className }: AcidTableProps) => {
    return (
        <div className={clsx('ac-table-wrapper', className)}>
            <table className="ac-table">
                <thead className="ac-table-thead">
                    <tr>
                        {columns.map((col, i) => (
                            <th key={i} className={clsx('ac-table-th', col.className)}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="ac-table-tbody">
                    {data.map((row, i) => (
                        <tr key={i} className="ac-table-tr">
                            {columns.map((col, j) => (
                                <td key={j} className={clsx('ac-table-td', col.className)}>
                                    {row[col.accessor] as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
