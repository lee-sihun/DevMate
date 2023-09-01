import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/users/',
    credentials: 'include',
  }),
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
      invalidatesTags: (result, error, arg) => {
        // console.log(result, error, arg);
        if (result) {
          return [
            { type: 'User', id: arg },
            { type: 'User', id: 'User' },
          ];
        } else {
          return [{ type: 'User', id: 'User' }];
        }
      },
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
      providesTags: (result, error, arg) => {
        // console.log(result, error, arg);
        if (result) {
          return [
            { type: 'User', id: result.data.foundUser._id },
            { type: 'User', id: 'User' },
          ];
        } else {
          return [{ type: 'User', id: 'User' }];
        }
      },
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
