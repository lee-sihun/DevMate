import React, { useEffect } from 'react';
import { GroupImg, Wrapper } from '../ListGroup/ListGroup.styled';
import { NotiContainer } from './Notification.styled';
import Button from 'components/common/Button/Button';
import { useGetNotificationQuery } from 'store/hooks/group.hooks';

const Notification = () => {
  const { data: notification } = useGetNotificationQuery();

  useEffect(() => {
    console.log(notification);
  }, [notification]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>알림</h2>
      </GroupImg>
      {notification?.data.map((notice: any, i: number) => (
        <NotiContainer key={i}>
          <div className="content">
            <div className="wrap">
              <div />
              <h2>프로젝트</h2>
              <h3>{notice.createdAt}</h3>
            </div>
            <h4>{notice.content}</h4>
          </div>
          <Button color="var(--success)" height="34px">
            확인
          </Button>
        </NotiContainer>
      ))}
    </Wrapper>
  );
};

export default Notification;
