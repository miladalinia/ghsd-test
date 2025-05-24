import React, { Fragment, useEffect } from 'react';

import { useAppTheme, useMenu } from '@ghased-portal/hooks';
import { Direction, WidgetHeaderType } from '@ghased-portal/types';

import * as S from './widget-wrapper.style';
import { useRouter } from 'next/router';
import { getWidgetTitle } from './widget-wrapper-utils';

export type WidgetWrapperProps = {
  headerTitle?: WidgetHeaderType['title'];
  headerMessage?: WidgetHeaderType['message'];
  headerIcon?: WidgetHeaderType['icon'];
  children?: React.ReactNode;
  padding?: string;
  overflow_x?: React.CSSProperties['overflowX'];
};

export const WidgetWrapper = (props: WidgetWrapperProps) => {
  const theme = useAppTheme();
  const { menu } = useMenu();

  const router = useRouter();
  const widgetTitle = menu ? getWidgetTitle(menu, router.pathname) : [];

  // const widgetTitle = getArrayString(props.headerTitle);
  const headerMessage = getArrayString(props.headerMessage);
  const { padding = '2.4rem', overflow_x = 'scroll' } = props;

  function getArrayString(value?: string | string[]): string[] {
    if (typeof value === 'string') {
      return [value];
    } else if (Array.isArray(value)) {
      return value;
    } else {
      return [];
    }
  }

  const shouldShowHeader = widgetTitle.length > 0 || headerMessage.length > 0 || Boolean(props.headerIcon);

  return (
    <S.WidgetWrapper>
      {shouldShowHeader && (
        <S.HeaderContainer>
          <S.Header>
            <S.HeaderTitleContainer>
              {/*<S.HeaderIcon>{props.headerIcon}</S.HeaderIcon>*/}
              {widgetTitle?.map((title, index) => {
                return (
                  <Fragment key={index}>
                    <S.HeaderTitle lastTitle={index === widgetTitle.length - 1}>{title}</S.HeaderTitle>
                    {widgetTitle && index !== widgetTitle.length - 1 ? (
                      <>
                        {theme.direction === Direction.RTL ? (
                          <S.Icon className={'ri-arrow-left-s-line'} />
                        ) : (
                          <S.Icon className={'ri-arrow-right-s-line'} />
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </Fragment>
                );
              })}
            </S.HeaderTitleContainer>
            {headerMessage?.map((message, index) => {
              return <S.HeaderMessage key={index}>{message}</S.HeaderMessage>;
            })}
          </S.Header>
        </S.HeaderContainer>
      )}

      <S.BodyContainer $padding={padding} overflow_x={overflow_x}>
        {props.children}
      </S.BodyContainer>
    </S.WidgetWrapper>
  );
};

// export default WidgetWrapper;
