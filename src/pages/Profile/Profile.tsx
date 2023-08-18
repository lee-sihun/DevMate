import React from 'react';
import styled from 'styled-components';
import githubLogo from 'assets/img/social/github-logo.svg';
import defaultProfile from 'assets/img/default-profile.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;

  strong {
    color: var(--blue-regular1);
    font-weight: 600;
    font-size: 18px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const ProfileTop = styled.div`
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
    font-weight: 500;
  }

  button {
    border: none;
    background-color: var(--blue-regular1);
    padding: 6px 10px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--blue-regular2);
  }
`;

const ProfileInfo = styled.dl`
  width: 100%;
  margin-top: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;

  dt {
    width: 120px;
    font-weight: 500;
  }

  dd {
    flex: 1;
    line-height: 1.4;
  }

  a {
    color: inherit;
  }
`;

const TechTags = styled.span`
  background-color: #4d4d4d;
  color: #fff;
  border-radius: 4px;
  padding: 5px 8px 3px;
  font-size: 14px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const Profile = () => (
  <Wrapper>
    <PageHeader>
      <strong>My Profile</strong>
      <h2>내 프로필</h2>
    </PageHeader>
    <ProfileContent>
      <ProfileTop>
        <img src={defaultProfile} alt="사용자 이미지" />
        <h3>사용자</h3>
        <button>정보 수정</button>
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

export default Profile;
