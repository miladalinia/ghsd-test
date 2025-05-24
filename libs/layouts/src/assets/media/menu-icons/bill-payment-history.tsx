import { MenuIconProps } from '@ghased-portal/types';

function BillPaymentHistorySvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M27.3334 15.0667V9.3867C27.3334 4.01336 26.0801 2.66669 21.0401 2.66669H10.9601C5.92008 2.66669 4.66675 4.01336 4.66675 9.3867V24.4C4.66675 27.9467 6.61343 28.7867 8.97343 26.2534L8.98673 26.24C10.0801 25.08 11.7467 25.1733 12.6934 26.44L14.0401 28.24'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.6667 9.33331H21.3334'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M12 14.6667H20' stroke='#2A539E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path
        d='M22.6666 29.3334C25.6121 29.3334 27.9999 26.9455 27.9999 24C27.9999 21.0545 25.6121 18.6667 22.6666 18.6667C19.7211 18.6667 17.3333 21.0545 17.3333 24C17.3333 26.9455 19.7211 29.3334 22.6666 29.3334Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22.9999 22.3333V23.5733C22.9999 24.04 22.7599 24.48 22.3466 24.72L21.3333 25.3333'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default BillPaymentHistorySvg;
