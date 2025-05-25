'use client'

import React, { ReactNode, useState } from 'react';
import { Layout, Space } from 'antd';

import { useAuth, useResponsive } from '@ghased-portal/hooks';

import ClientOnly from '../components/client-only/client-only';
import LandingAppbar from '../components/appbar/landing-appbar';
import { RootState } from '@ghased-portal/redux-store';
import { useSelector } from 'react-redux';

type LandingLayoutProps = {
  children: ReactNode;
  isPrimaryAppbar?: boolean;
};
export const LandingLayout = ({ children, isPrimaryAppbar = false }: LandingLayoutProps) => {
  const config = useSelector((state: RootState) => state.appConfig.config);
  const { isMobileOrTablet } = useResponsive();
  const { isAuth, logout } = useAuth();

  const handleLogout = () => {
    // setOpenDrawer(false);
    // console.log('logout clicked');

    logout();
  };

  return (
    <ClientOnly>
      <Layout>
        <LandingAppbar
          config={config}
          isAuth={isAuth}
          onLogout={handleLogout}
          isMobileOrTablet={isMobileOrTablet}
          isPrimaryAppbar={isPrimaryAppbar}
        />

        <Layout>{children}</Layout>
      </Layout>
    </ClientOnly>
  );
};

export default LandingLayout;
