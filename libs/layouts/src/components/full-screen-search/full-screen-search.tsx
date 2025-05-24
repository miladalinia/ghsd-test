import React, { useEffect, useRef, useState } from 'react';
import { Button, MenuProps, Input, InputRef } from 'antd';
import { useTr } from '@ghased-portal/translation';
import SearchMenu from './search-menu/search-menu';
import * as S from './full-screen-search.style';

interface FullScreenModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ open, setOpen }) => {
  const [t] = useTr();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputRef = useRef<InputRef>(null);

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  const openChange = (isOpen) => {
    setSearchQuery('');
    if (isOpen && inputRef?.current?.input) {
      setTimeout(() => {
        inputRef?.current?.input?.focus();
      }, 0);
    }
  };

  return (
    <S.ModalWrapper
      open={open}
      footer={null}
      closable={false}
      width={'100vw'}
      bodyStyle={{
        height: '100vh',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
      afterOpenChange={(isOpen) => openChange(isOpen)}
    >
      <div className='modal-header'>
        <Button className='modal-header__close' shape='circle' type='text' onClick={() => setOpen(false)}>
          <i className='ri-close-line'></i>
        </Button>
        <span className='modal-header__search-text'>{t('button.search')}</span>
      </div>
      <div className='modal-body'>
        <div className='modal-body_search'>
          <Input
            className='menu-search-input'
            placeholder={`${t('field.search')}`}
            onChange={handleSearchChange}
            prefix={<i className={'ri-search-line'} />}
            size='middle'
            allowClear
            ref={inputRef}
            value={searchQuery ?? ''}
          />
        </div>
        <SearchMenu searchQuery={searchQuery} setOpen={setOpen} />
      </div>
    </S.ModalWrapper>
  );
};

export default FullScreenModal;
