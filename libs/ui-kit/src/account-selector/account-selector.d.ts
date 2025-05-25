import { AutoCompleteProps } from 'antd';
export type AccountSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
    serviceName: 'INVOICE' | 'CHEQUE' | 'MONEY_TRANSFER' | 'BATCH_PAYMENT' | 'BILL' | 'CARD' | 'NONE';
    showBalance?: boolean;
    onSelect?: (value: string, option: any) => void;
    onBalance?: (data: any) => void;
    onClear?: () => void;
};
export declare const AccountSelector: (props: AccountSelectorProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=account-selector.d.ts.map