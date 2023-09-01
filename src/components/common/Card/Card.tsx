import React, { useEffect, useMemo, useState } from 'react';
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
  CardButton,
  LabelLayout,
} from './Card.styled';
import { GroupData } from 'group-data';
import { PositionLabel, PositionLabelWrap } from '../Label.styled';
import { CntMaxView, pascalToKebab } from 'utils/parser';
import { Link } from 'react-router-dom';
import defaultGroupImg from 'assets/img/default-img.png';
import { THUMNAIL_BOX } from 'utils/const';


interface CardProps {
  data: GroupData;
  hoverOn?: boolean; // '?'를 추가하여 선택적 프롭으로 설정
  red?: boolean;
  btnTxt?: string;
  id?: string;
  onChange?: (value: string) => void;
}

const Card = ({ data, hoverOn = false, red, btnTxt, id, onChange }: CardProps) => {
  const [hover, setHover] = useState(false);

  const randomThumnail = useMemo(() => {
    const randomIdx = Math.floor(Math.random() * THUMNAIL_BOX.length);
    return THUMNAIL_BOX[randomIdx];
  }, []);

  const CardLinkProps = hoverOn
    ? {
      to: hover ? '' : `/detail/${data._id}`,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
    }
    : {
      to: `/detail/${data._id}`,
    };

  const overPosition = useMemo(() => {
    return data.position.length > 2 ? data.position.length - 2 : undefined;
  }, []);

  const handleClick = () => {
    if (onChange) {
      onChange(data._id || 'test');
    } else {
      // console.log('No Find Event');
    }
  };

  useEffect(() => {
    // // console.log(id);
    // // console.log(data._id);
  }, [data]);

  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = randomThumnail;
  };

  return (
    <CardLink {...CardLinkProps}>
      <CardLayout $hoverOn={hoverOn}>
        <CardType type={data.type}>{data.type}</CardType>
        <CardImg src={data.imageUrl || defaultGroupImg} alt="CardImg"
          onError={imgErrorHandler}  />
        <CardTextLayout>
          <CardH3 title={data.title}>{data.title}</CardH3>
          <LabelLayout>
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
          </LabelLayout>
          <LabelLayout>
            {data.skills.length > 0 && <CardH4>기술 스택</CardH4>}
            <SkillImgWrap>
              {data.skills.map((item, i) => {
                if (i < 6) {
                  return (
                    <React.Fragment key={i}>
                      <SkillImg src={`/assets/img/skills/${pascalToKebab(item)}.svg`} />
                    </React.Fragment>
                  );
                }
              })}
            </SkillImgWrap>
          </LabelLayout>

          <CardFooter>
            <small>진행 기간: {data.dueDate}</small>
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
        {hoverOn && (
          <>
            <Link to={`/detail/${data._id}`}>
              <CardButton bottom={id !== data._id ? '216px' : '175px'} color="var(--success)">
                상세 페이지
              </CardButton>
            </Link>
            {id !== data._id && (
              <CardButton bottom="136px" color={red ? 'var(--error)' : 'var(--success)'} onClick={handleClick}>
                {btnTxt}
              </CardButton>
            )}
          </>
        )}
      </CardLayout>
    </CardLink>
  );
};

export default Card;
