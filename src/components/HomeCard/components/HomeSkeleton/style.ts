import styled from "styled-components";

const HomeSkeletonContainer = styled.div`
  display: flex;
  padding-bottom: 20px;

  span.react-loading-skeleton {
    margin-bottom: 4px;
  }
`;

const HomeInfoSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left 30px;

  > div:first-child {
    margin-bottom: 39px;
  }
`;

const HomeSkeletonDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.neutralExtremeLight};
  border: 0;
  margin: 0 0 20px 0;
  width: 100%;
  height: 1px;
`;

export {
  HomeSkeletonContainer,
  HomeInfoSkeletonContainer,
  HomeSkeletonDivider,
};
