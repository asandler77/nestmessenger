import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  // enhancers: [Reactotron?.createEnhancer?.() as StoreEnhancer],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
