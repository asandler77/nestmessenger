import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { deleteApi } from '../services/movieServices';

const rtkQueryMiddleWares = [deleteApi.middleware];

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [deleteApi.reducerPath]: deleteApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(...rtkQueryMiddleWares),
  // enhancers: [Reactotron?.createEnhancer?.() as StoreEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
