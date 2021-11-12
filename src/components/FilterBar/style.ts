import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    > div:nth-child(2) {
      flex-grow: 2;
    }
  }
`;

const FieldsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2px;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-right: 12px;

  > div {
    flex-grow: 1;
  }

  > div:first-child {
    width: 30%;
  }
`;

const Divider = styled.hr`
  height: 30px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 0;
  width: 1px;
`;

export { FilterContainer, FieldsContainer, Divider };
