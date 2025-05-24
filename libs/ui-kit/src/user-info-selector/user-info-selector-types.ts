import { AutoCompleteProps } from 'antd';
import React from 'react';

export type Props = Omit<AutoCompleteProps, 'onSelect'> & {
  onSelect?: (value: string, option: any) => void;
  onClear?: () => void;
};

export type Options = {
  label: string | React.ReactNode;
  value: string;
  disabled?: boolean;
}[];
