import React from 'react';
import Card from 'components/common/Card/Card';
import { useGetDummyDataQuery } from 'store/hooks';

const MyGroup = () => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();
  console.log(data);
  return <div>{data && <Card data={data.data[0]} />}</div>;
};

export default MyGroup;
