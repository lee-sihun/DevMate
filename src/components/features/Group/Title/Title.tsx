import React, { useEffect } from 'react';
import {
  TitleAuthorName,
  TitleAuthorWrap,
  TitleCountWrap,
  TitleH2,
  TitleModalAuthorInfoWrap,
  TitleModalWrap,
  TitleSection,
  TitleSemiWrap,
} from './Title.styled';
import ProfileCircle from 'components/common/ProfileCircle/ProfileCircle';
import eye from '../../../../assets/img/eye.svg';
import heart from '../../../../assets/img/heart.svg';
import { Boundary } from 'components/common/Boundary.styled';
import { CntMaxView, formatDateToYYMMDD, pascalToKebab, uploadsUrlParser } from 'utils/parser';
import { useGetDummyAuthorDataQuery } from 'store/hooks';
import { LinkIcon, LinkWrap } from 'components/common/LinkIcon.styled';
import { Link } from 'react-router-dom';
import { SkillImg, SkillImgWrap } from 'components/common/Card/Card.styled';
import { MD_TEXT } from 'utils/const';
import { Viewer } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import { useGetOtherProfileQuery } from 'store/hooks/user.hooks';
import defaultProfile from 'assets/img/default-profile.svg';

interface TitleProps {
  title: string,
  authorId: string,
  name: string,
  createdAt: string,
  viewCount: number,
  wishCount: number,
}

const Title = (
  { title, authorId, name, createdAt, viewCount, wishCount }:
    TitleProps
) => {

  const { data } = useGetOtherProfileQuery(authorId as string);

  const [modal, setModal] = React.useState(false);

  const authorData = data?.data.foundUser;

  useEffect(() => {
    // console.log(title, authorId, name, createdAt, viewCount, wishCount);
  }, [title, authorId, name, createdAt, viewCount, wishCount]);

  const handleModal = React.useCallback(() => setModal((curr) => !curr), []);
  const closeModal = React.useCallback(() => setModal(false), []);

  if (authorData) {

    return (
      <TitleSection>
        <TitleH2>{title}</TitleH2>
        <TitleSemiWrap>
          <TitleAuthorWrap
            onClick={handleModal}
          >
            {/* <ProfileCircle size="42px" img={authorData.profileImage} /> */}
            <img src={uploadsUrlParser(authorData?.profileImage) || defaultProfile} alt="사용자 이미지" />
            <TitleAuthorName>{authorData.nickname || ''}</TitleAuthorName>
            <Boundary height='16px' />
            <div>{formatDateToYYMMDD(new Date(createdAt))}</div>
          </TitleAuthorWrap>
          <TitleCountWrap>
            <img src={eye} />
            <div>{CntMaxView(viewCount)}</div>
            <img src={heart} />
            <div>{CntMaxView(wishCount)}</div>
          </TitleCountWrap>
        </TitleSemiWrap>
        {
          modal &&
          <TitleModalWrap onMouseLeave={closeModal}>
            <div>
              <TitleAuthorWrap $cursor={false}>
                {/* <ProfileCircle size="42px" img={authorData.profileImage} /> */}
                <img src={uploadsUrlParser(authorData?.profileImage) || defaultProfile} alt="사용자 이미지" />
                <TitleModalAuthorInfoWrap>
                  <TitleAuthorName>{authorData.nickname || ''}</TitleAuthorName>
                  <TitleAuthorName>{authorData.email || ''}</TitleAuthorName>
                </TitleModalAuthorInfoWrap>
              </TitleAuthorWrap>
              <LinkWrap>
                {
                  authorData.links && Object.entries(authorData.links).map(([key, value], i) => {
                    return <Link to={value as string} key={i}>
                      <LinkIcon src={`/assets/icon/${key}.svg`} size='16px' />
                    </Link>;
                  })
                }
                {/* <Link to={'/'} >
                  <LinkIcon src={'/assets/icon/profile.svg'} size='16px' />
                </Link> */}
              </LinkWrap>
            </div>
            <div>
              <SkillImgWrap width='600px'>
                {authorData.skills && authorData.skills.map((item: any, i: number) => {
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
            </div>
            <div>
              <h3>소개</h3>
              <Viewer
                initialValue={authorData.overview || ''}
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
              />
            </div>
          </TitleModalWrap>
        }
      </TitleSection >
    );
  }

  return (
    <TitleSection>
      <TitleH2>{title}</TitleH2>
      <TitleSemiWrap>
        <TitleAuthorWrap>
          <ProfileCircle size="42px" />
          <TitleAuthorName>{name}</TitleAuthorName>
          <Boundary height='16px' />
          <div>{createdAt}</div>
        </TitleAuthorWrap>
        <TitleCountWrap>
          <img src={eye} />
          <div>{CntMaxView(viewCount)}</div>
          <img src={heart} />
          <div>{CntMaxView(wishCount)}</div>
        </TitleCountWrap>
      </TitleSemiWrap>
    </TitleSection>
  );
};

export default Title;