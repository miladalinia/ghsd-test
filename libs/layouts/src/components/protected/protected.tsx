'use client';

import { ReactNode, useEffect } from 'react';

import { useAuth } from '@ghased-portal/hooks';
import { MAIN_HREF } from '@ghased-portal/utils';

import ClientOnly from '../client-only/client-only';

export type ProtectedProps = {
  children: ReactNode;
};

const Protected = ({ children }: ProtectedProps) => {
  // const { isAuth } = useAuth();

  // useEffect(() => {
  //   if (!isAuth) {
  //     window.history.replaceState(null, '', MAIN_HREF.AUTH);
  //   }
  // }, []);

  return <ClientOnly>{/*isAuth && */ children}</ClientOnly>;
};

export default Protected;
