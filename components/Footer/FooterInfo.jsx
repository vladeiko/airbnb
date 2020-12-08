import React from "react";
import { FooterInfoWrapper, Link, Ul, Li, P } from "./style";

const FooterInfo = () => {
  return (
    <FooterInfoWrapper>
      <P>© 2020 Airbnb, Inc. All rights reserved</P>
      <Ul style={{ display: "flex" }}>
        <Li>
          <Link href="#">· Конфиденциальность</Link>
        </Li>
        <Li>
          <Link href="#">· Условия</Link>
        </Li>
        <Li>
          <Link href="#">· Карта сайта</Link>
        </Li>
      </Ul>
    </FooterInfoWrapper>
  );
};

export default FooterInfo;
