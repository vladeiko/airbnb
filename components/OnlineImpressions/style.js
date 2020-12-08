import styled from "styled-components";
import { device } from "../device";

export const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  padding: 60px 150px;
  box-sizing: border-box;
  width: 100%;
`;

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  color: white;
`;

export const TitleText = styled.h2`
  font-size: 34px;
  padding: 5px 0;
`;

export const TitleDescription = styled.p`
  font-size: 20px;
  width: 500px;
  padding: 5px 0;
`;

export const TopBarLink = styled.a`
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  height: 20px;
  width: 110px;
  padding: 4px 0 2px 15px;
`;
