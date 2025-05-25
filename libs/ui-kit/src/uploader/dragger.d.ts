import React from 'react';
import { UploadProps as AntUploadProps } from 'antd';
import { TFunction } from 'i18next';
type FileError = {
    message: any;
    invalidFileNames: string[];
    acceptedTypes: string[];
    maxCount?: number;
};
export type DraggerProps = AntUploadProps & {
    children?: React.ReactNode;
    displayDefaultChildren?: boolean;
    title?: string;
    description?: string;
    accept?: string;
    loading?: boolean;
    onError?: (error: FileError) => void;
    value?: any;
    hasError?: boolean | undefined | void;
};
export declare const generateTypeErrorMessage: (invalidFileNames: string[], acceptedTypes: string[], t: TFunction) => {
    txt: import("react/jsx-runtime").JSX.Element;
    description: import("react/jsx-runtime").JSX.Element;
    type: string;
    shouldTranslate: boolean;
};
export declare const Dragger: (props: DraggerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=dragger.d.ts.map