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

  const detailData = data?.data[0];

  if (detailData) {
    return (
      <DetailWrapper>
        <Title
          title={detailData.title}
          authorId={detailData.author._id}
          name={detailData.author.nickName}
          createdAt={detailData.createdAt}
          viewCount={detailData.viewCount}
          wishCount={detailData.wishCount}
        />
        <Info
          title={detailData.title}
          type={detailData.type}
          currentMembers={detailData.currentMembers.length}
          maxMembers={detailData.maxMembers}
          dueDate={detailData.dueDate}
          position={detailData.position}
          skills={detailData.skills}
          img={detailData.imageUrl}
        />
        <Desc
          // contents={detailData.description}
          groupId={detailData._id}
        />
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