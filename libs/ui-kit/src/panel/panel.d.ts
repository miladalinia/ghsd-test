import { CSSProperties } from 'react';
import { BasicComponentProps } from '@ghased-portal/types';
export type PanelProps = BasicComponentProps & {
    backgroundColor?: CSSProperties['backgroundColor'];
    margin?: CSSProperties['margin'];
    marginTop?: CSSProperties['marginTop'];
    marginRight?: CSSProperties['marginRight'];
    marginBottom?: CSSProperties['marginBottom'];
    marginLeft?: CSSProperties['marginLeft'];
    padding?: CSSProperties['padding'];
    paddingTop?: CSSProperties['paddingTop'];
    paddingRight?: CSSProperties['paddingRight'];
    paddingBottom?: CSSProperties['paddingBottom'];
    paddingLeft?: CSSProperties['paddingLeft'];
    radius?: string | 0;
    hasShadow?: boolean;
};
export declare const Panel: (props: PanelProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=panel.d.ts.map