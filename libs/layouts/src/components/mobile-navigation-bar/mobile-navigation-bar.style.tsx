import Link from 'next/link';
import styled from 'styled-components';

export const MobileNavBarWrapper = styled.div`
  position: fixed;
  bottom: 1.6rem;
  left: 2.4rem;
  right: 2.4rem;
  max-width: 60rem;
  background-color: ${(props) => props.theme.surface};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0px 0px 1.5rem 0px rgba(0, 0, 0, 0.1);
  z-index: 5;
  padding: 0.8rem 2.4rem;
  border-radius: 5.2rem;
  margin: 0 auto;
  height: 8rem;
`;

export const MobileNavBarItem = styled(Link)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.8rem 0;
  color: ${(props) => (props.active ? props.theme.primary : props.theme.textTerritory)};
  font-weight: ${(props) => (props.active ? 500 : 400)};
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  .ant-avatar {
    margin-bottom: 0.4rem;
  }
  i {
    font-size: 20px;
    margin-bottom: 0.4rem;
    color: inherit;
    font-weight: ${(props) => (props.active ? 500 : 400)};
  }
`;
