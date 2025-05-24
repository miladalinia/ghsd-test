import { MenuIconProps } from '@ghased-portal/types';

function newsManagementSvg({ fill = '#585959', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path d='M16 8.58667V13.0267' stroke='#2A539E' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' />
      <path
        d='M16.0267 2.66667C11.12 2.66667 7.14665 6.64 7.14665 11.5467V14.3467C7.14665 15.2533 6.77332 16.6133 6.30665 17.3867L4.61332 20.2133C3.57332 21.96 4.29332 23.9067 6.21332 24.5467C12.5867 26.6667 19.48 26.6667 25.8533 24.5467C27.6533 23.9467 28.4267 21.84 27.4533 20.2133L25.76 17.3867C25.2933 16.6133 24.92 15.24 24.92 14.3467V11.5467C24.9067 6.66667 20.9067 2.66667 16.0267 2.66667Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
      />
      <path
        d='M20.4401 25.0933C20.4401 27.5333 18.4401 29.5333 16.0001 29.5333C14.7867 29.5333 13.6667 29.0267 12.8667 28.2267C12.0667 27.4267 11.5601 26.3067 11.5601 25.0933'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
      />
    </svg>
  );
}

export default newsManagementSvg;
