import React from 'react';
import { Color, FontWeight } from '@ghased-portal/types';
type VariantType = 'head' | 'subhead' | 'title' | 'desc' | 'body' | 'subtitle';
export interface ITextProps {
    children?: React.ReactNode;
    variant?: VariantType;
    fontWeight?: FontWeight;
    fontSize?: string;
    color?: Color;
    margin?: string | 0;
    lineHeight?: number;
    className?: string;
    as?: React.ElementType;
}
export interface I$TextProps extends ITextProps {
    $fontWeight?: FontWeight;
    $fontSize?: string;
    $margin?: string | 0;
    $color?: Color;
    $lineHeight?: number;
}
export declare const Text: React.FC<ITextProps>;
export {};
//# sourceMappingURL=text.d.ts.map