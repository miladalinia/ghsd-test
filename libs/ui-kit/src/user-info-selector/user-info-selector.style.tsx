import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-input-suffix {
    color: ${(p) => p.theme.border};
  }
`;
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .title {
    font-size: 1.3rem;
    color: ${(p) => p.theme.textPrimary};
    font-weight: bold;
  }

  i {
    font-size: 4rem;
    color: ${(p) => p.theme.textTerritory};
    margin-top: 0.5rem;
  }
`;

export const Title = styled.span`
  display: flex;
  color: ${(p) => p.theme.textPrimary};
  padding: 0 0.8rem 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
}
`;
export const UserInfo = styled.span`
  display: flex;
  padding: 0.5rem 0.8rem;
  justify-content: space-between;
  align-items: center;

  .national-code {
    font-size: 1.4rem;
    color: ${(p) => p.theme.textSecondary};
    font-weight: normal;
  }
  .full-name {
    font-weight: 500;
  }
`;
