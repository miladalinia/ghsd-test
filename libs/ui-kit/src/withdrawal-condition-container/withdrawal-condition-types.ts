import { FormInstance } from 'antd';

export interface WithdrawalConditionModel {
  id: string;
  conditionNumber?: number;
  conditionId: number;
  amount: number;
  minRequiredSigns: number;
  expireDate: string;
  signatories: any[];
}
export interface WithdrawalConditionProps {
  form?: FormInstance;
  conditions: WithdrawalConditionModel[];
  selectedCondition?: WithdrawalConditionModel;
  onConditionChange?: (selected: WithdrawalConditionModel) => void;
  disabled?: boolean;
  isCurrency?: boolean;
  currencyName?: string;
  onFinish?: (values) => void;
}
