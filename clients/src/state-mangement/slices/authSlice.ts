import { createSlice } from '@reduxjs/toolkit';
import { AuthState, AuthStatus } from '../../pages/authentication/typed';

const initialState: AuthState = {
  status: AuthStatus.LOGGED_OUT,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatusLoading: state => {
      state.status = AuthStatus.LOADING;
    },
    setAuthInfo: state => {
      state.status = AuthStatus.LOGGED_IN;
      state.isAuthenticated = true;
    },
    clearAuthInfo: state => {
      state.status = AuthStatus.LOGGED_OUT;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthStatusLoading, setAuthInfo, clearAuthInfo } = authSlice.actions;
