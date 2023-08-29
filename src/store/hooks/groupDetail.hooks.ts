import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupDetailApi = createApi({
  reducerPath: 'groupDetailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }), // API 엔드포인트 설정
  tagTypes: ['groupDetail'],
  endpoints: (builder) => ({
    getDetailData: builder.query<{ data: any; error: 'string' | null }, string | undefined>({
      query: (groupId) => `groups/${groupId}`, // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { useGetDetailDataQuery } = groupDetailApi; // API 호출 훅 생성
