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

  const detailData = React.useMemo(() => {
    return data?.data[0];
  }, [data]);

  if (detailData) {
    return (
      <DetailWrapper>
        <Title
          title={detailData.title}
          name={detailData.author.nickName}
          createdAt={detailData.createdAt}
          viewCount={detailData.viewCount}
          wishCount={detailData.wishCount}
        />
        <Info
          type={detailData.type}
          maxMembers={detailData.maxMembers}
          dueDate={detailData.dueDate}
          position={detailData.position}
          skills={detailData.skills}
        />
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