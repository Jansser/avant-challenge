import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { theme } from "../../../../constants/theme";
import {
  HomeInfoSkeletonContainer,
  HomeSkeletonContainer,
  HomeSkeletonDivider,
} from "./style";

import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  divider?: boolean;
}

export const HomeSkeleton = ({ divider = false }: Props) => (
  <SkeletonTheme
    baseColor={theme.colors.neutralExtremeLight}
    highlightColor={theme.colors.neutralExtremeLight}
    borderRadius="2px"
    enableAnimation={false}
  >
    <HomeSkeletonContainer data-cy="home-skeleton">
      <Skeleton width={390} height={208} />

      <HomeInfoSkeletonContainer>
        <div>
          <Skeleton width={132} height={17} />
          <Skeleton width={218} height={28} />
          <Skeleton width={241} height={17} />
        </div>

        <div>
          <Skeleton width={74} height={17} />
          <Skeleton width={98} height={22} />
          <Skeleton width={45} height={17} />
        </div>
      </HomeInfoSkeletonContainer>
    </HomeSkeletonContainer>

    {divider && <HomeSkeletonDivider />}
  </SkeletonTheme>
);
