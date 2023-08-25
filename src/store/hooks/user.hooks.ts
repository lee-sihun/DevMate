import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_SERVER_URL}/api/users/`,
  }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (signInData) => ({
        url: 'login',
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data', // form-data 형식 지정
        // },
        body: signInData,
      }),
    }),
    signUp: builder.mutation({
      query: (signInData) => ({
        url: 'signup',
        method: 'POST',
        mode:'cors',
        // headers: {
        //   'Content-Type': 'multipart/form-data', // form-data 형식 지정
        // },
        body: signInData,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = userApi; // API 호출 훅 생성
