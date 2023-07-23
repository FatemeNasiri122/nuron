import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

const initialState: {
  showNotif: boolean,
  error: boolean,
  success: boolean,
} = {
  showNotif: false,
  error: false,
  success: false,
}

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    showSuccessNotification: (state) => {
      state.showNotif = true;
      state.success = true;
    },
    showErrorNotification: (state) => {
      state.showNotif = true;
      state.error = true;
    },
    resetNotification: (state) => {
      state.error = false;
      state.showNotif = false;
      state.success = false;
    }
  },
})


export const selectAuth = (state: RootState) => state.auth;

export const { showSuccessNotification, showErrorNotification, resetNotification } = notifSlice.actions;

export default notifSlice.reducer;