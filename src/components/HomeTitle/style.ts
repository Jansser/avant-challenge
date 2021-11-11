import styled from "styled-components";

const HomeTitleHeader = styled.header`
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 9px;
`;

const HomeTitleHeaderLine = styled.div`
  margin: 0 7px;
  width: 68px;
  border: 1px solid #53c3d0;
  color: ${({ theme }) => theme.colors.accent};
`;

const HomeTitleContent = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;

  span {
    font-weight: 600;
  }
`;

export { HomeTitleHeader, HomeTitleHeaderLine, HomeTitleContent };
