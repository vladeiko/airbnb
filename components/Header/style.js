import styled from "styled-components";
import { device } from "../device";

export const MainWrapper = styled.div`
  box-sizing: border-box;
  background: local rgba(28, 28, 28, 0.2) url(/img/header-bckg-1440.jpg)
    no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;

  @media ${device.desktop} {
    max-height: 811px;
  }

  @media ${device.laptopL} {
    max-height: 600px;
  }

  @media ${device.laptop} {
    max-height: 578px;
  }

  @media ${device.tablet} {
    max-height: 430px;
  }

  @media ${device.mobileL} {
    max-height: 430px;
  }

  @media ${device.mobileM} {
    max-height: 430px;
  }

  @media ${device.mobileS} {
    max-height: 430px;
  }
`;

export const TopPanelWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  padding: 26px 0;
`;

export const LogoLink = styled.a`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;

    &:hover {
      color: white;
    }

    &visited{
      color: white;
    }
  }
`;

export const TopPanelLinks = styled.div`
  padding: 0 0 0 140px;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    padding: 0 0 0 60px;
  }
`;

export const TopPanelLink = styled.a`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 0 15px 0 15px;

  &:hover {
    color: rgb(244, 244, 244);
  }

  &:focus {
    border-bottom: 1px solid white;
  }

  @media ${device.tablet} {
    padding: 0 8px 0 8px;
  }
`;

export const TopPanelRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContainerLink = styled.a`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 0 10px;

    &:hover {
      color: white;
    }

    &visited{
      color: white;
    }
  }
`;

export const MenuButton = styled.div`
  width: 70px;
  height: 40px;
  background-color: white;
  border-radius: 40%;
  margin: 0 0 0 15px;
`;

export const FindBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FindBarInput = styled.input`
  padding: 22px 0;
  width: 100%;
  max-width: 780px;
  border-radius: 30px;

  @media ${device.tablet} {
    max-width: 420px;
  }
`;

export const HeaderTitleWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-height: 811px;

  @media ${device.desktop} {
    padding: 100px 0 180px 60px;
    padding: 200px 0 280px 160px;
  }

  @media ${device.laptopL} {
    padding: 100px 0 180px 60px;
  }

  @media ${device.laptop} {
    padding: 50px 0 60px 30px;
  }

  @media ${device.tablet} {
  }

  @media ${device.mobileL} {
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileS} {
  }
`;

export const HeaderTitleText = styled.h1`
  color: white;
  font-size: 58px;
  font-weight: bold;
  margin: 0 0 30px 0;
  width: 400px;

  @media ${device.laptop} {
    font-size: 46px;
  }
`;

export const TitleLink = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;
  width: 250px;
  height: 30px;
  background-color: white;
  border-radius: 8px;

  @media ${device.laptop} {
    font-size: 16px;
  }
`;
