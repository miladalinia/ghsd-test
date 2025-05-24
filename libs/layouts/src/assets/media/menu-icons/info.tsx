import { MenuIconProps } from '@ghased-portal/types';

function InfoSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 32 32' fill='none'>
      <path
        d='M28.1067 11.4401V20.56C28.1067 22.0533 27.3067 23.4401 26.0133 24.2001L18.0933 28.7734C16.8 29.5201 15.2 29.5201 13.8933 28.7734L5.97333 24.2001C4.68 23.4534 3.88 22.0667 3.88 20.56V11.4401C3.88 9.94672 4.68 8.56 5.97333 7.8L13.8933 3.22667C15.1867 2.48001 16.7867 2.48001 18.0933 3.22667L26.0133 7.8C27.3067 8.56 28.1067 9.93338 28.1067 11.4401Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 14.6667C17.7158 14.6667 19.1067 13.2757 19.1067 11.56C19.1067 9.84421 17.7158 8.45337 16 8.45337C14.2842 8.45337 12.8933 9.84421 12.8933 11.56C12.8933 13.2757 14.2842 14.6667 16 14.6667Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21.3333 22.2133C21.3333 19.8133 18.9467 17.8667 16 17.8667C13.0533 17.8667 10.6667 19.8133 10.6667 22.2133'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default InfoSvg;
