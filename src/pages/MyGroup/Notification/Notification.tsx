import React, { useEffect } from 'react';
import { GroupImg, Wrapper } from '../ListGroup/ListGroup.styled';
import { NotiContainer, TextWrap } from './Notification.styled';
import Button from 'components/common/Button/Button';
import { useDeleteAllNotificationMutation, useDeleteNotificationMutation, useGetNotificationQuery } from 'store/hooks/group.hooks';

const Notification = () => {
  const { data: notification } = useGetNotificationQuery();
  const [deleteNotification] = useDeleteNotificationMutation();
  const [deleteAllNotification] = useDeleteAllNotificationMutation();

  const handleClick = (id: string) => {
    deleteNotification(id);
  };

  useEffect(() => {
    // console.log(notification);
  }, [notification]);

  return (
    <Wrapper>
      <GroupImg>
        <h2>알림</h2>
      </GroupImg>
      <TextWrap>
        {notification === undefined ? (
          <h4>메시지가 없습니다</h4>
        ) : (
          <>
            <h4>메시지 ({notification?.data?.length})</h4>
            <a onClick={deleteAllNotification}>전체 삭제</a>
          </>
        )}
      </TextWrap>
      {notification?.data.map((notice: any, i: number) => (
        <NotiContainer key={i}>
          <div className="content">
            <div className="wrap">
              <div />
              <h2>{notice.type === 'study' ? '스터디' : '프로젝트'}</h2>
              <h3>{notice.createdAt}</h3>
            </div>
            <h4>{notice.content}</h4>
          </div>
          <Button color="var(--success)" height="34px" onClick={() => handleClick(notice._id)}>
            확인
          </Button>
        </NotiContainer>
      ))}
    </Wrapper>
  );
};

export default Notification;
