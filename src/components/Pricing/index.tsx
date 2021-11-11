import {
  PricingContainer,
  PricingContent,
  PricingTitle,
  PricingFooter,
} from "./style";

interface Props {
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

export const Pricing = ({ title, content, footer }: Props) => {
  return (
    <PricingContainer>
      <PricingTitle>{title}</PricingTitle>
      <PricingContent>{content}</PricingContent>
      <PricingFooter>{footer}</PricingFooter>
    </PricingContainer>
  );
};
