import React from "react";
import { CardWrapper, CardImg, CardDescription } from "./style";

const Card = ({ imgPath }) => {
  return (
    <CardWrapper>
      <CardImg src={imgPath}></CardImg>
      <CardDescription>Little comment for card</CardDescription>
    </CardWrapper>
  );
};

export default Card;
