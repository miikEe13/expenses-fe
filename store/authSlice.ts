import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/modules/auth/types";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      // Ahora sabemos que user siempre tiene la estructura correcta
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
