import React from 'react';
import { Wrapper, InfoField, GroupInfo, JoinStatus, JoinRequest } from './OwnGroup.styled';

const OwnedGroup = () => {
  return (
    <Wrapper>
      <GroupInfo>
        <img src="https://velog.velcdn.com/images/raquim47/profile/69ecb9ca-367a-4e37-9e16-c2fbd0a399cf/image.jpeg" alt="" />

        <h3>프로젝트 이름</h3>
        <InfoField>
          <h4>포지션</h4>
          <ul>
            <li className="position">프론트엔드</li>
            <li className="position">디자이너</li>
          </ul>
        </InfoField>
        <InfoField>
          <h4>기술 스택</h4>
          <ul>
            <li className="tech">
              <img src="/assets/img/skills/css.svg" alt="" />
            </li>
            <li className="tech">
              <img src="/assets/img/skills/docker.svg" alt="" />
            </li>
            <li className="tech">
              <img src="/assets/img/skills/css.svg" alt="" />
            </li>
            <li className="tech">
              <img src="/assets/img/skills/docker.svg" alt="" />
            </li>
          </ul>
        </InfoField>
        {/* <small className="end-date">마감일 : 23-01-01</small> */}
        <div className="btns">
          <button>상세 내용</button>
          <button>내용 수정</button>
        </div>
      </GroupInfo>
      <JoinStatus>
        <h4>
          <span>지원자 수 - 12</span>
          <span>모집 현황 3/5</span>
        </h4>

        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <JoinRequest key={idx}>
              <div>
                <strong>게코젤리님이 지원하셨습니다.</strong>
                <p>
                  안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요
                  지원서입니다.
                </p>
              </div>
              <button>지원 내용</button>
            </JoinRequest>
          ))}
      </JoinStatus>
    </Wrapper>
  );
};

export default OwnedGroup;
