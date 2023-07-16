import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        // credentials: "include",
        // prepareHeaders: (headers, { getState }) => {
        //     const token = getState().auth.token
        //     console.log(token);
            
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`);
        //     }

        //     return headers;
        // }
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => {
                return {
                    url: "/login",
                    method: "post",
                    body,
                }
            }
        }),
        signupUser: builder.mutation({
            query: (body: {firstName: string, lastName: string, email: string, password: string, rePassword: string, agree: boolean }) => {
                return {
                    url: "/signup",
                    method: "post",
                    body,
                }
            }
        }),
        getUser: builder.mutation({
            query: () => "/signup"
        })
    })
})

export const { useLoginUserMutation, useSignupUserMutation, useGetUserMutation } = authApi 