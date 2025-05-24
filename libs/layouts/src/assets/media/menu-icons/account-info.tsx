import { MenuIconProps } from '@ghased-portal/types';

function AccountInfoSvg({ fill = '#30398B', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29.3334 13.3333V20C29.3334 26.6666 26.6667 29.3333 20 29.3333H12C5.33335 29.3333 2.66669 26.6666 2.66669 20V12C2.66669 5.33329 5.33335 2.66663 12 2.66663H18.6667'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.3334 13.3333H24C20 13.3333 18.6667 12 18.6667 7.99996V2.66663L29.3334 13.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.33331 17.3334H17.3333'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.33331 22.6666H14.6666'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default AccountInfoSvg;
