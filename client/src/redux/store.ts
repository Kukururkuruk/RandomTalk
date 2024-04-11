import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './slices/mapSlice';
import authReducer from './slices/authSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    point: mapReducer
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
