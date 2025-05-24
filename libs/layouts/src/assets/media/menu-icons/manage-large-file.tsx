import { MenuIconProps } from '@ghased-portal/types';

function ManageLargeFileSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M18.6666 2.66663H12C5.33329 2.66663 2.66663 5.33329 2.66663 12V20C2.66663 26.6666 5.33329 29.3333 12 29.3333'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.3333 13.3333V17.3333'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M29.3333 13.3333H24C20 13.3333 18.6666 12 18.6666 7.99996V2.66663L29.3333 13.3333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18.3466 24.3467C15.2132 24.5734 15.2132 29.1067 18.3466 29.3334H25.7599C26.6532 29.3334 27.5332 29 28.1866 28.4C30.3866 26.48 29.2132 22.64 26.3199 22.28C25.2799 16.0267 16.2399 18.4 18.3732 24.36'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default ManageLargeFileSvg;
