import styled from 'styled-components';
import { cssVar, hideScrollbar, respondTo } from '@ghased-portal/utils';

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  background-color: transparent;
  //gap: 2.4rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0.8rem 0.4rem 1.6rem 0.4rem; */
  color: ${(props) => props.theme.textPrimary};
  //background-color: ${(props) => props.theme.surface};
  //min-height: 8rem;
  border-radius: var(${cssVar.radius});
  //box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.16);
  gap: 0.4rem;
  margin: 1rem 0;
  ${respondTo.down('md')} {
    margin: 3rem;
  }
`;

export const HeaderTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  // padding: 1.3rem;
  color: ${(props) => props.theme.textPrimary};
  //background-color: ${(props) => props.theme.surface};
  // min-height: 8rem;
  // border-radius: 0.4rem;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  margin-left: 1.7rem;

  svg {
    font-size: 2.2rem;
  }
`;

export const HeaderTitle = styled.span<{ lastTitle: boolean }>`
  font-weight: ${(p) => (p.lastTitle ? 'bold' : '400')};
  font-size: 1.8rem;
  color: ${(p) => (p.lastTitle ? p.theme.primary : p.theme.textTerritory)};
  margin-bottom: 0.5rem;
`;

export const HeaderMessage = styled.p`
  width: 100%;
  font-size: 1.5rem;
  font-weight: normal;
  color: ${(props) => props.theme.textSecondary};
  margin: 0;
  line-height: 1.5;
  // margin-left: 4.7rem;
`;

export const Icon = styled.i`
  font-size: 1.8rem;
  color: ${(props) => props.theme.textTerritory};
  margin: 0 0.4rem;
`;

export const BodyContainer = styled.div<{ $padding; overflow_x }>`
  width: 100%;
  min-height: 30rem;
  //padding: ${(props) => props.$padding};
  //background-color: ${(props) => props.theme.surface};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-x: ${(props) => props.overflow_x};
  /* footer {
    background-color: green;
    margin: 0 -3rem;
  }*/

  // border: 1px solid ${(props) => props.theme.border}; //#dbdee1; //fixme: get it's color fr
  border-radius: var(${cssVar.radius});

  ${hideScrollbar()}
`;
