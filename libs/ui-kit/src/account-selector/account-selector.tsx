import React, { ComponentRef, useCallback, useEffect, useRef, useState } from 'react';
import { AutoComplete, AutoCompleteProps, Input } from 'antd';

import { useAsync, useConfig, useLocalStorage } from '@ghased-portal/hooks';
import { useTr } from '@ghased-portal/translation';
import { LocalStorageKey } from '@ghased-portal/types';
import { addThousandSeparator, handleKeyPress } from '@ghased-portal/utils';

import { Loading } from '../loading/loading';
// import { Input } from '../input/input';

import { filterAccounts, mapAccount } from './account-selector-utils';
import Api from './account-selector-api';
import * as S from './account-selector.style';

export type AccountSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
  serviceName: 'INVOICE' | 'CHEQUE' | 'MONEY_TRANSFER' | 'BATCH_PAYMENT' | 'BILL' | 'CARD' | 'NONE';
  showBalance?: boolean;
  onSelect?: (value: string, option: any) => void;
  onBalance?: (data: any) => void;
  onClear?: () => void;
};

export const AccountSelector = (props: AccountSelectorProps) => {
  const {
    serviceName,
    placeholder,
    size = 'large',
    showBalance = false,
    onSelect: onSelectItem,
    onClear: handleOnClear,
    onBalance,
    allowClear = true,
    value: baseValue,
    onChange: baseOnChange,
    ...rest
  } = props;
  const { config } = useConfig();
  const CACHE_TTL = 20 * 60 * 1000; // 20 min
  const API_SEARCH_LENGTH_LIMIT = 4;
  const API_STOP_TYPING_SEARCH_DELAY = 500; // 500 ms
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [t] = useTr();
  const inputRef = useRef<ComponentRef<typeof Input>>(null);
  const [accounts, setAccounts] = useLocalStorage<any>(LocalStorageKey.ACCOUNTS);
  const [options, setOptions] = useState<any>(null);
  const [value, setValue] = useState(baseValue);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [balanceItem, setBalanceItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const { asyncState, execute } = useAsync();
  const { asyncState: asyncStateFav, execute: executeFav } = useAsync();

  useEffect(() => {
    if (accounts && accounts[serviceName] && accounts[serviceName].expiry > Date.now()) {
      // setOptions(makeBaseOptions(accounts[serviceName].data));
    } else {
      getRecentAccounts();
    }
  }, []);

  useEffect(() => {
    setValue(baseValue);
  }, [baseValue]);

  useEffect(() => {
    if (accounts && accounts[serviceName]) {
      setDefaultOptions();
    } /*else {
      setOptions(makeBaseOptions([]));
    }*/
  }, [accounts]);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim().length === 0) return;
    const timerId = setTimeout(async () => {
      // searching(searchTerm);
      await searchAccountsFromApi(searchTerm);
    }, API_STOP_TYPING_SEARCH_DELAY);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (onBalance) {
      onBalance(balanceItem);
    }
  }, [balanceItem]);

  const onSearch = useCallback(
    (value) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = setTimeout(async () => {
        if (value?.length < API_SEARCH_LENGTH_LIMIT) {
          const filteredOptions = filterAccounts(accounts[serviceName]?.data, value);
          setOptions(makeBaseOptions(filteredOptions));
          setSearchTerm(null);
        } else {
          const newOption = await searchAccountsFromApi(value);
          if (newOption?.[0]?.options?.length === 1) {
            const newOptionArr = newOption?.[0]?.options;
            const prepareValue = newOptionArr?.find((item) => item?.id?.includes(value));
            if (prepareValue) {
              invokeOnSelect(prepareValue?.value, prepareValue);
              handleChange(prepareValue?.value, prepareValue);
            }
          }
        }
      }, API_STOP_TYPING_SEARCH_DELAY);
    },
    [accounts, serviceName] // Dependencies for useCallback
  );

  useEffect(() => {
    const inputElement = inputRef.current?.input;
    if (inputElement) {
      const handlePaste = (event) => {
        event.preventDefault();
        const pastedText = event.clipboardData.getData('Text');
        const numericValue = pastedText.replace(/[^0-9۰-۹]/g, '');
        onSearch(numericValue);
        setValue(numericValue);
      };

      inputElement.addEventListener('paste', handlePaste);

      return () => {
        inputElement.removeEventListener('paste', handlePaste);
      };
    }
  }, [onSearch]);

  function setDefaultOptions() {
    setOptions(makeBaseOptions(accounts[serviceName].data));
  }

  const getRelatedFavApi = (item) =>
    item.fav
      ? Api.deleteFromFavorite({
          accountNumber: item.accountNumber,
          serviceName: serviceName,
        })
      : Api.addToFavorite({
          accountNumber: item.accountNumber,
          serviceName: serviceName,
        });

  async function handleFavClick(e, item) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const res = await executeFav(async () => {
        return getRelatedFavApi(item);
      });
      const resItem = res[0];
      const foundItem = accounts[serviceName].data.find(
        (account) => /*account.id === resItem.id && */ account.accountNumber === resItem.accountNumber
      );
      if (foundItem) {
        foundItem.fav = resItem.favorite;
        foundItem.recent = !resItem.favorite;
        setAccounts({ ...accounts });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const renderTitle = (title: string) => <S.Title>{t(title)}</S.Title>;

  const renderEmptyView = () => (
    <S.Empty>
      <span className='title'>{t('message.empty')}</span>
      <i className='ri-inbox-fill' />
    </S.Empty>
  );

  const renderItem = (item, isSearchItem = false) => {
    const { accountNumber, balance, organizationUnitName, fav } = item;

    return {
      value: `${accountNumber} , ${organizationUnitName}`,
      id: accountNumber,
      label: (
        <S.ItemContainer>
          <div className={'item__top-row'}>
            <span className={'item__title'}>{accountNumber}</span>
            <span className={'item__balance'}>{`${balance} ${t('common.rial')}`}</span>

            {!isSearchItem && (
              <S.StarIcon fav={!!fav} onClick={(e) => handleFavClick(e, item)}>
                <i className={fav ? 'ri-star-fill' : 'ri-star-line'} />
              </S.StarIcon>
            )}

            {/*<Loading width={'min-content'}/>*/}
          </div>
          <div className={'item__bottom-row'}>{`${t('uikit.organization_unit_name')}: ${organizationUnitName} `}</div>
        </S.ItemContainer>
      ),
    };
  };

  function makeBaseOptions(list) {
    const favoriteList: any[] = [];
    const recentList: any[] = [];

    for (const item of list) {
      if (item.fav === true) {
        favoriteList.push(renderItem(item));
      } else if (item.recent === true) {
        recentList.push(renderItem(item));
      }
    }

    const _options: any[] = [];

    if (favoriteList.length > 0) {
      _options.push({
        label: renderTitle('uikit.favorite'),
        options: favoriteList,
      });
    }

    if (recentList.length > 0) {
      _options.push({
        label: renderTitle('uikit.most_viewed'),
        options: recentList,
      });
    }

    if (_options.length === 0) {
      _options.push({
        label: renderEmptyView(),
      });
    }

    return _options;
  }

  function makeSearchOptions(list) {
    const searchList: any[] = [];
    for (const item of list) {
      searchList.push(renderItem(item, true));
    }

    const _options: any[] = [];

    if (searchList.length > 0) {
      _options.push({
        label: renderTitle('uikit.search_result'),
        options: searchList,
      });
    }

    if (_options.length === 0) {
      _options.push({
        label: renderEmptyView(),
      });
    }

    return _options;
  }

  function makeLoadingOption() {
    return [
      {
        label: <Loading height={'6rem'} />,
      },
    ];
  }

  function transformRecentAccountsData(data: any) {
    const newData: any[] = [];
    data?.listFavoriteAccounts?.forEach((account) => {
      const item = mapAccount(account);
      item.recent = false;
      newData.push(item);
    });

    data?.listRecentAccounts?.forEach((account) => {
      const item = mapAccount(account);
      item.recent = true;
      newData.push(item);
    });

    return newData;
  }

  function transformUserAccountsData(data: any) {
    const newData: any[] = [];
    data.forEach((account) => {
      const item = mapAccount(account);
      // item.recent = false;
      newData.push(item);
    });
    return newData;
  }

  function getExpiry() {
    const now = new Date();
    return now.getTime() + CACHE_TTL;
  }

  async function getRecentAccounts() {
    const res = await execute(async () => {
      return Api.getRecentAccounts({ serviceName: serviceName });
    });

    const transformed = transformRecentAccountsData(res);

    const newData = {
      [serviceName]: {
        data: transformed,
        expiry: getExpiry(),
      },
    };

    setAccounts((prevState) => ({
      ...prevState,
      ...newData,
    }));
  }

  async function getSelectedBalance(item) {
    if (!showBalance) return;

    const res = await execute(async () => {
      return Api.getAccountBalance({ accountNumber: item.id });
    });

    if (res) {
      setBalanceItem(res);
    }
  }

  async function searchAccountsFromApi(value) {
    setOptions(makeLoadingOption());

    const res = await execute(async () => {
      return Api.getUserAccounts({ accountNumber: value });
    });

    if (res && res.content) {
      const transformed = transformUserAccountsData(res.content);
      const newOptions = makeSearchOptions(transformed);
      setOptions(newOptions);
      return newOptions;
    } else {
      setOptions([]);
      return [];
    }
  }

  function invokeOnSelect(value, option) {
    setSelectedItem(option);

    if (option === null) {
      setBalanceItem(null);
    }

    //fetch balance
    getSelectedBalance(option);

    if (onSelectItem) {
      const item = option
        ? {
            id: option?.id,
            value: option?.value,
          }
        : null;

      onSelectItem(value, item);
    }
    setDropdownOpen(false);
  }

  const onSelect = (value, option) => {
    invokeOnSelect(value, option);
    setDropdownOpen(false);
  };

  const onClear = () => {
    setValue('');
    invokeOnSelect(null, null);

    if (handleOnClear) {
      handleOnClear();
    }
    setDropdownOpen(true);
  };

  // const handleChange = (data, option) => {
  //   setValue(data);
  // };

  const handleChange = (data, option) => {
    setValue(data);
    if (baseOnChange) {
      baseOnChange(data, option);
    }
  };
  const onFocus = () => {
    setDropdownOpen(true);
  };

  const onBlur = () => {
    if (!selectedItem) {
      setValue('');
      handleChange(null, null);
      invokeOnSelect(null, null);
    } else if (selectedItem) {
      handleChange(selectedItem?.value, selectedItem);
    } else if (selectedItem === null) {
      setValue('');

      if (baseOnChange) {
        baseOnChange(null, []);
      }
    }
    setDropdownOpen(false);
    setDefaultOptions();
    setSearchTerm(null);
  };

  return (
    <S.Wrapper>
      <AutoComplete
        value={value}
        onFocus={onFocus}
        open={dropdownOpen}
        style={{ width: '100%' }}
        options={options}
        onSearch={onSearch}
        onSelect={onSelect}
        allowClear={allowClear}
        onChange={handleChange}
        onBlur={onBlur}
        onClear={onClear}
        onKeyDown={handleKeyPress}
        {...rest}
      >
        <Input
          // value={value}
          placeholder={placeholder?.toString()}
          size={size}
          suffix={asyncState.loading ? <Loading size='small' /> : <i className='ri-arrow-down-s-line ri-1x' />}
          ref={inputRef}
        />
      </AutoComplete>

      {balanceItem && (
        <S.BalanceText isLessThanZero={balanceItem?.availableBalance < 0}>
          {`${t('uikit.available_balance')} : ${addThousandSeparator(balanceItem?.availableBalance, config.locale)}
          ${t('common.rial')}`}
        </S.BalanceText>
      )}
    </S.Wrapper>
  );
};
