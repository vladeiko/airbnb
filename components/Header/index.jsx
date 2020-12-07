import React from "react";
import { MainWrapper } from "./style";
import TopPanel from "./TopPanel";
import FindBar from "./FindBar";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <MainWrapper>
      <TopPanel />
      <FindBar />
      <HeaderTitle />
    </MainWrapper>
  );
};

export default Header;
