import styled from "styled-components";

export const MainWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 811px;
  background: fixed rgba(28, 28, 28, 0.2) url(/img/header-bckg-1440.jpg) center
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
  display: flex;
  align-items: center;
`;

export const TopPanelLink = styled.a`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 0 15px;

    &:hover {
      color: white;
    }

    &visited{
      color: white;
    }
  }
`;

export const TopPanelRightContainer = styled.div`
  display: flex;
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
