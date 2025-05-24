import React, { useState } from 'react';
import styled from 'styled-components';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

export type SelectProps = AntSelectProps & {
  // children?: React.ReactNode;
};

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

const StyledSelect = styled(AntSelect)`
  &.ant-select .ant-select-arrow i {
    color: ${(p) => p.theme.border};
  }
`;

export const Select = (props: SelectProps) => {
  const { loading = false, disabled = false, suffixIcon = null, ...rest } = props;
  const [open, setOpen] = useState(false);

  let _suffix: {
    suffixIcon?: React.ReactNode;
  } = {};

  if (suffixIcon) {
    _suffix.suffixIcon = suffixIcon;
  } else if (loading) {
    _suffix = {};
  } else {
    _suffix.suffixIcon = <i className={`ri-arrow-down-s-line ri-1x`} />;
  }

  return (
    <StyledSelect
      open={open}
      onDropdownVisibleChange={setOpen}
      onKeyDown={(e) => handleKeyDown(e, setOpen)}
      disabled={loading || disabled}
      loading={loading}
      {..._suffix}
      {...rest}
    />
  );
};

Select.Option = AntSelect.Option;
