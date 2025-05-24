import { Box } from '../../box/box';
import { Button } from '../../button/button';
import { useTr } from '@ghased-portal/translation';

import { ReactComponent as NotFoundSVG } from '../../assets/media/connectivity.svg';

import * as S from './bottomSheet-error-message.style';

export const BottomSheetErrorMessage = ({ message, loading, reTryHandler }) => {
  const [t] = useTr();
  return (
    <S.ErrorMessageContainer flexDirection='column'>
      <Box>
        <NotFoundSVG />
      </Box>
      <Box className='text-box' textAlign='center' flexDirection='column' margin={'1rem'}>
        <span>{t('common.error_message_title')}</span>
        <span>{t(message.txt)}</span>
      </Box>
      <Button type='primaryOutlined' icon={<i className='ri-refresh-line' />} loading={loading} onClick={reTryHandler}>
        {t('retry')}
      </Button>
    </S.ErrorMessageContainer>
  );
};
