import CreateSection1 from 'components/features/CreateSection/CreateSection1';
import CreateSection2 from 'components/features/CreateSection/CreateSection2';
import React from 'react';
import { CreateMainLayout } from './CreateMain.styled';
import { useAppSelector } from 'store/hooks';

const CreateMain = () => {

  const createGroup = useAppSelector((state) => state.groupCreater);

  const sections = React.useMemo(() => {
    return [
      { number: 1, title: '스터디/프로젝트 기본 정보를 입력해주세요.' },
      { number: 2, title: '스터디/프로젝트 대해 설명해주세요.' },
    ];
  }, []);

  const createSection1 = React.useMemo(() => {
    return <CreateSection1 number={sections[0].number} title={sections[0].title} />;
  }, []);
  const createSection2 = React.useMemo(() => {
    return <CreateSection2 number={sections[1].number} title={sections[1].title} />;
  }, []);

  // React.useEffect(() => {
  //   console.log(createGroup);
  // }, [createGroup]);
  return (
    <CreateMainLayout>
      {createSection1}
      {createSection2}
    </CreateMainLayout>
  );
};

export default CreateMain;