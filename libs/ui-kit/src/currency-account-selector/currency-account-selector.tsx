import { useCallback, useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteProps, Input } from 'antd';
import { useAsync } from '@ghased-portal/hooks';
import { useTr } from '@ghased-portal/translation';
import { handleKeyPress } from '@ghased-portal/utils';
import { Loading } from '../loading/loading';
import Api from './currency-account-selector-api';
import * as S from './currency-account-selector.style';
import { mapToAutoCompleteOptions } from './currency-account-selector-utils';

export type CurrencyAccountSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
  onSelect?: (value: string, option: any) => void;
  onClear?: () => void;
  onError?: (error) => void;
  optionRender?: () => void;
};

export const CurrencyAccountSelector = (props: CurrencyAccountSelectorProps) => {
  const {
    placeholder,
    size = 'large',
    onSelect: onSelectItem,
    onClear: handleOnClear,
    allowClear = true,
    onError,
    value: baseValue,
    onChange: baseOnChange,
    ...rest
  } = props;

  const [t] = useTr();
  const [options, setOptions] = useState<any>(null);
  const [value, setValue] = useState(baseValue);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchList, setSearchList] = useState<any>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Control dropdown visibility
  const { asyncState, execute } = useAsync();

  useEffect(() => {
    getCurrencyAccounts();
  }, []);

  useEffect(() => {
    setValue(baseValue);
  }, [baseValue]);

  const onSearch = useCallback(
    (searchTerm) => {
      if (searchTerm) {
        const filtered = options?.filter((option) => option?.label?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
        if (filtered?.length === 1) {
          const singleOption = filtered[0];
          setValue(singleOption.value);
          handleChange(singleOption.value, singleOption);
          invokeOnSelect(singleOption.value, singleOption);
          setDropdownOpen(false);
        } else if (filtered?.length > 1) {
          setDropdownOpen(true);
        }
        setSearchList(filtered);
      }
    },
    [options]
  );

  function mergeAccountsData(data: any) {
    if (data.length === 0) return [];
    return [...data['current-deposit-accounts'], ...data['loan-deposit-accounts'], ...data['term-deposit-accounts']];
  }

  async function getCurrencyAccounts() {
    try {
      const res = await execute(() => Api.getCurrencyAccounts());
      const mergedAccounts = mergeAccountsData(res);
      const transformedOptions = mapToAutoCompleteOptions(mergedAccounts);
      setOptions(transformedOptions);
      setSearchList(transformedOptions);
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  }

  useEffect(() => {
    if (!selectedItem && !value) {
      setSearchList(options);
    }
  }, [selectedItem, value]);

  function invokeOnSelect(value, option) {
    setSelectedItem(option);

    if (onSelectItem) {
      const item = option
        ? {
            id: option?.id,
            label: option?.label,
            value: option?.value,
          }
        : null;

      onSelectItem(value, item);
    }
  }

  const onSelect = (value, option) => {
    invokeOnSelect(value, option);
    setDropdownOpen(false); // Close dropdown after selecting an item
  };

  const onClear = () => {
    setValue('');
    invokeOnSelect(null, null);

    if (handleOnClear) {
      handleOnClear();
    }
    setDropdownOpen(false); // Close dropdown after clearing
  };

  const handleChange = (data, option) => {
    setValue(data);
    if (baseOnChange) {
      baseOnChange(data, option);
    }
  };

  // const onBlur = () => {
  //   if (value === '' || value === null) {
  //     invokeOnSelect(null, null);
  //   } else if (selectedItem) {
  //     setValue(selectedItem?.value);
  //   } else if (selectedItem === null) {
  //     setValue('');

  //     if (baseOnChange) {
  //       baseOnChange(null, []);
  //     }
  //   }
  //   setDropdownOpen(false); // Close dropdown on blur
  // };
  const onBlur = () => {
    const matchedOption = options?.find((opt) => opt.value === value);
    if (!matchedOption) {
      setValue('');
      invokeOnSelect(null, null);
      handleChange(null, null);
    } else if (selectedItem) {
      setValue(selectedItem?.value);
    } else if (selectedItem === null) {
      setValue('');

      if (baseOnChange) {
        baseOnChange(null, []);
      }
    }
    setDropdownOpen(false); // Close dropdown on blur
  };

  const renderEmptyView = () => (
    <S.Empty>
      <span className='title'>{t('message.empty')}</span>
      <i className='ri-inbox-fill' />
    </S.Empty>
  );

  const onFocus = () => {
    setDropdownOpen(true); // Open dropdown on focus
  };
  const optionRender = (option) => {
    return (
      <S.OptionWrapper>
        <p className='account__number'>{option?.data?.id}</p>
        <p className='account__info'>{option?.data?.info}</p>
      </S.OptionWrapper>
    );
  };

  return (
    <S.Wrapper>
      <AutoComplete
        value={value}
        open={dropdownOpen} // Control the dropdown visibility
        style={{ width: '100%' }}
        options={searchList}
        onSearch={onSearch}
        onSelect={onSelect}
        allowClear={allowClear}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={asyncState.loading}
        onClear={onClear}
        notFoundContent={renderEmptyView()}
        optionRender={optionRender}
        onKeyDown={handleKeyPress}
        {...rest}
      >
        <Input
          placeholder={placeholder?.toString()}
          size={size}
          suffix={asyncState.loading ? <Loading size='small' /> : <i className='ri-arrow-down-s-line ri-1x' />}
        />
      </AutoComplete>
    </S.Wrapper>
  );
};
