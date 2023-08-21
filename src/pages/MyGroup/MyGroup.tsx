import React from 'react';
import Card from 'components/common/Card/Card';
import { useGetDummyDataQuery } from 'store/hooks';
import styled from 'styled-components';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';

const MyGroup = () => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();
  console.log(data);
  return (
    <PageTemplate subTitle="Group Manage" mainTitle="그룹 관리">
      <div>{data && <Card data={data.data[0]} />}</div>
    </PageTemplate>
  );
};

export default MyGroup;
