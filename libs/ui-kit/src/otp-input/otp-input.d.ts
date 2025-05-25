import React from 'react';
import { InputProps as AntInputProps } from 'antd';
export type OtpInputProps = Omit<AntInputProps, 'onChange'> & {
    children?: React.ReactNode;
    value?: string | null;
    valueLength?: number;
    focusable?: boolean;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    inputMode?: string;
};
export declare const OtpInput: (props: OtpInputProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=otp-input.d.ts.map