// import React from 'react';
// import SelectField from 'components/features/SelectField/SelectField';
// import { useForm, SubmitHandler, Controller } from 'react-hook-form';
// import InputField from '../../components/features/InputField/InputField';
// import { Form, Buttons, ReadOnlyField } from './ProfileEdit.styled';
// import { Link } from 'react-router-dom';
// import ImageUploadField from 'components/features/ImageUploadField/ImageUploadField';
// import PageTemplate from 'components/common/PageTemplate/PageTemplate';
// import { AuthorData, OptionType } from 'author-data';


// interface IFormInput {
//   nickName: string;
//   skills?: Array<OptionType>;
//   overview?: string;
//   github?: string;
//   blog?: string;
//   profileImage?: FileList;
// }

// interface ProfileEditProps {
//   userData?: AuthorData;
// }

// const ProfileEdit = ({ userData }: ProfileEditProps) => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     clearErrors,
//   } = useForm<IFormInput>({ mode: 'onBlur' });

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     console.log(data);
//   };

//   // console.log(userData?.skills);

//   return (
//     <PageTemplate subTitle="Edit Profile" mainTitle="내 정보 수정">
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <ImageUploadField register={register('profileImage')} img={userData?.profileImage} />
//         <ReadOnlyField>
//           <span>이메일</span>
//           <p>{userData?.email}</p>
//         </ReadOnlyField>
//         <InputField
//           label="닉네임"
//           id="nickName"
//           registerOptions={register('nickName', {
//             required: '닉네임을 입력해주세요',
//             pattern: {
//               value: /^.{3,}$/,
//               message: '세 글자 이상 입력해주세요.',
//             },
//           })}
//           error={errors.nickName}
//           onClearError={() => clearErrors('nickName')}
//           defaultValue={userData?.nickname}
//         />
//         <Controller
//           name="skills"
//           control={control}
//           defaultValue={[]} // 기본값 추가
//           render={({ field }) => <SelectField field={field} skills={userData?.skills.map((skill) => {
//             return {
//               label: skill,
//               value: skill,
//             };
//           })} />}
//           error={errors.skills}
//           onClearError={() => clearErrors('skills')}
//         />
//         <InputField
//           label="소개"
//           id="overview"
//           registerOptions={register('overview')}
//           defaultValue={userData?.overview}
//         />
//         <InputField
//           label="깃허브 주소"
//           id="github"
//           registerOptions={register('github', {
//             pattern: {
//               value: /^https:\/\/github\.com\/[a-zA-Z0-9_-]{4,39}$/,
//               message: '올바른 깃허브 URL을 입력해주세요.',
//             },
//           })}
//           error={errors.github}
//           onClearError={() => clearErrors('github')}
//           defaultValue={userData?.links?.gitHub}
//         />
//         <InputField
//           label="블로그 주소"
//           id="blog"
//           registerOptions={register('blog', {
//             pattern: {
//               value: /^https:\/\/.+$/,
//               message: '올바른 URL을 입력해주세요.',
//             },
//           })}
//           error={errors.blog}
//           onClearError={() => clearErrors('blog')}
//           defaultValue={userData?.links?.blog}
//         />
//         <Buttons>
//           <Link to="/profile">
//             <button type="button" className="cancle">
//               취소
//             </button>
//           </Link>
//           <button type="submit" className="submit">
//             저장
//           </button>
//         </Buttons>
//       </Form>
//     </PageTemplate>
//   );
// };

// export default ProfileEdit;

import { AuthorData, Skill } from 'author-data';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import { ProfileContent, ProfileInfoWrap, ProfileTop } from 'pages/Profile/Profile.styled';
import React, { useState, useEffect, useRef } from 'react';
import defaultProfile from 'assets/img/default-profile.svg';
import changeImg from 'assets/img/edit2.svg';
import { InputField2 } from 'components/features/InputField/InputField';
import { MultiValue } from 'react-select';
import { ProfileBtnWrap } from './ProfileEdit.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { useProfileUpdateMutation } from 'store/hooks/user.hooks';
import { uploadsUrlParser } from 'utils/parser';



