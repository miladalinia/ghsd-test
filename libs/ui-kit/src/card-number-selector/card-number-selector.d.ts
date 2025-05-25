import { AutoCompleteProps } from 'antd';
import { Error } from '@ghased-portal/types';
export type CardNumberError = Error & {
    notValidPrefix?: boolean;
};
export type CardNumberSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
    onSelect?: (value: string, option: any) => void;
    onClear?: () => void;
    onError?: (error: CardNumberError | null) => void;
};
export declare const CardNumberSelector: (props: CardNumberSelectorProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=card-number-selector.d.ts.map