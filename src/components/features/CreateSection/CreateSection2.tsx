import CreateSectionTitle from 'components/common/CreateSectionTitle/CreateSectionTitle';
import React from 'react';
import { CreateButtonWrap, CreateInfoWrap, CreateSection } from './CreateSection.styled';
import { CreateSectionProps } from 'props-type';
import { CreateDescription, CreateTitleInput } from 'components/common/CreateForm/CreateForm';
import Button from 'components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { ToastAlert } from 'components/common/ToastAlert.styled';
import { validateDateRange } from 'utils/helper';
import { useCreateGroupMutation } from 'store/hooks/group.hooks';
import { Response } from 'response-data-type';
import defaultThumbnail1 from '../../../assets/img/thumbnail/thumbnail-8.png';
import defaultThumbnail2 from '../../../assets/img/thumbnail/thumbnail-9.png';
import defaultThumbnail3 from '../../../assets/img/thumbnail/thumbnail-10.png';
import defaultThumbnail4 from '../../../assets/img/thumbnail/thumbnail-11.png';
import defaultThumbnail5 from '../../../assets/img/thumbnail/thumbnail-12.png';
import defaultThumbnail6 from '../../../assets/img/thumbnail/thumbnail-13.png';
import defaultThumbnail7 from '../../../assets/img/thumbnail/thumbnail-14.png';
import defaultThumbnail8 from '../../../assets/img/thumbnail/thumbnail-15.png';

const CreateSection2 = ({ number, title }: CreateSectionProps) => {

  const createGroupData = useAppSelector((state) => state.groupCreater);

  const navigate = useNavigate();

  const [alert, setAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState('');

  const [
    createGroup,
    { error, isError, isSuccess },
  ] = useCreateGroupMutation();

  const onHistoryBack = () => {
    navigate(-1);
  };

  const onSubmit = async () => {
    const data = { ...createGroupData };
    if (data.title
      && data.type
      && data.position.length !== 0
      && data.location
      && data.description) {
      if (!validateDateRange(data.dueDate)) {
        console.log('예상 기간 형식 오류');
        setAlert(true);
        setAlertMsg('입력 형식을 맞춰 작성해주세요!');
        return;
      }
      if (!data.imageFile) {
        console.log(data);
      }
      console.log(data);
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (value instanceof Array) {
          formData.append(key, JSON.stringify(value));
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          value && formData.append(key, String(value));
        }
      }
      try {
        await createGroup(formData);
      } catch (err) {
        console.log(err);
      }
      return;
    } else {
      setAlert(true);
      setAlertMsg('입력 형식을 맞춰 작성해주세요!');
      return;
    }
  };

  React.useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
    isSuccess && (() => {
      navigate('/create/success', { state: { afterUrl: ['/', '/mygroup'], beforeUrl: 'create' } });
    })();
  }, [alert, error, isError, isSuccess]);

  React.useEffect(() => {
    isError &&
      (error as Response).data.error === 'GROUP_EXISTS'
      && (() => { setAlert(true); setAlertMsg('하나의 그룹만 생성할 수 있습니다!'); })();
  }, [error, isError]);

  return (
    <CreateSection>
      <CreateSectionTitle number={number} title={title} />
      <CreateInfoWrap>
        <CreateTitleInput />
        <CreateDescription />
      </CreateInfoWrap>
      <CreateButtonWrap>
        <Button color='#fafafa' height='40px' onClick={onHistoryBack}>취소</Button>
        <Button color='var(--blue-regular1)' height='40px' onClick={
          () => {
            onSubmit();
          }
        }>글 등록</Button>
      </CreateButtonWrap>
      {
        alert && <ToastAlert color='var(--error)'>
          <strong>{alertMsg}</strong>
        </ToastAlert>
      }
    </CreateSection>
  );
};

export default CreateSection2;