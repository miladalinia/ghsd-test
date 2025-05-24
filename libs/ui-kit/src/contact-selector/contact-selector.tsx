import React, { ComponentRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { AutoComplete, AutoCompleteProps, Input } from 'antd';

import { useAsync } from '@ghased-portal/hooks';
import { useTr } from '@ghased-portal/translation';

import { Loading } from '../loading/loading';
// import { Input } from '../input/input';

import Api from './contact-selector-api';
import { filterContacts } from './contact-selector-utils';

import * as S from './contact-selector.style';
import { Nullable } from '@ghased-portal/types';

export type ContactSelectorProps = Omit<AutoCompleteProps, 'onSelect'> & {
  onSelect?: (value: string, option: any) => void;
  onError?: (error) => void;
  isIban?: boolean;
  isStaticPrefix?: boolean;
};

function removeIbanLetter(value?: string) {
  let result: Nullable<string> = '';
  try {
    result = value?.replace('ir', '')?.replace('IR', '')?.replace('Ir', '')?.replace('iR', '');
  } catch (e) {
    result = '';
  }
  return result ?? '';
}

export const ContactSelector = (props: ContactSelectorProps) => {
  const {
    placeholder,
    size = 'large',
    isIban = false,
    isStaticPrefix = false,
    onSelect: onSelectItem,
    onChange: onChange,
    onError,
    onClear: handleOnClear,
    allowClear = true,
    value: baseValue,
    ...rest
  } = props;

  const API_SEARCH_LENGTH_LIMIT = 3;
  const API_STOP_TYPING_SEARCH_DELAY = 500; // 500 ms

  const [t] = useTr();
  const inputRef = useRef<ComponentRef<typeof Input>>(null);
  const [contacts, setContacts] = useState<any>(null);
  const [searchList, setSearchList] = useState<any>([]);
  const [options, setOptions] = useState<any>(null);
  const [value, setValue] = useState(baseValue);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const { asyncState, execute } = useAsync();
  const { asyncState: asyncStateFav, execute: executeFav } = useAsync();

  useEffect(() => {
    searchContacts();
  }, []);

  useEffect(() => {
    setValue(baseValue);
  }, [baseValue]);

  useEffect(() => {
    if (!searchTerm && contacts) {
      setDefaultOptions();
    } /*else {
      setOptions(makeBaseOptions([]));
    }*/
  }, [contacts]);

  useEffect(() => {
    if (searchTerm && searchList) {
      setOptions(makeSearchOptions(searchList));
    } /*else {
      setOptions(makeBaseOptions([]));
    }*/
  }, [searchList]);

  useEffect(() => {
    if (onError && (asyncStateFav.error || asyncState.error)) {
      onError(asyncStateFav.error ?? asyncState.error);
    }
  }, [asyncStateFav.error, asyncState.error]);

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

  function setDefaultOptions() {
    setOptions(makeBaseOptions(contacts));
  }

  function getBankLogo() {
    let path: string | null = null;
    const assetPrefix = '/media/bank-logo';
    if (isStaticPrefix) {
      path = `${assetPrefix}/017.png`;
    } else if (value) {
      if (removeIbanLetter(value)?.length >= 5) {
        const bankId = removeIbanLetter(value).substring(2, 5);
        path = `${assetPrefix}/${bankId}.png`;
      }
    }
    return path ? <Image src={path} alt='' className={'contact__bank-logo'} width={24} height={24} /> : null;
  }

  function getRelatedFavApi(item) {
    return item.favorite ? Api.unpinContact(item.contactUuid) : Api.pinContact(item.contactUuid);
  }

  async function handleFavClick(e, item) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const res = await executeFav(async () => {
        return getRelatedFavApi(item);
      });
      const foundItem = contacts.find(
        (contact) => /*contact.id === resItem.id && */ contact.contactUuid === res.contactUuid
      );
      const searchFoundItem = searchList.find(
        (contact) => /*contact.id === resItem.id && */ contact.contactUuid === res.contactUuid
      );
      if (foundItem) {
        foundItem.favorite = res.favorite;
        setContacts([...contacts]);
      }
      if (searchFoundItem) {
        searchFoundItem.favorite = res.favorite;
        setSearchList([...searchList]);
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
    const { destAccountNumber, contactUuid, destAccountName, favorite } = item;

    return {
      value: `${destAccountNumber}`,
      id: contactUuid,
      label: (
        <S.ItemContainer>
          <div className={'item__top-row'}>
            <span className={'item__title'}>{destAccountName}</span>

            <S.StarIcon fav={!!favorite} onClick={(e) => handleFavClick(e, item)}>
              <i className={favorite ? 'ri-star-fill' : 'ri-star-line'} />
            </S.StarIcon>
          </div>
          <div className={'item__bottom-row'}>{`${destAccountNumber}`}</div>
        </S.ItemContainer>
      ),
    };
  };

  function makeBaseOptions(list) {
    const favoriteList: any[] = [];
    const recentList: any[] = [];

    for (const item of list) {
      if (item.favorite === true) {
        favoriteList.push(renderItem(item));
      } else {
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
    const searchOptionList: any[] = [];
    setSearchList(list);
    for (const item of list) {
      searchOptionList.push(renderItem(item, true));
    }

    const _options: any[] = [];

    if (searchOptionList.length > 0) {
      _options.push({
        label: renderTitle('uikit.most_viewed'),
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

  function makeLoadingOption() {
    return [
      {
        label: <Loading height={'6rem'} />,
      },
    ];
  }

  async function searchContacts() {
    const params = { criteria: searchTerm };

    const res = await execute(async () => {
      return Api.searchContacts(params);
    });

    /*if (res && res.content) {
    }*/
    setContacts(res?.content);
  }

  async function searchAccountsFromApi(value) {
    const beforeOptions = options;
    setOptions(makeLoadingOption());

    const params = { criteria: value };
    const res = await execute(async () => {
      return Api.searchContacts(params);
    });

    setOptions(beforeOptions);

    if (res && res.content) {
      const newOptions = makeSearchOptions(res.content);
      setOptions(newOptions);
    }
  }

  const onSearch = async (value) => {
    if (value.length < API_SEARCH_LENGTH_LIMIT) {
      // Search locally in options.
      const filteredOptions = filterContacts(contacts, value);
      setOptions(makeBaseOptions(filteredOptions));
      setSearchTerm(null);
    } else {
      // Search through API and make other list of options.
      setSearchTerm(value);
    }
  };

  function findItemById(uuid) {
    const foundItem = contacts.find((contact) => contact.contactUuid === uuid);

    return foundItem;
  }

  function invokeOnSelect(value, option) {
    const item = option ? findItemById(option.id) : null;
    setSelectedItem(item);

    if (onSelectItem) {
      onSelectItem(value, item);
    }
  }

  const onSelect = (value, option) => {
    invokeOnSelect(value, option);
  };

  const onClear = () => {
    invokeOnSelect(null, null);
    setValue('');

    if (handleOnClear) {
      handleOnClear();
    }
  };

  const handleChange = (data, option) => {
    const cleanedValue = removeIbanLetter(data);
    setValue(cleanedValue);
    if (onChange) {
      onChange(cleanedValue, option);
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current?.input;
    if (inputElement) {
      const handlePaste = (event) => {
        const pastedValue = event.clipboardData.getData('Text');

        let cleanedValue = removeIbanLetter(pastedValue);
        if (isIban) {
          if (cleanedValue?.length > 24) {
            cleanedValue = cleanedValue.substring(0, 24);
          }
        } else {
          if (cleanedValue?.length > 13) {
            cleanedValue = cleanedValue.substring(0, 13);
          }
        }

        setValue(cleanedValue);

        if (onChange) {
          onChange(cleanedValue, { label: '' });
        }

        event.preventDefault();
      };

      inputElement.addEventListener('paste', handlePaste);

      return () => {
        inputElement.removeEventListener('paste', handlePaste);
      };
    }
  }, [isIban, onChange]);

  const onBlur = () => {
    if (value === '' || value === null) {
      invokeOnSelect(null, null);
    } /*else if (selectedItem) {
      setValue(selectedItem?.value);
    }*/ /*else if (selectedItem === null) {
      setValue('');
    }*/

    setDefaultOptions();
    setSearchTerm(null);
  };

  function shouldDisplayIbanIcon() {
    if (isIban || (value && value.toLowerCase().includes('ir'))) return true;

    return false;
  }

  function getSuffix() {
    return (
      <>
        {shouldDisplayIbanIcon() && <span>IR</span>}
        {/*<i className='ri-close-line' onClick={handleClearClicked} />*/}
        <i className='ri-user-line' />
      </>
    );
  }

  return (
    <S.Wrapper>
      <AutoComplete
        value={removeIbanLetter(value)}
        size={size}
        // popupClassName='certain-category-search-dropdown'
        // dropdownMatchSelectWidth={500}
        style={{ width: '100%' }}
        options={options}
        // dropdownAlign={}
        onSearch={onSearch}
        onSelect={onSelect}
        allowClear={allowClear}
        onChange={handleChange}
        onClear={onClear}
        onBlur={onBlur}
        {...rest}
      >
        <Input
          placeholder={placeholder?.toString()}
          size={size}
          suffix={asyncState.loading ? <Loading size='small' /> : getSuffix()}
          prefix={getBankLogo()}
          ref={inputRef}
        />
      </AutoComplete>

      {selectedItem && <S.InfoText>{selectedItem.destAccountName}</S.InfoText>}
    </S.Wrapper>
  );
};
