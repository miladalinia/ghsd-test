import React from 'react';
import { InputProps as AntInputProps } from 'antd';

import { InputMoney } from './input-money';
import * as S from './input.style';

export type InputProps = AntInputProps & {
  allow?: 'all' | 'number' | 'letter' | RegExp;
  children?: React.ReactNode;
};

const patternMap = {
  number: '[0-9۰-۹]',
  letter: '[a-zA-Zآ-ی ]',
};

export const Input = (props: InputProps) => {
  const { children, allow = 'all', ...rest } = props;

  function getPattern() {
    let pattern = '';
    if (allow === 'all') {
      pattern = '';
    } else if (allow === 'number') {
      pattern = patternMap.number;
    } else if (allow === 'letter') {
      pattern = patternMap.letter;
    } else if (allow instanceof RegExp) {
      pattern = allow.source;
    }
    return pattern;
  }

  // Handle input patterns
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = getPattern();
    if (pattern && !new RegExp(pattern).test(event.key)) {
      event.preventDefault();
    }
  };

  // Handle key down for Enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = event.currentTarget.closest('form');
      if (form) {
        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (submitButton) {
          submitButton.click();
        }
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pattern = getPattern();
    if (pattern) {
      event.preventDefault();

      const clipboardData = event.clipboardData || (window as any).clipboardData;
      const pastedText = clipboardData.getData('text/plain');

      // Filter out characters that don't match the pattern
      const filteredText = pastedText
        .split('')
        .filter((char) => new RegExp(pattern).test(char))
        .slice(0, props?.maxLength) // Limit the length
        .join('');

      // Set the filtered text as the input value
      event.currentTarget.value = filteredText;

      // Trigger a change event to update the state or any other logic
      if (rest.onChange) {
        rest.onChange({
          ...event,
          target: {
            ...event.target,
            value: filteredText,
          } as any,
        });
      }
    }
  };

  return (
    <S.InputWrapper
      onKeyPress={allow !== 'all' ? handleKeyPress : undefined}
      onKeyDown={handleKeyDown}
      onPaste={allow !== 'all' ? handlePaste : undefined}
      {...rest}
    >
      {children}
    </S.InputWrapper>
  );
};

Input.Password = S.PasswordWrapper;
Input.TextArea = S.TextAreaWrapper;
Input.Search = S.SearchWrapper;
Input.Group = S.GroupWrapper;
Input.Money = InputMoney;
