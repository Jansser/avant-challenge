import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  min-width: 800px;
`;

const HomePhoto = styled.img`
  width: 390px;
  height: 208px;
  border-radius: 2px;
`;

const HomeRegionTitle = styled.h3`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.accent};

  margin-top: 0;
  margin-bottom: 8px;
`;

const HomeTitle = styled.h1`
  font-family: "SangBleu Sunrise", sans-serif;
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  margin-top: 0;
  margin-bottom: 16px;
`;

const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left 30px;

  > div:first-child {
    margin-bottom: 30px;
  }
`;

const HomeDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.neutralExtremeLight};
  border: 0;
  margin: 0 0 20px 0;
  width: 100%;
  height: 1px;
`;

export {
  HomeContainer,
  HomeRegionTitle,
  HomeTitle,
  HomePhoto,
  HomeInfoContainer,
  HomeDivider,
};
