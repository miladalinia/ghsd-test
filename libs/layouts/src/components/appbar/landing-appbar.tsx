import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Space } from 'antd';

import { useTr } from '@ghased-portal/translation';
import { bankLogoBlack, bankLogo, Button, LocaleSwitcher, ThemeSwitch, Box } from '@ghased-portal/ui-kit';
import { Direction, IConfig, ThemeID } from '@ghased-portal/types';
import { CONSTANTS, ENV_CONSTANTS, MAIN_HREF } from '@ghased-portal/utils';
import { ReactComponent as AccountSellector } from '../../assets/media/account-circle-fill.svg';
import { ReactComponent as ArrowLeft } from '../../assets/media/arrow-drop-left-line.svg';
import { ReactComponent as PlayBtn } from '../../assets/media/play-btn.svg';

import AppBarMenu from '../appbar-menu/appbar-menu';

import * as S from './landing-appbar.style';
import DrawerLanding from '../drawerLanding/drawer';
import { useAppTheme, useConfig } from '@ghased-portal/hooks';
import VideoModal from './modal/video-modal';
import { ButtonStyled } from './landing-appbar.style';

export type LandingAppBarProps = {
  isMobileOrTablet: boolean;
  config: IConfig;
  onToggleDrawer?: React.MouseEventHandler;
  onLogout?: any /*React.MouseEventHandler*/;
  isAuth?: boolean;
  isPrimaryAppbar?: boolean;
  children?: React.ReactNode;
};

const LandingAppbar = (props: LandingAppBarProps) => {
  const { isMobileOrTablet, config, isPrimaryAppbar = false } = props;
  console.log('🚀 ~ LandingAppbar ~ config:', config);
  const [t] = useTr();
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const theme = useAppTheme();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function getBankImage() {
    if (isPrimaryAppbar) {
      return bankLogo;
    }

    if (config.themeId === ThemeID.DARK) {
      return bankLogo;
    }

    return bankLogoBlack;
  }

  const bankImage = getBankImage();

  const getMobileAppbar = () => {
    return (
      <>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
          <Link href={'/auth'} passHref>
            <ButtonStyled type='text' size='large'>
              {t('button.login')}
            </ButtonStyled>
          </Link>
          <Box style={{ color: '#2A539E' }}>/</Box>
          <Link href='https://baam.bmi.ir/fa/signup' passHref>
            <ButtonStyled type='text' size='large'>
              {t('button.register_appbar')}
            </ButtonStyled>
          </Link>
        </Box>

        <Button style={{ padding: '0rem' }} type='text' onClick={() => setVisible(true)}>
          <i className='ri-menu-line' style={{ fontSize: '2.6rem' }}></i>
        </Button>
        <DrawerLanding visible={visible} onClose={() => setVisible(false)} />
      </>
    );
  };

  function handleSubmit() {
    if (props.onLogout) props.onLogout();
  }

  const getDesktopAppbar = () => {
    return (
      <>
        <Image src={bankImage} alt='Bank Melli' className={'appbar-bank-logo'} />

        <Space size={'large'} role={'navigation'} className={'landing-nav'}>
          <Link href={CONSTANTS.CONTACT_US_LINK} target={'_blank'}>
            {t('layout.bank_site_link')}
          </Link>

          <Link href={CONSTANTS.CONTACT_US_LINK} target={'_blank'}>
            {t('layout.contact_us_link')}
          </Link>

          <Link href={CONSTANTS.HELP_LINK}>{t('layout.help_link')}</Link>
        </Space>

        <span style={{ flexGrow: 1 }} />

        <Space size={'middle'}>
          {/* <ThemeSwitch /> */}

          {/* {(ENV_CONSTANTS.IS_DEV || true) && <LocaleSwitcher type={isPrimaryAppbar ? 'onPrimary' : 'textPrimary'} />} */}

          {props.isAuth ? (
            <span className={'logout-item'}>
              <Button
                type='text'
                shape='circle'
                icon={<i className='ri-logout-box-r-line' />}
                onClick={props.onLogout}
              />
            </span>
          ) : (
            <>
              <S.RegisterButton
                icon={<PlayBtn />}
                onClick={() => setVideoModal(true)}
                style={{ borderRadius: '10rem', height: '4rem', color: theme.primary }}
                type='default'
                size='large'
              >
                {t('button.about_system')}
              </S.RegisterButton>

              <Link href={MAIN_HREF.AUTH} passHref>
                <S.RegisterButton
                  icon={<AccountSellector />}
                  style={{ borderRadius: '10rem', padding: '1.2rem 1.2rem 1.2rem 0.8rem', height: '4rem' }}
                  type='primary'
                  size='large'
                >
                  {t('button.landing_login')}
                  <span className={`arrow-left ${config.direction === Direction.LTR ? 'rotate' : ''}`}>
                    <ArrowLeft />
                  </span>
                </S.RegisterButton>
              </Link>
              <S.DividerStyled type='vertical' />
              <Box alignItems='center'>
                <ThemeSwitch />
                <div style={{ marginTop: '0.5rem' }}>
                  <LocaleSwitcher type='textPrimary' />
                </div>
              </Box>
            </>
          )}
        </Space>
        {videoModal && <VideoModal setVideoModal={setVideoModal} videoModal={videoModal} />}
      </>
    );
  };

  return (
    <S.AppBar primary={isPrimaryAppbar} className={isScrolled ? 'scrolled' : ''}>
      {isMobileOrTablet ? getMobileAppbar() : getDesktopAppbar()}
    </S.AppBar>
  );
};

export default LandingAppbar;
