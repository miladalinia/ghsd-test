import styled, { css } from 'styled-components';
import { Layout, Switch as AntSwitch, Dropdown as AntDropdown } from 'antd';
import { cssVar, respondTo } from '@ghased-portal/utils';

const { Header } = Layout;

export const AppBar = styled(Header)<{ themeColor: string }>`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: sticky; /*fixed*/
  height: var(${cssVar.appBarHeight});
  top: 0;
  left: 0;
  padding: 2rem 4rem;
  z-index: var(${cssVar.appbarZIndex});
  color: ${(p) => p.theme.textPrimary};
  background-color: ${(p) => p.theme.surface};
  line-height: 1.5;
  border-bottom: 0.5px solid
    ${(props) => (props.themeColor === 'dark' ? 'rgba(120, 120, 120, 0.3)' : 'rgba(198, 199, 199, 0.3)')};

  span[role='img'] {
    font-size: 2.4rem;
  }

  ${respondTo.down('md')} {
    // display: inline-flex;
    // margin: 1rem;
    justify-content: space-between;
    padding: 2rem 2rem;
  }

  .menu-toggle-wrapper {
    display: none;
    font-size: 3rem;
    color: ${(p) => p.theme.textPrimary};

    &:hover {
      color: ${(p) => p.theme.onPrimary} !important;
    }

    ${respondTo.down('md')} {
      display: inline-flex;
      margin: 1rem;
    }
  }

  .appbar-title-logo-date {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: normal;

    svg {
      width: 3.6rem;
      height: 3.6rem;
      margin-right: 1.3rem;
      color: ${(p) => p.theme.primary};
    }
  }

  .appbar-title-bank-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;

    img {
      width: 15rem;
      height: 3.2rem;
      object-fit: scale-down;
    }
  }

  .appbar-item {
    margin-left: 1.6rem;
    color: ${(p) => p.theme.textPrimary};
    //width: 2.4rem;
    //height: 2.4rem;
    button {
      color: inherit !important;
      font-size: 2.4rem !important;
      line-height: 0;
    }
  }

  .appbar-item:last-child {
    //margin-right: 3.2rem;
  }

  .appbar__action {
    display: flex;

    .appbar__menu-icon {
      font-size: 2.4rem !important;
    }
  }

  .appbar__return-button {
    font-weight: 500;
    line-height: 1.5;
    padding: 4px;
  }

  ${respondTo.down('md')} {
    .appbar__action {
      justify-content: space-between;
      width: 7rem;
      gap: 1.5rem;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  margin-left: 1.6rem;
  background-color: ${(p) => p.theme.textPrimary};
`;
