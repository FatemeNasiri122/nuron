import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const norunApi = createApi({
    reducerPath: "norunApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_URL}`,
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
        contactUs: builder.mutation({
            query: (body) => {
                console.log(body);
                return {
                    url: "/contact-us",
                    method: "post",
                    body,
                }
            }
        }),
    })
})

export const { useLoginUserMutation, useSignupUserMutation, useContactUsMutation } = norunApi 