import React from "react";
import { LinksBoxWrapper, LinksColumn, ColumnTitle, Link } from "./style";

const LinksBoxes = () => {
  return (
    <LinksBoxWrapper>
      <LinksColumn>
        <ColumnTitle>О НАС</ColumnTitle>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
      </LinksColumn>
      <LinksColumn>
        <ColumnTitle>СООБЩЕСТВО</ColumnTitle>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
      </LinksColumn>
      <LinksColumn>
        <ColumnTitle>ПРИНИМАЙТЕ ГОСТЕЙ</ColumnTitle>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
      </LinksColumn>
      <LinksColumn>
        <ColumnTitle>ПОДДЕРЖКА</ColumnTitle>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
        <Link href="#">Link to something</Link>
      </LinksColumn>
    </LinksBoxWrapper>
  );
};

export default LinksBoxes;
