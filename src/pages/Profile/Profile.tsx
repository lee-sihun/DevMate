import React, { useState } from 'react';
import defaultProfile from 'assets/img/default-profile.svg';
import { ProfileContent, ProfileTop, ProfileInfo, InfoItem, TechTags } from './Profile.styled';
import { Link } from 'react-router-dom';
import ResignModal from 'components/common/Modal/ResignModal/ResignModal';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import { AuthorData } from 'author-data';
import uuid from 'react-uuid';
import { SkillImg } from 'components/common/Card/Card.styled';
import { pascalToKebab, uploadsUrlParser } from 'utils/parser';

interface ProfileProps {
  userData?: AuthorData;
}

const Profile = ({ userData }: ProfileProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log(userData);

  return (
    <>
      <PageTemplate subTitle="My Profile" mainTitle="내 프로필">
        <ProfileContent>
          <ProfileTop>
            <img src={uploadsUrlParser(userData?.profileImage) || defaultProfile} alt="사용자 이미지" />
            <h3>{userData?.nickname}</h3>
            <Link to="/profile/edit">
              <button className="blue">정보 수정</button>
            </Link>
            <button onClick={() => setIsModalVisible(true)}>회원 탈퇴</button>
          </ProfileTop>
          <ProfileInfo>
            <InfoItem>
              <dt>Email</dt>
              <dd>{userData?.email}</dd>
            </InfoItem>
            <InfoItem>
              <dt>기술스택</dt>
              <dd>
                {userData?.skills.map((skill) => {
                  return <TechTags key={uuid()}>
                    <SkillImg src={`/assets/img/skills/${pascalToKebab(skill)}.svg`} $size='16px' />{skill}
                  </TechTags>;
                })}
              </dd>
            </InfoItem>
            <InfoItem>
              <dt>소개</dt>
              <dd>
                {userData?.overview}
              </dd>
            </InfoItem>
            <InfoItem>
              <dt>GitHub</dt>
              <dd>
                <a href={userData?.links?.gitHub ?? '#'} style={{
                  color: userData?.links?.gitHub ? '' : 'var(--disabled-text)',
                  textDecoration: userData?.links?.gitHub ? '' : 'none',
                }}>
                  {userData?.links?.gitHub ?? '등록된 깃허브 링크가 없습니다.'}
                </a>
              </dd>
            </InfoItem>
            <InfoItem>
              <dt>블로그</dt>
              <dd>
                <a href={userData?.links?.blog ?? '#'} style={{
                  color: userData?.links?.blog ? '' : 'var(--disabled-text)',
                  textDecoration: userData?.links?.blog ? '' : 'none',
                }}>
                  {userData?.links?.blog ?? '등록된 블로그 링크가 없습니다.'}
                </a>
              </dd>
            </InfoItem>
          </ProfileInfo>
        </ProfileContent>
      </PageTemplate>
      {isModalVisible && <ResignModal userData={userData} onClose={() => setIsModalVisible(false)} />}
    </>
  );
};
export default Profile;
