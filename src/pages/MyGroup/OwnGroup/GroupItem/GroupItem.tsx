import React, { useState } from 'react';
import { GroupItemStyle } from '../OwnGroup.styled';

interface GroupItemProps {
  active: boolean;
  setActive: () => void;
  index: number;
}

const GroupItem = ({ active, setActive, index }: GroupItemProps) => {
  return (
    <GroupItemStyle key={index} active={active} onClick={setActive}>
      <div>
        <small>스터디</small>
        <h4>리액트 짱 잘하는 스터디</h4>
      </div>
      <span>23-01-01</span>
    </GroupItemStyle>
  );
};

export default GroupItem;
