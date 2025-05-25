import React from 'react';
import type { TreeSelectProps } from 'antd/es/tree-select';
interface CustomTreeSelectProps extends TreeSelectProps<string[]> {
    treeData: any;
    checkable?: boolean;
    onCheckChange?: (checkedKeys: string[]) => void;
    showLine?: boolean;
    value?: any;
}
export declare const CustomTreeSelector: React.FC<CustomTreeSelectProps>;
export {};
//# sourceMappingURL=tree-selector.d.ts.map