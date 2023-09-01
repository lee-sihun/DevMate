import React, { useEffect } from 'react';
import { DetailWrapper } from './Detail.styled';
import Title from 'components/features/Group/Title/Title';
import Info from 'components/features/Group/Info/Info';
import Desc from 'components/features/Group/Desc/Desc';
// import { useGetDetailDummyDataQuery } from 'store/hooks';
import { useParams } from 'react-router-dom';
// import { useGetDetailDataQuery } from 'store/hooks/groupDetail.hooks';
import { AuthorData } from 'author-data';
import { useGetDetailDataQuery } from 'store/hooks/group.hooks';

interface DetailProps {
  userData?: AuthorData;
}

const Detail = ({ userData }: DetailProps) => {
  const { id: groupId } = useParams();
  const { data } = useGetDetailDataQuery(groupId);

  const detailData = data?.data;

  useEffect(() => {
    // // console.log(userData);
  }, [userData]);

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
          detailData={detailData}
          title={detailData.title}
          type={detailData.type}
          location={detailData.location}
          currentMembers={detailData.currentMembers.length}
          maxMembers={detailData.maxMembers}
          dueDate={detailData.dueDate}
          position={detailData.position}
          skills={detailData.skills}
          img={detailData.imageUrl}
          authorId={detailData.author._id}
          userData={userData}
        />
        <Desc contents={detailData.description} groupId={detailData._id} userData={userData} />
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
