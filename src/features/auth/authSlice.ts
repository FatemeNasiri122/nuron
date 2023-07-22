import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

const initialState: {
  token: string | null,
  tokenDuration: number | null,
  user: object | null,
} = {
  token: null,
  tokenDuration: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<{ token : any }>) => {
      state.token = action.payload.token;
      localStorage.setItem("tokenDetails", action.payload.token);
    },
    setLogout: (state) => {
      localStorage.removeItem("tokenDetails");
      state.token = null;
    },
    setUser: (state, action: PayloadAction<{ data: object }>) => {
      console.log(action.payload);
      state.user = action.payload 
    }
  },
})


export const selectAuth = (state: RootState) => state.auth;

export const { setLoginUser, setLogout, setUser } = authSlice.actions;

export default authSlice.reducer;