import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 30px;

  @media (min-width: ${({ theme }) => theme.colors.desktop}px) {
    padding: 16px 80px;
  }

  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

export { HeaderContainer, NavbarContainer, ButtonsContainer };
