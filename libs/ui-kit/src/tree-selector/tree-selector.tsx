import React, { useMemo, useState } from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd/es/tree-select';

import { DownOutlined } from '@ant-design/icons';

import * as S from './tree-selector.style';

interface CustomTreeSelectProps extends TreeSelectProps<string[]> {
  treeData: any;
  checkable?: boolean;
  onCheckChange?: (checkedKeys: string[]) => void;
  showLine?: boolean;
  value?: any;
}

const handleKeyDown = (event: React.KeyboardEvent, setOpen: (open: boolean) => void) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);
    const form = (event.target as HTMLElement).closest('form');
    if (form) {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.click();
      }
    }
  }
};

export const CustomTreeSelector: React.FC<CustomTreeSelectProps> = ({
  treeData,
  checkable = false,
  onCheckChange,
  showLine = false,
  ...restProps
}) => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const switcherIconFn = useMemo(
    () => (nodeProps) =>
      (
        <span className={'ant-tree-switcher-wrapper'}>
          {nodeProps.expanded ? <i className={'ri-arrow-up-s-line'} /> : <i className={'ri-arrow-down-s-line'} />}
        </span>
      ),
    []
  );

  const handleCheck = (checked: string[]) => {
    setCheckedKeys(checked);
    if (onCheckChange) {
      onCheckChange(checked);
    }
  };

  return (
    <S.CustomTreeSelectWrapper>
      <S.GlobalStyle />
      <TreeSelect
        switcherIcon={switcherIconFn}
        suffixIcon={<i className={'ri-arrow-down-s-line'} />}
        treeData={treeData ?? []}
        treeCheckable={checkable}
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        style={{ width: '100%' }}
        onChange={handleCheck}
        treeLine={showLine}
        open={open}
        onDropdownVisibleChange={setOpen}
        onKeyDown={(e) => handleKeyDown(e, setOpen)}
        {...restProps}
      />
    </S.CustomTreeSelectWrapper>
  );
};
