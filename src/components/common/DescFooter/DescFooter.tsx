import React from 'react';
import { DescFooterWrap } from './DescFooter.styled';
import { LinkIcon } from '../LinkIcon.styled';
import heart1 from '../../../assets/img/heart.svg';
import heart2 from '../../../assets/img/heart2.svg';
import share from '../../../assets/img/share.svg';
import { Boundary } from '../Boundary.styled';
import { ToastAlert } from '../ToastAlert.styled';
import { useWishControllerMutation } from 'store/hooks/group.hooks';
import { AuthorData } from 'author-data';

const DescFooter = ({ $url, groupId, userData }: { $url: string; groupId: string; userData?: AuthorData }) => {
  const [imsiHeart, setImsiHeart] = React.useState(false);

  const [alert, setAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState('');

  const [wishController] = useWishControllerMutation();

  React.useEffect(() => {
    if (alert) {
      navigator.clipboard.writeText($url);
      setTimeout(() => setAlert(false), 3000);
    }
  }, [alert]);

  React.useEffect(() => {
    if (userData) {
      const wishing = userData?.wishList.filter((wishGroupId) => wishGroupId === groupId);
      // // console.log(wishing);
      wishing.length > 0 ? setImsiHeart(true) : setImsiHeart(false);
    }
  }, [userData]);

  const wishHandler = () => {
    if (userData) {
      setImsiHeart((curr) => !curr);
    } else {
      setAlert(true);
      setAlertMsg('로그인 후 이용해주세요!');
    }
    if (imsiHeart) {
      wishController({ groupId: groupId, wishState: false });
    } else {
      wishController({ groupId: groupId, wishState: true });
    }
  };

  return (<>
    <DescFooterWrap>
      <button onClick={wishHandler}>
        {imsiHeart ? <LinkIcon src={heart2} /> : <LinkIcon src={heart1} />}
      </button>
      <Boundary height='100%' width='2.3px' />
      <button onClick={() => {
        setAlert(true);
        setAlertMsg(`링크 복사 완료: ${$url}`);
      }}>
        <LinkIcon src={share} />
      </button>
    </DescFooterWrap>
    {
      alert && <ToastAlert
        color={
          alertMsg === '로그인 후 이용해주세요!' ? 'var(--error)' : ''
        }>
        <strong>{alertMsg}</strong>
      </ToastAlert>
    }
  </>

  );
};

export default DescFooter;
