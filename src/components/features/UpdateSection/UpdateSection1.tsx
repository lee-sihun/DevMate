import UpdateSectionTitle from 'components/common/UpdateSectionTitle/UpdateSectionTitle';
import { CreateSectionProps } from 'props-type';
import React from 'react';
import { UpdateInfoWrap, UpdateSection } from './UpdateSection.styled';
import {
  UpdateDueDateInput,
  UpdateGroupImg,
  UpdateLocationSelect,
  UpdateMemberInput,
  UpdatePositionSelect,
  UpdateSkillSelect,
  UpdateTypeSelect,
} from 'components/common/UpdateForm/UpdateForm';

const UpdateSection1 = ({ number, title }: CreateSectionProps) => {
  
  return (
    <UpdateSection>
      <UpdateSectionTitle number={number} title={title} />
      <UpdateInfoWrap>
        <UpdateTypeSelect />
        <UpdateMemberInput />
        <UpdateSkillSelect />
        <UpdateDueDateInput />
        <UpdatePositionSelect />
        <UpdateLocationSelect />
        <UpdateGroupImg />
      </UpdateInfoWrap>
    </UpdateSection>
  );
};

export default UpdateSection1;