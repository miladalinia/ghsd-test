import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ConfigReducer } from '@ghased-portal/redux-store';
// import HomeReducer from './../../../../apps/portal/app/home/redux-features/slice';

const rootReducer = combineReducers({
  appConfig: ConfigReducer,
  // home: HomeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
