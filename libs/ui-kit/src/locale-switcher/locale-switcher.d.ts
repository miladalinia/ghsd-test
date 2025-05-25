import React from 'react';
export type LocaleSwitcherProps = {
    children?: React.ReactNode;
    onToggleLocale?: any;
    color?: string;
    type?: 'textPrimary' | 'onPrimary';
};
export interface LocaleSwitcherRef {
    onToggleLocale: () => void;
}
export declare const Wrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, LocaleSwitcherProps>>;
export declare const LocaleSwitcher: React.ForwardRefExoticComponent<LocaleSwitcherProps & React.RefAttributes<unknown>>;
//# sourceMappingURL=locale-switcher.d.ts.map