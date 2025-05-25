import styled from 'styled-components';
import { Alert } from '../alert/alert';
import { respondTo } from '@ghased-portal/utils';

export const StyledContainer = styled(Alert)`
  padding: 1.6rem;

  .ant-alert-message {
    margin-bottom: 0;
    font-size: 1.6rem;
    font-weight: 500;

    ${respondTo.down('md')} {
      font-size: 1.5rem;
    }
  }

  .ant-alert-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ant-alert-description {
    display: flex;
    flex-direction: column;
  }

  .ant-alert-icon {
    margin-inline-end: 0.8rem;
    ${respondTo.down('md')} {
      font-size: 18px;
    }
  }

  .ant-alert-close-icon {
    padding-top: 0.5rem;
  }

  .message-box__link {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1;
    color: ${(p) => {
      switch (p.type) {
        case 'success':
          return p.theme.primary;
        case 'error':
          return p.theme.error;
        case 'warning':
          return p.theme.warning;
        case 'info':
          return p.theme.info;
        default:
          return 'inherit';
      }
    }} !important;

    ${respondTo.down('md')} {
      font-size: 1.5rem;
    }
    .link-icon {
      font-size: 18px;
      display: inline-flex;
    }
  }

  .message-box__sub-errors {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-height: 13rem;
    overflow-y: hidden;
    transition: max-height 0.5s ease-out;
    padding-inline-start: 0;
    padding-inline-end: 0.3rem;

    .message-box__sub-error-item {
      font-size: 1.2rem;
      list-style-position: inside;
    }
  }

  .message-box__sub-errors.expanded {
    max-height: 20rem;
    overflow-y: auto;
  }
`;

export const ToggleButton = styled.button`
  color: ${({ theme }) => theme.primary};
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;

  .message-box__toggle-btn-text {
    margin-inline-end: 0.4rem;
  }
`;
