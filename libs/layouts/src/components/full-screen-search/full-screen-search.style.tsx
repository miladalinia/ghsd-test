import { Modal } from 'antd';
import styled from 'styled-components';
import { hideScrollbar } from '@ghased-portal/utils';

export const ModalWrapper = styled(Modal)`
  top: 0;
  bottom: 0;
  height: 100%;
  padding: 0;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;

  .modal-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.6rem;

    .modal-header__close {
      min-width: 2.25rem;
    }
  }

  .modal-body {
    flex: 1;
    overflow: auto;
    margin-bottom: 5rem;
    ${hideScrollbar()}

    .modal-body_search {
      position: sticky;
      top: 0;
      right: 0;
      height: 7rem;
      background-color: ${(props) => props.theme.surface};
      z-index: var(--appbar-z-index);
    }

    .menu-search-input {
      height: 40px;
      border-color: ${(props) => props.theme.primary};
    }
  }

  .ant-modal-content {
    border-radius: 0;
    padding: 2rem;
  }
`;
