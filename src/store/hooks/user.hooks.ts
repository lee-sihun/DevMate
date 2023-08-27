import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/users/',
    // baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api/users/`,
    credentials: 'include',
  }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (signInData) => ({
        url: 'login',
        method: 'POST',
        body: signInData,
      }),
    }),
    signUp: builder.mutation({
      query: (signInData) => ({
        url: 'signup',
        method: 'POST',
        mode: 'cors',
        body: signInData,
      }),
    }),
    getProfile: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'myProfile', // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { 
  useSignInMutation, 
  useSignUpMutation,
  useGetProfileQuery,
 } = userApi; // API 호출 훅 생성
