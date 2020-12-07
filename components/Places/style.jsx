import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 50px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: cennter;
  flex-wrap: wrap;
  align-content: center;
`;

export const PlaceWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 120px;
`;

export const PlacePicture = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
`;

export const PlaceTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 0 5px;
`;

export const PlaceTimeTo = styled.div`
  padding: 0 5px;
  color: rgb(40, 40, 40);
`;
