import { MenuIconProps } from '@ghased-portal/types';

function ActivityLogSvg({ fill = '#585959', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M13.9866 2.97333L7.33329 5.46666C5.79996 6.04 4.54663 7.85333 4.54663 9.49333V19.4C4.54663 20.9733 5.58665 23.04 6.85331 23.9867L12.5866 28.2667C14.4666 29.68 17.5599 29.68 19.4399 28.2667L25.1733 23.9867C26.44 23.04 27.4799 20.9733 27.4799 19.4V9.49333C27.4799 7.85333 26.2266 6.04 24.6933 5.46666L18.04 2.97333C16.9066 2.56 15.0933 2.56 13.9866 2.97333Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 20.6667C18.9455 20.6667 21.3333 18.2789 21.3333 15.3333C21.3333 12.3878 18.9455 10 16 10C13.0544 10 10.6666 12.3878 10.6666 15.3333C10.6666 18.2789 13.0544 20.6667 16 20.6667Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.3333 13.6667V14.9067C16.3333 15.3733 16.0933 15.8133 15.68 16.0533L14.6666 16.6667'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default ActivityLogSvg;
