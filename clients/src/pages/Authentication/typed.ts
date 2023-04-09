export interface AuthState {
  status: AuthStatus;
  isAuthenticated: boolean;
}

export enum AuthStatus {
  LOADING = 'LOADING',
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
}
