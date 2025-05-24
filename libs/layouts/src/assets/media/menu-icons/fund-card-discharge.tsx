import { MenuIconProps } from '@ghased-portal/types';

function FundCardDischargeSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 25 24' fill='none'>
      <path
        d='M2.66675 8.5H15.1667'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.66675 16.5H8.66675'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.1667 16.5H15.1667'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22.6667 14.03V16.11C22.6667 19.62 21.7767 20.5 18.2267 20.5H7.10675C3.55675 20.5 2.66675 19.62 2.66675 16.11V7.89C2.66675 4.38 3.55675 3.5 7.10675 3.5H15.1667'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20.6667 9.5V3.5L22.6667 5.5'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20.6667 3.5L18.6667 5.5'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default FundCardDischargeSvg;
