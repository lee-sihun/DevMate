import React, { useEffect, useRef } from 'react';
import { Wrapper, Header, Inner, CloseBtn, Content } from './ModalLayout.styled';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  mode: 'ALERT' | 'NOTICE';
  onClose: () => void;
}

const Modal = ({ title, children, mode, onClose }: ModalProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Inner>
        <Header mode={mode}>
          {title}
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </Header>
        <Content>{children}</Content>
      </Inner>
    </Wrapper>
  );
};

export default Modal;
