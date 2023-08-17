import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardData, GroupData } from 'group-data';

export const testApi = undefined;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/utils/' }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    getDummyData: builder.query<any, void>({
      query: () => 'dummyData.json', // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { useGetDummyDataQuery } = api; // API 호출 훅 생성
