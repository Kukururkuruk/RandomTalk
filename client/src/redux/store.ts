import { configureStore } from '@reduxjs/toolkit';
import groupReducer from './slices/groupSlice';
import authReducer from './slices/authSlice';
import modalReducer from './slices/modalSlice';
import addPointReducer from './slices/addPointSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    points: addPointReducer,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
