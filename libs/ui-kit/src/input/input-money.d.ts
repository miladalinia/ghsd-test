import { ReactNode } from 'react';
import { InputProps } from './input';
export type InputMoneyProps = InputProps & {
    showLetter?: boolean;
    subtitle?: ReactNode;
    onValue?: (value?: string, formattedValue?: string) => void;
};
export declare const InputMoney: (props: InputMoneyProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=input-money.d.ts.map