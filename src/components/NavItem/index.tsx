import { StyledNavItem } from "./style";

export interface Props {
  isActive?: boolean;
  children: React.ReactNode;
}

export const NavItem = ({ isActive, children }: Props) => (
  <StyledNavItem isActive={isActive}>{children}</StyledNavItem>
);
