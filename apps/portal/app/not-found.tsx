'use client';

import { LandingLayout } from '@ghased-portal/layouts';
import { useTr } from '@ghased-portal/translation';
import { Button } from '@ghased-portal/ui-kit';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const [t] = useTr();
  return (
    <LandingLayout>
      <div className='not-found-page'>
        <Image src={'/assets/not-found.svg'} alt='' width={236} height={170} />
        <div className='not-found-msg'>{t('error.404')}</div>
        <div className='not-found-desc'>{t('error.not_found')}</div>
        <Link href='/' className='return-home'>
          <Button type='primary'> {t('nav.return_to_home')}</Button>
        </Link>
      </div>
    </LandingLayout>
  );
}
