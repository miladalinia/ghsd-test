import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';
import { dayjs } from '@ghased-portal/utils';
import { RangePickerProps } from 'antd/lib/date-picker';

export type DatePickerProps = AntDatePickerProps & {
  defaultValueStr?: string;
  disabledPast?: boolean;
  disableFuture?: boolean;
};

const handleKeyDown = (
  event: React.KeyboardEvent,
  setOpen: (open: boolean) => void,
  setEnterKey: (enterKey: boolean) => void,
  setIsClicked: (isClicked: boolean) => void,
  hasValue: boolean
) => {
  if (event.key === 'Enter') {
    setIsClicked(false);
    setEnterKey(true);
    event.preventDefault();
    event.stopPropagation();
    if (hasValue) {
      setOpen(false);
    } else {
      setOpen(true);
    }

    const form = (event.target as HTMLElement).closest('form');
    if (form) {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.click();
      }
    }
  }
};

const StyledDatePicker = styled<any>(AntDatePicker)``;

const dateFormat = 'YYYY/MM/DD';

export const DatePicker = (props: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [enterKey, setEnterKey] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const {
    defaultValue,
    defaultValueStr,
    format = dateFormat,
    disabledPast = false,
    disableFuture = false,
    disabledDate,
    value,
    ...rest
  } = props;
  const defVal = defaultValue ?? (defaultValueStr ? dayjs(defaultValueStr) : null);

  const handleDisableDate = (current) => {
    if (disabledPast) {
      return current && current < dayjs().subtract(1, 'day').endOf('day');
    }
    if (disableFuture) {
      return current && current > dayjs().endOf('day');
    }
    if (disabledDate) {
      return disabledDate(current);
    }
    return false;
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!enterKey || isClicked) {
      setOpen(newOpen);
    }
  };

  return (
    <StyledDatePicker
      format={format}
      defaultValue={defVal as any}
      disabledDate={handleDisableDate as RangePickerProps['disabledDate']}
      open={open}
      onOpenChange={handleOpenChange}
      onClick={() => setIsClicked(true)}
      onKeyDown={(e) => handleKeyDown(e, setOpen, setEnterKey, setIsClicked, !!value)}
      value={value}
      {...rest}
    />
  );
};

DatePicker.RangePicker = AntDatePicker.RangePicker;
DatePicker.TimePicker = AntDatePicker.TimePicker;
DatePicker.YearPicker = AntDatePicker.YearPicker;
DatePicker.WeekPicker = AntDatePicker.WeekPicker;
DatePicker.MonthPicker = AntDatePicker.MonthPicker;
DatePicker.QuarterPicker = AntDatePicker.QuarterPicker;
