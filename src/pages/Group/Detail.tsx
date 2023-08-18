import React from 'react';
import { DetailWrapper } from './Detail.styled';
import Title from 'components/features/Group/Title/Title';
import Info from 'components/features/Group/Info/Info';
import Desc from 'components/features/Group/Desc/Desc';
import { useGetDetailDummyDataQuery } from 'store/hooks';
import { useParams } from 'react-router-dom';

const Detail = () => {

  const { id: groupId } = useParams();
  const { data } = useGetDetailDummyDataQuery(groupId as string);

  const titleData = React.useMemo(() => {
    return data?.data[0];
  }, [data]);

  if (titleData) {
    return (
      <DetailWrapper>
        <Title
          title={titleData.title}
          name={titleData.author.nickName}
          createdAt={titleData.createdAt}
          viewCount={titleData.viewCount}
          wishCount={titleData.wishCount}
        />
        <Info />
        <Desc />
      </DetailWrapper>
    );
  }

  return (
    <>
      <div>loading</div>
    </>
  );
};

export default Detail;