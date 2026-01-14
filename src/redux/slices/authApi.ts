/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/features/api/authSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../api/axiosBaseQuery";
const SiteURl = process.env.NEXT_PUBLIC_SERVER_BASE_URL as string;

export const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/register",
        method: "POST",
        data: formData,
      }),
    }),

    loginUser: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/login",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    verifyOTP: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/register/otp-verify",
        method: "POST",
        data: formData,
      }),
    }),

    resendOTP: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: "/users/register/otp-resend",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    verifyEmail: builder.mutation<
      { success: boolean; message: string },
      FormData
    >({
      query: (formData) => ({
        url: "/users/login/email-verify",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    resetPassword: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/login/reset-password",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    socialLoginUser: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/social-login",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getUserData: builder.query<any, void>({
      query: () => ({
        url: "/users/data",
        method: "GET",
      }),
    }),

    changePassword: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/users/change-password",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getSystemSettings: builder.query({
      query: () => ({
        url: "/site-settings",
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    updateUserData: builder.mutation<
      { success: boolean; message: string; data: any },
      FormData
    >({
      query: (formData) => ({
        url: "/users/data/update",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyOTPMutation,
  useLoginUserMutation,
  useResendOTPMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useSocialLoginUserMutation,
  useLogoutUserMutation,
  useGetUserDataQuery,
  useChangePasswordMutation,
  useGetSystemSettingsQuery,
  useUpdateUserDataMutation,
} = authSlice;
