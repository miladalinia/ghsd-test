import { useTr } from '@ghased-portal/translation';
import * as S from './mobile-navigation-bar.style';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@ghased-portal/hooks';
import { Avatar } from '@ghased-portal/ui-kit';
import { Api } from '../../services';
import { defaultUserPhoto } from '../../assets/mock/data';

export type MenuCategoryItem = {
  href: string;
  key?: string;
  name?: string;
  icon?: string;
};

const MobileNavigationBar = () => {
  const [t] = useTr();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(router.pathname);
  const { isAuth, userPhoto, setUserPhoto } = useAuth();

  const menuCategories: MenuCategoryItem[] = [
    {
      key: 'HOME',
      name: t('nav.home'),
      icon: 'ri-home-4-line',
      href: '/home',
    },
    {
      key: 'SERVICES',
      name: t('nav.services'),
      icon: 'ri-function-line',
      href: '/mobile-services-menu',
    },
    {
      key: 'PROFILE',
      name: t('nav.profile'),
      icon: 'ri-user-line',
      href: '/profile',
    },
  ];

  const handleItemClick = (href: string) => {
    setActiveItem(href);
  };

  useEffect(() => {
    if (userPhoto) {
      return;
    }

    Api.getUserPhoto()
      .then((res) => {
        if (res?.photo) {
          setUserPhoto(`data:image/png;base64,${res?.photo}`);
        }
      })
      .catch((err) => {
        console.error('getUserPhoto err', err);
      });
    // .finally(() => {});
  }, []);

  const getUserPhotoUrl = () => userPhoto ?? defaultUserPhoto;

  const handleUserAvatar = (item: MenuCategoryItem) => {
    if (item.key === 'PROFILE') {
      return isAuth && <Avatar size={24} icon={<i className='ri-user-3-fill' />} src={getUserPhotoUrl()} />;
    }

    return <i className={item.icon}></i>;
  };

  return (
    <S.MobileNavBarWrapper>
      {menuCategories.map((item) => (
        <S.MobileNavBarItem
          key={item.key}
          href={item.href}
          active={item.href === activeItem}
          onClick={() => handleItemClick(item.href)}
        >
          {handleUserAvatar(item)}
          <span>{item.name}</span>
        </S.MobileNavBarItem>
      ))}
    </S.MobileNavBarWrapper>
  );
};

export default MobileNavigationBar;
