'use client'

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@ghased-portal/hooks';

import ClientOnly from '../client-only/client-only';

export type ProtectedProps = {
  children: ReactNode;
};

const Anonymous = ({ children }: ProtectedProps) => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.back();
    }
  }, []);

  return <ClientOnly>{!isAuth && children}</ClientOnly>;
};

export default Anonymous;
