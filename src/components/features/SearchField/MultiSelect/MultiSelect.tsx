import React, { useState, useRef } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { DropdownStyle, SelectWrap } from './MultiSelect.styled';
import { ArrowLogo, ArrowLogoWhite, SelectContainer, SelectLabelButton } from '../SelectButton/SelectButton.styled';

interface SelectButtonProps {
  label: string;
  onChange?: (value: string[]) => void;
}

const MultiSelect = ({ label, onChange }: SelectButtonProps) => {
  const options: string[] = [
    'Adobe',
    'Android',
    'Angular',
    'Apache',
    'Aws',
    'Ec2',
    'Babel',
    'BootStrap',
    'Cpp',
    'C#',
    'Css',
    'Diango',
    'Docker',
    'Electron',
    'Eslint',
    'Figma',
    'Firebase',
    'Flask',
    'Flutter',
    'Gatsby',
    'Git',
    'Github',
    'Gitlab',
    'Go',
    'GoogleAnalytics',
    'Graphql',
    'Heroku',
    'Html',
    'Illustrator',
    'Insomnia',
    'Java',
    'JavaScript',
    'Jest',
    'Jira',
    'Jquery',
    'Kotlin',
    'Kubernetes',
    'Laravel',
    'Linux',
    'MongoDb',
    'Mui',
    'MySql',
    'Nest',
    'Netlify',
    'Next',
    'NodeJs',
    'Npm',
    'OAuth',
    'OpenAi',
    'Oracle',
    'Photoshop',
    'Php',
    'PostgreSql',
    'Postman',
    'prettier',
    'Prisma',
    'Pug',
    'Pwa',
    'Python',
    'Rails',
    'React',
    'ReactQuery',
    'Redis',
    'Redux',
    'Ruby',
    'Rust',
    'Scss',
    'Spring',
    'Svelte',
    'Swift',
    'Tailwind',
    'TypeScript',
    'Vim',
    'Vite',
    'VsCode',
    'Vue',
    'Webpack',
    'Wordpress',
    'Xd',
  ];

  const [currentValue, setCurrentValue] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const multiselectRef = useRef<any>(null);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleValueChange = (value: string[]) => {
    setCurrentValue(value);
  };
  const handleChange = () => {
    const selectedItems = multiselectRef.current.getSelectedItems();
    handleValueChange(selectedItems);
    setIsSelected(true);
    // console.log(selectedItems);
    if (onChange) onChange([selectedItems]);
  };

  return (
    <SelectContainer>
      <SelectLabelButton $isSelected={isSelected} onClick={handleToggle}>
        {/* {currentValue[0] !== '' ? currentValue : label} */}
        {label}
        {!isSelected ? <ArrowLogo /> : <ArrowLogoWhite />}
      </SelectLabelButton>
      <DropdownStyle $isVisible={open}>
        <SelectWrap>
          <Multiselect
            isObject={false}
            options={options}
            placeholder="..."
            closeIcon="cancel"
            emptyRecordMsg="검색 결과가 없습니다."
            ref={multiselectRef}
            onSelect={handleChange}
            onRemove={handleChange}
          />
        </SelectWrap>
      </DropdownStyle>
    </SelectContainer>
  );
};

export default MultiSelect;
