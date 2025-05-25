import React from 'react';
import { TreeProps as AntTreeProps } from 'antd';
export type TreeProps = AntTreeProps & {
    secondaryNode?: any;
    expandLevel?: number;
    unselectable?: boolean;
    isRow?: boolean;
    isCompact?: boolean;
};
export declare const Tree: {
    (props: TreeProps): import("react/jsx-runtime").JSX.Element;
    TreeNode: React.FC<Readonly<import("rc-tree").TreeNodeProps<import("antd").TreeDataNode>>>;
};
//# sourceMappingURL=tree.d.ts.map