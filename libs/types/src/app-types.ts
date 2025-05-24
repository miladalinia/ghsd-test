import { ReactNode } from 'react';
import { Direction, Locale, ThemeID } from './enums';

/**
 *
 */
export interface IConfig {
  themeId: ThemeID;
  direction: Direction;
  locale: Locale;
}

export interface ITheme {
  id: string;
  direction: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  // secondary: string;
  background: string;
  surface: string;
  onPrimary: string;
  cardColor: string;
  cardSecondaryColor: string;
  success: string;
  successBackground: string;
  info: string;
  infoBackground: string;
  lightGray: string;
  error: string;
  errorBackground: string;
  warningBackground: string;
  warning: string;
  iconPrimary: string;
  textPrimary: string;
  textSecondary: string;
  textTerritory: string;
  textQuaternary: string;
  hint: string;
  divider: string;
  // drawer: string;
  border: string;
  appbar: string;
}

export type InfoItemType = {
  key: string;
  value: string | ReactNode;
  subValue?: string | ReactNode;
  displayValue?: boolean;
  type?: 'text' | 'file';
  files?: any;
  fullwidth?: boolean;
  divider?: boolean;
};

export interface WidgetHeaderType {
  title?: string[] | string;
  message?: string[] | string;
  icon?: React.ReactNode;
}

export type PurposeItem = {
  transferType: string;
  value: string;
  titleFA: string;
  titleEN: null | string;
  statementCode: string;
  isPayRollDeposit: boolean;
  isActive: boolean;
  id: number;
  comment: null | string;
};

export type Service = {
  order: number;
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  url: string;
};
