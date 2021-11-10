import styled from "styled-components";

const StyledInput = styled.input`
  font-family: Source Sans Pro, sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  margin-top: 2px;

  ::placeholder {
    opacity: 0.3;
  }
`;

const StyledInputLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.accent};
`;

const InputContainer = styled.div`
  font-family: Source Sans Pro;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 281px;
  padding: 8px 15px;

  border: 2px solid ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  border-radius: 3px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.accentLighter};
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.accentLight};
  }
`;

export { StyledInput, StyledInputLabel, InputContainer };
