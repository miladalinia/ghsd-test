import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tooltip } from 'antd';

import { useTr } from '@ghased-portal/translation';
import { persianToFinglish } from '@ghased-portal/utils';
import { Locale, LocalStorageKey } from '@ghased-portal/types';
import { Avatar, Button, Loading } from '@ghased-portal/ui-kit';
import { useAuth, useConfig, useLocalStorage, useMenu } from '@ghased-portal/hooks';

import { Api } from '../../services';
import { defaultUserPhoto } from '../../assets/mock/data';
import ChangeOrganizationModal from '../change-organization-modal/change-organization-modal';

import * as S from './user-section.style';

export type DrawerProps = {
  onToggleDrawer?: React.MouseEventHandler;
  children?: React.ReactNode;
  onBreakpoint?: (broken: boolean) => void;
  onClose?: () => void;
};

const UserSection = (props: DrawerProps) => {
  const router = useRouter();
  const [t] = useTr();
  const { config } = useConfig();
  const { removeMenu } = useMenu();
  const { user, userPhoto, setUserPhoto, isAuth } = useAuth();
  const [userOrg, setUserOrg, removeUserOrg] = useLocalStorage<any>(LocalStorageKey.USER_ORG);
  const [orgLoading, setOrgLoading] = useState<boolean>(false);
  const [openChangeOrgModal, setOpenChangeOrgModal] = useState(false);
  const [, , removeAccounts] = useLocalStorage(LocalStorageKey.ACCOUNTS, null);

  useEffect(() => {
    if (userPhoto) {
      return;
    }

    Api.getUserPhoto()
      .then((res) => {
        if (res?.photo) {
          setUserPhoto(`data:image/png;base64,${res?.photo}`);
        }
      })
      .catch((err) => {
        console.error('getUserPhoto err', err);
      });
    // .finally(() => {});
  }, []);

  useEffect(() => {
    if (userOrg) {
      return;
    }

    setOrgLoading(true);

    Api.getUserOrg()
      .then((res) => {
        setUserOrg(res);
      })
      .catch((err) => {
        console.error('getUserOrg err', err);
      })
      .finally(() => {
        setOrgLoading(false);
      });
  }, []);

  const isFaLocale = (config) => {
    return config.locale === Locale.FA_IR;
  };

  const getUserFullName = () => {
    if (!user) {
      return '-';
    }

    const persianFullName = `${user.userInfo.firstName} ${user.userInfo.lastName}`;
    const userFullName = isFaLocale(config) ? persianFullName : persianToFinglish(persianFullName);
    const open = userFullName?.length < 30 ? false : undefined;
    return (
      <Tooltip title={userFullName} placement={'top'} open={open} mouseEnterDelay={1}>
        {userFullName}
      </Tooltip>
    );
  };

  const getUserPhotoUrl = () => userPhoto ?? defaultUserPhoto;

  const getOrgTitle = () => {
    const orgTitle = isFaLocale(config) ? userOrg?.currentOrganization?.nameFa : userOrg?.currentOrganization?.nameEn;

    const tooltip = (
      <>
        <div>{orgTitle}</div>
        <div>
          {t('field.org_ssn')} : {userOrg?.currentOrganization?.ssn}
        </div>
      </>
    );
    // const open = orgTitle?.length < 30 ? false : undefined;
    return (
      <Tooltip title={tooltip} placement={'bottom'} /*open={open}*/ mouseEnterDelay={0.5}>
        {orgTitle}
      </Tooltip>
    );
  };

  const handleChangeOrgClick = () => {
    setOpenChangeOrgModal(true);
  };

  const handleChangeOrgCancel = () => {
    setOpenChangeOrgModal(false);
  };

  const handleUserProfileClick = () => {
    router.push('profile');
  };

  const handleChangeOrgConfirm = () => {
    setOpenChangeOrgModal(false);
    removeMenu();
    removeUserOrg();
    removeAccounts();
    router.refresh();
  };

  return (
    <>
      <S.UserProfileWrapper>
        <section className={'user-section'}>
          <div className='user-section__top-row'>
            <div className={'user-avatar-container'}>
              <Avatar size={60} icon={<i className='ri-user-3-fill' />} src={getUserPhotoUrl()} />
            </div>

            <div className='user-info'>
              <div className='user-profile-name'>{getUserFullName()}</div>
              <div className='user-profile-organization-container'>
                {orgLoading ? (
                  <Loading containerProps={{ width: 'min-content' }} />
                ) : (
                  <span className='user-organization-title'>{getOrgTitle() || '_'}</span>
                )}
              </div>
            </div>
          </div>
          <div className='user-section__bottom-row'>
            <Button size='middle' type='table' onClick={handleChangeOrgClick}>
              {t('button.change_org')}
            </Button>
            <Button size='middle' type='primary' onClick={handleUserProfileClick}>
              {t('button.display_profile')}
            </Button>
          </div>
        </section>
      </S.UserProfileWrapper>
      {openChangeOrgModal && (
        <ChangeOrganizationModal
          open={openChangeOrgModal}
          userOrganizationData={userOrg}
          onCancel={handleChangeOrgCancel}
          onConfirm={handleChangeOrgConfirm}
        />
      )}
    </>
  );
};

export default UserSection;
