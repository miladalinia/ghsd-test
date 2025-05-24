import { MenuIconProps } from '@ghased-portal/types';

function AccountAnalysisReportSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M24.4267 16C27.8933 16 29.3333 14.6666 28.0533 10.2933C27.1867 7.34664 24.6533 4.81331 21.7067 3.94664C17.3333 2.66664 16 4.10664 16 7.57331V11.4133C16 14.6666 17.3333 16 20 16H24.4267Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M26.6667 19.6C25.4267 25.7733 19.5067 30.2533 12.7733 29.16C7.71999 28.3467 3.65332 24.28 2.82665 19.2267C1.74666 12.52 6.19999 6.60001 12.3467 5.34668'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default AccountAnalysisReportSvg;
