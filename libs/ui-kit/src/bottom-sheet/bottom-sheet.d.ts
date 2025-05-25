import React from 'react';
import { ModalProps } from 'antd';
import { Error } from '@ghased-portal/types';
import { DrawerProps } from 'antd/lib';
type CustomDrawerProps = Omit<DrawerProps, 'title' | 'onClose'>;
type CustomModalProps = Omit<ModalProps, 'title' | 'onCancel'>;
type BottomSheetProps = CustomDrawerProps & CustomModalProps & {
    isResizable?: boolean;
    onClose?: VoidFunction;
    initialHeight?: number;
    isModalView?: boolean;
    open?: boolean;
    error?: Error;
    reTryHandler?: VoidFunction;
    loading?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    closable?: boolean;
};
export declare const BottomSheet: React.FC<BottomSheetProps>;
export {};
//# sourceMappingURL=bottom-sheet.d.ts.map