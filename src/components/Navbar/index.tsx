import { Icon } from "../Icons/Icon";
import { NavItem } from "../NavItem";

import { Nav } from "./style";

export const Navbar = () => (
  <Nav>
    <NavItem isActive>Find Homes</NavItem>
    <NavItem>Partners</NavItem>
    <NavItem>Company Retreats</NavItem>
    <NavItem>
      More <Icon name="chevronDown"></Icon>
    </NavItem>
  </Nav>
);
