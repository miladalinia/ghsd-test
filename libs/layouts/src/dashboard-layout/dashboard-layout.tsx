import React, { ReactNode, useEffect, useState } from 'react';
import { Layout, Spin } from 'antd';

import { useAuth, useConfig, useMenu, useResponsive } from '@ghased-portal/hooks';

import Protected from '../components/protected/protected';
import Appbar from '../components/appbar/appbar';
import Drawer from '../components/drawer/drawer';
import MainContent from '../components/main-content/main-content';

import * as S from './dashboard-layout.style';
import { useRouter } from 'next/router';
import { isPathAllowed } from '../utils/utils';
import { ENV_CONSTANTS } from '@ghased-portal/utils';
import FullScreenModal from '../components/full-screen-search/full-screen-search';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { config } = useConfig();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFullModal, setOpenFullModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { isMobile, isMobileOrTablet, isDesktop, isTablet, isUndefined } = useResponsive();
  const { logout } = useAuth();
  const { menu } = useMenu();
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (ENV_CONSTANTS.IS_PROD && menu && !isPathAllowed(menu, currentPath)) {
      router.push('/not-access');
    }
  }, [menu, currentPath]);

  useEffect(() => {
    if ((isTablet || isDesktop) && currentPath === '/mobile-services-menu') {
      router.replace('/home');
    }
  }, [isDesktop, isTablet]);

  const toggleDrawer = () => {
    if (isMobile) {
      if (!collapsed) showDrawer();
      else onClose();
      return;
    }
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    if (isMobile) {
      setOpenDrawer(true);
    }
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    // setOpenDrawer(false);
    // console.log('logout clicked');

    logout();
  };

  function handleOnBreakpoint(broken: boolean) {
    if (broken && !collapsed) {
      setCollapsed(true);
    }
  }

  const handleOpenModal = (value: boolean) => {
    setOpenFullModal(value);
  };

  return (
    <Protected>
      <Layout>
        <Appbar
          onToggleDrawer={toggleDrawer}
          onLogout={handleLogout}
          config={config}
          isMobileOrTablet={isMobileOrTablet}
          setOpenModal={handleOpenModal}
        />

        <Layout>
          <Drawer
            shouldDisplaySider={!isUndefined && !isMobile}
            shouldDisplayDrawer={isMobile}
            direction={config.direction}
            openDrawer={openDrawer}
            siderCollapsed={collapsed}
            onBreakpoint={handleOnBreakpoint}
            onClose={onClose}
          />

          <S.MainContentLayout>
            {!menu || (ENV_CONSTANTS.IS_PROD && !isPathAllowed(menu, currentPath)) ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
                <Spin />
              </div>
            ) : (
              <MainContent>{children}</MainContent>
            )}
          </S.MainContentLayout>
        </Layout>
      </Layout>
      <FullScreenModal open={openFullModal} setOpen={setOpenFullModal} />
    </Protected>
  );
};

export default DashboardLayout;
