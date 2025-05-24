import styled from 'styled-components';
import { respondTo } from '@ghased-portal/utils';

export const Wrapper = styled.div`
  .ant-input-suffix {
    color: ${(p) => p.theme.border};
  }

  .ant-input-affix-wrapper-lg {
    padding-top: 0.83rem;
    padding-bottom: 0.83rem;
  }

  // .ant-input-affix-wrapper-lg {
  //   padding-top: 0.4rem;
  //   padding-bottom: 0.4rem;
  //
  //   ${respondTo.down('md')} {
  //     padding-top: 0.8rem;
  //     padding-bottom: 0.8rem;
  //   }
  // }
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

export const Title = styled.span`
  color: ${(p) => p.theme.textPrimary};
  padding: 1rem 1rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const StarIcon = styled.span<any>`
  font-size: 1.8rem;
  color: ${(p) => (p.fav ? 'gold' : 'inherit')};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.textSecondary};
  //padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;

  .item__top-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    .item__title {
    }

    .item__balance {
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

export const BalanceText = styled.span<any>`
  font-size: 1.2rem;
  color: ${(p) => (p.isLessThanZero ? p.theme.error : p.theme.textSecondary)};
  font-weight: normal;
`;
