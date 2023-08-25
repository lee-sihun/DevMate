import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupApi = createApi({
  reducerPath: 'groupApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/utils/' }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    createGroup: builder.mutation({
      query: (groupFormData) => ({
        url: `${process.env.REACT_APP_API_SERVER_URL}/api/groups`,
        method: 'POST',
        body: groupFormData,
      }),
    }),
  }),
});

export const { 
  useCreateGroupMutation, 
} = groupApi; // API 호출 훅 생성
