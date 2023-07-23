import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_URL}/user`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("tokenDetails");
            if (token) {
                headers.set("Authorization", `${token}`);
            }
            console.log(token);

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => "/me"
        }),
        setUploadProfileImage: builder.mutation({
            query: (body) => {
                console.log(body.get('profile'))
                return {
                    url: "/edit/profile-image",
                    method: "post",
                    body,
                }
            }
        }),
        setUploadCoverImage: builder.mutation({
            query: (body) => {
                return {
                    url: "/edit/cover-image",
                    method: "post",
                    body,
                }
            }
        }),
        setEditProfileInformation: builder.mutation({
            query: (body) => {
                return {
                    url: "/edit/profile-information",
                    method: "put",
                    body,
                }
            }
        }),
        setEditPassword: builder.mutation({
            query: (body) => {
                return {
                    url: "/edit/password",
                    method: "put",
                    body,
                }
            }
        }),
    })
})

export const { useGetUserQuery, useSetEditProfileInformationMutation, useSetEditPasswordMutation, useSetUploadProfileImageMutation, useSetUploadCoverImageMutation } = userApi 