'use client';

import { useTr } from '@ghased-portal/translation';
import { Button } from '@ghased-portal/ui-kit';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NotAccess() {
  const [t] = useTr();
  return (
    <div className='not-access-page'>
      <Image src={'/assets/not-access.svg'} width={206} height={203} alt='' />
      <div className='not-access-msg'>{t('error.403')}</div>
      <div className='not-access-desc'>{t('error.not_access')}</div>
      <Link href='/' className='return-home'>
        <Button type='primary'> {t('nav.return_to_home')}</Button>
      </Link>
    </div>
  );
}

export default NotAccess;
