import UpdateSection1 from 'components/features/UpdateSection/UpdateSection1';
import UpdateSection2 from 'components/features/UpdateSection/UpdateSection2';
import React from 'react';
import { UpdateMainLayout } from './UpdateMain.styled';

const UpdateMain = () => {

  const sections = React.useMemo(() => {
    return [
      { number: 1, title: '스터디/프로젝트 기본 정보를 입력해주세요.' },
      { number: 2, title: '스터디/프로젝트 대해 설명해주세요.' },
    ];
  }, []);

  const updateSection1 = React.useMemo(() => {
    return <UpdateSection1 number={sections[0].number} title={sections[0].title} />;
  }, []);
  const updateSection2 = React.useMemo(() => {
    return <UpdateSection2 number={sections[1].number} title={sections[1].title} />;
  }, []);

  return (
    <UpdateMainLayout>
      {updateSection1}
      {updateSection2}
    </UpdateMainLayout>
  );
};

export default UpdateMain;