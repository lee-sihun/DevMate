import CreateSectionTitle from 'components/common/CreateSectionTitle/CreateSectionTitle';
import React from 'react';
import { CreateButtonWrap, CreateInfoWrap, CreateSection } from './CreateSection.styled';
import { CreateSectionProps } from 'props-type';
import { CreateDescription, CreateTitleInput } from 'components/common/CreateForm/CreateForm';
import Button from 'components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useCreateGroupMutation } from 'store/hooks';
import { ToastAlert } from 'components/common/ToastAlert.styled';
// import { groupSubmitHandler } from 'store/slices/groupCreateSlice';
import { validateDateRange } from 'utils/helper';

const CreateSection2 = ({ number, title }: CreateSectionProps) => {

  const createGroupData = useAppSelector((state) => state.groupCreater);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [alert, setAlert] = React.useState(false);

  const [
    createGroup,
    // { isLoading, isError, isSuccess },
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
        return;
      }
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (value instanceof Array) {
          formData.append(key, JSON.stringify(value));
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      }
      try {
        await createGroup(formData);
      } catch (err) {
        console.log(err);
      }
      return;
    } else {
      console.log('필수 값 오류');
      setAlert(true);
      return;
    }
  };

  React.useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 3000);
    }
  }, [alert]);

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
            // dispatch(groupSubmitHandler(onSubmit));
            onSubmit();
          }
          // () => {
          //   dispatch(groupSubmitHandler(onSubmit));
          // }
        }>글 등록</Button>
      </CreateButtonWrap>
      {
        alert && <ToastAlert color='var(--error)'>
          <strong>형식에 맞춰 입력해주세요!</strong>
        </ToastAlert>
      }
    </CreateSection>
  );
};

export default CreateSection2;