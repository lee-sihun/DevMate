import JoinRequestModal from 'components/common/Modal/JoinRequestModal/JoinRequestModal';
import React, { useState } from 'react';
import { Wrapper, Inner, LeftSection, SectionTitle, JoinRequest, GroupList, JoinStatus, RightSection, GroupInfo } from './OwnGroup.styled';
import GroupItem from './GroupItem/GroupItem';

const OwnedGroup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Wrapper>
      {/* {isModalVisible && <JoinRequestModal title="프로젝트 이름" onClose={() => setIsModalVisible(false)} />} */}
      <Inner>
        <LeftSection>
          <SectionTitle>
            내 그룹 <span>10</span>
          </SectionTitle>
          <GroupList>
            {Array(10)
              .fill({})
              .map((_, idx) => (
                <GroupItem key={idx} active={idx === activeIdx} setActive={() => setActiveIdx(idx)} />
              ))}
          </GroupList>
        </LeftSection>
        <RightSection>
          <GroupInfo>
            <div className="info">
              <small>스터디</small>
              <h4>리액트 짱 잘하는 스터디</h4>
              <div className="position">
                <span>#프론트엔드</span>
                <span>#디자이너</span>
              </div>
              <ul className="tech">
                <li>
                  <img src="/assets/img/skills/css.svg" alt="" />
                </li>
                <li>
                  <img src="/assets/img/skills/docker.svg" alt="" />
                </li>
                <li>
                  <img src="/assets/img/skills/css.svg" alt="" />
                </li>
                <li>
                  <img src="/assets/img/skills/docker.svg" alt="" />
                </li>
              </ul>
              <div className="btns">
                <button className="blue">상세 내용</button>
                <button>그룹 수정</button>
              </div>
            </div>
            <div className="image">
              <img src="https://velog.velcdn.com/images/raquim47/profile/69ecb9ca-367a-4e37-9e16-c2fbd0a399cf/image.jpeg" alt="" />
            </div>
          </GroupInfo>
          <JoinStatus>
            <h4>
              <span>지원 수 5</span>
              <span>모집 현황 3/5</span>
            </h4>

            <ul>
              {Array(10)
                .fill(0)
                .map((_, idx) => (
                  <JoinRequest key={idx}>
                    <div>
                      <strong>게코젤리님이 지원하셨습니다.</strong>
                      <p>
                        안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요 지원서입니다.안녕하세요
                        지원서입니다.안녕하세요 지원서입니다.
                      </p>
                    </div>
                    <button onClick={() => setIsModalVisible(true)}>지원 내용</button>
                  </JoinRequest>
                ))}
            </ul>
          </JoinStatus>
        </RightSection>
      </Inner>
    </Wrapper>
  );
};

export default OwnedGroup;
