import React from "react";
import { MainWrapper, CardGrid, GridPart1, GridPart2 } from "./style";
import TopBar from "./TopBar";
import Card from "./Card";

const OnlineImpressions = () => {
  return (
    <MainWrapper>
      <TopBar />
      <CardGrid>
        <Card imgPath="./img/card1.jpg" />
        <GridPart1>
          <GridPart2>
            <Card imgPath="./img/card2.jpg" />
            <Card imgPath="./img/card2.jpg" />
          </GridPart2>
          <Card imgPath="./img/card3.jpg" />
        </GridPart1>
      </CardGrid>
    </MainWrapper>
  );
};

export default OnlineImpressions;
