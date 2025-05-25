import { CSSProperties } from 'react';
import { SpinProps as AntSpinProps } from 'antd';
import { BoxProps } from '../box/box';
export type LoadingProps = AntSpinProps & {
    containerProps?: BoxProps;
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
};
export declare const Loading: (props: LoadingProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loading.d.ts.map