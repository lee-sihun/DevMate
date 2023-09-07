import UpdateSectionTitle from 'components/common/UpdateSectionTitle/UpdateSectionTitle';
import React from 'react';
import { UpdateButtonWrap, UpdateInfoWrap, UpdateSection } from './UpdateSection.styled';
import { CreateSectionProps } from 'props-type';
import { UpdateDescription, UpdateTitleInput } from 'components/common/UpdateForm/UpdateForm';
import Button from 'components/common/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { ToastAlert } from 'components/common/ToastAlert.styled';
import { validateDateRange } from 'utils/helper';
// import { useUpdateGroupMutation } from 'store/hooks/groupUpdate.hooks';
import { Response } from 'response-data-type';
import { GroupData } from 'group-data';
import { useUpdateGroupMutation } from 'store/hooks/group.hooks';

const UpdateSection2 = ({ number, title }: CreateSectionProps) => {
  const UpdateGroupData = useAppSelector((state) => state.groupUpdater);

  const navigate = useNavigate();
  const location = useLocation();
  const detailData: GroupData = location.state?.detailData;

  const [alert, setAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState('');

  const [UpdateGroup, { error, isError, isSuccess }] = useUpdateGroupMutation();

  const onHistoryBack = () => {
    navigate(-1);
  };

  const onSubmit = async () => {
    const data = { ...UpdateGroupData };
    if (data.title && data.type && data.position.length !== 0 && data.location && data.description) {
      if (!validateDateRange(data.dueDate)) {
        // console.log('예상 기간 형식 오류');
        setAlert(true);
        setAlertMsg('입력 형식을 맞춰 작성해주세요!');
        return;
      }
      if (!data.imageFile) {
        // // console.log(data);
      }
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
        // console.log(data);

        await UpdateGroup({ groupFormData: formData, groupId: detailData._id });
      } catch (err) {
        // console.log(err);
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
    isSuccess &&
      (() => {
        navigate('/mygroup/update/success', {
          state: {
            afterUrl: [`/detail/${detailData._id}`, '/mygroup', '/'],
            beforeUrl: 'mygroup/update',
          },
        });
      })();
  }, [alert, error, isError, isSuccess]);

  React.useEffect(() => {
    isError &&
      (error as Response).data.error === 'GROUP_EXISTS' &&
      (() => {
        setAlert(true);
        setAlertMsg('하나의 그룹만 생성할 수 있습니다!');
      })();
  }, [error, isError]);

  return (
    <UpdateSection>
      <UpdateSectionTitle number={number} title={title} />
      <UpdateInfoWrap>
        <UpdateTitleInput />
        <UpdateDescription />
      </UpdateInfoWrap>
      <UpdateButtonWrap>
        <Button color="#fafafa" height="40px" onClick={onHistoryBack}>
          취소
        </Button>
        <Button
          color="var(--blue-semi-dark1)"
          height="40px"
          onClick={() => {
            onSubmit();
          }}
        >
          수정 완료
        </Button>
      </UpdateButtonWrap>
      {alert && (
        <ToastAlert color="var(--error)">
          <strong>{alertMsg}</strong>
        </ToastAlert>
      )}
    </UpdateSection>
  );
};

export default UpdateSection2;
