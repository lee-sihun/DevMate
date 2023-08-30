import React, { useEffect } from 'react';
import {
  GroupImg,
  InfoH3,
  InfoLeft,
  InfoRight,
  InfoSection,
  InfoSpan,
  InfoWrap,
} from './Info.styled';
import { GroupType, Location, Position, Skill } from 'group-data';
import Button from 'components/common/Button/Button';
import { Boundary } from 'components/common/Boundary.styled';
import { PositionLabel, PositionLabelWrap } from 'components/common/Label.styled';
import { SkillImg, SkillImgWrap } from 'components/common/Card/Card.styled';
import { pascalToKebab, uploadsUrlParser } from 'utils/parser';
import SupportModal from 'components/common/SupportModal/SupportModal';
import { useGetOtherProfileQuery } from 'store/hooks/user.hooks';
import { AuthorData } from 'author-data';
import { useNavigate } from 'react-router-dom';
import GroupDeleteModal from 'components/common/GroupDeleteModal/GroupDeleteModal';

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

  const authorData = data?.data.foundUser;

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(title, type, location, currentMembers, maxMembers, dueDate, position, skills, img);
  }, [title, type, location, currentMembers, maxMembers, dueDate, position, skills, img]);

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
          <InfoSpan>{dueDate}</InfoSpan>
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
            {skills.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <SkillImg
                    src={`/assets/img/skills/${pascalToKebab(item)}.svg`}
                  />
                  <span>{item}</span>
                </React.Fragment>
              );
            })}
          </SkillImgWrap>
        </InfoWrap>
      </InfoLeft>
      <InfoRight>
        <GroupImg src={uploadsUrlParser(img)} />
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
            : <>
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