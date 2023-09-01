import Card from 'components/common/Card/Card';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React, { useEffect, useState } from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner, GroupImg } from './ListGroup.styled';
import { useGetFavGroupQuery, useGroupJoinCancelRequestMutation, useWishControllerMutation } from 'store/hooks/group.hooks';
import NoData from 'components/common/NoData/NoData';
import { GroupWrap } from 'pages/Home/Home.styled';
import Paging from 'components/common/Paging/Paging';

interface FavGroupProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const FavGroup = ({ type, setType }: FavGroupProps) => {
  const [page, setPage] = useState(1);
  // const [type, setType] = useState('STUDY');

  const { data: favGroup } = useGetFavGroupQuery({ page: page, perPage: 8, type: type.toLocaleLowerCase() });
  const [wishControl] = useWishControllerMutation();
  const totalPage = favGroup?.data.totalPage;
  const typeText = type === 'STUDY' ? '스터디' : '프로젝트';

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleWishChange = (groupId: string) => {
    wishControl({ groupId: groupId, wishState: false });
  };

  useEffect(() => {
    // // console.log(favGroup);
  }, [favGroup]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>관심 목록</h2>
      </GroupImg>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive={type === 'STUDY'} onClick={() => setType('STUDY')} />
        <TypeSortBtn type="PROJECT" isActive={type === 'PROJECT'} onClick={() => setType('PROJECT')} />
      </TypeSortTabs>
      {favGroup?.data.groupsInfo.length === 0 ? (
        <NoData msg={`지원 중인 ${typeText}가 없습니다`} />
      ) : (
        <>
          <GroupWrap>
            {favGroup?.data.groupsInfo.map((group: GroupData, i: number) => (
              <React.Fragment key={i}>
                <Card data={group} hoverOn={true} red={true} btnTxt="삭제" onChange={handleWishChange} />
              </React.Fragment>
            ))}
          </GroupWrap>
          <Paging page={page} handlePageChange={handlePageChange} totalPage={totalPage} />
        </>
      )}
    </Wrapper>
  );
};

export default FavGroup;
