import React, { useState, useEffect, useRef } from 'react';
import { Modal, ModalProps } from 'antd';
import { useResponsive } from '@ghased-portal/hooks';
import { BottomSheetErrorMessage } from './bottom-sheet-error-message/bottom-sheet-error-message';
import { Error } from '@ghased-portal/types';
import * as S from './bottom-sheet.style';
import { DrawerProps } from 'antd/lib';

type CustomDrawerProps = Omit<DrawerProps, 'title' | 'onClose'>;
type CustomModalProps = Omit<ModalProps, 'title' | 'onCancel'>;

type BottomSheetProps = CustomDrawerProps &
  CustomModalProps & {
    isResizable?: boolean;
    onClose?: VoidFunction;
    initialHeight?: number;
    isModalView?: boolean;
    open?: boolean;
    error?: Error;
    reTryHandler?: VoidFunction;
    loading?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    closable?: boolean;
  };

const MIN_HEIGHT = 100;

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isResizable = true,
  initialHeight,
  onClose,
  children,
  isModalView = false,
  open = false,
  error,
  reTryHandler,
  loading,
  footer,
  closable = false,
  ...prop
}) => {
  const { isMobileOrTablet } = useResponsive();
  const [maxHeight, setMaxHeight] = useState(600);
  const [height, setHeight] = useState(initialHeight ?? MIN_HEIGHT);
  const [closing, setClosing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const touchStartY = useRef<number | null>(null);
  const startHeight = useRef<number | null>(null);
  const renderAsModal = isModalView ?? !isMobileOrTablet;

  const lastDiff = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMaxHeight(window.innerHeight * 0.9);
    }
  }, []);

  const preventScroll = (e: WheelEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!contentRef.current?.contains(target)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      document.addEventListener('wheel', preventScroll, { passive: false });
      // document.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.body.style.overflow = '';

      document.removeEventListener('wheel', preventScroll);
      // document.removeEventListener('touchmove', preventScroll);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('wheel', preventScroll);
      // document.removeEventListener('touchmove', preventScroll);
    };
  }, [open]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (open) {
        setClosing(false);
        if (contentRef.current) {
          const footerHeight = footerRef.current?.getBoundingClientRect().height ?? 0;
          const contentHeight = footer
            ? contentRef.current.scrollHeight + 40 + footerHeight
            : contentRef.current.scrollHeight + 40;
          const newHeight = initialHeight ? Math.min(initialHeight, maxHeight) : Math.min(contentHeight, maxHeight);
          setHeight(newHeight);
        }
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [open, maxHeight, initialHeight, children]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    startHeight.current = height;
    lastDiff.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null || startHeight.current === null) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY.current;

    lastDiff.current = diff;

    if (!isResizable && diff < 0) return;

    const newHeight = Math.max(MIN_HEIGHT, Math.min(startHeight.current - diff, maxHeight));
    setHeight(newHeight);
  };

  const startClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose?.();
      setClosing(false);
      setHeight(initialHeight ?? MIN_HEIGHT);
    }, 300);
  };

  const onTouchEnd = () => {
    if (touchStartY.current === null || startHeight.current === null) return;

    if (!isResizable) {
      if (height <= MIN_HEIGHT) {
        startClose();
      } else {
        setHeight(height);
      }
    } else {
      if (lastDiff.current > 30 || height <= MIN_HEIGHT) {
        startClose();
      } else {
        setHeight(maxHeight);
      }
    }

    touchStartY.current = null;
    startHeight.current = null;
    lastDiff.current = 0;
  };

  if (isMobileOrTablet && open) {
    return (
      <>
        <S.Backdrop visible={!closing} onClick={startClose} />
        <S.Container height={height} maxHeight={maxHeight} closing={closing}>
          <S.DragContainer onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <S.DragHandle />
          </S.DragContainer>
          <S.Body ref={contentRef}>
            {error ? (
              <BottomSheetErrorMessage message={error} loading={loading} reTryHandler={reTryHandler} />
            ) : (
              children
            )}
          </S.Body>
          {footer && <S.Footer ref={footerRef}>{footer}</S.Footer>}
        </S.Container>
      </>
    );
  }

  if (renderAsModal) {
    return (
      <Modal onCancel={onClose} open={open} centered footer={footer} {...prop}>
        {children}
      </Modal>
    );
  }

  return null;
};
