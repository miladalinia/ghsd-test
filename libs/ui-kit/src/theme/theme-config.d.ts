import React, { JSX } from 'react';
import { IConfig } from '@ghased-portal/types';
export interface ThemeConfigProps {
    onLocaleChange: (config: IConfig) => void;
    children: React.ReactNode;
}
declare const ThemeConfig: (props: ThemeConfigProps) => JSX.Element;
export default ThemeConfig;
//# sourceMappingURL=theme-config.d.ts.map