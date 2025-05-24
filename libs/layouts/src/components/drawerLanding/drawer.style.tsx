import { Divider, Drawer } from 'antd';
import styled from 'styled-components';

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
  }
  .ant-drawer-content {
    background: #fff;
  }
  .ant-drawer-header {
    display: none;
  }
  .ant-drawer-close {
    display: flex !important;
    // position: relative;
    justify-content: flex-end !important;
    // left: 1rem;
    // right: auto;
    top: 1rem;
    font-size: 2.6rem;
  }
  .configuration {
    align-self: flex-start;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 1.6rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  .appbar-bank-logo {
    width: 15rem;
    height: 3.2rem;
    object-fit: scale-down;
  }
  img {
    width: 120px;
    height: auto;
  }
  .close-icon {
    font-size: 2.6rem;
  }
  .svgs {
    display: flex;
    align-items: center;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.8rem;

  a {
    color: ${(p) => p.theme.textPrimary} !important;
    padding: 1rem 0rem;
    font-size: 1.6rem;
    text-decoration: none;
  }
`;

export const FooterButton = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  a {
    width: 100%;
  }
  .ant-btn {
    color: ${(p) => p.theme.onPrimary} !important;
    font-size: 1.6rem;
    height: 5.5rem;
    width: 100%;
  }
`;

export const DividerStyled = styled(Divider)`
  border-color: ${(p) => p.theme.border};
`;
