import React from 'react';
import Card from '../components/common/Card/Card';
import { GroupData } from 'group-data';
import { TestSection } from '../components/common/Card/Card.styled';
import CardSkeleton from '../components/common/Card/Card.skeleton';
import { useGetDummyDataQuery } from 'store/hooks';

const Yunha = () => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();

  React.useEffect(() => {
    // // console.log(data);
  }, [data]);

  if (data) {
    return (
      <TestSection>
        {/* Your component code here */}
        {data?.data.map((item: GroupData, i: number) => {
          return (
            <React.Fragment key={i}>
              <Card data={item} />
            </React.Fragment>
          );
        })}
      </TestSection>
    );
  }

  return (
    <TestSection>
      {Array.from({ length: 8 }).map((item, i: number) => {
        return (
          <React.Fragment key={i}>
            <CardSkeleton />
          </React.Fragment>
        );
      })}
    </TestSection>
  );
};

export default Yunha;
