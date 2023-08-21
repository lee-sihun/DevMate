import React, { useMemo } from 'react';
import {
  CardLayout,
  CardImg,
  CardH3,
  CardTextLayout,
  CardH4,
  SkillImg,
  SkillImgWrap,
  CardFooter,
  CardCntWrap,
  CardCntItem,
  CardLink,
  CardType,
} from './Card.styled';
import { GroupData } from 'group-data';
import { PositionLabel, PositionLabelWrap } from '../Label.styled';
import { CntMaxView, pascalToKebab } from 'utils/parser';


/**
 * props로 data 필수값입니다.
 * 
 */
const Card = ({ data }: { data: GroupData }) => {

  const overPosition = useMemo(() => {
    return data.position.length > 2
      ? data.position.length - 2
      : undefined;
  }, []);

  return (
    <CardLink to={`/detail/${data._id}`}>
      <CardLayout>
        <CardType type={data.type}>{data.type}</CardType>
        <CardImg src={data.imageUrl} alt='CardImg' />
        <CardTextLayout>
          <CardH3 title={data.title}>{data.title}</CardH3>
          <CardH4>포지션</CardH4>
          <PositionLabelWrap>
            {data.position.map((item, i) => {
              if (i < 2) {
                return (
                  <React.Fragment key={i}>
                    <PositionLabel>{item}</PositionLabel>
                  </React.Fragment>
                );
              }
            })}
            {overPosition && <PositionLabel>+{overPosition}</PositionLabel>}
          </PositionLabelWrap>
          <CardH4>기술 스택</CardH4>
          <SkillImgWrap>
            {data.skills.map((item, i) => {
              if (i < 6) {
                return (
                  <React.Fragment key={i}>
                    <SkillImg
                      src={`/assets/img/skills/${pascalToKebab(item)}.svg`}
                    />
                  </React.Fragment>
                );
              }
            })}
          </SkillImgWrap>
          <CardFooter>
            <small>마감일: {data.dueDate}</small>
            <CardCntWrap>
              <CardCntItem>
                <img src="/assets/icon/eye.svg" alt="ViewCnt" />
                <span>{CntMaxView(data.viewCount)}</span>
              </CardCntItem>
              <CardCntItem>
                <img src="/assets/icon/heart.svg" alt="WishCnt" />
                <span>{CntMaxView(data.wishCount)}</span>
              </CardCntItem>
            </CardCntWrap>
          </CardFooter>
        </CardTextLayout>
      </CardLayout>
    </CardLink>
  );
};

export default Card;