import React, { useEffect } from 'react';
import { UpdateFormItemWrap, UpdateImg, UpdateInput, UpdateLabel, UpdateValidateMsg } from './UpdateForm.styled';
import { GroupData, GroupType, Location, Position, Skill } from 'group-data';
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
} from '../../../store/slices/groupUpdateSlice';
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
import { useLocation } from 'react-router-dom';
import { uploadsUrlParser } from 'utils/parser';

export const UpdateTypeSelect = () => {
  const updateGroupType = useAppSelector((state) => state.groupUpdater.type);
  const dispatch = useAppDispatch();
  return (
    <UpdateFormItemWrap>
      <UpdateLabel>
        타입<strong>*</strong>
      </UpdateLabel>
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
        value={{ value: updateGroupType, label: updateGroupType }}
        onChange={(e) => {
          e && dispatch(typeChange(e.value));
        }}
      />
    </UpdateFormItemWrap>
  );
};
export const UpdateMemberInput = () => {
  const updateGroupMembers = useAppSelector((state) => state.groupUpdater.maxMembers);
  const dispatch = useAppDispatch();
  return (
    <UpdateFormItemWrap>
      <UpdateLabel>모집 인원</UpdateLabel>
      <UpdateInput
        type="number"
        value={updateGroupMembers}
        onChange={(e) => dispatch(maxMembersChange(Number(e.target.value)))} min={1}
        onClick={(e) => e.currentTarget.select()}
      />
    </UpdateFormItemWrap>
  );
};
export const UpdateSkillSelect = () => {
  const updateGroupSkills = useAppSelector((state) => state.groupUpdater.skills);
  const dispatch = useAppDispatch();
  const skills = React.useMemo(() => {
    return SELECT_SKILLS_LIST.map((item) => {
      return { value: item, label: item };
    });
  }, []);

  const animatedComponents = makeAnimated();

  return (
    <UpdateFormItemWrap>
      <UpdateLabel>사용 기술</UpdateLabel>
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
          updateGroupSkills?.map((item) => ({ value: item as Skill, label: item as Skill })) as
          | OptionsOrGroups<unknown, GroupBase<unknown>>
          | undefined
        }
        onChange={(e) => dispatch(skillsChange(e as MultiValue<{ value: Skill; label: Skill }>))}
      />
    </UpdateFormItemWrap>
  );
};
export const UpdateDueDateInput = () => {
  const updateGroupDueDate = useAppSelector((state) => state.groupUpdater.dueDate);
  const dispatch = useAppDispatch();
  return (
    <UpdateFormItemWrap>
      <UpdateLabel>예상 기간</UpdateLabel>
      <UpdateInput
        type="text"
        value={updateGroupDueDate}
        onChange={(e) => {
          dispatch(dueDateChange(e.target.value));
        }}
        placeholder="n(일, 주, 개월, 년) 형식으로 작성해주세요. (ex: 1개월)"
      />
      {!validateDateRange(updateGroupDueDate) && <UpdateValidateMsg>예상 기간을 형식에 맞춰 입력해주세요!!</UpdateValidateMsg>}
    </UpdateFormItemWrap>
  );
};
export const UpdatePositionSelect = () => {
  const updateGroupPositions = useAppSelector((state) => state.groupUpdater.position);
  const dispatch = useAppDispatch();
  const positions = React.useMemo(() => {
    return ['프론트엔드', '백엔드', '디자이너', '기획자', '마케팅', 'PM', '퍼블리셔', '풀스택', 'QA', '전체'].map((item) => {
      return { value: item, label: item };
    });
  }, []);
  const animatedComponents = makeAnimated();

  // React.useEffect(() => {
  //   // console.log(UpdateGroupPositions);
  // }, [UpdateGroupPositions]);

  return (
    <UpdateFormItemWrap>
      <UpdateLabel>
        포지션<strong>*</strong>
      </UpdateLabel>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={positions}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: '50px',
            border: '1px solid #D9D9D9',
          }),
        }}
        value={
          updateGroupPositions?.map((item) => ({ value: item as Position, label: item as Position })) as
          | OptionsOrGroups<unknown, GroupBase<unknown>>
          | undefined
        }
        onChange={(e) => dispatch(positionChange(e as MultiValue<{ value: Position; label: Position }>))}
      />
      {updateGroupPositions.length === 0 && <UpdateValidateMsg>포지션을 선택해주세요!!</UpdateValidateMsg>}
    </UpdateFormItemWrap>
  );
};
export const UpdateLocationSelect = () => {
  const updateGroupLocation = useAppSelector((state) => state.groupUpdater.location);
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
    <UpdateFormItemWrap>
      <UpdateLabel>
        지역<strong>*</strong>
      </UpdateLabel>
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
        value={{ value: updateGroupLocation as string, label: updateGroupLocation as string }}
        onChange={(e) => {
          e && dispatch(locationChange(e.value as Location));
        }}
      />
    </UpdateFormItemWrap>
  );
};
export const UpdateGroupImg = () => {
  const updateGroupImg = useAppSelector((state) => state.groupUpdater.imageFile);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const detailData: GroupData = location.state?.detailData;

  const imgRef = React.useRef<HTMLImageElement>(null);

  const handleFile = (e: React.ChangeEvent) => {
    const inputFile = e.target as HTMLInputElement;
    const file = inputFile.files?.[0];
    if (file) {
      dispatch(imgFileChange(file));
    }
  };

  React.useEffect(() => {
    if (updateGroupImg instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (imgRef.current) {
          imgRef.current.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(updateGroupImg);
    } else {
      if (imgRef.current) {
        imgRef.current.src = uploadsUrlParser(detailData.imageUrl) || defaultGroupImg;
      }
    }
  }, [updateGroupImg]);
  return (
    <UpdateFormItemWrap>
      <UpdateLabel>대표 이미지</UpdateLabel>
      <label htmlFor="UpdateImg">
        <input type="file" id="UpdateImg" style={{ display: 'none' }} accept="image/*" onChange={handleFile} />
        <UpdateImg ref={imgRef} src={defaultGroupImg} />
      </label>
    </UpdateFormItemWrap>
  );
};

export const UpdateTitleInput = () => {
  const updateGroupTitle = useAppSelector((state) => state.groupUpdater.title);
  const dispatch = useAppDispatch();

  return (
    <UpdateFormItemWrap $maxWidth={'100%'}>
      <UpdateLabel>
        제목<strong>*</strong>
      </UpdateLabel>
      <UpdateInput
        type="text"
        placeholder="글 제목을 입력해주세요."
        value={updateGroupTitle}
        onChange={(e) => {
          dispatch(titleChange(e.target.value));
        }}
      />
      {!updateGroupTitle && <UpdateValidateMsg>제목은 필수입니다!</UpdateValidateMsg>}
    </UpdateFormItemWrap>
  );
};

export const UpdateDescription = () => {
  const updateGroupDescription = useAppSelector((state) => state.groupUpdater.description);
  const dispatch = useAppDispatch();

  const editorRef = React.useRef<any>(null);

  useEffect(() => {
    // // console.log(updateGroupDescription);
  }, [updateGroupDescription]);

  if (updateGroupDescription) {
    return (
      <UpdateFormItemWrap $maxWidth={'100%'}>
        <UpdateLabel>
          내용<strong>*</strong>
        </UpdateLabel>
        <ReactEditor
          ref={editorRef}
          initialValue={updateGroupDescription}
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
      </UpdateFormItemWrap>
    );
  }
  return <></>;
};
