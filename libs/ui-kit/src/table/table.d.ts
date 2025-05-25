import React from 'react';
import { TableProps as AntTableProps } from 'antd';
import { ColumnsType as AntColumnsType } from 'antd/lib/table';
import { Nullable } from '@ghased-portal/types';
export type ColumnsType<T> = AntColumnsType<T> & {};
export declare enum PaginationType {
    PAGINATED = "paginated",
    INCREMENTAL = "incremental"
}
export type TableProps = Omit<AntTableProps<any>, 'title'> & {
    pageSizeOptions?: number[];
    total?: number;
    current?: number;
    title?: Nullable<string>;
    hasContainer?: boolean;
    captionChildren?: React.ReactNode;
    mobileColumns?: ColumnsType<any>;
    isLastPage?: boolean;
    checkSelectedRow?: (record: any, index?: number) => boolean;
    paginationType?: PaginationType;
    rowClassName?: any;
    showSizeChanger?: boolean;
    minHeight?: string;
};
export declare const Table: {
    (props: TableProps): import("react/jsx-runtime").JSX.Element;
    EXPAND_COLUMN: {};
    MobileColumn: (props: import("./mobile-column").MobileColumnProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=table.d.ts.map