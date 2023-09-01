import React from 'react';
import {
  SupportModalBg,
  SupportModalWindow,
  SupportModalWindowContents,
  SupportModalWindowMsg,
  SupportModalWindowTitle,
  SupportModalWindowTop,
  SupportModalWrap,
} from './SupportModal.styled';
import { LinkIcon } from '../LinkIcon.styled';
import down from '../../../assets/img/down.svg';
import Button from '../Button/Button';
import CheckAnimation from '../CheckAnimation/CheckAnimation';
import { ToastAlert } from '../ToastAlert.styled';
import { useGroupJoinRequestMutation } from 'store/hooks/group.hooks';
import { useParams } from 'react-router-dom';

interface SupportModalProps {
  title: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SupportModal = ({ title, setModal }: SupportModalProps) => {
  const [support, setSupport] = React.useState(false);
  const [supportContents, setSupportContents] = React.useState<string>('');
  const [alert, setAlert] = React.useState(false);
  const { id: groupId } = useParams();

  const [groupJoinRequest, { isSuccess }] = useGroupJoinRequestMutation();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  React.useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
  }, [alert]);

  React.useEffect(() => {
    if (isSuccess) {
      setSupport(true);
    }
  }, [isSuccess]);

  const closeModal = React.useCallback(() => setModal(false), []);
  const submitSupport = React.useCallback(() => {
    if (supportContents) {
      // // console.log(supportContents);
      groupJoinRequest({ groupId, content: supportContents });
    } else {
      setAlert(true);
    }
  }, [supportContents]);

  return (
    <SupportModalWrap>
      <SupportModalBg onClick={closeModal} />
      <SupportModalWindow $height="400px">
        <SupportModalWindowTop>
          <LinkIcon size="30px" src={down} style={{ cursor: 'pointer' }} onClick={closeModal} />
          <SupportModalWindowTitle>{title}</SupportModalWindowTitle>
        </SupportModalWindowTop>
        <SupportModalWindowContents>
          {support ? (
            <React.Fragment>
              <CheckAnimation setModal={setModal} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <SupportModalWindowMsg
                placeholder="그룹장에게 보낼 지원 메시지를 적으세요."
                value={supportContents}
                onChange={(e) => {
                  // // console.log(e.target.value);
                  setSupportContents(e.target.value);
                }}
              ></SupportModalWindowMsg>
              <Button color="var(--blue-regular1)" height="40px" onClick={submitSupport}>
                지원하기
              </Button>
            </React.Fragment>
          )}
        </SupportModalWindowContents>
      </SupportModalWindow>
      {alert && <ToastAlert color="var(--error)">지원 내용을 써주세요!</ToastAlert>}
    </SupportModalWrap>
  );
};

export default SupportModal;
