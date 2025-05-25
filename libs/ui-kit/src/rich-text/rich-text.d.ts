import React from 'react';
interface IRichTextProps {
    items: RichTextItemType[];
    fontSize?: string;
    fontWeight?: string | number;
    color?: string;
}
type RichTextItemType = {
    text: string;
    style?: Record<string, unknown>;
    isPrimary?: boolean;
    tooltipTitle?: string;
    onClick?: () => void;
};
declare const RichText: React.FC<IRichTextProps>;
export default RichText;
//# sourceMappingURL=rich-text.d.ts.map