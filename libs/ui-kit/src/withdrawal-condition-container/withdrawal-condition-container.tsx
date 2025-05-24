import { FC, useEffect, useState } from 'react';
import { Form, Radio } from 'antd';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';

import { WithdrawalConditionModel, WithdrawalConditionProps } from './withdrawal-condition-types';
import WithdrawalConditionItem from './withdrawal-condition-item';

import * as S from './withdrawal-condition-container.style';

export const WithdrawalConditionContainer: FC<WithdrawalConditionProps> = ({
  form: externalForm,
  conditions,
  selectedCondition,
  onConditionChange,
  disabled = false,
  isCurrency = false,
  currencyName = 'RIAL',
  onFinish,
}) => {
  const [form] = Form.useForm();
  const currentForm = externalForm ?? form;
  const [activeCondition, setActiveCondition] = useState<WithdrawalConditionModel | undefined>(
    () => selectedCondition ?? conditions?.[0]
  );

  useEffect(() => {
    if (activeCondition) {
      const fieldValue = isCurrency ? activeCondition.conditionId : activeCondition.conditionNumber;
      currentForm.setFieldsValue({
        radioGroup: fieldValue,
      });
      onConditionChange?.(activeCondition);
    }
  }, [activeCondition, isCurrency, currentForm]);

  const handleChange = (e) => {
    const value = e.target.value;
    const selected = isCurrency
      ? conditions.find((c) => c.conditionId === value)
      : conditions.find((c) => c.conditionNumber === value);
    if (selected) {
      setActiveCondition(selected);
    }
  };

  return (
    <>
      <ScrollToTop />
      <S.WithdrawalConditionContainer>
        <Form
          form={currentForm}
          name='withdrawal-condition'
          validateMessages={{ required: '' }}
          requiredMark={false}
          initialValues={{ radioGroup: isCurrency ? activeCondition?.conditionId : activeCondition?.conditionNumber }}
          onFinish={onFinish}
        >
          <Form.Item name='radioGroup'>
            <Radio.Group onChange={handleChange} className='radio-group' disabled={disabled}>
              {conditions
                ? conditions.map((row, index) => {
                    return (
                      <WithdrawalConditionItem
                        activeCondition={activeCondition}
                        row={row}
                        index={index}
                        key={row.id}
                        currencyName={currencyName}
                      />
                    );
                  })
                : null}
            </Radio.Group>
          </Form.Item>
        </Form>
      </S.WithdrawalConditionContainer>
    </>
  );
};
