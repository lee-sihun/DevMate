import React from 'react';
import SelectButton from './SelectButton/SelectButton';

const SearchField = () => {
  const category = ['전체','스터디', '프로젝트'];
  return (
    <div>
      <SelectButton label="유형" values={category} onChange={(v) => console.log(v)} />
    </div>
  );
};

export default SearchField;
