import styled from "styled-components";

const EmptyResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: ${({ theme }) => theme.colors.neutralExtremeDark};
  line-height: 24.64px;

  svg {
    margin-bottom: 30px;
  }

  button {
    margin-top: 40px;
  }
`;

export { EmptyResultsContainer };
