import CreateSectionTitle from 'components/common/CreateSectionTitle/CreateSectionTitle';
import { CreateSectionProps } from 'props-type';
import React from 'react';
import { CreateInfoWrap, CreateSection } from './CreateSection.styled';
import {
  CreateDueDateInput,
  CreateGroupImg,
  CreateLocationSelect,
  CreateMemberInput,
  CreatePositionSelect,
  CreateSkillSelect,
  CreateTypeSelect,
} from 'components/common/CreateForm/CreateForm';

const CreateSection1 = ({ number, title }: CreateSectionProps) => {
  
  return (
    <CreateSection>
      <CreateSectionTitle number={number} title={title} />
      <CreateInfoWrap>
        <CreateTypeSelect />
        <CreateMemberInput />
        <CreateSkillSelect />
        <CreateDueDateInput />
        <CreatePositionSelect />
        <CreateLocationSelect />
        <CreateGroupImg />
      </CreateInfoWrap>
    </CreateSection>
  );
};

export default CreateSection1;