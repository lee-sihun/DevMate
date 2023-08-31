import React, { useEffect, useState } from 'react';
import { Wrapper, Inner, LeftSection, GroupList, RightSection, BtnGroup, TextWrap } from './OwnGroup.styled';
import GroupItem from './GroupItem/GroupItem';
import {
  useCreatedGroupQuery,
  useGetReqMembersQuery,
  usePatchDeleteAllReqMembersMutation,
  usePatchRejectReqMembersMutation,
  usePatchReqMembersMutation,
} from 'store/hooks/group.hooks';
import Card from 'components/common/Card/Card';
import { GroupData } from 'group-data';
import Button from 'components/common/Button/Button';
import CardSkeleton from 'components/common/Card/Card.skeleton';
import JoinRequestModal from 'components/common/Modal/JoinRequestModal/JoinRequestModal';
import NoData from 'components/common/NoData/NoData';

const OwnedGroup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalData, setModalData] = useState({});
  const [joinId, setJoinId] = useState('');

  const { data: createdGroup } = useCreatedGroupQuery();
  const { data: reqMembers } = useGetReqMembersQuery({ groupId: createdGroup?.data?._id });
  const [approve] = usePatchReqMembersMutation();
  const [reject] = usePatchRejectReqMembersMutation();
  const [deleteAllReq] = usePatchDeleteAllReqMembersMutation();

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const approveJoin = (id: string) => {
    approve(id);
    closeModal();
  };

  const rejectJoin = (id: string) => {
    reject(id);
    closeModal();
  };

  const handleRejectAll = (id: string) => {
    deleteAllReq(id);
  };

  useEffect(() => {
    console.log(createdGroup);
    // console.log(reqMembers?.data.getData);
    // console.log(modalData);
  }, [createdGroup, modalData]);

  if (createdGroup?.data) {
    return (
      <Wrapper>
        {isModalVisible && (
          <JoinRequestModal
            title={createdGroup?.data?.title}
            onClose={closeModal}
            data={modalData}
            id={joinId}
            approveJoin={approveJoin}
            rejectJoin={rejectJoin}
          />
        )}
        <Inner>
          <LeftSection>
            {createdGroup?.data ? (
              <>
                <Card data={createdGroup.data} />
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
              <h4>지원자 수 - {createdGroup?.data?.joinReqList?.length}</h4>
              <h4>
                모집현황 - {createdGroup?.data?.currentMembers?.length}/{createdGroup?.data?.maxMembers}
              </h4>
              <a onClick={() => handleRejectAll(createdGroup?.data?._id)}>전체 거절</a>
            </TextWrap>
            <GroupList>
              {reqMembers?.data?.getData?.map((data: string, idx: number) => (
                <GroupItem
                  key={idx}
                  index={idx}
                  active={idx === activeIdx}
                  setActive={() => setActiveIdx(idx)}
                  data={data}
                  onClick={openModal}
                  setModalData={setModalData}
                  id={createdGroup?.data?.joinReqList[idx]}
                  setJoinId={setJoinId}
                />
              ))}
            </GroupList>
          </RightSection>
        </Inner>
      </Wrapper>
    );
  } else {
    return <NoData msg="생성한 그룹이 없습니다." />;
  }
};

export default OwnedGroup;
