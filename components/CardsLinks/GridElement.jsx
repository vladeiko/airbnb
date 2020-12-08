import React from "react";
import { GridElementWrapper, Img, Link } from "./style";

const GridElement = ({ id }) => {
  return (
    <GridElementWrapper>
      <Link id={id} href="#">
        <Img src="./img/housing-type.jpg"></Img>
        Type of place
      </Link>
    </GridElementWrapper>
  );
};

export default GridElement;
