import { cardNumberSeprator, handleKeyPress, removeSeprator } from '@ghased-portal/utils';
import { AutoCompleteProps, Input } from 'antd';
import Api from './card-number-api';
import { ComponentRef, useEffect, useRef, useState } from 'react';
import { useAsync } from '@ghased-portal/hooks';
import { Error } from '@ghased-portal/types';
import { Loading } from '../loading/loading';
import * as S from './card-number-selector.style';
import { mapToAutoCompleteOptions } from './card-number-utils';
import { useTr } from '@ghased-portal/translation';

export type CardNumberError = Error & { notValidPrefix?: boolean };

export type CardNumberSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
  onSelect?: (value: string, option: any) => void;
  onClear?: () => void;
  onError?: (error: CardNumberError | null) => void;
};

export const CardNumberSelector = (props: CardNumberSelectorProps) => {
  const {
    placeholder,
    size = 'large',
    onSelect: onSelectItem,
    onChange: onChange,
    onClear: handleOnClear,
    onError,
    allowClear = true,
    value: baseValue,
    ...rest
  } = props;

  const [t] = useTr();
  const MELI_CARD_NUMBER_PREFIX = '6037-99';
  const CARD_NUMBER_MAX_LENGTH = 19;
  const API_SEARCH_LENGTH_LIMIT = 2;
  const API_STOP_TYPING_SEARCH_DELAY = 500;
  const [options, setOptions] = useState<any>([]);
  const [value, setValue] = useState(baseValue);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const { asyncState, execute } = useAsync();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchList, setSearchList] = useState<any>([]);
  const inputRef = useRef<ComponentRef<typeof Input>>(null);
  const [invalidPrefix, setInvalidPrefix] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    searchCardNumbersFromApi(MELI_CARD_NUMBER_PREFIX, true);
  }, []);

  useEffect(() => {
    setValue(baseValue);
  }, [baseValue]);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim().length === 0) return;

    const timerId = setTimeout(async () => {
      await searchCardNumbersFromApi(searchTerm);
    }, API_STOP_TYPING_SEARCH_DELAY);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm && searchList?.length !== 1) {
      setOptions(makeSearchOptions(searchList));
    }
  }, [searchList]);

  useEffect(() => {
    if (onError && asyncState?.error) {
      setOptions([]);
      onError(asyncState?.error);
    }
  }, [asyncState.error]);

  const searchCardNumbersFromApi = async (value, initialLoad = false) => {
    try {
      const result = await execute(async () => {
        const removedSepratorValue = removeSeprator(value);
        return Api.getCardsByPan(removedSepratorValue);
      });

      if (!initialLoad) {
        setDropdownOpen(true);
      }
      if (result) {
        const transformedOptions = mapToAutoCompleteOptions(result);
        const newOptions = makeSearchOptions(transformedOptions);
        if (result?.length === 1) {
          const firstItem = newOptions[0]?.options[0];
          setValue(firstItem?.value);
          onSelect(firstItem?.value, firstItem);
          return;
        }
        setOptions(newOptions);
      }
    } catch (error) {}
  };

  const onSearch = (searchedValue) => {
    if (
      invalidPrefix ||
      searchedValue?.length < API_SEARCH_LENGTH_LIMIT ||
      searchedValue?.length > CARD_NUMBER_MAX_LENGTH
    )
      return;

    if (searchedValue) {
      setSearchTerm(searchedValue);
    } else {
      setOptions([]);
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current?.input;
    if (inputElement) {
      const handlePaste = (event) => {
        event.preventDefault();
        const pastedText = removeSeprator(event.clipboardData?.getData('Text') || '');
        const numericValue = pastedText?.replace(/[^0-9۰-۹]/g, '').slice(0, 16);
        const sepratedValue = cardNumberSeprator(numericValue);

        if (!isMeliCardNumber(sepratedValue)) {
          setInvalidPrefix(true);
          setErrorInvalidPrefix(sepratedValue);
        } else {
          onSearch(numericValue);
        }
        setValue(sepratedValue);
      };

      inputElement.addEventListener('paste', handlePaste);

      return () => {
        inputElement.removeEventListener('paste', handlePaste);
      };
    }
  }, [onSearch]);

  const isMeliCardNumber = (value) => {
    return value?.startsWith(MELI_CARD_NUMBER_PREFIX);
  };

  const invokeOnSelect = (value, option) => {
    setSelectedItem(option);
    setDropdownOpen(false);

    if (onSelectItem) {
      const item = option
        ? {
            pan: option?.id,
            value: option?.value,
            name: option?.name,
          }
        : null;

      onSelectItem(value, item);
    }
  };

  const onSelect = (value, option) => {
    invokeOnSelect(value, option);
  };

  const onClear = () => {
    setValue('');
    invokeOnSelect(null, null);
    resetError();
    setDropdownOpen(false);
    setInvalidPrefix(false);

    if (handleOnClear) {
      handleOnClear();
    }
  };

  const handleChange = (changedValue: string, option) => {
    resetError();
    const isSelectedValue = !!option?.id;
    if (!isSelectedValue && changedValue?.length > CARD_NUMBER_MAX_LENGTH) {
      return;
    }

    if (!changedValue) setInvalidPrefix(false);

    if (invalidPrefix) setErrorInvalidPrefix(changedValue);

    if (!isSelectedValue && !isMeliCardNumber(changedValue) && !invalidPrefix) {
      const partialPrefixRegex = new RegExp(`^(${MELI_CARD_NUMBER_PREFIX.substring(0, 4)}-?9?9?)?`);
      changedValue = changedValue?.replace(partialPrefixRegex, '');
      if (changedValue) {
        changedValue = `${MELI_CARD_NUMBER_PREFIX}${changedValue}`.substring(0, CARD_NUMBER_MAX_LENGTH);
      }
    }

    const sepratedValue = isSelectedValue ? changedValue : cardNumberSeprator(changedValue);
    if (!invalidPrefix) {
      setValue(sepratedValue);
      if (!isSelectedValue) {
        setSearchTerm(changedValue);
      }
    }

    if (onChange) {
      onChange(sepratedValue, option);
    }
  };

  const setErrorInvalidPrefix = (value) => {
    if (value && !isMeliCardNumber(value) && onError) {
      const error: CardNumberError = {
        txt: t('error.card_number_prefix_error'),
        type: 'error',
        shouldTranslate: true,
        notValidPrefix: true,
      };
      setInvalidPrefix(true);
      onError(error);
      setOptions([]);
    }
  };

  const onBlur = () => {
    if (value === '' || value === null) {
      invokeOnSelect(null, null);
    } else if (selectedItem) {
      setValue(selectedItem?.value);
    } else if (selectedItem === null) {
      setValue('');
    }
    resetError();
    setInvalidPrefix(false);

    setSearchTerm(null);
    setDropdownOpen(false);
  };

  const onFocus = () => {
    setDropdownOpen(true);
    if (!options?.length) {
      setOptions(makeSearchOptions(searchList));
    }
  };

  const resetError = () => {
    if (onError) {
      onError(null);
    }
  };

  const renderTitle = (title: string) => <S.Title>{t(title)}</S.Title>;

  const renderEmptyView = () => (
    <S.Empty>
      <span className='title'>{t('message.empty')}</span>
      <i className='ri-inbox-fill' />
    </S.Empty>
  );

  const renderItem = (item) => {
    const { label, value } = item;

    return {
      value: `${cardNumberSeprator(value)} , ${label}`,
      name: label,
      id: value,
      label: (
        <S.ItemContainer>
          <div className={'item__top-row'}>
            <span className={'item__value'}>{cardNumberSeprator(value)}</span>
            <span className={'item__label'}>{label}</span>
          </div>
        </S.ItemContainer>
      ),
    };
  };

  function makeSearchOptions(list) {
    const searchOptionList: any[] = [];
    setSearchList(list);

    for (const item of list) {
      searchOptionList.push(renderItem(item));
    }

    const _options: any[] = [];

    if (searchOptionList.length > 0) {
      _options.push({
        label: renderTitle('uikit.recent_viewed'),
        options: searchOptionList,
      });
    }

    if (_options.length === 0) {
      _options.push({
        label: renderEmptyView(),
      });
    }

    return _options;
  }

  return (
    <S.AutoCompleteWrapper
      placeholder={MELI_CARD_NUMBER_PREFIX}
      value={value}
      style={{ width: '100%' }}
      options={options}
      open={dropdownOpen}
      onSearch={onSearch}
      onSelect={onSelect}
      allowClear={allowClear}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onClear={onClear}
      onKeyDown={handleKeyPress}
      suffixIcon={asyncState.loading ? <Loading size='small' /> : <i className='ri-arrow-down-s-line ri-1x' />}
      {...rest}
    >
      <Input size={size} ref={inputRef} />
    </S.AutoCompleteWrapper>
  );
};
