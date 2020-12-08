import React from "react";
import { MainWrapper, Title, Grid } from "./style";
import GridElement from "./GridElement";

const CardsLinks = () => {
  return (
    <MainWrapper>
      <Title>Живите где угодно</Title>
      <Grid>
        <GridElement id="1" />
        <GridElement id="2" />
        <GridElement id="3" />
        <GridElement id="4" />
      </Grid>
    </MainWrapper>
  );
};

export default CardsLinks;
