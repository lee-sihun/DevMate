import Card from 'components/common/Card/Card';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React, { useEffect, useState } from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner, GroupImg } from './ListGroup.styled';
import { useGetOngoingGroupQuery } from 'store/hooks/group.hooks';
import NoData from 'components/common/NoData/NoData';

const FavGroup = () => {
  const [type, setType] = useState('STUDY');
  const { data: onGroup } = useGetOngoingGroupQuery();

  const typeText = type === 'STUDY' ? '스터디' : '프로젝트'; 

  useEffect(() => {
    console.log(onGroup);
  }, [onGroup]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>관심 목록</h2>
      </GroupImg>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive={type === 'STUDY'} onClick={() => setType('STUDY')} />
        <TypeSortBtn type="PROJECT" isActive={type === 'PROJECT'} onClick={() => setType('PROJECT')} />
      </TypeSortTabs>
      {/* {groupData}
      {type} */}
      {onGroup === undefined ? <NoData msg={`관심 있는 ${typeText}가 없습니다`} /> : <div>그룹</div>}
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

export default FavGroup;
