import React, { ReactNode } from 'react';
import { BasicComponentProps, SubErrorType } from '@ghased-portal/types';
import { AlertProps } from '../alert/alert';
type LinkTargetType = '_self' | '_blank';
export type MessageBoxProps = BasicComponentProps & AlertProps & {
    linkProps?: {
        title: string;
        url: string;
        target?: LinkTargetType;
        icon?: ReactNode;
        samePath?: boolean;
    };
    subErrors?: SubErrorType[];
    shouldScroll?: boolean;
    once?: boolean;
    margin?: string;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
export type I$MessageBoxProps = MessageBoxProps;
export declare const MessageBox: React.FC<I$MessageBoxProps>;
export {};
//# sourceMappingURL=message-box.d.ts.map