import React from 'react';
import { UserInfo, Content } from './JoinRequestModal.styled';
import defaultProfile from 'assets/img/default-profile.svg';
import ModalLayout from '../ModalLayout/ModalLayout';

interface JoinRequestModalProps {
  title: string;
  onClose: () => void;
}

const JoinRequestModal = ({ title, onClose }: JoinRequestModalProps) => {
  return (
    <>
      <ModalLayout title={title} mode="NOTICE" onClose={onClose}>
        <UserInfo>
          <img src={defaultProfile} alt="프로필 이미지" />
          <div className="info">
            <h3>사용자</h3>
            <p>test@test.com</p>
          </div>
        </UserInfo>
        <Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem similique?
            Mollitia libero voluptatibus aliquam illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem similique? Mollitia libero voluptatibus aliquam
            illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur maiores natus
            explicabo incidunt placeat minima dolorem similique? Mollitia libero voluptatibus aliquam illum iure. Velit eius earum dolorum inventore
            labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem
            similique? Mollitia libero voluptatibus aliquam illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem similique? Mollitia libero
            voluptatibus aliquam illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tenetur maiores natus explicabo incidunt placeat minima dolorem similique? Mollitia libero voluptatibus aliquam illum iure. Velit eius
            earum dolorum inventore labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur maiores natus explicabo incidunt
            placeat minima dolorem similique? Mollitia libero voluptatibus aliquam illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem similique? Mollitia
            libero voluptatibus aliquam illum iure. Velit eius earum dolorum inventore labore?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla tenetur maiores natus explicabo incidunt placeat minima dolorem similique? Mollitia libero voluptatibus aliquam illum iure. Velit
            eius earum dolorum inventore labore?
          </p>
          <div className="btns">
            <button>수락</button>
            <button>거절</button>
          </div>
        </Content>
      </ModalLayout>
    </>
  );
};
export default JoinRequestModal;
