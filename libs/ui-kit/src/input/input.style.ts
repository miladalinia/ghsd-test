import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const InputWrapper = styled<any>(AntInput)`
  & .ant-input-group-addon {
    padding-left: 6px;
    padding-right: 6px;
    font-size: 1.2rem;
  }

  & .ant-input-suffix {
    margin-block-start: 3px;
  }

  & .ant-input:-webkit-autofill,
  & .ant-input:-webkit-autofill:hover,
  & .ant-input:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px ${(p) => p.theme.surface} inset !important;
    -webkit-box-shadow: 0 0 0 50px ${(p) => p.theme.surface} inset !important;
    -webkit-text-fill-color: ${(p) => p.theme.textPrimary} !important;
    caret-color: ${(p) => p.theme.textPrimary} !important;
  }
`;

export const PasswordWrapper = styled<any>(AntInput.Password)``;

export const TextAreaWrapper = styled<any>(AntInput.TextArea)``;

export const SearchWrapper = styled<any>(AntInput.Search)``;

export const GroupWrapper = styled<any>(AntInput.Group)``;

export const InputMoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
`;
