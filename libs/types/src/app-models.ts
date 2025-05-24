import { ReactNode } from 'react';

export type AvatarModel = {
  image?: string;
  name?: string;
  role?: string;
  branch?: string;
};

export type MenuItemModel = {
  id?: string;
  title?: string;
  order?: number;
  href?: string;
  active?: boolean;
  selected?: boolean;
  icon?: ReactNode | null;
  description?: string;
  name?: string;
  userType?: string;
  subMenus?: MenuItemModel[];
};

export type RouteModel = {
  path?: string;
  component?: ReactNode;
  exact?: boolean;
  protected?: boolean;
};

export type MenuResponseModel = {
  id: number;
  title: string;
  order: number;
  href: string;
  icon: string;
  active: boolean;
  description: string;
  parentId: number;
  children: MenuResponseModel[];
  menuType: string;
  accessScope: string;
  accessed: boolean;
  v3_href: string;
  v3_icon: string;
  v3_ready: boolean;
};

export type MenuIconProps = {
  fill?: string;
  width?: number;
  height?: number;
};
