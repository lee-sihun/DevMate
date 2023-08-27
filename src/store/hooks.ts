import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupData } from 'group-data';
import { AuthorData } from 'author-data';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/utils/' }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    getDummyData: builder.query<{ data: GroupData[]; error: 'string' | null }, void>({
      query: () => 'dummyData.json', // 실제 엔드포인트 경로에 맞게 설정
    }),
    getDetailDummyData: builder.query<{ data: GroupData[]; error: 'string' | null }, string>({
      query: (groupId) => `groups/${groupId}.json`, // 실제 엔드포인트 경로에 맞게 설정
    }),
    getDummyAuthorData: builder.query<{ data: AuthorData; error: 'string' | null }, string>({
      query: (authorId) => `authors/${authorId}.json`, // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { useGetDummyDataQuery, useGetDetailDummyDataQuery, useGetDummyAuthorDataQuery } = api; // API 호출 훅 생성
