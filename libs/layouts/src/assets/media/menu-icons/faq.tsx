import { MenuIconProps } from '@ghased-portal/types';

function faqSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M22.6667 24.5734H17.3334L11.4001 28.52C10.5201 29.1067 9.33341 28.4801 9.33341 27.4134V24.5734C5.33341 24.5734 2.66675 21.9067 2.66675 17.9067V9.90666C2.66675 5.90666 5.33341 3.23999 9.33341 3.23999H22.6667C26.6667 3.23999 29.3334 5.90666 29.3334 9.90666V17.9067C29.3334 21.9067 26.6667 24.5734 22.6667 24.5734Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.0002 15.1467V14.8667C16.0002 13.9601 16.5602 13.48 17.1202 13.0934C17.6669 12.72 18.2135 12.24 18.2135 11.36C18.2135 10.1334 17.2268 9.14667 16.0002 9.14667C14.7735 9.14667 13.7869 10.1334 13.7869 11.36'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.9939 18.3334H16.0059'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default faqSvg;
