import React, { JSX, useEffect } from 'react';
import { ConfigProvider as AntConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import { IConfig, ITheme, Direction } from '@ghased-portal/types';

import { getTheme } from './theme';
import { Directionality } from './directionality';
import { getAntBaseConfig } from './ant-base-config';
import { useSelector } from 'react-redux';
import { RootState } from '@ghased-portal/redux-store';

export interface ThemeConfigProps {
  onLocaleChange: (config: IConfig) => void;
  children: React.ReactNode;
}

const ThemeConfig = (props: ThemeConfigProps): JSX.Element => {
  const config = useSelector((state: RootState) => state.appConfig.config);

  const isRtl = config?.direction === Direction.RTL;

  const baseTheme: ITheme = getTheme(config);

  // console.log('ThemeConfig', config,storedConfig);

  useEffect(() => {
    if (props.onLocaleChange) {
      props.onLocaleChange(config);
    }
  }, [config.locale]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Directionality isRtl={isRtl}>
        <AntConfigProvider {...getAntBaseConfig(config)}>{props.children}</AntConfigProvider>
      </Directionality>
    </ThemeProvider>
  );
};

function isEqual(prevProps, nextProps): boolean {
  return JSON.stringify(prevProps?.config ?? {}) === JSON.stringify(nextProps?.config ?? {});
}

export default ThemeConfig;
// export default React.memo(ThemeConfig, isEqual);
