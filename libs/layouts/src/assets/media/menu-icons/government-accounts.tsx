import { MenuIconProps } from '@ghased-portal/types';

function GovernmentAccountsSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29.8334 13.3333V20C29.8334 26.6666 27.1667 29.3333 20.5 29.3333H12.5C5.83335 29.3333 3.16669 26.6666 3.16669 20V12C3.16669 5.33329 5.83335 2.66663 12.5 2.66663H19.1667'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.8334 13.3333H24.5C20.5 13.3333 19.1667 12 19.1667 7.99996V2.66663L29.8334 13.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.32664 20.9733C8.88664 19.6 9.40664 17.9066 10.8333 17.44C11.5933 17.2 12.5266 17.4 13.0466 18.1333C13.54 17.3733 14.5133 17.2 15.26 17.44C16.7 17.9066 17.2066 19.6 16.78 20.9733C16.1 23.1466 13.7133 24.28 13.0466 24.28C12.3933 24.2666 10.0333 23.16 9.32664 20.9733Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default GovernmentAccountsSvg;
