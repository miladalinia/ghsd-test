import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useTr } from '@ghased-portal/translation';
import { ENV_CONSTANTS, fullDateLocale } from '@ghased-portal/utils';
import { Direction, IConfig, LocalStorageKey } from '@ghased-portal/types';
import { BaamsunLogo, bankLogo, bankLogoBlack, Box, Button, LocaleSwitcher, ThemeSwitch } from '@ghased-portal/ui-kit';

import * as S from './appbar.style';
import AppBarMenu from '../appbar-menu/appbar-menu';
import { useTheme } from 'styled-components';
import { Api } from '../../services';
import { useLocalStorage } from '@ghased-portal/hooks';
import SearchSvg from '../../assets/media/menu-icons/search';
import { ReactComponent as ArrowBackIcon } from '../../assets/media/arrow-back.svg';
import { usePathname } from 'next/navigation';

export type AppBarProps = {
  isMobileOrTablet: boolean;
  config: IConfig;
  onLogout?: any;
  children?: React.ReactNode;
  setOpenModal: (open: boolean) => void;
  onToggleDrawer?: React.MouseEventHandler;
};

const Appbar = (props: AppBarProps) => {
  const { onToggleDrawer, isMobileOrTablet, config, setOpenModal } = props;
  const [purpose, setPurpose] = useLocalStorage(LocalStorageKey.PURPPOSE);
  const mobileMenuRoutes = ['/home', '/profile', '/mobile-services-menu'];
  const [showLogo, setShowLogo] = useState<boolean>();

  const [t] = useTr();
  const theme = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileOrTablet) {
      setShowLogo(mobileMenuRoutes.includes(pathname) ?? false);
    }
  }, [pathname, isMobileOrTablet]);

  useEffect(() => {
    if (purpose) {
      return;
    }
    Api.getPurpose()
      .then((res) => {
        setPurpose(res);
      })
      .catch((err) => {
        console.error('getPurpose err');
      });
  }, []);

  const isDevelopment = process.env.NODE_ENV === 'development';

  const handleSearchClick = () => {
    setOpenModal(true);
  };

  const getMobileAppbar = () => {
    return (
      <>
        {/* <Button shape={'circle'} type={'text'} className={'menu-toggle-wrapper'} onClick={onToggleDrawer}>
          <i className={'ri-menu-line'} /> */}
        {/*{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
        {/* </Button> */}
        {showLogo ? (
          <span className={'appbar-title-logo-date'}>
            <BaamsunLogo onClick={() => window.history.pushState('/home', '')} />
          </span>
        ) : (
          <Button
            className='appbar__return-button'
            type='link'
            onClick={() => window.history.pushState('/mobile-services-menu', '')}
          >
            {/* <i style={{ fontSize: '2rem' }} className='ri-arrow-right-line'></i> */}
            <ArrowBackIcon className={`${theme.direction === Direction.LTR ? 'rotate' : ''}`} />
            {t('button.return')}
          </Button>
        )}

        <div className='appbar__action'>
          <Button type='text' onClick={handleSearchClick} icon={<SearchSvg fill={theme.textPrimary} />}></Button>
          <AppBarMenu color={theme.textPrimary} />
        </div>
      </>
    );
  };

  const getDesktopAppbar = () => {
    return (
      <>
        <span className={'menu-toggle-wrapper'} onClick={onToggleDrawer}>
          <i className={'ri-menu-line'} />
          {/*{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
        </span>

        <span className={'appbar-title-logo-date'}>
          <BaamsunLogo />
          <span>{fullDateLocale(undefined, config.locale)}</span>
        </span>

        <span style={{ flexGrow: 1 }} />

        {/* <span className={'appbar-title-bank-logo'}>
          <Image src={config.themeId === 'dark' ? bankLogo : bankLogoBlack} alt='Bank Melli' />
        </span> */}

        <ThemeSwitch />

        {(ENV_CONSTANTS.IS_DEV || true) && <LocaleSwitcher color={theme.textPrimary} />}

        <S.Divider />

        {/* <span className={'appbar-item'}>
          <Button icon={<i className='ri-notification-2-fill' />} type='text' shape='circle' />
        </span> */}

        {/* <span className={'appbar-item'}>
          <Button type='text' shape='circle' onClick={props.onLogout} />
        </span> */}
      </>
    );
  };

  return <S.AppBar themeColor={config.themeId}>{isMobileOrTablet ? getMobileAppbar() : getDesktopAppbar()}</S.AppBar>;
};

export default Appbar;
