import styled from 'styled-components';
import { cssVar, respondTo } from '@ghased-portal/utils';
import { Box } from '../box/box';

export const WithdrawalConditionItemContainer = styled<any>(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  border-radius: var(${cssVar.radius});
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
  padding: 1.6rem 2.4rem;
  margin-bottom: 2.4rem;
  border: 1px solid ${(p) => (p.active === true ? p.theme.primary : p.theme.border)};
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${(p) => (p.active ? `${p.theme.primary}14` : 'transparent')}; // 8% opacity overlay
    border-radius: var(${cssVar.radius});
    pointer-events: none;
    z-index: 1;
  }

  ${respondTo.down('lg')} {
    padding: 1.2rem;
  }
`;

export const RadioContent = styled<any>(Box)`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ConditionItemBaseInfo = styled<any>(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  background-color: ${(p) => p.theme.cardColor};
  margin: 1.6rem 0px;
  padding: 0.8rem 1.6rem;
  gap: 0.8rem;

  ${respondTo.down('lg')} {
    flex-direction: column;
    margin-top: 1.6rem;
    background-color: transparent;
  }

  .item {
    justify-content: center;
    font-size: 1.4rem;
    font-weight: normal;
    color: ${(p) => p.theme.textSecondary};
    column-gap: 0.8rem;
    flex-wrap: wrap;

    .inner_item {
      width: max-content;
      color: ${(p) => p.theme.textSecondary};
    }

    .inner_item_value {
      font-weight: 500;
      color: ${(p) => p.theme.textPrimary};
    }

    ${respondTo.down('xxl')} {
      flex-direction: column;
      align-items: center;
    }

    ${respondTo.down('lg')} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const ConditionItemSignatories = styled<any>(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(p) => p.theme.textSecondary};
  padding: 0.8rem 1.6rem;
  margin-bottom: 0.8rem;
  border-radius: var(${cssVar.radius});
  .signatories {
    width: fit-content;
    font-weight: normal;
  }

  ${respondTo.down('lg')} {
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start;
    background-color: ${(p) => `${p.theme.cardColor}`};
  }
  ${respondTo.down('lg')} {
    position: relative;
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start;
  }
`;
