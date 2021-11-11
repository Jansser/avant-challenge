import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { theme } from "../../constants/theme";

export const PricingSkeleton = () => (
  <SkeletonTheme
    baseColor={theme.colors.neutralExtremeLight}
    highlightColor={theme.colors.neutralExtremeLight}
    borderRadius="2px"
    enableAnimation={false}
  >
    <Skeleton width={74} height={17} />
    <Skeleton width={98} height={22} />
    <Skeleton width={45} height={17} />
  </SkeletonTheme>
);
