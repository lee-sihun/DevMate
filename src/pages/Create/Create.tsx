import CreateHeader from 'components/layout/Create/CreateHeader';
import CreateMain from 'components/layout/Create/CreateMain';
import React from 'react';


const Create = () => {

  const createHeader = React.useMemo(() => <CreateHeader />, []);
  const createMain = React.useMemo(() => <CreateMain />, []);

  return (
    <React.Fragment>
      {createHeader}
      {createMain}
    </React.Fragment>
  );
};

export default Create;