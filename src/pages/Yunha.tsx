import React from 'react';
import Card from '../components/common/Card/Card';
import { useGetDummyDataQuery } from '../utils/api';
import { CardData } from 'group-data';
import { TestSection } from '../components/common/Card/Card.styled';
import CardSkeleton from '../components/common/Card/Card.skeleton';

const Yunha = () => {

  const {
    data,
    // error, 
    // isLoading,
  } = useGetDummyDataQuery();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  if (data) {
    return (
      <TestSection>
        {/* Your component code here */}
        {data?.data.map((item: CardData, i: number) => {
          return (<React.Fragment key={i}>
            <Card data={item} link='/' />
          </React.Fragment>);
        })}
      </TestSection>
    );
  }

  return <TestSection>
    {Array.from({ length: 8 }).map((item, i: number) => {
      return <React.Fragment key={i}>
        <CardSkeleton />
      </React.Fragment>;
    })}
  </TestSection>;
};

export default Yunha;