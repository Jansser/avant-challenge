import styled from "styled-components";

const HeaderContainer = styled.header`
  position: stick;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 80px;
  box-shadow: 4px 8px 40px rgba(227, 230, 234, 0.3);
  margin-bottom: 40px;
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
