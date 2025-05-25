import { AutoCompleteProps } from 'antd';
export type ContactSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
    onSelect?: (value: string, option: any) => void;
    onError?: (error: any) => void;
    isIban?: boolean;
    isStaticPrefix?: boolean;
};
export declare const ContactSelector: (props: ContactSelectorProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=contact-selector.d.ts.map