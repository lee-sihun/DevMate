import React, { useEffect, useState } from 'react';
import SelectButton from './SelectButton/SelectButton';
import ResetButton from './ResetButton/ResetButton';
import SearchBar from './SearchBar/SearchBar';
import { SearchContainer, FilterContainer, Filter } from './SearchField.styled';
import MultiSelect from './MultiSelect/MultiSelect';

interface SearchProps {
  handleFilterChange: (filters: string[]) => void;
}

const SearchField = ({ handleFilterChange }: SearchProps) => {
  const category = ['전체', '스터디', '프로젝트'];
  const position = ['전체', '프론트엔드', '백엔드', '풀스택', '디자이너', '기획자', '마케팅', 'PM', '퍼블리셔', 'QA'];
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

  const [selectedType, setSelectedType] = useState(''); // 추가된 부분
  const [selectedPosition, setSelectedPosition] = useState(''); // 추가된 부분
  const [selectedLocation, setSelectedLocation] = useState(''); // 추가된 부분
  const [selectedSort, setSelectedSort] = useState(''); // 추가된 부분
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);

  useEffect(() => {
    handleFilterChange([selectedType, selectedPosition, selectedLocation, selectedSort, ...selectedSkill]);
  }, [selectedType, selectedLocation, selectedPosition, selectedSkill, selectedSort]);

  return (
    <>
      <SearchContainer>
        <SearchBar />
        <ResetButton />
      </SearchContainer>
      <FilterContainer>
        <Filter>
          <SelectButton label="유형" values={category} onChange={(value) => setSelectedType(value)} />
          <SelectButton label="포지션" values={position} onChange={(value) => setSelectedPosition(value)} />
          <SelectButton label="지역" values={location} onChange={(value) => setSelectedLocation(value)} />
          <MultiSelect label="기술 스택" onChange={setSelectedSkill} />
        </Filter>
        <SelectButton label="최신순" values={['전체', '최신순', '인기순']} onChange={(value) => setSelectedSort(value)} />
      </FilterContainer>
    </>
  );
};

export default SearchField;
