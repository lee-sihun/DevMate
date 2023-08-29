import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupApi = createApi({
  reducerPath: 'groupApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }), // API 엔드포인트 설정
  tagTypes: ['Group'],
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
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getReqMembers: builder.query<{ data: any; error: 'string' | null }, { groupId: string; }>({
      query: ({ groupId }) => `groups/joinRequests/${groupId}?page=1&perPage=-1`, // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getOngoingGroup: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'groups/myGroup/ongoingGroup', // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),

    patchReqMembers: builder.mutation({
      query: (joinId) => ({
        url: `groups/approveJoinRequest/${joinId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    patchRejectReqMembers: builder.mutation({
      query: (joinId) => ({
        url: `groups/rejectJoinRequest/${joinId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    patchDeleteAllReqMembers: builder.mutation({
      query: (joinId) => ({
        url: `groups/deleteAllJoinReqList/${joinId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),
  }),
});

export const { 
  useGetHotGroupQuery,
  useGetGroupDataQuery, 
  useCreateGroupMutation, 
  useCreatedGroupQuery, 
  useGetReqMembersQuery,
  usePatchReqMembersMutation,
  usePatchRejectReqMembersMutation,
  usePatchDeleteAllReqMembersMutation,
  useGetOngoingGroupQuery,
 } = groupApi; // API 호출 훅 생성
