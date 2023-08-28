import React, { useState } from 'react';
import { Wrapper, Inner, LeftSection, GroupList, RightSection, BtnGroup, TextWrap } from './OwnGroup.styled';
import GroupItem from './GroupItem/GroupItem';
import { useCreatedGroupQuery, useGetReqMembersQuery } from 'store/hooks/group.hooks';
import Card from 'components/common/Card/Card';
import { GroupData } from 'group-data';
import Button from 'components/common/Button/Button';
import CardSkeleton from 'components/common/Card/Card.skeleton';

const OwnedGroup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const { data: createdGroup } = useCreatedGroupQuery();
  const { data: reqMembers } = useGetReqMembersQuery({ groupId: createdGroup?.data.createdGroup._id });
  React.useEffect(() => {
    // console.log(createdGroup?.data.createdGroup);
    // console.log(reqMembers?.data.getData);
  }, [createdGroup, reqMembers]);

  return (
    <Wrapper>
      {/* {isModalVisible && <JoinRequestModal title="프로젝트 이름" onClose={() => setIsModalVisible(false)} />} */}
      <Inner>
        <LeftSection>
          {createdGroup?.data.createdGroup ? (
            <>
              <Card data={createdGroup.data.createdGroup} />
            </>
          ) : (
            <CardSkeleton />
          )}
          <BtnGroup>
            <Button color="var(--success)" height="34px">
              상세 페이지
            </Button>
            <Button color="var(--success)" height="34px">
              수정하기
            </Button>
            <Button color="#41E3B6" height="34px">
              모집 완료
            </Button>
            <Button color="var(--error)" height="34px">
              삭제
            </Button>
          </BtnGroup>
        </LeftSection>
        <RightSection>
          <TextWrap>
            <h4>지원자 수 - {createdGroup?.data.createdGroup.joinReqList.length}</h4>
            <h4>
              모집현황 - {createdGroup?.data.createdGroup.currentMembers.length}/{createdGroup?.data.createdGroup.maxMembers}
            </h4>
            <a>전체 삭제</a>
          </TextWrap>
          <GroupList>
            {/* {createdGroup?.data.createdGroup.joinReqList.map((id: string, idx: number) => (
              <GroupItem key={idx} index={idx} active={idx === activeIdx} setActive={() => setActiveIdx(idx)} id={id} />
            ))} */}
            {reqMembers?.data.getData.map((data: string, idx: number) => (
              <GroupItem key={idx} index={idx} active={idx === activeIdx} setActive={() => setActiveIdx(idx)} data={data} />
            ))}
          </GroupList>
        </RightSection>
      </Inner>
    </Wrapper>
  );
};

export default OwnedGroup;
