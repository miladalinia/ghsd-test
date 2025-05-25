import React from 'react';
import { ButtonProps as AntButtonProps } from 'antd';
export type ButtonProps = Omit<AntButtonProps, 'type'> & {
    children?: React.ReactNode;
    type?: 'table' | 'primaryOutlined' | AntButtonProps['type'];
    flex?: boolean;
};
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=button.d.ts.map