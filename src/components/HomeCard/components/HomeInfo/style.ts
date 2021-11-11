import styled from "styled-components";

const HomeInfoContainer = styled.div`
  display: flex;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 32px;
`;

const HomeInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  > div:first-child {
    margin-left: 0;
  }
`;

export { HomeInfoContainer, HomeInfoItem };
