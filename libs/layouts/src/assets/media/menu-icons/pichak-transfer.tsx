import { MenuIconProps } from '@ghased-portal/types';

function PichakTransferSvg({ fill = '#30398B', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 25 24' fill='none'>
      <path
        d='M9.33337 22H15.3334C20.3334 22 22.3334 20 22.3334 15V9C22.3334 4 20.3334 2 15.3334 2H9.33337C4.33337 2 2.33337 4 2.33337 9V15C2.33337 20 4.33337 22 9.33337 22Z'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10.9235 7.67993H15.1635V11.9299'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.1634 7.67993L9.50342 13.3399'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.33337 16.51C10.2234 17.81 14.4434 17.81 18.3334 16.51'
        stroke={fill}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default PichakTransferSvg;
