import React from 'react';
import SelectField from 'components/features/SelectField/SelectField';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import InputField from '../../components/features/InputField/InputField';
import { Form, Buttons, ReadOnlyField } from './ProfileEdit.styled';
import { Link } from 'react-router-dom';
import ImageUploadField from 'components/features/ImageUploadField/ImageUploadField';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';

type OptionType = {
  label: string;
  value: string;
};

interface IFormInput {
  nickName: string;
  skills?: Array<OptionType>;
  overview?: string;
  github?: string;
  blog?: string;
  profileImage?: FileList;
}

const ProfileEdit = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <PageTemplate subTitle="Edit Profile" mainTitle="내 정보 수정" >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ImageUploadField register={register('profileImage')} />
        <ReadOnlyField>
          <span>이메일</span>
          <p>abc@gmail.com</p>
        </ReadOnlyField>
        <InputField
          label="닉네임"
          id="nickName"
          registerOptions={register('nickName', {
            required: '닉네임을 입력해주세요',
            pattern: {
              value: /^.{3,}$/,
              message: '세 글자 이상 입력해주세요.',
            },
          })}
          error={errors.nickName}
          onClearError={() => clearErrors('nickName')}
        />
        <Controller
          name="skills"
          control={control}
          defaultValue={[]} // 기본값 추가
          render={({ field }) => <SelectField field={field} />}
        />
        <InputField label="소개" id="overview" registerOptions={register('overview')} />
        <InputField
          label="깃허브 주소"
          id="github"
          registerOptions={register('github', {
            pattern: {
              value: /^https:\/\/github\.com\/[a-zA-Z0-9_-]{4,39}$/,
              message: '올바른 깃허브 URL을 입력해주세요.',
            },
          })}
          error={errors.github}
          onClearError={() => clearErrors('github')}
          defaultValue="https://github.com/"
        />
        <InputField
          label="블로그 주소"
          id="blog"
          registerOptions={register('blog', {
            pattern: {
              value: /^https:\/\/.+$/,
              message: '올바른 URL을 입력해주세요.',
            },
          })}
          error={errors.blog}
          onClearError={() => clearErrors('blog')}
          defaultValue="https://"
        />
        <Buttons>
          <Link to="/profile">
            <button type="button" className="cancle">
              취소
            </button>
          </Link>
          <button type="submit" className="submit">
            저장
          </button>
        </Buttons>
      </Form>
    </PageTemplate>
  );
};

export default ProfileEdit;
