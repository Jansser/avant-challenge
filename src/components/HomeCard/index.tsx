import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { GetHomePricing } from "../../store/queries";
import { Home, HomePricing, HomePricingData } from "../../store/type";
import { formatPrice } from "../../utils";
import { Pricing } from "../Pricing";
import { PricingSkeleton } from "../PricingSekeleton";
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

const calculateAverageNightPrice = (
  bookingPeriodPricing: HomePricing | undefined
) => {
  let averageNightPricing = 0;

  if (
    bookingPeriodPricing &&
    bookingPeriodPricing.numberOfNights &&
    bookingPeriodPricing.total
  ) {
    const { total, numberOfNights } = bookingPeriodPricing;
    averageNightPricing = total / numberOfNights;
  }

  return averageNightPricing;
};

export const HomeCard = ({ home, divider }: Props) => {
  const { selectedBookingPeriod, loadingPricing, getHomePricing } =
    useContext(AppContext);

  const renderHomePricing = () => {
    if (!selectedBookingPeriod) {
      return <HomeSeasonPriceRange seasonPricing={home.seasonPricing} />;
    } else {
      if (loadingPricing) {
        return <PricingSkeleton />;
      } else {
        const bookingPeriodPricing = getHomePricing(home.id);

        return (
          <Pricing
            title={`Total • ${bookingPeriodPricing?.numberOfNights} nights`}
            content={formatPrice(bookingPeriodPricing?.total || 0)}
            footer={`${formatPrice(
              calculateAverageNightPrice(bookingPeriodPricing)
            )} per night`}
          />
        );
      }
    }
  };

  return (
    <>
      <HomeContainer data-cy="home-card">
        <HomePhoto
          src={`${home.photos[0].url}?width=390&height=208&webp=true`}
        />
        <HomeInfoContainer>
          <HomeRegionTitle>
            {home.regionName} • {home.stateName}, {home.stateCode}
          </HomeRegionTitle>
          <HomeTitle>{home.title}</HomeTitle>
          <HomeInfo home={home} />
          {renderHomePricing()}
        </HomeInfoContainer>
      </HomeContainer>
      {divider && <HomeDivider />}
    </>
  );
};
