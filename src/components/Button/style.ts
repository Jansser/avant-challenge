import styled from "styled-components";
import { Props } from ".";

const StyledButton = styled.button<Partial<Props>>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
  padding: 8px 24px;
  font-size: 14px;
  border: none;
  outline: 0;

  ${({ bordered, theme }) =>
    bordered &&
    `
      border: 2px solid ${theme.colors.primary};
      border-radius: 3px;

      &:hover {
        border-color: ${theme.colors.accent};
      }

      &:focus {
        border-color: ${theme.colors.accentDark};
      }
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export { StyledButton };
