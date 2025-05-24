import styled from 'styled-components';
import { Layout } from 'antd';
import { cssVar, respondTo } from '@ghased-portal/utils';

const { Content } = Layout;

export const MainContentContainer = styled(Content)`
  display: flex;
  height: 100%;
  //padding: 3.6rem 5rem;

  ${respondTo.up('md')} {
    margin: var(${cssVar.verticalGap}) 0;
    margin-left: calc(var(${cssVar.verticalGap}) + var(${cssVar.drawerSideGap}));
    margin-right: calc(1 * var(${cssVar.drawerSideGap}));
    /* margin-left: var(${cssVar.drawerSideGap}); */
  }
`;
