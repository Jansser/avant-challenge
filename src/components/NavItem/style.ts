import styled from "styled-components";
import { Props } from ".";

const StyledNavItem = styled.div<Props>`
  ${({ isActive, theme }) => `
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    margin-right: 30px;  
    color: ${isActive ? theme.colors.accent : theme.colors.primary};
  
    &:hover {
      color: ${theme.colors.accent};
    }
    
    ${
      isActive &&
      `&:before {
        content: "";
        height: 0;
        position: absolute;
        width: 20px;
        border: 1px solid ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
      }`
    }
  `}
`;

export { StyledNavItem };
