import styled from "styled-components";

const LoadingMoreContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 40px 0;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 16px;
  line-height: 122%;

  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.neutral};

  span {
    padding: 5px 16px;
    background-color: ${({ theme }) => theme.colors.neutralExtremeLight};
  }
`;

export { LoadingMoreContainer };
