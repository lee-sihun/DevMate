import React from 'react';
import Card from '../components/common/Card/Card';
import { useGetDummyDataQuery } from '../utils/api';
import { CardData } from 'group-data';
import { TestSection } from '../components/common/Card/Card.styled';

const Yunha = () => {

  const { data, error, isLoading } = useGetDummyDataQuery();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    // 데이터를 가져오는 동안 로딩 표시 등을 처리할 수 있습니다.
    return <div>Loading...</div>;
  }

  if (error) {
    // 데이터를 가져오는 중 오류가 발생하면 오류 메시지를 표시합니다.
    const errorMessage = error instanceof Error
      ? error.message
      : 'An error occurred';
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <TestSection>
      {/* Your component code here */}
      {data?.data.map((item: CardData, i: number) => {
        return (<React.Fragment key={i}>
          <Card data={item} />
        </React.Fragment>);
      })}
    </TestSection>
  );
};

export default Yunha;