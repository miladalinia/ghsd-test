import { MenuIconProps } from '@ghased-portal/types';

function AccountAssignmentSvg({ fill = '#30398B', width, height }: MenuIconProps) {
  return (
    <svg width={width} height={height} viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.79997 2.66663H16.6667C17.6533 2.66663 18.4666 3.47997 18.4666 4.46663V6.43994C18.4666 7.15994 18.0133 8.0533 17.5733 8.50663L13.7067 11.92C13.1734 12.3733 12.8133 13.2666 12.8133 13.9866V17.8533C12.8133 18.3866 12.4533 19.1066 12 19.3866L10.7467 20.2C9.57333 20.92 7.95996 20.1066 7.95996 18.6666V13.9066C7.95996 13.2799 7.59999 12.4666 7.23999 12.0133L3.82666 8.41329C3.37333 7.95996 3.01335 7.15995 3.01335 6.61328V4.54663C3.00001 3.47996 3.8133 2.66663 4.79997 2.66663Z'
        stroke='#2A539E'
        stroke-width='2'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3 16V20C3 26.6667 5.66667 29.3334 12.3333 29.3334H20.3333C27 29.3334 29.6667 26.6667 29.6667 20V12C29.6667 7.84004 28.6266 5.2267 26.2133 3.8667C25.5333 3.48003 24.1734 3.18669 22.9334 2.98669'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M17.6666 17.3334H24.3333'
        stroke='#2A539E'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M15 22.6666H24.3333' stroke='#2A539E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
}

export default AccountAssignmentSvg;
