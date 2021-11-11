import { Home } from "../../store/type";
import { HomeInfo } from "./components/HomeInfo";
import { HomeSeasonPriceRange } from "./components/HomeSeasonPriceRange";
import {
  HomeContainer,
  HomeDivider,
  HomeInfoContainer,
  HomePhoto,
  HomeRegionTitle,
  HomeTitle,
} from "./style";

interface Props {
  home: Home;
  divider?: boolean;
}

export const HomeCard = ({ home, divider }: Props) => {
  return (
    <>
      <HomeContainer>
        <HomePhoto src={home.photos[0].url} />
        <HomeInfoContainer>
          <HomeRegionTitle>
            {home.regionName} • {home.stateName}, {home.stateCode}
          </HomeRegionTitle>
          <HomeTitle>{home.title}</HomeTitle>
          <HomeInfo home={home} />

          <HomeSeasonPriceRange seasonPricing={home.seasonPricing} />

          {/* <Pricing
            title="Total • 8 nights"
            content={formatPrice(920)}
            footer={`${formatPrice(115)} per night`}
          /> */}

          {/* <PricingSkeleton /> */}
        </HomeInfoContainer>
      </HomeContainer>
      {divider && <HomeDivider />}
    </>
  );
};
