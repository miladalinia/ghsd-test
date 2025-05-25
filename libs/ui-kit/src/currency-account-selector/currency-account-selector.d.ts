import { AutoCompleteProps } from 'antd';
export type CurrencyAccountSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
    onSelect?: (value: string, option: any) => void;
    onClear?: () => void;
    onError?: (error: any) => void;
    optionRender?: () => void;
};
export declare const CurrencyAccountSelector: (props: CurrencyAccountSelectorProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=currency-account-selector.d.ts.map