import { RootState } from "./store";

export const selectDeleteAllMovies = (state: RootState): boolean => state.auth.isAuthenticated;
