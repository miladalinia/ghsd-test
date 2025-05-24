import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@ghased-portal/hooks';
import { MAIN_HREF } from '@ghased-portal/utils';

import ClientOnly from '../client-only/client-only';

export type ProtectedProps = {
  children: ReactNode;
};

const Protected = ({ children }: ProtectedProps) => {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.replace(MAIN_HREF.AUTH);
    }
  }, []);

  return <ClientOnly>{isAuth && children}</ClientOnly>;
};

export default Protected;
