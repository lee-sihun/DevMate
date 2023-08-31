import React, { useState } from 'react';
import { TabMenu } from './MyGroup.styled';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import OwnedGroup from './OwnGroup/OwnGroup';
import ListGroup from './ListGroup/ListGroup';
import FavGroup from './FavGroup/FavGroup';
import Notification from './Notification/Notification';

interface MyGroupProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const MyGroup = ({ activeTab, setActiveTab, type, setType }: MyGroupProps) => {
  const tabs = ['그룹', '모집 관리', '관심 목록', '알림'];
  
  let content;
  switch (activeTab) {
    case '그룹':
      content = <ListGroup />;
      break;
    case '모집 관리':
      content = <OwnedGroup />;
      break;
    case '관심 목록':
      content = <FavGroup type={type} setType={setType} />;
      break;
    case '알림':
      content = <Notification />;
      break;
    default:
      content = null;
  }

  return (
    <PageTemplate subTitle="Group Manage" mainTitle="그룹 관리">
      <TabMenu>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
            {tab}
          </li>
        ))}
      </TabMenu>
      {content}
    </PageTemplate>
  );
};

export default MyGroup;
