import styled from 'styled-components';
import { Divider, Layout } from 'antd';
import { cssVar, respondTo } from '@ghased-portal/utils';
import { Button } from '@ghased-portal/ui-kit';

const { Header } = Layout;

export const AppBar = styled(Header)<any>`
  box-shadow: none;
  &.scrolled {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  .ant-space {
    align-items: center;
  }
  display: flex;
  align-items: center;
  overflow: hidden;
  position: sticky; /*fixed*/
  height: var(${cssVar.appBarHeight});
  top: 0;
  left: 0;
  padding: 2rem 10rem;
  z-index: var(${cssVar.appbarZIndex});
  color: ${(p) => (p.primary ? p.theme.onPrimary : p.theme.textSecondary)};
  background-color: ${(p) => (p.primary ? p.theme.appbar : p.theme.surface)};
  line-height: 1.5;
  ${respondTo.down('lg')} {
    padding: 2.4rem 3.2rem 2.4rem 0rem;
    :where(.css-dev-only-do-not-override-1m54kua).ant-space-gap-col-middle {
      column-gap: 0.8rem;
    }
  }

  ${respondTo.down('md')} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 2rem 2.4rem;
  }

  .appbar-bank-logo {
    width: 15rem;
    height: 3.2rem;
    object-fit: scale-down;
  }

  .logout-item {
    button {
      color: inherit !important;
      font-size: 2.4rem;
      line-height: 0;
      border-radius: 10rem;
    }
  }

  .landing-nav {
    //width: 100%;
    //display: flex;
    //padding: 1.4rem 10rem;
    //align-items: center;
    //justify-content: center;
    //flex-wrap: wrap-reverse;
    font-weight: 500;
    color: ${(p) => (p.primary ? p.theme.onPrimary : p.theme.textSecondary)};

    //> * {
    //  margin: 1rem 1.2rem;
    //}

    a {
      text-decoration: none;
      // color: ${(p) => p.theme.onPrimary};
      color: ${(p) => (p.primary ? p.theme.onPrimary : p.theme.textSecondary)};
    }
  }
`;

export const RegisterButton = styled(Button)`
  min-width: 10.4rem;
  border: 1px solid ${(p) => p.theme.primary};
  border-radius: 3rem !important;
  width: 16.4rem;
  height: 4rem;
  ${respondTo.down('lg')} {
    height: 4rem !important;
    font-size: 1.4rem !important;
  }
  .arrow-left {
    display: flex;
    vertical-align: middle;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`;

export const ButtonStyled = styled(Button)`
  border-radius: '10rem';
  color: ${(p) => p.theme.primary};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 !important;
`;
export const ButtonDrawer = styled(Button)`
  font-size: '1.4rem';
  display: 'flex';
  justify-content: 'center';
  color: ${(p) => p.theme.primary};
  width: 100%;
  height: 4rem;
`;
export const DividerStyled = styled(Divider)`
  border-color: ${(p) => p.theme.border};
  height: 3.8rem;
`;
