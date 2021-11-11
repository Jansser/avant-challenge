import styled from "styled-components";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: normal;
`;

const PricingContent = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 110%;
  margin: 4px 0;
`;

const PricingTitle = styled.div`
  display: flex;
  align-content: center;
  opacity: 0.3;
`;

const PricingFooter = styled.span`
  opacity: 0.3;
`;

export { PricingContainer, PricingContent, PricingTitle, PricingFooter };
