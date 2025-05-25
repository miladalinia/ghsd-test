import { ReactNode } from 'react';
export interface ResultBoxItemType {
    type: 'header' | 'item';
    title: string;
    value?: string | ReactNode;
    line?: boolean;
    subValue?: string;
    displayValue?: boolean;
}
type ResultBoxProps = {
    result: ResultBoxItemType[];
    modalView?: boolean;
};
export declare const ResultBox: ({ result, modalView }: ResultBoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=result-box.d.ts.map