import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AutoComplete, Input } from 'antd';
import * as S from './user-info-selector.style';
import Api from './user-info-selector.api';
import { Loading } from '../loading/loading';
import { useAsync } from '@ghased-portal/hooks';
import { useTr } from '@ghased-portal/translation';
import { Options, Props } from './user-info-selector-types';

export const UserInfoSelector = (props: Props) => {
  const [t] = useTr();
  const API_SEARCH_LENGTH_LIMIT = 4;
  const API_STOP_TYPING_SEARCH_DELAY = 500; /* 500 ms */

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { asyncState: userInfoState, execute: getUserInfo } = useAsync();

  const {
    placeholder,
    allowClear = true,
    onSelect: onSelectItem,
    value: baseValue,
    onChange: baseOnChange,
    onClear: handleOnClear,
    ...rest
  } = props;

  const [options, setOptions] = useState<Options>([]);
  const [initialOptions, setInitialOptions] = useState<Options>([]);
  const [value, setValue] = useState(baseValue);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    setValue(baseValue);
  }, [baseValue]);

  useEffect(() => {
    const fetchInitialOptions = async () => {
      try {
        const response = await Api.getUserInfo();
        const titleOption = {
          label: <S.Title>{t('uikit.preferred_names')}</S.Title>,
          disabled: true,
        };
        const baseResponseOption = response?.slice(0, 5)?.map((data) => ({
          label: renderUserInfoLabel(data),
          value: data?.nationalCode,
          text: renderTextInput(data),
        }));
        const finalOptions = [titleOption, ...baseResponseOption];
        setOptions(finalOptions);
        setInitialOptions(finalOptions);
      } catch (error) {}
    };

    fetchInitialOptions();
  }, []);

  const onSearch = useCallback(
    async (value: string) => {
      if (searchTimeoutRef?.current) {
        clearTimeout(searchTimeoutRef?.current);
      }
      if (value?.length < API_SEARCH_LENGTH_LIMIT) {
        setOptions(initialOptions);
        return;
      }
      if (value?.length >= API_SEARCH_LENGTH_LIMIT) {
        setOptions([
          {
            label: <Loading size='default' />,
            value: 'loading',
            disabled: true,
          },
        ]);
        searchTimeoutRef.current = setTimeout(async () => {
          getUserInfo(async () => {
            const response = await Api.getUserInfo({ userName: value });
            setOptions(
              response.map((data) => ({
                label: renderUserInfoLabel(data),
                value: data?.nationalCode,
                text: renderTextInput(data),
              }))
            );
          });
        }, API_STOP_TYPING_SEARCH_DELAY);
      }
    },
    [initialOptions]
  );

  const handleChange = (data, option) => {
    setValue(data);
    if (baseOnChange) {
      baseOnChange(data, option);
    }
  };
  const onBlur = () => {
    if (!selectedItem || selectedItem?.text?.length > value?.length) {
      setValue('');
      handleChange(null, null);
      onSelect(null, null);
    } else if (selectedItem) {
      handleChange(selectedItem?.text, selectedItem);
    }
    setOptions(initialOptions);
  };

  const onSelect = (value, option) => {
    setSelectedItem(option);
    handleChange(option?.text, option);
  };

  const onClear = () => {
    setValue('');
    onSelect(null, null);
  };

  const renderTextInput = (data) => `${data?.fullName} , ${data?.nationalCode}`;

  const renderUserInfoLabel = (data) => (
    <S.UserInfo>
      <div className='full-name'>{data?.fullName}</div>
      <div className='national-code'>
        {' '}
        {t('field.national_Identifier')}
        {':'} {data?.nationalCode}
      </div>
    </S.UserInfo>
  );

  const renderEmptyView = () => (
    <S.Empty>
      <span className='title'>{t('message.empty')}</span>
      <i className='ri-inbox-fill' />
    </S.Empty>
  );

  return (
    <S.Wrapper>
      <AutoComplete
        value={value}
        style={{ width: '100%' }}
        options={options}
        onSearch={onSearch}
        onChange={handleChange}
        onSelect={onSelect}
        onBlur={onBlur}
        onClear={onClear}
        allowClear={allowClear}
        placeholder={placeholder}
        notFoundContent={!userInfoState?.loading && options?.length === 0 ? renderEmptyView() : null}
        {...rest}
      >
        <Input
          suffix={userInfoState.loading ? <Loading size='small' /> : <i className='ri-arrow-down-s-line ri-1x' />}
        />
      </AutoComplete>
    </S.Wrapper>
  );
};
