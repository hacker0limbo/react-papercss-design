import clsx from 'clsx';
import { get } from 'lodash-es';
import React from 'react';

export type TableColumn<RecordType = Record<string, any>> = {
  /**
   * title of the column, will be rendered as a header cell
   */
  title: React.ReactNode;
  /**
   * dataIndex is the key of the data source that this column will render. supports nested keys like 'user.name'
   */
  dataIndex?: string;
  /**
   * custom render function for the cell content
   * @param value current cell value
   * @param record row data of the current cell
   * @param index current row index
   * @returns ReactNode
   */
  render?: (value: any, record: RecordType, index: number) => React.ReactNode;
};

export type TableProps<RecordType = Record<string, any>> = {
  dataSource: RecordType[];
  columns: TableColumn<RecordType>[];
  striped?: boolean;
  hoverable?: boolean;
} & React.ComponentPropsWithoutRef<'table'>;

/**
 * Table component
 */
export function Table<RecordType = Record<string, any>>(props: TableProps<RecordType>) {
  const {
    dataSource = [],
    columns = [],
    striped = false,
    hoverable = false,
    className,
    ...restProps
  } = props;
  return (
    <table
      className={clsx({ 'table-hover': hoverable, 'table-alternating': striped }, className)}
      {...restProps}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((record, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => {
              const value = column.dataIndex ? get(record, column.dataIndex) : undefined;

              return (
                <td key={colIndex}>
                  {column.render ? column.render(value, record, rowIndex) : value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
