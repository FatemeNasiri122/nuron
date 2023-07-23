import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

const initialState: {
  token: string | null,
  tokenDuration: number | null,
  user: object | null,
  isLogin: boolean
} = {
  token: null,
  tokenDuration: null,
  user: null,
  isLogin: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<{ token : any }>) => {
      state.token = action.payload.token;
      localStorage.setItem("tokenDetails", action.payload.token);
    },
    setToken: (state) => {
      state.token = localStorage.getItem("tokenDetails");
    },
    setLogout: (state) => {
      localStorage.removeItem("tokenDetails");
      state.token = null;
    },
    setUser: (state, action: PayloadAction<{ data: object }>) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isLogin = true;
    }
  },
})


export const selectAuth = (state: RootState) => state.auth;

export const { setLoginUser, setLogout, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;