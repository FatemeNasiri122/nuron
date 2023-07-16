import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

const initialState: {
  token: string | null,
  tokenDuration: number | null
} = {
  token: null,
  tokenDuration: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<{ token : any }>) => {
      state.token = action.payload.token;
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 336);
      localStorage.setItem("expiration", expiration.toISOString());
      localStorage.setItem("tokenDetails", action.payload.token);
    },
    setTokenDuration: () => {
      const storedExpirationDate :  any = localStorage.getItem("expiration");
      const expirationDate = new Date(storedExpirationDate);
      const now = new Date();
      const duration = expirationDate.getTime() - now.getTime();
      const tokenDuration = String(duration);
      localStorage.setItem("tokenDuration", tokenDuration);
    },
    setLogout: (state) => {
    
      localStorage.removeItem("expiration");
      localStorage.removeItem("tokenDetails");
      localStorage.removeItem("tokenDuration");
      state.token = null;
    }
  },
})


export const selectAuth = (state: RootState) => state.auth;

export const { setLoginUser, setTokenDuration, setLogout } = authSlice.actions;

export default authSlice.reducer;