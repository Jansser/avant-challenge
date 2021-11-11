import { HomeSeasonPricing } from "../../../../store/type";
import { formatPrice } from "../../../../utils";
import { Icon } from "../../../Icons/Icon";
import { Pricing } from "../../../Pricing";
import { HomeSeasonPriceRangeContainer } from "./style";

interface Props {
  seasonPricing: HomeSeasonPricing;
}

export const HomeSeasonPriceRange = ({ seasonPricing }: Props) => {
  const { lowSeason, highSeason } = seasonPricing;

  return (
    <HomeSeasonPriceRangeContainer>
      <Pricing
        title={
          <>
            <Icon name="low" />
            Budget Season
          </>
        }
        content={`${formatPrice(lowSeason.minPrice)} - ${formatPrice(
          lowSeason.maxPrice
        )}`}
        footer="per night"
      />

      <Pricing
        title={
          <>
            <Icon name="high" />
            High Season
          </>
        }
        content={`${formatPrice(highSeason.minPrice)} - ${formatPrice(
          highSeason.maxPrice
        )}`}
        footer="per night"
      />
    </HomeSeasonPriceRangeContainer>
  );
};
