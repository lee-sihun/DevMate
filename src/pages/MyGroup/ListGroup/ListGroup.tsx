import Card from 'components/common/Card/Card';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React, { useEffect, useState } from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner, GroupImg } from './ListGroup.styled';
import {
  useCreatedGroupQuery,
  useGetJoinReqGroupQuery,
  useGetOngoingGroupQuery,
  useGroupExitRequestMutation,
  useGroupJoinCancelRequestMutation,
} from 'store/hooks/group.hooks';
import NoData from 'components/common/NoData/NoData';
import { GroupWrap } from 'pages/Home/Home.styled';
import Paging from 'components/common/Paging/Paging';

const ListGroup = () => {
  // const {
  //   data,
  //   // error,
  //   // isLoading,
  // } = useGetDummyDataQuery();

  const [page, setPage] = useState(1);
  const [type, setType] = useState('STUDY');
  const { data: createdGroup, refetch: createdGroupRefetch } = useCreatedGroupQuery();
  const { data: onGroup, refetch: onGroupRefetch } = useGetOngoingGroupQuery();
  const { data: joinGroup, refetch: joinGroupRefetch } = useGetJoinReqGroupQuery({ page: page, perPage: 8, type: type.toLocaleLowerCase() });
  const [exitGroup] = useGroupExitRequestMutation();
  const [joinCancel] = useGroupJoinCancelRequestMutation();
  const totalPage = joinGroup?.data.totalPage;
  const typeText = type === 'STUDY' ? '스터디' : '프로젝트';

  useEffect(() => {
    createdGroupRefetch();
    onGroupRefetch();
    joinGroupRefetch();
  }, []);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleExitGroup = (groupId: string) => {
    exitGroup(groupId);
  };

  const handleJoinCancel = (groupId: string) => {
    joinCancel(groupId);
  };

  useEffect(() => {
    // console.log(createdGroup);
    // console.log(joinGroup);
    // console.log(joinGroup);
  }, [onGroup, joinGroup]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>참여중인 그룹</h2>
      </GroupImg>
      {onGroup?.data.length === 0 ? (
        <NoData msg="참여 중인 그룹이 없습니다" />
      ) : (
        <GroupWrap>
          {onGroup?.data.map((group: GroupData, i: number) => (
            <React.Fragment key={i}>
              <Card data={group} hoverOn={true} red={true} btnTxt="탈퇴" id={createdGroup?.data?._id} onChange={handleExitGroup} />
            </React.Fragment>
          ))}
        </GroupWrap>
      )}
      <GroupImg $marginTop='70px'>
        <h2>지원 현황</h2>
      </GroupImg>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive={type === 'STUDY'} onClick={() => setType('STUDY')} />
        <TypeSortBtn type="PROJECT" isActive={type === 'PROJECT'} onClick={() => setType('PROJECT')} />
      </TypeSortTabs>
      {/* {groupData}
      {type} */}
      {joinGroup?.data.groupsInfo.length === 0 ? (
        <NoData msg={`지원 중인 ${typeText}가 없습니다`} />
      ) : (
        <>
          <GroupWrap>
            {joinGroup?.data.groupsInfo.map((group: GroupData, i: number) => (
              <React.Fragment key={i}>
                <Card data={group} hoverOn={true} btnTxt="지원 취소" red={true} onChange={handleJoinCancel} />
              </React.Fragment>
            ))}
          </GroupWrap>
          <Paging page={page} handlePageChange={handlePageChange} totalPage={totalPage} />
        </>
      )}
    </Wrapper>
  );
};

export default ListGroup;
