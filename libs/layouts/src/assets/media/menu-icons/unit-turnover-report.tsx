import { MenuIconProps } from '@ghased-portal/types';

function UnitTurnoverReportSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M2.66675 2.66669V25.3334C2.66675 27.5467 4.45341 29.3334 6.66675 29.3334H29.3334'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.66675 22.6666L12.7867 15.52C13.8001 14.3467 15.6001 14.2666 16.6934 15.3733L17.9601 16.64C19.0534 17.7333 20.8534 17.6666 21.8667 16.4933L28.0001 9.33331'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default UnitTurnoverReportSvg;
