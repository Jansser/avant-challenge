import { Button } from "../Button";
import { FilterBar } from "../FilterBar";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { HeaderContainer, ButtonsContainer, NavbarContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <a href="/homes">
          <Logo />
        </a>

        <Navbar />
        <ButtonsContainer>
          <Button label="Sign In" onClick={() => {}}></Button>
          <Button bordered label="Sign Up" onClick={() => {}}></Button>
        </ButtonsContainer>
      </NavbarContainer>
      <FilterBar />
    </HeaderContainer>
  );
};
