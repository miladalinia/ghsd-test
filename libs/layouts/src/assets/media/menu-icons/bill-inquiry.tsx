import { MenuIconProps } from '@ghased-portal/types';

function BillInquirySvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M27.3334 15.0667V9.3867C27.3334 4.01336 26.0801 2.66669 21.0401 2.66669H10.9601C5.92008 2.66669 4.66675 4.01336 4.66675 9.3867V24.4C4.66675 27.9467 6.61343 28.7867 8.97343 26.2534L8.98674 26.24C10.0801 25.08 11.7467 25.1733 12.6934 26.44L14.0401 28.24'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M24.2667 28.5333C26.6231 28.5333 28.5333 26.6231 28.5333 24.2667C28.5333 21.9103 26.6231 20 24.2667 20C21.9103 20 20 21.9103 20 24.2667C20 26.6231 21.9103 28.5333 24.2667 28.5333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.3333 29.3333L28 28'
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
    </svg>
  );
}

export default BillInquirySvg;
