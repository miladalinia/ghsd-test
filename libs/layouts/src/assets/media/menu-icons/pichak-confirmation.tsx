import { MenuIconProps } from '@ghased-portal/types';

function PichakConfirmationSvg({ fill = '#30398B', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
      <path
        d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.5901 13.3398H14.8301V9.09985'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14.83 13.3399L9.17004 7.67993'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 16.51C9.89 17.81 14.11 17.81 18 16.51'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default PichakConfirmationSvg;
