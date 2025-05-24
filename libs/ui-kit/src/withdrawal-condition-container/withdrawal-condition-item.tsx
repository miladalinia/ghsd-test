import { Radio } from 'antd';
import { useTr } from '@ghased-portal/translation';
import { addThousandSeparator, getValueOrDash } from '@ghased-portal/utils';
import { Box } from '../box/box';

import { currencyConvertor, getSpecifiedSignatories } from './util';

import * as S from './withdrawal-condition-item.style';

const WithdrawalConditionItem = (props) => {
  const { row, index, activeCondition, currencyName } = props;
  const [t] = useTr();

  const conditionId = row.conditionId ?? row.conditionNumber;
  const activeId = activeCondition?.conditionId ?? activeCondition?.conditionNumber;
  const isActive = conditionId === activeId;
  const maxAmount = row.maxAmount ?? row.amount;
  const minVariantSigns = row.noneFixedSignaturesCount ?? row.minRequiredSigns;
  const expireDate = row.validityEndDate ?? row.expireDate;
  const signatories = row.signatureOwners ?? row.signatories;

  const currency = getValueOrDash(currencyConvertor(t, currencyName));

  return (
    <S.WithdrawalConditionItemContainer active={isActive} key={conditionId}>
      <S.RadioContent>
        <Radio value={conditionId}>
          {t('withdrawalcondition.withdrawal_conditions')} {index + 1}
        </Radio>

        <S.ConditionItemBaseInfo active={isActive}>
          <Box className='item'>
            <span className='inner_item'>{t('withdrawalcondition.max_transfer_amount')}</span>
            <span className='inner_item inner_item_value'>{`${addThousandSeparator(maxAmount)} ${currency}`}</span>
          </Box>

          <Box className='item'>
            <span className='inner_item'>{t('withdrawalcondition.expiration_date')}</span>
            <span className='inner_item inner_item_value'> {new Date(expireDate).toLocaleDateString('fa-IR')}</span>
          </Box>
          <Box className='item'>
            <span className='inner_item'>{t('withdrawalcondition.min_variant_signs')}</span>
            <span className='inner_item inner_item_value'> {minVariantSigns}</span>
          </Box>
        </S.ConditionItemBaseInfo>

        <S.ConditionItemSignatories>
          <Box className='signatories'>{t('withdrawalcondition.main_signatories')}:</Box>
          {getSpecifiedSignatories(signatories, true)}
        </S.ConditionItemSignatories>

        <S.ConditionItemSignatories>
          <Box className='signatories'>{t('withdrawalcondition.variant_signatories')}:</Box>
          {getSpecifiedSignatories(signatories, false)}
        </S.ConditionItemSignatories>
      </S.RadioContent>
    </S.WithdrawalConditionItemContainer>
  );
};

export default WithdrawalConditionItem;
