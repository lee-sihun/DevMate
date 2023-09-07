import React from 'react';
import {
  GroupDeleteModalBg,
  GroupDeleteModalWindow,
  GroupDeleteModalWindowContents,
  GroupDeleteModalWindowMsg,
  GroupDeleteModalWindowTitle,
  GroupDeleteModalWindowTop,
  GroupDeleteModalWrap,
} from './GroupDeleteModal.styled';
import { LinkIcon } from '../LinkIcon.styled';
import down from '../../../assets/img/down.svg';
import Button from '../Button/Button';
import CheckAnimation from '../CheckAnimation/CheckAnimation';
import { ToastAlert } from '../ToastAlert.styled';
import { useGetProfileQuery } from 'store/hooks/user.hooks';
import { uploadsUrlParser } from 'utils/parser';
import defaultProfile from 'assets/img/default-profile.svg';
import { useDeleteGroupMutation } from 'store/hooks/group.hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface GroupDeleteModalProps {
  title: string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  id?: string,
  // link?: string,
}

const GroupDeleteModal = ({ title, setModal, id }: GroupDeleteModalProps) => {

  const { data } = useGetProfileQuery();
  const { id: groupId } =  useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const authorData = data?.data?.foundUser;

  const [GroupDelete, setGroupDelete] = React.useState(false);
  const [GroupDeleteContents, setGroupDeleteContents] = React.useState<string>('');
  const [alert, setAlert] = React.useState(false);

  const [
    deleteGroup,
    { isSuccess },
  ] = useDeleteGroupMutation();

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

  React.useEffect(() => {
    if (isSuccess) {
      pathname !== '/mygroup' && 
      setTimeout(() => navigate('/'), 2000);
    }
  }, [isSuccess]);

  const closeModal = React.useCallback(() => setModal(false), []);
  const submitGroupDelete = React.useCallback(() => {
    // setGroupDelete(true);
    if (GroupDeleteContents === title) {
      setGroupDelete(true);
      deleteGroup(groupId || id);
      setModal(false);
    } else {
      setAlert(true);
    }
  }, [GroupDeleteContents]);


  return (
    <GroupDeleteModalWrap>
      <GroupDeleteModalBg onClick={closeModal} />
      <GroupDeleteModalWindow $height='450px'>
        <GroupDeleteModalWindowTop>
          <LinkIcon size='30px' src={down} style={{ cursor: 'pointer' }} onClick={closeModal} />
          <GroupDeleteModalWindowTitle>{title}</GroupDeleteModalWindowTitle>
        </GroupDeleteModalWindowTop>
        <GroupDeleteModalWindowContents>
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
                  <h3>정말 삭제하시겠습니까? ☹️</h3>
                  <div>
                    <p>그룹을 삭제하시면, 그룹 구성원의 존재유무와 상관없이 해체됩니다.</p>
                    <p>삭제 후 그룹의 데이터는 복구하실 수 없습니다.</p>
                    <p>현재 <strong>그룹명</strong>을 입력하고 삭제 버튼을 누르시면 위 내용에 동의하는 것으로 간주됩니다.</p>
                    <input
                      type="text"
                      placeholder={`현재 그룹명을 입력하여 삭제하세요 ( 현재 그룹명: ${title})`}
                      value={GroupDeleteContents}
                      onChange={(e) => setGroupDeleteContents(e.target.value)}
                    />
                  </div>
                </div>
                <Button color='var(--error)' height='40px' onClick={submitGroupDelete}>그룹 삭제</Button>
              </React.Fragment>
          }
        </GroupDeleteModalWindowContents>
      </GroupDeleteModalWindow>
      {
        alert && <ToastAlert color='var(--error)'>
          그룹명을 제대로 기입해주세요!
        </ToastAlert>
      }
    </GroupDeleteModalWrap>
  );
};

export default GroupDeleteModal;