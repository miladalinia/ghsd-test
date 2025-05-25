'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Direction, IConfig, Locale, LocalStorageKey, ThemeID } from '@ghased-portal/types';
import { storage } from '@ghased-portal/utils';

const defaultConfig: IConfig = {
  themeId: ThemeID.LIGHT,
  direction: Direction.RTL,
  locale: Locale.FA_IR,
};

type ConfigState = {
  config: IConfig;
};

const initialState: ConfigState = {
  config: JSON.parse(storage.getItem(LocalStorageKey.CONFIG) as string) ?? defaultConfig,
};

const ConfigSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig(state, action: PayloadAction<Partial<IConfig>>) {
      state.config = {
        ...state.config,
        ...action.payload,
      };
    },
    resetConfig(state) {
      state.config = defaultConfig;
    },
  },
});

export const { updateConfig, resetConfig } = ConfigSlice.actions;
export default ConfigSlice.reducer;
