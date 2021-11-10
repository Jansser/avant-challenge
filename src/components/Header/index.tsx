import { Button } from "../Button";
import { FilterBar } from "../FilterBar";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { HeaderContainer, ButtonsContainer, NavbarContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <Logo />
        <Navbar />
        <ButtonsContainer>
          <Button label="Sign In" onClick={() => {}}></Button>
          <Button bordered label="Sign up" onClick={() => {}}></Button>
        </ButtonsContainer>
      </NavbarContainer>
      <FilterBar />
    </HeaderContainer>
  );
};
