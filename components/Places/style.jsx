import styled from "styled-components";
import { device } from "../device";

export const MainWrapper = styled.div`
  margin: 50px 40px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const PlaceWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 120px;

  @media ${device.laptop} {
    padding: 5px 60px;
  }

  @media ${device.tablet} {
    padding: 5px 60px;
  }
`;

export const PlacePicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
`;

export const PlaceTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 5px 4px 10px;
`;

export const PlaceTimeTo = styled.div`
  padding: 4px 5px 4px 10px;
  color: rgb(40, 40, 40);
`;
