import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardData } from 'group-data';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/utils/' }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    getDummyData: builder.query<
      { data: CardData[]; error: 'string' | null },
      void
    >({
      query: () => 'dummyData.json', // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { useGetDummyDataQuery } = api; // API 호출 훅 생성

/**
 * @param str 는 PascalCase(ex: JavaScript)로 된 문자열을 전달 해 주세요
 * @returns
 */
export const pascalToKebab = (str: string) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // 소문자와 대문자 사이에 하이픈 추가
    .toLowerCase(); // 모든 문자를 소문자로 변환
};
