import styled from "styled-components";
import { device } from "../device";

export const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 60px 150px;
  box-sizing: border-box;
  width: 100%;
`;

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
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
  margin: 0 140px 0 0;
`;

export const CardGrid = styled.div`
  box-sizing: border-box;
  display: flex;
`;

export const GridPart1 = styled.div``;

export const GridPart2 = styled.div`
  display: flex;
  width: 720px;
`;

export const CardWrapper = styled.div`
  padding: 10px;
  position: relative;
`;

export const CardImg = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 15px;
`;

export const CardDescription = styled.p`
  font-size: 18px;
  position: absolute;
  bottom: 44px;
  left: 32px;
  color: white;
`;
