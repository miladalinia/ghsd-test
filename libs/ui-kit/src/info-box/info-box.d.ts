import React, { CSSProperties } from 'react';
import { InfoItemType } from '@ghased-portal/types';
type InfoBoxProps = {
    data: InfoItemType[] | null;
    footer?: React.ReactNode;
    isDense?: boolean;
    margin?: CSSProperties['margin'];
    minColumnCount?: number;
    titleWordWrap?: boolean;
};
export declare const InfoBox: (props: InfoBoxProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=info-box.d.ts.map