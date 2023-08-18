import React from 'react';
import defaultProfile from 'assets/img/default-profile.svg';
import { Wrapper, PageHeader, ProfileContent, ProfileTop, ProfileInfo, InfoItem, TechTags } from './Profile.styled';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PageHeader>
        <strong>My Profile</strong>
        <h2>내 프로필</h2>
      </PageHeader>
      <ProfileContent>
        <ProfileTop>
          <img src={defaultProfile} alt="사용자 이미지" />
          <h3>사용자</h3>
          <button onClick={() => navigate('/profile/edit')}>정보 수정</button>
        </ProfileTop>
        <ProfileInfo>
          <InfoItem>
            <dt>Email</dt>
            <dd>abc@gmail.com</dd>
          </InfoItem>
          <InfoItem>
            <dt>기술스택</dt>
            <dd>
              <TechTags>#밥먹기</TechTags>
              <TechTags>#코딩</TechTags>
              <TechTags>#디버깅</TechTags>
            </dd>
          </InfoItem>
          <InfoItem>
            <dt>소개</dt>
            <dd>
              안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요
              반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요
              반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요
              반갑습니다.안녕하세요 반갑습니다.
            </dd>
          </InfoItem>
          <InfoItem>
            <dt>GitHub</dt>
            <dd>
              <a href="https://github.com/">https://github.com/</a>
            </dd>
          </InfoItem>
          <InfoItem>
            <dt>블로그</dt>
            <dd>
              <a href="https://blog.com/">https://blog.com/</a>
            </dd>
          </InfoItem>
        </ProfileInfo>
      </ProfileContent>
    </Wrapper>
  );
};
export default Profile;
