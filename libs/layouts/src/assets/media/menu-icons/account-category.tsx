import { MenuIconProps } from '@ghased-portal/types';

function AccountCategorySvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 29.3333H20C26.6667 29.3333 29.3334 26.6666 29.3334 20V12C29.3334 5.33329 26.6667 2.66663 20 2.66663H12C5.33335 2.66663 2.66669 5.33329 2.66669 12V20C2.66669 26.6666 5.33335 29.3333 12 29.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M24 10.3333V19.3333C24 17.8666 22.8 16.6666 21.3333 16.6666H10.6667C9.2 16.6666 8 17.8666 8 19.3333V10.3333C8 8.86663 9.2 7.66663 10.6667 7.66663H21.3333C22.8 7.66663 24 8.86663 24 10.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M25.3333 21H24' stroke='#2A539E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M8.00002 21H6.66669' stroke='#2A539E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path
        d='M24 18.6667V14.6667C24 13.2 22.8 12 21.3333 12H10.6667C9.2 12 8 13.2 8 14.6667V18.6667'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M24 19.3333V21H19.3333C19.3333 22.84 17.84 24.3333 16 24.3333C14.16 24.3333 12.6667 22.84 12.6667 21H8V19.3333C8 17.8666 9.2 16.6666 10.6667 16.6666H21.3333C22.8 16.6666 24 17.8666 24 19.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
export default AccountCategorySvg;
