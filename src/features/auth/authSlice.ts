// features/auth/authSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

export interface AuthSlice {
  name: string | null,
  token: string | null,
}

const initialState = {
  loading: false,
  name: null, // for user object
  token: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string, token: string }>) => {
      localStorage.setItem("user", JSON.stringify({
        name: action.payload.name,
        token: action.payload.token,
      }));
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.name = null;
      state.token = null;
    }
  },
})


export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;