import { useTheme } from 'styled-components';

import { ITheme } from '@ghased-portal/types';

const useAppTheme = (): ITheme => {
  const theme = useTheme();
  return theme as ITheme;
};

export default useAppTheme;
