import React from 'react';
import { CreateFormItemWrap, CreateImg, CreateInput, CreateLabel, CreateValidateMsg } from './CreateForm.styled';
import { GroupType, Location, Position, Skill } from 'group-data';
import {
  titleChange,
  typeChange,
  maxMembersChange,
  skillsChange,
  dueDateChange,
  positionChange,
  locationChange,
  imgFileChange,
  descriptionChange,
} from '../../../store/slices/groupCreateSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Select, { GroupBase, MultiValue, OptionsOrGroups } from 'react-select';
import makeAnimated from 'react-select/animated';
import defaultGroupImg from '../../../assets/img/default-img.png';
import Editor, { EditorCore } from '@toast-ui/editor';
import { EditorProps, Editor as ReactEditor } from '@toast-ui/react-editor';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import uuid from 'react-uuid';
import { validateDateRange } from 'utils/helper';
import { SELECT_SKILLS_LIST } from 'utils/const';

export const CreateTypeSelect = () => {
  const createGroupType = useAppSelector((state) => state.groupCreater.type);
  const dispatch = useAppDispatch();
  return (
    <CreateFormItemWrap>
      <CreateLabel>
        타입<strong>*</strong>
      </CreateLabel>
      <Select
        options={[
          { value: 'study', label: 'study' },
          { value: 'project', label: 'project' },
        ]}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: '50px',
            border: '1px solid #D9D9D9',
          }),
        }}
        key={uuid()}
        value={{ value: createGroupType, label: createGroupType }}
        onChange={(e) => {
          e && dispatch(typeChange(e.value));
        }}
      />
    </CreateFormItemWrap>
  );
};
export const CreateMemberInput = () => {
  const createGroupMembers = useAppSelector((state) => state.groupCreater.maxMembers);
  const dispatch = useAppDispatch();
  return (
    <CreateFormItemWrap>
      <CreateLabel>모집 인원</CreateLabel>
      <CreateInput type="number" value={createGroupMembers} onChange={(e) => dispatch(maxMembersChange(Number(e.target.value)))} min={1} />
    </CreateFormItemWrap>
  );
};
export const CreateSkillSelect = () => {
  const createGroupSkills = useAppSelector((state) => state.groupCreater.skills);
  const dispatch = useAppDispatch();
  const skills = React.useMemo(() => {
    return SELECT_SKILLS_LIST.map((item) => {
      return { value: item, label: item };
    });
  }, []);

  const animatedComponents = makeAnimated();

  return (
    <CreateFormItemWrap>
      <CreateLabel>사용 기술</CreateLabel>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={skills}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            minHeight: '50px',
            border: '1px solid #D9D9D9',
          }),
        }}
        value={
          createGroupSkills?.map((item) => ({ value: item as Skill, label: item as Skill })) as
            | OptionsOrGroups<unknown, GroupBase<unknown>>
            | undefined
        }
        onChange={(e) => dispatch(skillsChange(e as MultiValue<{ value: Skill; label: Skill }>))}
      />
    </CreateFormItemWrap>
  );
};
export const CreateDueDateInput = () => {
  const createGroupDueDate = useAppSelector((state) => state.groupCreater.dueDate);
  const dispatch = useAppDispatch();
  return (
    <CreateFormItemWrap>
      <CreateLabel>예상 기간</CreateLabel>
      <CreateInput
        type="text"
        value={createGroupDueDate}
        onChange={(e) => {
          dispatch(dueDateChange(e.target.value));
        }}
        placeholder="n(일, 주, 개월, 년) 형식으로 작성해주세요. (ex: 1개월)"
      />
      {!validateDateRange(createGroupDueDate) && <CreateValidateMsg>예상 기간을 형식에 맞춰 입력해주세요!!</CreateValidateMsg>}
    </CreateFormItemWrap>
  );
};
export const CreatePositionSelect = () => {
  const createGroupPositions = useAppSelector((state) => state.groupCreater.position);
  const dispatch = useAppDispatch();
  const positions = React.useMemo(() => {
    return ['프론트엔드', '백엔드', '디자이너', '기획자', '마케팅', 'PM', '퍼블리셔', '풀스택', 'QA', '전체'].map((item) => {
      return { value: item, label: item };
    });
  }, []);
  const animatedComponents = makeAnimated();

  // React.useEffect(() => {
  //   // console.log(createGroupPositions);
  // }, [createGroupPositions]);

  return (
    <CreateFormItemWrap>
      <CreateLabel>
        포지션<strong>*</strong>
      </CreateLabel>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={positions}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            minHeight: '50px',
            border: '1px solid #D9D9D9',
          }),
        }}
        value={
          createGroupPositions?.map((item) => ({ value: item as Position, label: item as Position })) as
            | OptionsOrGroups<unknown, GroupBase<unknown>>
            | undefined
        }
        onChange={(e) => dispatch(positionChange(e as MultiValue<{ value: Position; label: Position }>))}
      />
      {createGroupPositions.length === 0 && <CreateValidateMsg>포지션을 선택해주세요!!</CreateValidateMsg>}
    </CreateFormItemWrap>
  );
};
export const CreateLocationSelect = () => {
  const createGroupLocation = useAppSelector((state) => state.groupCreater.location);
  const dispatch = useAppDispatch();
  const locations = React.useMemo(() => {
    return [
      '전국',
      '서울',
      '부산',
      '대구',
      '인천',
      '광주',
      '대전',
      '울산',
      '강원',
      '경기',
      '경남',
      '경북',
      '전남',
      '전북',
      '충남',
      '충북',
      '제주',
    ].map((item) => {
      return { value: item, label: item };
    });
  }, []);
  return (
    <CreateFormItemWrap>
      <CreateLabel>
        지역<strong>*</strong>
      </CreateLabel>
      <Select
        options={locations}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: '50px',
            border: '1px solid #D9D9D9',
          }),
        }}
        key={uuid()}
        value={{ value: createGroupLocation as string, label: createGroupLocation as string }}
        onChange={(e) => {
          e && dispatch(locationChange(e.value as Location));
        }}
      />
    </CreateFormItemWrap>
  );
};
export const CreateGroupImg = () => {
  const createGroupImg = useAppSelector((state) => state.groupCreater.imageFile);
  const dispatch = useAppDispatch();

  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleFile = (e: React.ChangeEvent) => {
    const inputFile = e.target as HTMLInputElement;
    const file = inputFile.files?.[0];
    if (file) {
      dispatch(imgFileChange(file));
    }
  };

  React.useEffect(() => {
    if (createGroupImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (imgRef.current) {
          imgRef.current.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(createGroupImg);
    }
  }, [createGroupImg]);
  return (
    <CreateFormItemWrap>
      <CreateLabel>대표 이미지</CreateLabel>
      <label htmlFor="CreateImg">
        <input type="file" id="CreateImg" style={{ display: 'none' }} accept="image/*" onChange={handleFile} />
        <CreateImg ref={imgRef} src={defaultGroupImg} />
      </label>
    </CreateFormItemWrap>
  );
};

export const CreateTitleInput = () => {
  const createGroupTitle = useAppSelector((state) => state.groupCreater.title);
  const dispatch = useAppDispatch();

  return (
    <CreateFormItemWrap $maxWidth={'100%'}>
      <CreateLabel>
        제목<strong>*</strong>
      </CreateLabel>
      <CreateInput
        type="text"
        placeholder="글 제목을 입력해주세요."
        value={createGroupTitle}
        onChange={(e) => {
          dispatch(titleChange(e.target.value));
        }}
      />
      {!createGroupTitle && <CreateValidateMsg>제목은 필수입니다!</CreateValidateMsg>}
    </CreateFormItemWrap>
  );
};

export const CreateDescription = () => {
  const createGroupDescription = useAppSelector((state) => state.groupCreater.description);
  const dispatch = useAppDispatch();

  const editorRef = React.useRef<any>(null);

  return (
    <CreateFormItemWrap $maxWidth={'100%'}>
      <CreateLabel>
        내용<strong>*</strong>
      </CreateLabel>
      <ReactEditor
        ref={editorRef}
        initialValue={createGroupDescription}
        previewStyle="tab"
        height="800px"
        initialEditType="markdown"
        language='ko-KR'
        useCommandShortcut={false}
        plugins={[[codeSyntaxHighlightPlugin, { highlighter: Prism }]]}
        onChange={() => {
          dispatch(descriptionChange(editorRef.current?.editorInst.getMarkdown()));
        }}
      />
    </CreateFormItemWrap>
  );
};
