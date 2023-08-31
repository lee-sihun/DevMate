import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import uuid from 'react-uuid';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/users/',
    // baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api/users/`,
    credentials: 'include',
  }), // API 엔드포인트 설정
  tagTypes: ['User'],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (signInData) => ({
        url: 'login',
        method: 'POST',
        body: signInData,
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    signUp: builder.mutation({
      query: (signInData) => ({
        url: 'signup',
        method: 'POST',
        body: signInData,
      }),
    }),
    profileUpdate: builder.mutation({
      query: (profileData) => ({
        url: 'profile',
        method: 'PATCH',
        body: profileData,
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    userDelete: builder.mutation({
      query: (password) => ({
        url: '',
        method: 'DELETE',
        body: { password },
      }),
      invalidatesTags: [{ type: 'User', id: 'User' }],
    }),
    getProfile: builder.query<{ data: { foundUser: any }; error: 'string' | null }, void>({
      query: () => 'myProfile', // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'User', id: 'User' }],
    }),
    getOtherProfile: builder.query<{ data: any; error: 'string' | null }, string>({
      query: (userId) => `profile/${userId}`, // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
  useUserDeleteMutation,
  useProfileUpdateMutation,
  useGetProfileQuery,
  useGetOtherProfileQuery,
} = userApi; // API 호출 훅 생성
