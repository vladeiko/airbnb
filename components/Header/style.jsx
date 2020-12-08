import styled from "styled-components";

export const MainWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 811px;
  background: local rgba(28, 28, 28, 0.2) url(/img/header-bckg-1440.jpg)
    no-repeat;
  background-size: 100%;
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
  width: 780px;
  border-radius: 30px;
`;

export const HeaderTitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 200px 0 280px 160px;
  height: 100%;
  max-height: 811px;
`;

export const HeaderTitleText = styled.div`
  color: white;
  font-size: 58px;
  font-weight: bold;
  margin: 0 0 30px 0;
  width: 400px;
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
`;
