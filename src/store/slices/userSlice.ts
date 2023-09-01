// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useGetHotGroupQuery } from 'store/hooks/group.hooks';
import { useGetProfileQuery } from 'store/hooks/user.hooks';
// import { useGetUserQuery, useGetGroupQuery } from './apiSlice';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {},
  // extraReducers(builder) {
  //     builder.addMatcher(
  //       useGetProfileQuery
  //     )
  // },
  // extraReducers: (builder) => {
    // builder.addMatcher(
    //   useGetProfileQuery.matchFulfilled,
    //   (state, action) => {
    //     const { data } = action.payload;
    //     state.userData = data;

    //     if (data && data.groupId) {
    //       // 그룹 정보를 가져오는 쿼리 실행하여 그룹 상태 업데이트
    //       useGetHotGroupQuery(data.groupId);
    //     }
    //   }
    // );
  // },
});

export default userSlice.reducer;