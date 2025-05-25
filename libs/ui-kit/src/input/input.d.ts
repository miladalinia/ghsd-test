import React from 'react';
import { InputProps as AntInputProps } from 'antd';
export type InputProps = AntInputProps & {
    allow?: 'all' | 'number' | 'letter' | RegExp;
    children?: React.ReactNode;
};
export declare const Input: {
    (props: InputProps): import("react/jsx-runtime").JSX.Element;
    Password: any;
    TextArea: any;
    Search: any;
    Group: any;
    Money: (props: import("./input-money").InputMoneyProps) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=input.d.ts.map