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
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getGroupData: builder.query<{ data: any; error: 'string' | null }, { page: number; perPage: number; filter: string }>({
      query: ({ page, perPage, filter }) => `groups?page=${page}&perPage=${perPage}&${filter}`, // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getDetailData: builder.query<{ data: any; error: 'string' | null }, string | undefined>({
      query: (groupId) => `groups/${groupId}`, // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),

    updateGroup: builder.mutation({
      query: ({ groupFormData, groupId }) => ({
        url: `groups/updateGroup/${groupId}`,
        method: 'PATCH',
        body: groupFormData,
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    deleteGroup: builder.mutation({
      query: (groupId) => ({
        url: `groups/${groupId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    wishController: builder.mutation({
      query: ({ groupId, wishState }) => ({
        url: `groups/subscribe/${groupId}/${wishState}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),
    groupJoinRequest: builder.mutation({
      query: ({ groupId, content }) => ({
        url: `groups/joinRequests/${groupId}`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),
    groupJoinCancelRequest: builder.mutation({
      query: (groupId) => ({
        url: `groups/join/cancelReq/${groupId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    createGroup: builder.mutation({
      query: (groupFormData) => ({
        url: 'groups',
        method: 'POST',
        body: groupFormData,
      }),
      invalidatesTags: [{ type: 'Group', id: 'Group' }],
    }),

    createdGroup: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'groups/myGroup/createdGroup', // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getReqMembers: builder.query<{ data: any; error: 'string' | null }, { groupId: string }>({
      query: ({ groupId }) => `groups/joinRequests/${groupId}?page=1&perPage=-1`, // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getOngoingGroup: builder.query<{ data: any; error: 'string' | null }, void>({
      query: () => 'groups/myGroup/ongoingGroup', // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getJoinReqGroup: builder.query<{ data: any; error: 'string' | null }, { page: number; perPage: number; type: string }>({
      query: ({ page, perPage, type }) => `groups/myGroup/joinRequestGroup/${type}?page=${page}&perPage=${perPage}`, // 실제 엔드포인트 경로에 맞게 설정
      providesTags: [{ type: 'Group', id: 'Group' }],
    }),
    getFavGroup: builder.query<{ data: any; error: 'string' | null }, { page: number; perPage: number; type: string }>({
      query: ({ page, perPage, type }) => `groups/myGroup/wishGroup/${type}?page=${page}&perPage=${perPage}`, // 실제 엔드포인트 경로에 맞게 설정
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
  useGetDetailDataQuery,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
  useWishControllerMutation,
  useGroupJoinRequestMutation,
  useGroupJoinCancelRequestMutation,
  useCreateGroupMutation,
  useCreatedGroupQuery,
  useGetReqMembersQuery,
  usePatchReqMembersMutation,
  usePatchRejectReqMembersMutation,
  usePatchDeleteAllReqMembersMutation,
  useGetOngoingGroupQuery,
  useGetJoinReqGroupQuery,
  useGetFavGroupQuery,
} = groupApi; // API 호출 훅 생성
