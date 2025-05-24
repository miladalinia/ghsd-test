import { respondTo } from '@ghased-portal/utils';
import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${(props) => props.theme.surface};
  padding: 2.4rem;
  box-sizing: border-box;
  ${respondTo.down('sm')} {
    padding: 4rem 0 0;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .menu__group-label {
    font-weight: 700;
    font-size: 1.75rem;

    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    position: relative;
    color: ${(props) => props.theme.textPrimary};

    &::before {
      content: '';
      flex-grow: 1;
      border-bottom: 1px dashed ${(props) => props.theme.border};
      margin-inline-start: 0.8rem;
    }
  }

  .menu__group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 2.4rem;
    margin-bottom: 2.4rem;

    .menu-group-item_label {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      margin-top: 1.2rem;
      line-height: 1.5;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.cardColor};
`;

export const MenuIconStyles = css`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 10rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.cardColor};
`;

export const MenuIcon = styled.div`
  ${MenuIconStyles}
  justify-content: center;
`;

export const MenuItemBottomSheetContainer = styled.div<{ isBatch: boolean }>`
  ${MenuIconStyles}
  padding: 1rem;
  justify-content: ${(p) => (p.isBatch ? 'flex-start' : 'center')};

  .bottom-sheet__item-label {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 1.5rem;
    margin-top: ${(p) => (p.isBatch ? 0 : 'auto')};
    line-height: 1.5;
    text-align: center;
  }
  svg {
    flex-grow: 1;
  }
`;

export const BottomSheetContainer = styled.div<{ count: number }>`
  .bottom-sheet__header {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .bottom-sheet__description {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${(props) => props.theme.textPrimary};
  }

  .bottom-sheet-menu__item {
    display: grid;
    grid-template-columns: ${({ count }) =>
      count === 2 ? 'repeat(2, 1fr)' : count % 3 === 0 ? 'repeat(3, 1fr)' : 'repeat(auto-fill, minmax(115px, 1fr))'};
    gap: 2rem;
    margin-top: 3rem;
    justify-content: center;
  }
`;