const ProfileEdit = ({ userData }: { userData?: AuthorData }) => {
  const [newUserData, setNewUserData] = useState({ ...userData });
  const [file, setFile] = useState<File | undefined>();
  const [nicknameValidate, setNicknameValidate] = useState<string | undefined>();
  const navigate = useNavigate();

  const [profileUpdate, { data, isLoading, isError, isSuccess }] = useProfileUpdateMutation();

  useEffect(() => {
    setNewUserData({ ...userData });
  }, [userData]);

  const handleFile = (e: React.ChangeEvent) => {
    const inputFile = e.target as HTMLInputElement;
    const file = inputFile.files?.[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setNewUserData((curr) => {
          const newCurr = { ...curr };
          return {
            ...newCurr,
            profileImage: e.target?.result as string,
          };
        });
      };
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, labelName?: string) => {
    setNewUserData((curr) => {
      const newCurr = { ...curr };
      switch (true) {
        case labelName === '닉네임':
          if (e.target.value !== '') {
            setNicknameValidate(undefined);
          }
          return {
            ...newCurr,
            nickname: e.target.value,
          };
        case labelName === '이메일':
          return {
            ...newCurr,
            email: e.target.value,
          };
        case labelName === '비밀번호':
          return {
            ...newCurr,
            password: e.target.value,
          };
        case labelName === '소개글':
          return {
            ...newCurr,
            overview: e.target.value,
          };
        case labelName === 'Github':
          return {
            ...newCurr,
            links: {
              gitHub: e.target.value,
              blog: newCurr.links?.blog,
            },
          };
        case labelName === 'Blog':
          return {
            ...newCurr,
            links: {
              gitHub: newCurr.links?.gitHub,
              blog: e.target.value,
            },
          };
        default: return newCurr;
      }
    });
  };

  const SkillsChange = (
    newValue: MultiValue<{ value: Skill; label: Skill }>) => {
    setNewUserData((curr) => {
      const newCurr = { ...curr };
      return {
        ...newCurr,
        skills: newValue.map((item) => {
          return item.value;
        }),
      };
    });
  };

  const saveHandler = () => {
    if (newUserData.nickname === '') {
      return setNicknameValidate(uuid());
    }
    // console.log(file);
    const formData = new FormData();
    newUserData.nickname && formData.append('nickname', newUserData.nickname);
    newUserData.skills && formData.append('skills', JSON.stringify(newUserData.skills));
    newUserData.overview && formData.append('overview', newUserData.overview);
    file && formData.append('imageFile', file);
    newUserData.links && formData.append('links', JSON.stringify(newUserData.links));
    profileUpdate(formData);
  };
  const cancelHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
  }, [isSuccess]);

  return (
    <PageTemplate subTitle="My Profile" mainTitle="내 프로필 수정">
      <ProfileContent>
        <ProfileTop>
          <img src={uploadsUrlParser(newUserData?.profileImage) || defaultProfile} alt="사용자 이미지" />
          {/* <img src={newUserData?.profileImage
            ? `/${newUserData?.profileImage}`
            : defaultProfile} alt="사용자 이미지" /> */}
          <div className='edit_btn'>
            <label htmlFor="edit"><img src={changeImg} alt="edit" /></label>
            <input type="file" id='edit' accept="image/*" onChange={handleFile} />
          </div>
        </ProfileTop>
        <ProfileInfoWrap>
          <InputField2 validate={nicknameValidate} labelName='닉네임' value={newUserData?.nickname} onChange={onChange} />
          <InputField2 labelName='이메일' type='email' value={newUserData?.email} onChange={onChange} />
          <InputField2 labelName='사용 기술' value={newUserData.skills} skillChange={SkillsChange} />
          <InputField2 labelName='소개글' value={newUserData?.overview} onChange={onChange} />
          <InputField2 labelName='Github' value={newUserData?.links?.gitHub} onChange={onChange} />
          <InputField2 labelName='Blog' value={newUserData?.links?.blog} onChange={onChange} />
        </ProfileInfoWrap>
        <ProfileBtnWrap>
          <button className='save' onClick={saveHandler}>저장</button>
          <button className='cancel' onClick={cancelHandler}>취소</button>
        </ProfileBtnWrap>

      </ProfileContent>
    </PageTemplate>
  );
};

export default ProfileEdit;
