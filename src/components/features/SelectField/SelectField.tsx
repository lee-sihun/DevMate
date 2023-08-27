import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Wrapper, customStyles } from './SelectField.styled';
import { SELECT_SKILLS_LIST } from 'utils/const';
import { MultiValue } from 'react-select';

type OptionType = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  field: {
    onChange: (...event: any[]) => void;
    onBlur: () => void;
    name: string;
    value?: OptionType[];
  };
  skills?: Array<OptionType>
}
const SelectField = ({ field, skills }: SelectFieldProps) => {

  const [selectSkills, setSelectSkills] = useState<OptionType[]>();

  useEffect(() => {
    setSelectSkills(skills);
  }, [skills]);

  const skillsList = React.useMemo(() => {
    return SELECT_SKILLS_LIST.map((item) => {
      return { value: item, label: item };
    });
  }, []);

  const skillChangeHandler = (newValue: MultiValue<string | OptionType>) => {
    setSelectSkills([...newValue] as OptionType[]);
  };

  return (
    <Wrapper>
      <span>기술스택</span>
      <CreatableSelect
        {...field}
        value={selectSkills || []}
        // value={createGroupSkills?.map((item) =>
        //   ({ value: item as Skill, label: item as Skill })) as OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
        // }
        options={skillsList}
        isMulti={true}
        styles={customStyles}
        onChange={skillChangeHandler}
      />
    </Wrapper>
  );
};

export default SelectField;
