import React, { useState, useEffect, useMemo } from 'react';
import {
  GroupImg,
  InfoH3,
  InfoLeft,
  InfoRight,
  InfoSection,
  InfoSpan,
  InfoWrap,
} from './Info.styled';
import { GroupData, GroupType, Location, Position, Skill } from 'group-data';
import Button from 'components/common/Button/Button';
import { Boundary } from 'components/common/Boundary.styled';
import { PositionLabel, PositionLabelWrap } from 'components/common/Label.styled';
import { SkillImg, SkillImgWrap } from 'components/common/Card/Card.styled';
import { pascalToKebab, uploadsUrlParser } from 'utils/parser';
import SupportModal from 'components/common/SupportModal/SupportModal';
import { useGetOtherProfileQuery } from 'store/hooks/user.hooks';
import { AuthorData } from 'author-data';
import { useNavigate, useParams } from 'react-router-dom';
import GroupDeleteModal from 'components/common/GroupDeleteModal/GroupDeleteModal';
import { useGetJoinReqGroupQuery, useGroupJoinCancelRequestMutation } from 'store/hooks/group.hooks';
import { THUMNAIL_BOX } from 'utils/const';

interface InfoProps {
  detailData: any,
  title: string,
  type: GroupType,
  location: Location,
  currentMembers: number,
  maxMembers: number,
  dueDate: string,
  position: Position[],
  skills: Skill[],
  img: string,
  authorId: string,
  userData?: AuthorData,
}

const Info = ({ detailData, title, type, location, currentMembers, maxMembers, dueDate, position, skills, img, authorId, userData }: InfoProps) => {

  const [modal, setModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const { data } = useGetOtherProfileQuery(authorId as string);
  const { data: joinData } = useGetJoinReqGroupQuery({ page: 1, perPage: 8, type: detailData.type });

  const userJoinInfo = joinData?.data.groupsInfo;

  const authorData = data?.data.foundUser;

  const navigate = useNavigate();
  const { id: groupId } = useParams();

  const randomThumnail = useMemo(() => {
    const randomIdx = Math.floor(Math.random() * THUMNAIL_BOX.length);
    return THUMNAIL_BOX[randomIdx];
  }, []);

  const [
    groupJoinCancelRequest,
  ] = useGroupJoinCancelRequestMutation();

  // useEffect(() => {
  //   // console.log(userJoinInfo);
  //   if (userJoinInfo) {
  //     const joinCheck = userJoinInfo.filter((joinGroup: GroupData) => {
  //       // console.log(joinGroup);
  //       return joinGroup._id === groupId;
  //     });

  //     console.log(joinCheck);
  //   }
  // }, [joinData]);

  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = randomThumnail;
  };

  console.log(detailData);

  const [participating, setParticipating] = useState(false);

  useEffect(() => {
    if (detailData.currentMembers.filter((memberId: string) => memberId === userData?._id).length > 0) {
      setParticipating(true);
    } else {
      setParticipating(false);
    }
  }, [detailData]);

  return (
    <InfoSection>
      <InfoLeft>
        <InfoWrap>
          <InfoH3>유형</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{type === 'study' ? '스터디' : '프로젝트'}</InfoSpan>
        </InfoWrap>
        <InfoWrap>
          <InfoH3>지역</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{location}</InfoSpan>
        </InfoWrap>
        <InfoWrap>
          <InfoH3>마감 인원</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{`${currentMembers} / ${maxMembers}`}</InfoSpan>
        </InfoWrap>
        <InfoWrap>
          <InfoH3>예상 기한</InfoH3>
          <Boundary height='20px' />
          <InfoSpan style={{ color: 'var(--disabled-text)', fontWeight: 400 }}>{dueDate || '예상 기한이 없습니다.'}</InfoSpan>
        </InfoWrap>
        <InfoWrap>
          <InfoH3>포지션</InfoH3>
          <Boundary height='20px' $alignSelf='flex-start' />
          <PositionLabelWrap width='600px'>
            {position.map((item, i) => {
              return <PositionLabel key={i}>{item}</PositionLabel>;
            })}
          </PositionLabelWrap>
        </InfoWrap>
        <InfoWrap>
          <InfoH3>기술 스택</InfoH3>
          <Boundary height='20px' $alignSelf='flex-start' />
          <SkillImgWrap width='600px'>
            {
              skills.length > 0
                ? skills.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <SkillImg
                        src={`/assets/img/skills/${pascalToKebab(item)}.svg`}
                      />
                      <span>{item}</span>
                    </React.Fragment>
                  );
                })
                : <span style={{ color: 'var(--disabled-text)' }}>요구되는 기술이 없습니다.</span>
            }
          </SkillImgWrap>
        </InfoWrap>
      </InfoLeft>
      <InfoRight>
        <GroupImg src={uploadsUrlParser(img)} onError={imgErrorHandler} />
        {
          authorData?._id === userData?._id
            ? <>
              <Button color='var(--success)' height="38px" onClick={() => {
                navigate('/mygroup');
              }}>관리 페이지 이동</Button>
              <Button color='var(--success)' height="38px" onClick={() => {
                navigate('/mygroup/update', { state: { beforeUrl: 'detail', detailData } });
              }}>수정하기</Button>
              <Button color='var(--error)' height="38px" onClick={() => {
                // setModal(true);
                // navigate('/mygroup/update');
                setDeleteModal(true);
                // console.log('delete');
              }}>삭제하기</Button>
            </>
            :
            // participating
            //   ? <>
            //     <Button color='#ccc' height="38px" disabled={true}>참가 중</Button>
            //   </>
            //   :
              userJoinInfo && userJoinInfo.filter((joinGroup: GroupData) => joinGroup._id === groupId).length > 0
                ? <>
                  <Button color='var(--error)' height="38px" onClick={() => {
                    groupJoinCancelRequest(groupId);
                  }}>지원 취소</Button>
                </>
                :
                <>
                  <Button color='var(--success)' height="38px" onClick={() => {
                    setModal(true);
                  }}>지원하러 가기!</Button>
                </>
        }

      </InfoRight>
      {
        modal &&
        <SupportModal title={title} setModal={setModal} />
      }
      {
        deleteModal &&
        <GroupDeleteModal title={title} setModal={setDeleteModal} />
      }
    </InfoSection>
  );
};

export default Info;