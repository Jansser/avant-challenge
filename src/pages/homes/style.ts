import styled from "styled-components";

const HomesContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-left: 30px;

  @media (min-width: ${({ theme }) => theme.colors.desktop}px) {
    max-width: 1440px;
    margin-top: 40px;
  }
`;

export { HomesContainer };
