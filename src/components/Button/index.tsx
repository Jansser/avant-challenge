import { StyledButton } from "./style";

export interface Props {
  label: string;
  onClick: () => void;
  bordered?: boolean;
  secondary?: boolean;
}

export const Button = ({
  label,
  bordered = false,
  secondary = false,
  onClick,
}: Props) => (
  <StyledButton bordered={bordered} secondary={secondary} onClick={onClick}>
    {label}
  </StyledButton>
);
