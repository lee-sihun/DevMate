import React from 'react';
import { NoImg, Wrap } from './NoData.styled';

interface NoDataProps {
  msg: string;
}

const NoData = ({ msg }:NoDataProps ) => {
  return (
    <Wrap>
      <NoImg><h3>{msg}</h3></NoImg>
    </Wrap>
  );
};

export default NoData;
