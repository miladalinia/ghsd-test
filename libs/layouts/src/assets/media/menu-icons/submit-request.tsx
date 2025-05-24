import { MenuIconProps } from '@ghased-portal/types';

function SubmitRequestSvg({ fill = '#30398B', width = 40, height = 40 }: MenuIconProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 25 24' fill='none'>
      <path
        d='M13.9267 3.59997L5.71666 12.29C5.40666 12.62 5.10666 13.27 5.04666 13.72L4.67666 16.96C4.54666 18.13 5.38666 18.93 6.54666 18.73L9.76666 18.18C10.2167 18.1 10.8467 17.77 11.1567 17.43L19.3667 8.73997C20.7867 7.23997 21.4267 5.52997 19.2167 3.43997C17.0167 1.36997 15.3467 2.09997 13.9267 3.59997Z'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.5567 5.05005C12.9867 7.81005 15.2267 9.92005 18.0067 10.2'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3.66669 22H21.6667'
        stroke={fill}
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default SubmitRequestSvg;
