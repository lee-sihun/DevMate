import React, { useMemo } from 'react';
import {
  DueDateWrap,
  GroupImg,
  InfoH3,
  InfoLeft,
  InfoRight,
  InfoSection,
  InfoSpan,
  MaxMemberWrap,
  PositionsWrap,
  SkillsWrap,
  TypeWrap,
} from './Info.styled';
import { GroupType, Position, Skill } from 'group-data';
import Button from 'components/common/Button/Button';
import { Boundary } from 'components/common/Boundary.styled';
import { PositionLabel, PositionLabelWrap } from 'components/common/Label.styled';
import { SkillImg, SkillImgWrap } from 'components/common/Card/Card.styled';
import { pascalToKebab } from 'utils/parser';

interface InfoProps {
  type: GroupType,
  currentMembers: number,
  maxMembers: number,
  dueDate: string,
  position: Position[],
  skills: Skill[],
  img: string
}

const Info = ({ type, currentMembers, maxMembers, dueDate, position, skills, img }: InfoProps) => {
  return (
    <InfoSection>
      <InfoLeft>
        <TypeWrap>
          <InfoH3>유형</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{type === 'study' ? '스터디' : '프로젝트'}</InfoSpan>
        </TypeWrap>
        <MaxMemberWrap>
          <InfoH3>마감 인원</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{`${currentMembers} / ${maxMembers}`}</InfoSpan>
        </MaxMemberWrap>
        <DueDateWrap>
          <InfoH3>예상 기한</InfoH3>
          <Boundary height='20px' />
          <InfoSpan>{dueDate}</InfoSpan>
        </DueDateWrap>
        <PositionsWrap>
          <InfoH3>포지션</InfoH3>
          <Boundary height='20px' $alignSelf='flex-start' />
          <PositionLabelWrap width='600px'>
            {position.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <PositionLabel>{item}</PositionLabel>
                </React.Fragment>
              );
            })}
          </PositionLabelWrap>
        </PositionsWrap>
        <SkillsWrap>
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
        </SkillsWrap>
      </InfoLeft>
      <InfoRight>
        <GroupImg src={img} />
        <Button color='var(--success)' height="38px">지원하러 가기!</Button>
      </InfoRight>

    </InfoSection>
  );
};

export default Info;