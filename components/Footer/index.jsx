import React from "react";
import { MainWrapper } from "./style";
import LinksBoxes from "./LinksBoxes";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <MainWrapper>
      <LinksBoxes />
      <FooterInfo />
    </MainWrapper>
  );
};

export default Footer;
