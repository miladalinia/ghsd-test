'use client';
import { ReactNode } from 'react';

import { changeLanguage } from '@ghased-portal/translation';
import { changeDayjsCalendar } from '@ghased-portal/utils';
import { AppErrorBoundary } from '@ghased-portal/layouts';
import { IConfig } from '@ghased-portal/types';

import GlobalStyles from '../styles/global.style';
import { AuthProvider, MenuProvider } from '@ghased-portal/hooks';
import { ThemeConfig } from '@ghased-portal/ui-kit';
import { StoreProvider } from '@ghased-portal/redux-store';

type BaseProviderProps = {
  children: ReactNode;
};

export const BaseProvider = ({ children }: BaseProviderProps) => {
  const handleLocaleChange = (config: IConfig) => {
    changeLanguage(config.locale);
    changeDayjsCalendar(config.locale);
  };

  return (
    <StoreProvider>
      <ThemeConfig onLocaleChange={handleLocaleChange}>
        {/* <AppErrorBoundary> */}
        {/* <AuthProvider> */}
        <MenuProvider>
          <GlobalStyles />
          {children}
        </MenuProvider>
        {/* </AuthProvider> */}
        {/* </AppErrorBoundary> */}
      </ThemeConfig>
    </StoreProvider>
  );
};
