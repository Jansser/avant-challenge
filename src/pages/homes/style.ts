import styled from "styled-components";

const HomesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-left: 30px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: 1440px;
    margin: 40px auto 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;

  overflow: auto;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.failure};
  font-weight: 600;
  text-align: center;
`;

export { ErrorMessage, HomesContainer, ContentContainer };
