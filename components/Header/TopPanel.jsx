import React from "react";
import {
  TopPanelWrapper,
  LogoLink,
  TopPanelLinks,
  TopPanelLink,
  TopPanelRightContainer,
  RightContainerLink,
  MenuButton,
} from "./style";

const TopPanel = () => {
  return (
    <TopPanelWrapper>
      <LogoLink href="#">airbnb</LogoLink>
      <TopPanelLinks>
        <TopPanelLink href="#">Жильё</TopPanelLink>
        <TopPanelLink href="#">Впечатления</TopPanelLink>
        <TopPanelLink href="#">Онлайн-Впечатления</TopPanelLink>
      </TopPanelLinks>
      <TopPanelRightContainer>
        <RightContainerLink className="">Сдайте жильё</RightContainerLink>
        <RightContainerLink className="">О</RightContainerLink>
        <MenuButton></MenuButton>
      </TopPanelRightContainer>
    </TopPanelWrapper>
  );
};

export default TopPanel;
