import React, { createContext, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';

import { LocalStorageKey } from '@ghased-portal/types';
import { clearAllCookies, clearLocalStorageExceptForKey, ENV_CONSTANTS, readFromCookieByKey } from '@ghased-portal/utils';
import { client } from '@ghased-portal/client';

import useLocalStorage from '../use-local-storage/use-local-storage';

const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthProviderProps = {
  children: React.ReactNode;
  /*  login?: Function;
    logout?: Function;*/
};

const AuthProvider = (props: AuthProviderProps) => {
  const [user, setUser, removeUser] = useLocalStorage(LocalStorageKey.USER, null);
  const [userPhoto, setUserPhoto, removeUserPhoto] = useLocalStorage(LocalStorageKey.USER_PHOTO, null);
  const [, setMenu, removeMenus] = useLocalStorage(LocalStorageKey.MENU);
  const router = useRouter();

  const login = (data: any, path?: string) => {
    clearLocalStorageExceptForKey(LocalStorageKey.CONFIG);
    setUser(data);

    router.replace(path ?? '/');
  };

  async function callLogoutService() {
    // await client.get('/api/auth/logout'); //`${ebUrl}/profile/menu/dashboard`

    // Create a FormData object
    const formData = new FormData();
    const csrf_token = readFromCookieByKey('XSRF-TOKEN');
    const headers = {
      'Content-Type': 'multipart/form-data',
      'X-XSRF-TOKEN': `${csrf_token}`,
    };
    const response = await fetch('/api/auth/logout', {
      credentials: 'include',
      method: 'POST',
      headers: headers,
      body: formData,
    });
  }

  const clearUserData = () => {
    removeUser();
    removeUserPhoto();
    removeMenus();
    setMenu(null);
    clearLocalStorageExceptForKey(LocalStorageKey.CONFIG);
  };

  const logout = async (path?: string) => {
    // setUser(null);

    clearUserData();
    await callLogoutService();

    clearAllCookies();

    router.replace(path ?? '/');
  };

  function isAuth(): boolean {
    if (ENV_CONSTANTS.IS_AUTH_MODE_1) {
      return !!user;
    } else {
      const isLoggedin = readFromCookieByKey('LoggedIn');
      return isLoggedin === 'true';
    }
  }

  /* const value = useMemo(
     () => ({
       user,
       login,
       logout,
       setUser,
       isAuth: isAuth(),
       userPhoto,
       setUserPhoto,
       removeUserPhoto,
     }),
     [JSON.stringify(user), userPhoto],
   );*/

  const value = {
    user,
    login,
    logout,
    clearUserData,
    setUser,
    isAuth: isAuth(),
    userPhoto,
    setUserPhoto,
    removeUserPhoto,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
