import { icons } from "../icons";
import { StyledIcon } from "./style";

export interface Props {
  name: keyof typeof icons;
}

export const Icon = ({ name }: Props) => <StyledIcon>{icons[name]}</StyledIcon>;
