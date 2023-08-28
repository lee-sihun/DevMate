import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupApi = createApi({
  reducerPath: 'groupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }), // API 엔드포인트 설정

  endpoints: (builder) => ({
    getHotGroup: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'groups/main/hotGroup', // 실제 엔드포인트 경로에 맞게 설정
    }),
    getGroupData: builder.query<{ data: any; error: 'string' | null }, { page: number; perPage: number; filter: string }>({
      query: ({ page, perPage, filter }) => `groups?page=${page}&perPage=${perPage}&${filter}`, // 실제 엔드포인트 경로에 맞게 설정
    }),
    createGroup: builder.mutation({
      query: (groupFormData) => ({
        url: `${process.env.REACT_APP_API_SERVER_URL}/api/groups`,
        method: 'POST',
        body: groupFormData,
      }),
    }),
    createdGroup: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'groups/myGroup/createdGroup', // 실제 엔드포인트 경로에 맞게 설정
    }),
    getReqMembers: builder.query<{ data: any; error: 'string' | null }, { groupId: string; }>({
      query: ({ groupId }) => `groups/joinRequests/${groupId}?page=1&perPage=6`, // 실제 엔드포인트 경로에 맞게 설정
    }),
  }),
});

export const { 
  useGetHotGroupQuery,
  useGetGroupDataQuery, 
  useCreateGroupMutation, 
  useCreatedGroupQuery, 
  useGetReqMembersQuery } = groupApi; // API 호출 훅 생성
