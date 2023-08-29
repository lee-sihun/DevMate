import Card from 'components/common/Card/Card';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React, { useEffect, useState } from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner, GroupImg } from './ListGroup.styled';
import { useGetOngoingGroupQuery } from 'store/hooks/group.hooks';
import NoData from 'components/common/NoData/NoData';

interface ListGroupProps {
  groupData: string;
}

const ListGroup = ({ groupData }: ListGroupProps) => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();

  const [type, setType] = useState('STUDY');
  const { data: onGroup } = useGetOngoingGroupQuery();

  useEffect(() => {
    console.log(onGroup);
  },[onGroup]);

  return (
    <Wrapper>
      <GroupImg><h2>참여중인 그룹</h2></GroupImg>
      <NoData msg="모집 중인 프로젝트가 없습니다" />
      <GroupImg><h2>지원 현황</h2></GroupImg>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive={type === 'STUDY'} onClick={() => setType('STUDY')} />
        <TypeSortBtn type="PROJECT" isActive={type === 'PROJECT'} onClick={() => setType('PROJECT')} />
      </TypeSortTabs>
      {/* {groupData}
      {type} */}
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
