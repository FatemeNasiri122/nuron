import { configureStore } from "@reduxjs/toolkit";
import { norunApi } from "../services/norunApi";
import { userApi } from "../services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [norunApi.reducerPath]: norunApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(norunApi.middleware).concat(userApi.middleware),   
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);