import React, { useEffect } from 'react';
import { CardLayout, CardImg, CardH3 } from './Card.styled';
import { CardData } from 'group-data';

const Card = ({ data }: { data: CardData }) => {
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  return (
    <CardLayout>
      <CardImg src={data.imageUrl} />
      <CardH3>{data.title}</CardH3>

    </CardLayout>
  );
};

export default Card;