import React from 'react';
import { Box, LocaleSwitcher, ThemeSwitch } from '@ghased-portal/ui-kit';
import Link from 'next/link';
import * as S from './drawer.style';
import { CONSTANTS, MAIN_HREF } from '@ghased-portal/utils';
import { useTr } from '@ghased-portal/translation';
import { useAuth } from '@ghased-portal/hooks';
import { ReactComponent as Melli } from '../../assets/media/Melli Logo.svg';
import { ReactComponent as MelliTitle } from '../../assets/media/melli-title.svg';
import { ButtonDrawer } from '../appbar/landing-appbar.style';
import { Direction } from '@ghased-portal/types';
import { useSelector } from 'react-redux';
import { RootState } from '@ghased-portal/redux-store';

type AppBarMenuProps = {
  visible: boolean;
  onClose: () => void;
};

const DrawerLanding = ({ visible, onClose }: AppBarMenuProps) => {
  const [t] = useTr();
  const config = useSelector((state: RootState) => state.appConfig.config);
  const { isAuth, logout } = useAuth();
  function getLoginHref() {
    return isAuth ? MAIN_HREF.HOME : MAIN_HREF.AUTH;
  }

  return (
    <S.CustomDrawer
      placement={config.direction === Direction.LTR ? 'left' : 'right'}
      width='80vw'
      visible={visible}
      onClose={onClose}
    >
      <Box width={'100%'} flexDirection='column' justifyContent='flex-start'>
        <S.LogoWrapper>
          <div className='svgs'>
            <Melli />
            <MelliTitle />
          </div>
          <div className='close-icon' onClick={onClose}>
            <i className='ri-close-line'></i>
          </div>
        </S.LogoWrapper>
        <S.MenuLinks>
          <Link href={CONSTANTS.CONTACT_US_LINK} target={'_blank'}>
            {t('layout.bank_site_link')}
          </Link>
          <Link href={CONSTANTS.CONTACT_US_LINK} target={'_blank'}>
            {t('layout.contact_us_link')}
          </Link>
          <Link href={CONSTANTS.HELP_LINK} target={'_blank'}>
            {t('layout.help_link')}
          </Link>
        </S.MenuLinks>
        <S.DividerStyled dashed />
        <Box width={'100%'} flexDirection='column' justifyContent='space-between' alignItems='center'>
          <div className='configuration'>
            <p>{t('appbar.change_language')}</p>
            <LocaleSwitcher type='textPrimary' />
          </div>
          <div className='configuration'>
            <p>{t('appbar.background_color')}</p>
            <ThemeSwitch />
          </div>
        </Box>
      </Box>

      <S.FooterButton>
        {isAuth ? (
          <Link href={MAIN_HREF.AUTH} passHref>
            <ButtonDrawer type='primary'>{t('button.landing_login')}</ButtonDrawer>
          </Link>
        ) : (
          <Link href={MAIN_HREF.AUTH} passHref>
            <ButtonDrawer type='primary'>{t('button.landing_login')}</ButtonDrawer>
          </Link>
        )}
      </S.FooterButton>
    </S.CustomDrawer>
  );
};

export default DrawerLanding;
