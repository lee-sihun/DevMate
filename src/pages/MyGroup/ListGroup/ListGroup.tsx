import Card from 'components/common/Card/Card';
import JoinRequestModal from 'components/common/Modal/JoinRequestModal/JoinRequestModal';
import TypeSortBtn from 'components/common/TypeSortBtn/TypeSortBtn';
import { GroupData } from 'group-data';
import React from 'react';
import { useGetDummyDataQuery } from 'store/hooks';
import { Wrapper, TypeSortTabs, Inner } from './ListGroup.styled';

const ListGroup = () => {
  const {
    data,
    // error,
    // isLoading,
  } = useGetDummyDataQuery();
  return (
    <Wrapper>
      <TypeSortTabs>
        <TypeSortBtn type="STUDY" isActive />
        <TypeSortBtn type="PROJECT" />
      </TypeSortTabs>
      <Inner>
        {data?.data.map((item: GroupData, i: number) => {
          return (
            <React.Fragment key={i}>
              <Card data={item} />
            </React.Fragment>
          );
        })}
      </Inner>
    </Wrapper>
  );
};

export default ListGroup;
