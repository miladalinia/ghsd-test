import { cssVar, respondTo } from '@ghased-portal/utils';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  /* width: 100%; */
  height: calc(100vh - var(${cssVar.appBarHeight}) - (${'5.6rem'}));
  background-color: ${(p) => p.theme.surface};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.4rem 4.8rem 3.2rem;
  gap: 4.8rem;
  border-radius: 8px;
  & .not-found-svg {
    width: 30%;
    height: 30%;
    margin-top: 5rem;

    ${respondTo.down('sm')} {
      width: 100%;
    }
  }
`;

export const ErrorDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  & .error-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(p) => p.theme.textSecondary};
  }
  & .not-found-title {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${(p) => p.theme.textSecondary};
  }
  & .not-found-btns {
    display: flex;
    gap: 2.4rem;
  }
  & .home-btn {
    min-width: 15rem;
  }
  & .back-btn {
    min-width: 17rem;
    border-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
  }
`;
