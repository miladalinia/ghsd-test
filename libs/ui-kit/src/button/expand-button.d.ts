import React from 'react';
import { ButtonProps } from './button';
type onClickType = {
    event?: React.MouseEvent;
    info?: {
        open?: boolean;
    };
};
export type ExpandButtonProps = Omit<ButtonProps, 'type' | 'onClick'> & {
    open?: boolean;
    onClick?: (event: onClickType['event'], info?: onClickType['info']) => void;
    margin?: string;
    marginX?: string;
    marginY?: string;
    padding?: string;
    paddingX?: string;
    paddingY?: string;
};
export declare const ExpandButton: (props: ExpandButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=expand-button.d.ts.map