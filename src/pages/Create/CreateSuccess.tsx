import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CreateSuccessWrapper } from './Create.styled';
import uuid from 'react-uuid';
import CreateHeader from 'components/layout/Create/CreateHeader';

const CreateSuccess = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const beforeUrl: string = location.state?.beforeUrl;
  const afterUrl: string[] = location.state?.afterUrl;

  const createHeader = React.useMemo(() => <CreateHeader />, []);


  useEffect(() => {
    // console.log(afterUrl);
    beforeUrl !== 'create' && navigate('/');
  }, []);
  return (
    <>
      {createHeader}
      <CreateSuccessWrapper>
        <h1>그룹을 성공적으로 생성하였습니다!</h1>
        <div className='link_gr'>
          {afterUrl && afterUrl.map((url) => {
            return <Link to={url} key={uuid()}>
              {url === '/'
                ? '홈으로'
                : '그룹 관리로'}
            </Link>;
          })}
        </div>
      </CreateSuccessWrapper>
    </>

  );
};



export default CreateSuccess;
