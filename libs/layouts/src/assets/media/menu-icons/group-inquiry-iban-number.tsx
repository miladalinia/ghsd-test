import { MenuIconProps } from '@ghased-portal/types';

function GroupInquiryIbanNumberSvg({ fill = '#30398B', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M14.3334 5H20.3334' stroke={fill} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M14.3334 8H17.3334' stroke={fill} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path
        d='M21.3334 11.5C21.3334 16.75 17.0834 21 11.8334 21C6.58337 21 2.33337 16.75 2.33337 11.5C2.33337 6.25 6.58337 2 11.8334 2'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22.3334 22L20.3334 20'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default GroupInquiryIbanNumberSvg;
