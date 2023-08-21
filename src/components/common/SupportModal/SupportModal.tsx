import React from 'react';
import {
  SupportModalBg,
  SupportModalWindow,
  SupportModalWindowContents,
  SupportModalWindowMsg,
  SupportModalWindowTitle,
  SupportModalWindowTop,
  SupportModalWrap,
} from './SupportModal.styled';
import {LinkIcon} from '../LinkIcon.styled';
import down from '../../../assets/img/down.svg';
import Button from '../Button/Button';

interface SupportModalProps {
  title: string,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const SupportModal = ({ title, setModal }: SupportModalProps) => {

  const [support, setSupport] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const closeModal = React.useCallback(() => setModal(false), []);

  return (
    <SupportModalWrap>
      <SupportModalBg onClick={closeModal} />
      <SupportModalWindow $height='400px'>
        <SupportModalWindowTop>
          <LinkIcon size='30px' src={down} style={{ cursor: 'pointer' }} onClick={closeModal} />
          <SupportModalWindowTitle>{title}</SupportModalWindowTitle>
        </SupportModalWindowTop>
        <SupportModalWindowContents>
          {
            support
              ? <React.Fragment>

              </React.Fragment>
              :
              <React.Fragment>
                <SupportModalWindowMsg></SupportModalWindowMsg>
                <Button color='var(--blue-regular1)' height='40px' onClick={() => {
                  setSupport(true);
                }}>지원하기</Button>
              </React.Fragment>
          }
        </SupportModalWindowContents>

      </SupportModalWindow>
    </SupportModalWrap>
  );
};

export default SupportModal;