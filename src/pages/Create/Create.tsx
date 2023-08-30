import CreateHeader from 'components/layout/Create/CreateHeader';
import CreateMain from 'components/layout/Create/CreateMain';
import React from 'react';


const Create = () => {

  const createHeader = React.useMemo(() => <CreateHeader />, []);
  const createMain = React.useMemo(() => <CreateMain />, []);

  return (
    <>
      {createHeader}
      {createMain}
    </>
  );
};

export default Create;