import React from "react";
import { PlaceWrapper, PlacePicture, PlaceTitle, PlaceTimeTo } from "./style";

const Place = () => {
  return (
    <PlaceWrapper>
      <PlacePicture src="./img/place-img.jpg"></PlacePicture>
      <div>
        <PlaceTitle>Место отдыха</PlaceTitle>
        <PlaceTimeTo>X часов езды</PlaceTimeTo>
      </div>
    </PlaceWrapper>
  );
};

export default Place;
