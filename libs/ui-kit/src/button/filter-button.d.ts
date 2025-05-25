import { CSSProperties } from 'react';
import { ButtonProps } from './button';
export type FilterButtonProps = Omit<ButtonProps, 'type'> & {
    width?: CSSProperties['width'];
    active?: boolean;
    showBadge?: boolean;
};
export declare const FilterButton: (props: FilterButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=filter-button.d.ts.map