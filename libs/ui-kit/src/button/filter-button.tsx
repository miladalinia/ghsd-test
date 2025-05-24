import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { useTr } from '@ghased-portal/translation';
import { Button, ButtonProps } from './button';

export type FilterButtonProps = Omit<ButtonProps, 'type'> & {
  width?: CSSProperties['width'];
  active?: boolean;
  showBadge?: boolean;
};

const StyledButton = styled(Button)<{ active?: boolean; width?: CSSProperties['width'] }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  // min-width: ${(p) => p.width};
  ${(props) => props.width && `min-width: ${props.width};`}
  font-size: 1.4rem;
  background-color: ${(props) => (props.active ? props.theme.background : 'inherit')};
  color: ${(props) => (props.active ? props.theme.primary : props.theme.textTerritory)};
  border-color: ${(props) => (props.active ? props.theme.primary : props.theme.border)};

  i {
    font-size: 2rem;
    margin: 0;
  }
`;

const CustomBadge = styled.span<{ show?: boolean }>`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  width: 0.8rem;
  height: 0.8rem;
  background-color: #ff4d4f;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  right: 1px;
  transform: translate(50%, -50%);
  z-index: 1;
`;

export const FilterButton = (props: FilterButtonProps) => {
  const { active = false, width, showBadge = false, ...rest } = props;
  const [t] = useTr();

  return (
    <StyledButton type={'default'} active={active} width={width} {...rest}>
      <CustomBadge show={showBadge} />
      {t('button.filter')}
      {active ? <i className='ri ri-close-line' /> : <i className='ri ri-add-line' />}
    </StyledButton>
  );
};
