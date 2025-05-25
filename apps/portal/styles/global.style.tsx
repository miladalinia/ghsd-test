import { createGlobalStyle } from 'styled-components';

import { breakpoints, cssVar, respondTo } from '@ghased-portal/utils';
import { Direction } from '@ghased-portal/types';

const GlobalStyle = createGlobalStyle<any>`
  :root {
    ${cssVar.appBarHeight}: 6.4rem;
    ${cssVar.drawerWidth}: 30rem;
    ${cssVar.mainContentMargin}: var(${cssVar.drawerWidth});
    ${cssVar.drawerSideGap}: 10rem;
    ${cssVar.verticalGap}: 2.8rem;
    ${cssVar.radius}: 0.6rem;
    ${cssVar.appbarZIndex}: 1000;
    // find a better name
    ${cssVar.marginBt}:5.6rem;
  }

  ${respondTo.down('md')} {
    :root {
      ${cssVar.appBarHeight}: 7rem;
      ${cssVar.mainContentMargin}: 0;

    }
  }

  ${respondTo.down('xl')} {
    :root {
      ${cssVar.drawerSideGap}: 3.2rem;
    }
  }

  ${respondTo.down('lg')} {
    :root {
      ${cssVar.drawerSideGap}: 2.4rem;
    }
  }


  @media only screen and (min-width: 150em) {
    :root {
      ${cssVar.drawerSideGap}: 10vw;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 1.2rem;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background};
  }

  *::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.border};
      //box-shadow: inset 0 0 0 0.4rem ${(props) => props.theme.background};
  }

  * {
    scrollbar-width: thin;
  }

  html {
    font-size: 62.5%; // font-size = 10px; 1rem = 10px, 10px/16px = 62.5% or 10px is 0.625em
    box-sizing: border-box;

    ${respondTo.down('md')} {
      font-size: 50%; //  font-size = 8px; 50% of 1em [1em = 16px]
    }
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => (props.theme.direction === Direction.RTL ? 'iransans' : 'Tahoma')}, sans-serif;
    font-size: 1.4rem;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textPrimary};
    /*! @noflip */
    direction: ${(props) => (props.theme.direction === Direction.RTL ? Direction.RTL : Direction.LTR)};
  }

  html body {
    /* modal issue */
    //overflow-y: auto !important;
    width: 100% !important;
  }

  .ant-picker-input > input, .ant-picker-header * {
    font-family: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.textPrimary} !important;
    //background-color: #d92525 !important;
    //transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 50px ${(props) =>
      props.theme.surface} inset !important; /* Change the color to your own background color */

  }

  .ant-modal-confirm-content {
    display: flex;
    width: 100%;
  }

  .anticon {
    color: ${(props) => props.theme.iconPrimary};
  }

  .ant-form-large .ant-form-item .ant-form-item-label > label {
    height: auto;
    font-weight: 500;
  }

  .ant-form-item-explain {
    font-size: 1.2rem !important;
    //margin-bottom: 1rem;
  }

  .ri-2x {
    font-size: 2rem;
  }

  .ant-notification {
    font-family: inherit;

    & .ant-notification-notice-wrapper {
      background: ${(props) => props.theme.surface};
      border-radius: 10px;

      & .ant-notification-notice {
        color: ${(props) => props.theme.textPrimary};
        padding: 2rem 1.6rem;
        font-family: inherit;

        & .ant-notification-notice-content {
          margin-right: 2rem;
        }

        & .ant-notification-notice-message, & .ant-notification-notice-description {
          color: inherit;
        }

        & .ant-notification-notice-close {
          inset-inline-end: 1.6rem;
        }
      }
    }
  }

  .ant-select-item-group {
    color:  ${(props) => props.theme.textTerritory} !important;
  }
  .ant-picker-footer .ant-picker-ok .ant-btn {
    width: 5rem;
    height: 32px;
  }

   ${respondTo.down('xs')} {
  .ant-picker-datetime-panel{
      flex-direction: column;
  }
  .ant-picker-time-panel .ant-picker-content {
    height: auto !important;
    padding-inline-start: 1.2rem;

    .ant-picker-time-panel-column{
    overflow-x: scroll;
    overflow-y: hidden;
    flex-grow: 0;
    width: 34rem !important;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 4rem;

    li.ant-picker-time-panel-cell {
      margin-inline: 0;

      &.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner{
        text-align: start;
      }
    }
  }}
  .ant-picker-time-panel .ant-picker-content {
    display: flex;
    flex-direction: column;
  }
  .ant-picker-footer .ant-picker-ok .ant-btn {
    width: 7rem;
  }
  }

  .ant-select .ant-select-arrow {
    font-size: 16px;
  }
`;
export default GlobalStyle;
