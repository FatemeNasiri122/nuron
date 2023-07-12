import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => {
                debugger
                return {
                    url: "/login",
                    method: "post",
                    body,
                }
            }
        }),
        signupUser: builder.mutation({
            query: (body: {firstName: string, lastName: string, email: string, password: string, rePassword: string, agree: boolean }) => {
                debugger
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