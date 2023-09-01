import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UpdateSuccessWrapper } from './Update.styled';
import uuid from 'react-uuid';
import UpdateHeader from 'components/layout/Update/UpdateHeader';

const UpdateSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const beforeUrl: string = location.state?.beforeUrl;
  const afterUrl: string[] = location.state?.afterUrl;

  const updateHeader = React.useMemo(() => <UpdateHeader />, []);

  useEffect(() => {
    // // console.log(afterUrl);
    beforeUrl !== 'mygroup/update' && navigate('/');
  }, []);
  return (
    <>
      {updateHeader}
      <UpdateSuccessWrapper>
        <h1>그룹을 성공적으로 수정하였습니다!</h1>
        <div className="link_gr">
          {afterUrl &&
            afterUrl.map((url) => {
              return (
                <Link to={url} key={uuid()}>
                  {url === '/' ? '홈으로' : url === '/mygroup' ? '그룹 관리로' : '상세페이지로'}
                </Link>
              );
            })}
        </div>
      </UpdateSuccessWrapper>
    </>
  );
};

export default UpdateSuccess;
