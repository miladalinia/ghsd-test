import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Badge, Empty, Input, Menu, MenuProps, Result } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAsync, useAuth, useConfig, useLocalStorage, useMenu, useResponsive } from '@ghased-portal/hooks';
import { useTr } from '@ghased-portal/translation';
import { Direction, LocalStorageKey } from '@ghased-portal/types';
import { Box, Button, Loading } from '@ghased-portal/ui-kit';
import { cssVar } from '@ghased-portal/utils';

import { Api } from '../../services';
import { findActiveMenuItem, findActiveParentKeys, searchMenuItems } from '../../utils/utils';
import UserSection from '../user-section/user-section';

import * as S from './drawer.style';
import MobileNavigationBar from '../mobile-navigation-bar/mobile-navigation-bar';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  disabled?: boolean,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    disabled,
    children,
  } as MenuItem;
}

export type DrawerProps = {
  shouldDisplaySider: boolean;
  shouldDisplayDrawer: boolean;
  openDrawer: boolean;
  direction: string;
  siderCollapsed: boolean;
  onToggleDrawer?: React.MouseEventHandler;
  children?: React.ReactNode;
  onBreakpoint?: (broken: boolean) => void;
  onClose?: () => void;
};

const Drawer = (props: DrawerProps) => {
  const {
    direction,
    shouldDisplaySider = false,
    shouldDisplayDrawer = false,
    siderCollapsed = false,
    openDrawer = false,
    onBreakpoint,
    onClose,
  } = props;

  const { user, setUser, isAuth } = useAuth();
  const { menu, setMenu } = useMenu();
  const { config } = useConfig();
  const prevLocaleRef = useRef(config.locale);
  const menuItemKeyRef = useRef();

  const [t] = useTr();
  const [searchQuery, setSearchQuery] = useState('');
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const router = useRouter();

  const filteredItems = useMemo(() => searchMenuItems(menu, searchQuery), [menu, searchQuery]);
  const filteredMenuItems = useMemo(() => generateMenuItems(filteredItems?.result), [filteredItems]);
  const menuSelectedKeys = useMemo(() => getDefaultSelectedKeys(), [menu, router.asPath]);

  const { asyncState: stateMenu, execute: executeMenu } = useAsync();
  const { asyncState: stateUserProfile, execute: executeUserProfile } = useAsync();
  const [localMenu, setLocalMenu, removeLocalMenu] = useLocalStorage(LocalStorageKey.MENU, null);
  const mobileMenuRoutes = ['/home', '/profile', '/mobile-services-menu'];
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>();
  const { isMobileOrTablet } = useResponsive();

  useEffect(() => {
    if (isMobileOrTablet) {
      setShowMobileMenu(mobileMenuRoutes.includes(router.pathname) ?? false);
    }
  }, [router.pathname, isMobileOrTablet]);

  useEffect(() => {
    onClose?.();
  }, [router.pathname]);

  useEffect(() => {
    if (!localMenu) {
      fetchMenu();
    }
    getActiveParentkeys();
  }, [localMenu]);

  useEffect(() => {
    if (prevLocaleRef.current !== config.locale) {
      fetchMenu();
      prevLocaleRef.current = config.locale;
    }
    getActiveParentkeys();
  }, [config.locale]);

  useEffect(() => {
    if (!user) {
      fetchUserProfile();
    }
  }, []);

  function filterMenuByV3Ready(menuList) {
    return menuList
      .map((menu) => {
        if (!menu.v3_ready) return null; // Exclude if v3_ready is false

        // Filter children recursively
        const filteredChildren = filterMenuByV3Ready(menu.children || []);
        return { ...menu, children: filteredChildren };
      })
      .filter((menu) => menu !== null); // Remove null entries
  }

  const fetchMenu = async () => {
    try {
      const response = await executeMenu(async () => await Api.getMenus());

      const filteredMenu = filterMenuByV3Ready(response);
      setMenu(filteredMenu);
      return response;
    } catch (error) {
      return null;
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await executeUserProfile(async () => await Api.getUserProfile());
      setUser(response);
      return response;
    } catch (error) {
      return null;
    }
  };

  function getMenuLabelNode(menuItem) {
    const badgeCount = 0; // Replace with your non-zero value
    const badge = badgeCount > 0 ? <Badge className={'menu-item-badge'} count={badgeCount} showZero={false} /> : null;

    const isLink = menuItem.v3_href && menuItem.v3_ready;

    return (
      <>
        {isLink ? <Link href={menuItem.v3_href}>{menuItem.title}</Link> : menuItem.title}
        {badge}
      </>
    );
  }

  function generateMenuItems(menuItems: any[] | null): MenuItem[] | undefined {
    const items: MenuItem[] = [];

    if (!menuItems) return undefined;

    menuItems.forEach((menuItem) => {
      const item: MenuItem = getItem(
        getMenuLabelNode(menuItem),
        menuItem?.id?.toString(),
        menuItem.v3_icon ? <i className={menuItem.v3_icon} /> : undefined,
        !menuItem?.v3_ready,
        menuItem.children && menuItem.children.length > 0 ? generateMenuItems(menuItem.children) : undefined
      );
      items.push(item);
    });

    return items.length > 0 ? items : undefined;
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleMenuTryAgain(e) {
    fetchMenu();
  }

  function getDefaultSelectedKeys() {
    const activeMenuItem = findActiveMenuItem(menu, router.asPath);

    if (!activeMenuItem) {
      return [];
    }

    return [activeMenuItem.id.toString()];
  }

  function getActiveParentkeys() {
    if (!menu) return false;
    const activeKeys = findActiveParentKeys(menu, +menuSelectedKeys[0]);
    setOpenKeys(activeKeys);
  }

  const handleMenuClick = (item) => {
    if (item.key == menuItemKeyRef.current) {
      window.location.reload();
    } else {
      menuItemKeyRef.current = item.key;
    }
  };

  const handleOpenChange = (newOpenKeys: string[]) => {
    const latestOpenKey = newOpenKeys.find((key) => openKeys.indexOf(key) === -1);

    if (latestOpenKey) {
      const parentKeys = findActiveParentKeys(menu, parseInt(latestOpenKey));
      setOpenKeys([...parentKeys, latestOpenKey]);
    } else {
      setOpenKeys(openKeys.filter((key) => newOpenKeys.includes(key)));
    }
  };

  function getMenu() {
    return (
      <S.MenuWrapper>
        {stateMenu?.error ? (
          <Result
            status='error'
            icon={<i className={'ri-alert-fill ri-3x'} />}
            subTitle={t('layout.menu_error_message')}
            extra={[
              <Box>
                <Button type={'link'} onClick={handleMenuTryAgain}>
                  {t('button.retry')}
                </Button>
                ,
              </Box>,
            ]}
          ></Result>
        ) : (
          <>
            <div className='menu-search-input-container'>
              <Input
                placeholder={`${t('field.search')}`}
                onChange={handleSearchChange}
                prefix={<i className={'ri-search-line'} />}
                size='middle'
              />
            </div>

            {stateMenu?.loading ? (
              <div className='menu-spin-container'>
                <Loading height='100%' containerProps={{ paddingTop: '4rem' }} />
              </div>
            ) : (
              <>
                <Menu
                  mode='inline'
                  openKeys={openKeys}
                  defaultSelectedKeys={menuSelectedKeys}
                  selectedKeys={menuSelectedKeys}
                  onOpenChange={handleOpenChange}
                  items={filteredMenuItems}
                  getPopupContainer={(node) => node.parentNode as HTMLElement}
                  onClick={handleMenuClick}
                />
                {menu && !filteredMenuItems && <Empty style={{ marginTop: '6rem' }} description={false}></Empty>}
              </>
            )}
          </>
        )}
      </S.MenuWrapper>
    );
  }

  function getMenuContainer() {
    return (
      <S.SiderItemsWrapper>
        <UserSection />
        {getMenu()}
      </S.SiderItemsWrapper>
    );
  }

  return (
    <>
      {shouldDisplaySider && (
        <S.Sider
          trigger={null}
          theme={'light'}
          collapsible
          collapsed={siderCollapsed}
          breakpoint={'md'}
          onBreakpoint={onBreakpoint}
          collapsedWidth={0}
          width={`var(${cssVar.drawerWidth})`}
        >
          {getMenuContainer()}
        </S.Sider>
      )}

      {shouldDisplayDrawer && showMobileMenu && (
        // <S.Drawer
        //   placement={direction === Direction.RTL ? 'right' : 'left'}
        //   closable={false}
        //   onClose={onClose}
        //   open={openDrawer}
        //   getContainer={'div'}
        //   width={`var(${cssVar.drawerWidth})`}
        //   bodyStyle={{
        //     padding: 0,
        //   }}
        // >
        //   {getMenuContainer()}
        // </S.Drawer>
        <MobileNavigationBar />
      )}
    </>
  );
};

export default Drawer;
