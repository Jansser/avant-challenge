import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  font-family: Source Sans Pro;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 3px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.accentLighter};
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.accentLight};
  }
`;

const SelectLabel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.accent};
`;

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectPlaceholder = styled.div`
  opacity: 0.3;
`;

const OptionsContainer = styled.div`
  position: absolute;
  left: -2px;
  top: calc(100% + 4px);
  width: calc(100% + 4px);
  background-color: white;
  overflow: inherit;
  height: auto;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.accentLighter};
  max-height: 70vh;
  overflow: auto;
  z-index: 999;
`;

const OptionItem = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;

  &:hover {
    font-weight: 600;
  }
`;

const GroupOptionItem = styled.div`
  margin: 8px 16px;
  padding-bottom: 8px;
  font-weight: 600;
  border-bottom: 1px solid rgb(232, 239, 245);
`;

const GroupValue = styled.span`
  font-weight: 600;
`;

export {
  SelectContainer,
  SelectLabel,
  SelectHeader,
  SelectPlaceholder,
  OptionItem,
  GroupOptionItem,
  GroupValue,
  OptionsContainer,
};
