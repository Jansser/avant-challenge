import { InputContainer, StyledInput, StyledInputLabel } from "./style";

interface InputProps {
  placeholder?: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
}

export const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
}: InputProps) => (
  <InputContainer>
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </InputContainer>
);
