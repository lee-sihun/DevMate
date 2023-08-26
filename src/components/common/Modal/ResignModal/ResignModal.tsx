import React from 'react';
import { UserInfo, Content, Form } from './ResignModal.styled';
import defaultProfile from 'assets/img/default-profile.svg';
import ModalLayout from '../ModalLayout/ModalLayout';
import InputField from 'components/features/InputField/InputField';
import { useForm } from 'react-hook-form';

interface ResignModalProps {
  onClose: () => void;
}

const ResignModal = ({ onClose }: ResignModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<{ passwordConfirm: string }>({ mode: 'onBlur' });

  const onSubmit = (data: { passwordConfirm: string }) => {
    console.log(data.passwordConfirm);
  };

  return (
    <>
      <ModalLayout title="회원탈퇴" mode="ALERT" onClose={onClose}>
        <UserInfo>
          <img src={defaultProfile} alt="프로필 이미지" />
          <div className="info">
            <h3>사용자</h3>
            <p>test@test.com</p>
          </div>
        </UserInfo>
        <Content>
          <strong>정말 탈퇴하시겠습니까?</strong>
          <p>
            계정을 삭제하시면 계정의 모든 정보들이 삭제됩니다.
            <br /> 탈퇴 후 동일한 메일로 재가입이 가능하나, 탈퇴한 계정과 연동되지 않습니다. <br />
            현재 비밀번호를 입력하고 탈퇴 버튼을 누르시면 위 내용에 동의하는 것으로 간주됩니다.
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="비밀번호 확인"
              id="passwordConfirm"
              type="password"
              registerOptions={register('passwordConfirm', {
                required: '비밀번호를 입력해주세요',
              })}
              error={errors.passwordConfirm}
              onClearError={() => clearErrors('passwordConfirm')}
            />
            <button type="submit">탈퇴</button>
          </Form>
        </Content>
      </ModalLayout>
    </>
  );
};
export default ResignModal;
