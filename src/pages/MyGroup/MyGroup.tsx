import React, { useState } from 'react';
import { TabMenu } from './MyGroup.styled';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import OwnedGroup from './OwnGroup/OwnGroup';
import ListGroup from './ListGroup/ListGroup';

const MyGroup = () => {
  const tabs = ['그룹', '모집 관리', '관심 목록'];
  const [activeTab, setActiveTab] = useState('그룹');

  let content;
  switch (activeTab) {
    case '그룹':
      content = <ListGroup groupData="지원 내역" />;
      break;
    case '모집 관리':
      content = <OwnedGroup />;
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
