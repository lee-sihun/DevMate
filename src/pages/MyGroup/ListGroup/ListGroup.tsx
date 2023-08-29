import Card from 'components/common/Card/Card';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React, { useEffect, useState } from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner, GroupImg } from './ListGroup.styled';
import { useCreatedGroupQuery, useGetJoinReqGroupQuery, useGetOngoingGroupQuery } from 'store/hooks/group.hooks';
import NoData from 'components/common/NoData/NoData';

const ListGroup = () => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();

  const [type, setType] = useState('STUDY');
  const { data: createdGroup } = useCreatedGroupQuery();
  const { data: onGroup } = useGetOngoingGroupQuery();
  const { data: joinGroup } = useGetJoinReqGroupQuery({ page: 1, perPage: 8, type: type.toLocaleLowerCase()});

  const typeText = type === 'STUDY' ? '스터디' : '프로젝트';

  useEffect(() => {
    // console.log(createdGroup);
    console.log(onGroup);
    // console.log(joinGroup);
  }, [onGroup, joinGroup, createdGroup]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>참여중인 그룹</h2>
      </GroupImg>
      {onGroup === undefined ? <NoData msg="참여 중인 그룹이 없습니다" /> : <div>그룹</div>}
      <GroupImg>
        <h2>지원 현황</h2>
      </GroupImg>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive={type === 'STUDY'} onClick={() => setType('STUDY')} />
        <TypeSortBtn type="PROJECT" isActive={type === 'PROJECT'} onClick={() => setType('PROJECT')} />
      </TypeSortTabs>
      {/* {groupData}
      {type} */}
      {joinGroup === undefined ? <NoData msg={`참여 중인 ${typeText}가 없습니다`} /> : <div>그룹</div>}
      <Inner>
        {/* {data?.data.map((item: GroupData, i: number) => {
          return (
            <React.Fragment key={i}>
              <Card data={item} />
            </React.Fragment>
          );
        })} */}
      </Inner>
    </Wrapper>
  );
};

export default ListGroup;
