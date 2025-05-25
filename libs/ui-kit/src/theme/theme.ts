import { useTheme } from 'styled-components';

import { Direction, IConfig, ITheme, ThemeID } from '@ghased-portal/types';

const getLightTheme = (direction: Direction): ITheme => {
  return {
    id: ThemeID.LIGHT,
    direction: direction,
    primary: '#0C0D0D',
    primaryDark: '#00206B',
    primaryLight: '#2A539E12',
    // primaryLightest: '#94A9CE',
    secondary: '#F9B741',
    background: '#F5F6F6',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    cardColor: '#F7F7F7',
    cardSecondaryColor: '#E9EBEB',
    success: '#00AF4D',
    successBackground: '#05C96717',
    error: '#FF2222',
    errorBackground: '#FF09090F',
    info: '#1677ff',
    infoBackground: '#f3f4f4',
    warning: '#F88D13',
    warningBackground: '#F88D1314',
    lightGray: '#fafafa',
    iconPrimary: '#7e828a',
    textPrimary: '#252626',
    textSecondary: '#3F4040',
    textTerritory: '#8B8C8C',
    textQuaternary: '#E9EBEB',
    hint: '#a4a9b0',
    divider: '#A5A6A6',
    // drawer: '#feffff',
    border: '#C6C7C7' /*textQuaternary*/,
    appbar: '#30398b' /*primary*/,
  };
};
const getDarkTheme = (direction: Direction): ITheme => {
  return {
    id: ThemeID.DARK,
    direction: direction,
    primary: '#F7F7F7',
    primaryDark: '#063EA4',
    primaryLight: '#3971D73D',
    // primaryLightest: '#88AAE7',
    secondary: '#F9B741',
    background: '#050505',
    surface: '#1C1C1C',
    onPrimary: '#FFFFFF',
    cardColor: '#2c2c2c',
    cardSecondaryColor: '#464646',
    success: '#25CA6E',
    successBackground: '#25CA6E1A',
    error: '#FF3F3F',
    errorBackground: '#FF3F3F1F',
    info: '#1668dc',
    infoBackground: '#f3f4f4',
    warning: '#F19531',
    warningBackground: '#F195311F',
    lightGray: '#fafafa',
    iconPrimary: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#E3E3E3',
    textTerritory: '#8E8E8E',
    textQuaternary: '#4B4B4B',
    // textPrimaryLight: '#d9d9d9',
    hint: '#a4a9b0',
    divider: '#626262',
    // drawer: '#646569',
    border: '#787878',
    appbar: '#1e1e2d' /*surface*/,
  };
};

export const getTheme = (config: IConfig) => {
  switch (config.themeId) {
    case ThemeID.DARK:
      return getDarkTheme(config.direction);
    case ThemeID.LIGHT:
    default:
      return getLightTheme(config.direction);
  }
};

// export default getTheme;
