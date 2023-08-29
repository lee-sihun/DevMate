import React from 'react';
import { UserInfo, Content, GithubLogo, BloggerLogo, LogoWrap } from './JoinRequestModal.styled';
import ModalLayout from '../ModalLayout/ModalLayout';
import ProfileCircle from 'components/common/ProfileCircle/ProfileCircle';

interface JoinRequestModalProps {
  title: string;
  onClose: () => void;
  data: any;
  id: string;
  approveJoin: (id: string) => void;
  rejectJoin: (id: string) => void;
}

const JoinRequestModal = ({ title, onClose, data, id, approveJoin, rejectJoin }: JoinRequestModalProps) => {
  return (
    <>
      <ModalLayout title={title} mode="NOTICE" onClose={onClose}>
        <UserInfo>
          {data.userImage ? <ProfileCircle size="60px" img={data.userImage} /> 
          : <ProfileCircle size="60px" />}
          <div className="info">
            <h3>{data.nickname}</h3>
            <p>{data.email}</p>
          </div>
          <LogoWrap>
            <GithubLogo />
            <BloggerLogo />
          </LogoWrap>
        </UserInfo>
        <Content>
          <p>{data.content}</p>
          <div className="btns">
            <button onClick={()=> approveJoin(id)}>수락</button>
            <button onClick={()=> rejectJoin(id)}>거절</button>
          </div>
        </Content>
      </ModalLayout>
    </>
  );
};
export default JoinRequestModal;
