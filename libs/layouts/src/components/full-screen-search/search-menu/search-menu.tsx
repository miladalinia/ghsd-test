import React, { useMemo, useState } from 'react';

import * as S from './search-menu.style';
import { useMenu } from '@ghased-portal/hooks';
import { useRouter } from 'next/router';
import { BottomSheet } from '@ghased-portal/ui-kit';
import { useTheme } from 'styled-components';
import { MenuResponseModel, PageProps } from '@ghased-portal/types';
import { useTr } from '@ghased-portal/translation';
import { searchMenuItems } from '../../../utils/utils';
import MobileIcon from '../../mobile-icon/mobile-icon';

type AppProps = PageProps & {
  searchQuery: string;
  setOpen: (open: boolean) => void;
};

const SearchMenu: React.FC<AppProps> = ({ searchQuery, setOpen }) => {
  const router = useRouter();
  const { menu }: { menu: MenuResponseModel[] } = useMenu();
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuResponseModel | null>(null);
  const theme = useTheme();
  const [t] = useTr();
  const BATCH_ACH_ACCESS_SCOPE = 'BATCH-PAYA';

  const filteredMenu = useMemo(() => menu?.filter((item) => item?.v3_href !== '/home') || [], [menu]);
  const filteredItems = useMemo(() => searchMenuItems(filteredMenu, searchQuery), [menu, searchQuery]);

  const handleMenuClick = (menuItem: MenuResponseModel) => {
    if (menuItem?.children?.length > 0) {
      setOpenBottomSheet(true);
      setSelectedMenuItem(menuItem);
    } else if (menuItem.v3_href) {
      menuItem.parentId && setOpenBottomSheet(false);
      router.replace(menuItem.v3_href);
      setOpen(false);
    }
  };

  const renderMenuItem = (menuItem: MenuResponseModel) => {
    return (
      <>
        <S.MenuIcon>
          <MobileIcon name={menuItem?.icon} />
        </S.MenuIcon>
        <p className='menu-group-item_label' key={menuItem.id}>
          {menuItem.title}
        </p>
      </>
    );
  };

  const renderMenuItemBottomSheet = (menuItem: MenuResponseModel, selectedMenuItem) => {
    const isBATCH = selectedMenuItem.accessScope === BATCH_ACH_ACCESS_SCOPE;
    return (
      <S.MenuItemBottomSheetContainer isBatch={isBATCH}>
        {isBATCH ? (
          <div>
            <MobileIcon name={menuItem?.icon} fill={theme?.textPrimary} width={24} height={24} />
          </div>
        ) : (
          <MobileIcon name={menuItem?.icon} fill={theme?.textPrimary} width={24} height={24} />
        )}
        <span className='bottom-sheet__item-label' key={menuItem.id} title={menuItem.title}>
          {menuItem.title}
        </span>
      </S.MenuItemBottomSheetContainer>
    );
  };

  const renderMenuBottomSheet = () => {
    return (
      <BottomSheet open={openBottomSheet} onClose={() => setOpenBottomSheet(false)}>
        <S.BottomSheetContainer count={selectedMenuItem?.children?.length ?? 0}>
          <div className='bottom-sheet__header'>{selectedMenuItem?.title}</div>
          <span className='bottom-sheet__description'>{t('layout.choose_the_service')}</span>
          <div className='bottom-sheet-menu__item'>
            {selectedMenuItem?.children?.map((child) => (
              <div key={child.id} onClick={() => handleMenuClick(child)}>
                {renderMenuItemBottomSheet(child, selectedMenuItem)}
              </div>
            ))}
          </div>
        </S.BottomSheetContainer>
      </BottomSheet>
    );
  };

  return (
    <S.AppContainer>
      {filteredItems?.result?.map((menuItem: MenuResponseModel) => (
        <S.MenuContainer key={menuItem.id}>
          {menuItem.parentId === null && <span className='menu__group-label'>{menuItem?.title}</span>}
          <div className='menu__group'>
            {menuItem?.children?.length > 0 ? (
              menuItem?.children?.map((childMenuItem) => (
                <div className='menu__group-item' onClick={() => handleMenuClick(childMenuItem)}>
                  {renderMenuItem(childMenuItem)}
                </div>
              ))
            ) : (
              <div className='menu__group-item' onClick={() => handleMenuClick(menuItem)}>
                {renderMenuItem(menuItem)}
              </div>
            )}
          </div>
        </S.MenuContainer>
      ))}

      {renderMenuBottomSheet()}
    </S.AppContainer>
  );
};

export default SearchMenu;
