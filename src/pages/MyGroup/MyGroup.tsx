import React, { useState } from 'react';
import Card from 'components/common/Card/Card';
import { useGetDummyDataQuery } from 'store/hooks';
import { TypeSortTabs, TabMenu } from './MyGroup.styled';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';
import TypeSortBtn from '../../components/common/TypeSortBtn/TypeSortBtn';
import OwnedGroup from './OwnGroup/OwnGroup';

const MyGroup = () => {
  const { data } = useGetDummyDataQuery();

  const tabs = ['내 그룹', '지원 내역', '진행 내역', '관심 목록', '알림'];
  const [activeTab, setActiveTab] = useState('내 그룹');
  return (
    <PageTemplate subTitle="Group Manage" mainTitle="그룹 관리">
      <TabMenu>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
            {tab}
          </li>
        ))}
      </TabMenu>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive />
        <TypeSortBtn type="PROJECT" />
      </TypeSortTabs>
      <OwnedGroup />
      {/* 
      <div>{data && <Card data={data.data[0]} />}</div> */}
    </PageTemplate>
  );
};

export default MyGroup;
