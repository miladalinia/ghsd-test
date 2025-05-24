import { Dropdown } from 'antd';
import styled from 'styled-components';
import { respondTo, withOpacity } from '@ghased-portal/utils';

export const AppBarMenuContainer = styled<any>(Dropdown)`
  padding: 0 !important;

  color: ${(p) => p.theme[p.color]};

  &:hover {
    color: ${(p) => p.theme[p.color]} !important;
  }

  .appbar-menu-icon {
    font-size: 3rem !important;
  }

  ${respondTo.down('md')} {
    .dropdown-button {
      width: 2.5rem;
    }
  }
`;

export const DropdownRender = styled.div`
  min-width: 17.5rem;

  li {
    color: ${(p) => p.theme.textSecondary} !important;
    font-weight: 500 !important;
  }

  .multiple-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .second-item {
    margin-left: 5rem;
  }

  .ant-btn {
    font-size: 2.5rem;
  }

  .ant-dropdown-menu-item-divider {
    background-color: ${(p) => withOpacity(p.theme.divider, 50)} !important;
  }
`;
