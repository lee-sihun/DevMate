import React, { useState } from 'react';
import { TabMenu } from './MyGroup.styled';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import OwnedGroup from './OwnGroup/OwnGroup';
import ListGroup from './ListGroup/ListGroup';

const MyGroup = () => {
  const tabs = ['내 그룹', '지원 내역', '진행 내역', '관심 목록'];
  const [activeTab, setActiveTab] = useState('내 그룹');

  let content;
  switch (activeTab) {
    case '내 그룹':
      content = <OwnedGroup />;
      break;
    case '지원 내역' || '진행 내역' || '관심 목록':
      content = <ListGroup />;
      break;
    // case '알림':
    //   content = <Notifications />;
    //   break;
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
