import React from "react";
import Header from ".";
import { HeaderTitleWrapper, HeaderTitleText, TitleLink } from "./style";

const HeaderTitle = () => {
  return (
    <HeaderTitleWrapper>
      <HeaderTitleText>Удивиетльное рядом</HeaderTitleText>
      <TitleLink href="#">Найдите жильё поблизости</TitleLink>
    </HeaderTitleWrapper>
  );
};

export default HeaderTitle;
