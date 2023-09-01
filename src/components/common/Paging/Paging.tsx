// Paging 컴포넌트
import React from 'react';
import Pagination from 'react-js-pagination';
import { Container } from './Paging.styled';

interface PagingProps {
  page: number;
  handlePageChange: (page: number) => void;
  totalPage: number;
}

const Paging = ({ page, handlePageChange, totalPage }: PagingProps) => {
  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={1}
        totalItemsCount={totalPage || 1}
        pageRangeDisplayed={5}
        prevPageText="‹"
        nextPageText="›"
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default Paging;
