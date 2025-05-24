import { MenuIconProps } from '@ghased-portal/types';

function AccumulatedBalanceReportSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path d='M9.1731 24.2V21.44' stroke='#2A539E' stroke-width='2' stroke-linecap='round' />
      <path d='M16 24.2V18.68' stroke='#2A539E' stroke-width='2' stroke-linecap='round' />
      <path d='M22.8269 24.2V15.9067' stroke='#2A539E' stroke-width='2' stroke-linecap='round' />
      <path
        d='M22.8264 7.79999L22.2131 8.51999C18.8131 12.4933 14.2531 15.3067 9.1731 16.5733'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M18.9199 7.79999H22.8266V11.6933'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.0001 29.3334H20.0001C26.6667 29.3334 29.3334 26.6667 29.3334 20V12C29.3334 5.33335 26.6667 2.66669 20.0001 2.66669H12.0001C5.33341 2.66669 2.66675 5.33335 2.66675 12V20C2.66675 26.6667 5.33341 29.3334 12.0001 29.3334Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default AccumulatedBalanceReportSvg;
