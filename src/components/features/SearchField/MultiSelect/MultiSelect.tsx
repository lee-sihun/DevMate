import React, { useState, useEffect, useRef } from 'react';
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
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);
  return (
    <SelectContainer ref={modalRef}>
      <SelectLabelButton $isSelected={isSelected} onClick={handleToggle}>
        {/* {currentValue[0] !== '' ? currentValue : label} */}
        {currentValue.length !== 0 ? (currentValue.length >= 2 ? `${currentValue[0]} 외 ${currentValue.length - 1}` : currentValue[0]) : label}
        {/* {label} */}
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
