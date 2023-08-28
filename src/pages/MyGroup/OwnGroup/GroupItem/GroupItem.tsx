import React, { useEffect, useState } from 'react';
import { GroupItemStyle } from '../OwnGroup.styled';
import Button from 'components/common/Button/Button';

interface GroupItemProps {
  active: boolean;
  setActive: () => void;
  index: number;
  data: any;
}

const GroupItem = ({ active, setActive, index, data }: GroupItemProps) => {
  const reqMembers = data;
  const originalText = reqMembers?.content;
  const truncatedText = originalText?.length > 30 ? originalText?.substring(0, 31) + '....' : originalText;

  return (
    <GroupItemStyle key={index} active={active} onClick={setActive}>
      <div>
        <small>{reqMembers.nickname}님이 지원하셨습니다.</small>
        <h4>{truncatedText}</h4>
      </div>
      <Button color="var(--success)" height="34px">
        ㅤㅤ지원 내용ㅤㅤ
      </Button>
    </GroupItemStyle>
  );
};

export default GroupItem;
