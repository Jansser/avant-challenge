import { AvantStayIcon } from "../Icons/AvantstayIcon";
import { AvantStayLogo } from "../Icons/AvantstayLogo";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../constants/theme";

export const Logo = () => {
  const isDesktop = useMediaQuery({ minWidth: theme.media.desktop });

  return isDesktop ? <AvantStayLogo /> : <AvantStayIcon />;
};
