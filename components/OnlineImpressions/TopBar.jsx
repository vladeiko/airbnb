import React from "react";
import {
  TopBarWrapper,
  TitleWrapper,
  TitleText,
  TitleDescription,
  TopBarLink,
} from "./style";

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TitleWrapper>
        <TitleText>Посетите Онлайн-Впечатления</TitleText>
        <TitleDescription>
          Приглашайте друзей на интерактивные мероприятия от опытных
          организаторов.
        </TitleDescription>
      </TitleWrapper>
      <TopBarLink href="#">Смотреть всё</TopBarLink>
    </TopBarWrapper>
  );
};

export default TopBar;
