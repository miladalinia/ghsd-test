import styled from 'styled-components';
import { AutoComplete, Input } from 'antd';

export const AutoCompleteWrapper = styled(AutoComplete)`
  .ant-select-selection-search-input {
    font-size: 1.4rem;
  }
  .ant-select-selection-search .ant-input {
    height: 40px;
  }
`;

export const Title = styled.span`
  color: ${(p) => p.theme.textPrimary};
  padding: 1rem 1rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .title {
    font-size: 1.3rem;
    color: ${(p) => p.theme.textPrimary};
    font-weight: bold;
  }

  i {
    font-size: 4rem;
    color: ${(p) => p.theme.textTerritory};
    margin-top: 0.5rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.textSecondary};
  font-size: 1.2rem;
  font-weight: bold;

  .item__top-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    .item__value {
      flex-grow: 1;
    }

    .item__label {
      flex-grow: 1;
      text-align: end;
      padding: 0 1rem;
    }
  }

  .item__bottom-row {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;
