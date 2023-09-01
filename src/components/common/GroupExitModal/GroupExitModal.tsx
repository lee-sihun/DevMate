import React from 'react';
import {
  GroupExitModalBg,
  GroupExitModalWindow,
  GroupExitModalWindowContents,
  GroupExitModalWindowTitle,
  GroupExitModalWindowTop,
  GroupExitModalWrap,
} from './GroupExitModal.styled';
import { LinkIcon } from '../LinkIcon.styled';
import down from '../../../assets/img/down.svg';
import Button from '../Button/Button';
import CheckAnimation from '../CheckAnimation/CheckAnimation';
import { ToastAlert } from '../ToastAlert.styled';
import { useGetProfileQuery } from 'store/hooks/user.hooks';
import { uploadsUrlParser } from 'utils/parser';
import defaultProfile from 'assets/img/default-profile.svg';
import { useGroupExitRequestMutation } from 'store/hooks/group.hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface GroupExitModalProps {
  title: string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  id?: string,
  // link?: string,
}

const GroupExitModal = ({ title, setModal, id }: GroupExitModalProps) => {

  const { data } = useGetProfileQuery();
  const { id: groupId } =  useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const authorData = data?.data?.foundUser;

  const [GroupDelete, setGroupDelete] = React.useState(false);
  const [GroupDeleteContents, setGroupDeleteContents] = React.useState<string>('');
  const [alert, setAlert] = React.useState(false);

  const [
    groupExitRequest,
  ] = useGroupExitRequestMutation();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
    return () => { document.body.style.overflow = ''; };
  }, []);
  React.useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
  }, [alert]);

  const closeModal = React.useCallback(() => setModal(false), []);
  const submitGroupDelete = React.useCallback(() => {
    // setGroupDelete(true);
    if (GroupDeleteContents === title) {
      setGroupDelete(true);
      groupExitRequest(groupId || id);
      // setModal(false);
    } else {
      setAlert(true);
    }
  }, [GroupDeleteContents]);


  return (
    <GroupExitModalWrap>
      <GroupExitModalBg onClick={closeModal} />
      <GroupExitModalWindow $height='450px'>
        <GroupExitModalWindowTop>
          <LinkIcon size='30px' src={down} style={{ cursor: 'pointer' }} onClick={closeModal} />
          <GroupExitModalWindowTitle>{title}</GroupExitModalWindowTitle>
        </GroupExitModalWindowTop>
        <GroupExitModalWindowContents>
          {
            GroupDelete
              ? <React.Fragment>
                <CheckAnimation setModal={setModal} />
              </React.Fragment>
              :
              <React.Fragment>
                <div className='authorInfo_wrap'>
                  <img src={uploadsUrlParser(authorData?.profileImage) || defaultProfile} alt="사용자 이미지" />
                  <div className='info_text'>
                    <div>{authorData?.nickname} 님</div>
                    <div>{authorData?.email}</div>
                  </div>
                </div>
                <div className='warning_msg'>
                  <h3>정말 탈퇴하시겠습니까? ☹️</h3>
                  <div>
                    <p>탈퇴 후 그룹 활동 정보는 복구 할 수 없습니다.</p>
                    <p>현재 <strong>그룹명</strong>을 입력하고 탈퇴 버튼을 누르시면 위 내용에 동의하는 것으로 간주됩니다.</p>
                    <input
                      type="text"
                      placeholder={`현재 그룹명을 입력하여 삭제하세요 ( 현재 그룹명: ${title})`}
                      value={GroupDeleteContents}
                      onChange={(e) => setGroupDeleteContents(e.target.value)}
                    />
                  </div>
                </div>
                <Button color='var(--error)' height='40px' onClick={submitGroupDelete}>그룹 탈퇴</Button>
              </React.Fragment>
          }
        </GroupExitModalWindowContents>
      </GroupExitModalWindow>
      {
        alert && <ToastAlert color='var(--error)'>
          그룹명을 제대로 기입해주세요!
        </ToastAlert>
      }
    </GroupExitModalWrap>
  );
};

export default GroupExitModal;