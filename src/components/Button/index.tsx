import { StyledButton } from "./style";

export interface Props {
  label: string;
  onClick: () => void;
  bordered?: boolean;
}

export const Button = ({ label, bordered = false, onClick }: Props) => (
  <StyledButton bordered={bordered} onClick={onClick}>
    {label}
  </StyledButton>
);
