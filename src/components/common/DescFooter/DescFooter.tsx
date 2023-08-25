import React from 'react';
import { DescFooterWrap } from './DescFooter.styled';
import { LinkIcon } from '../LinkIcon.styled';
import heart1 from '../../../assets/img/heart.svg';
import heart2 from '../../../assets/img/heart2.svg';
import share from '../../../assets/img/share.svg';
import { Boundary } from '../Boundary.styled';
import { ToastAlert } from '../ToastAlert.styled';

const DescFooter = ({ $url, groupId }: { $url: string, groupId: string }) => {

  const [imsiHeart, setImsiHeart] = React.useState(false);

  const [alert, setAlert] = React.useState(false);

  React.useEffect(() => {
    if (alert) {
      navigator.clipboard.writeText($url);
      setTimeout(() => setAlert(false), 3000);
    }
  }, [alert]);

  return (<>
    <DescFooterWrap>
      <button onClick={() => setImsiHeart((curr) => !curr)}>
        {imsiHeart ? <LinkIcon src={heart2} /> : <LinkIcon src={heart1} />}
      </button>
      <Boundary height='100%' width='2.3px' />
      <button onClick={() => setAlert(true)}>
        <LinkIcon src={share} />
      </button>
    </DescFooterWrap>
    {
      alert && <ToastAlert>
        <strong>신청이 완료되었습니다.</strong>
      </ToastAlert>
    }
  </>

  );
};

export default DescFooter;