import { CSSProperties, ReactNode } from 'react';
import { WidgetHeaderType } from './app-types';
export type BasicComponentProps = {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    children?: ReactNode | ReactNode[];
};
export type PageProps = {
    parentProps?: unknown;
    children?: ReactNode | ReactNode[];
    updateWidgetHeader?: (newHeader: WidgetHeaderType) => void;
};
//# sourceMappingURL=props.d.ts.map