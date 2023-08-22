import React from 'react';
import SelectButton from './SelectButton/SelectButton';
import ResetButton from './ResetButton/ResetButton';

const SearchField = () => {
  const category = ['전체', '스터디', '프로젝트'];
  const position = ['전체', '프론트엔드', '백엔드', '디자이너', '기획'];
  // Location 타입의 멤버를 배열로 추출
  // const location: Location[] = Object.values(Location).filter((value) => typeof value === 'string');
  const location = [
    '전체',
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
  ];

  return (
    <div>
      <SelectButton label="유형" values={category} onChange={(v) => console.log(v)} />
      <SelectButton label="포지션" values={position} onChange={(v) => console.log(v)} />
      <SelectButton label="지역" values={location} onChange={(v) => console.log(v)} />
      <ResetButton />
    </div>
  );
};

export default SearchField;
