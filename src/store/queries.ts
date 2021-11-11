import { gql } from "@apollo/client";

export const GetRegions = gql`
  query getRegions {
    regions {
      id
      name
      stateName
      stateCode
    }
  }
`;

export const GetHomes = gql`
  query getHomes(
    $region: UUID
    $page: Int
    $period: BookingPeriod
    $guests: Int
    $order: HomesOrder
  ) {
    homes(
      region: $region
      page: $page
      pageSize: 10
      period: $period
      guests: $guests
      order: $order
    ) {
      count
      results {
        id
        title
        regionName
        stateName
        stateCode
        bedsCount
        hasPool
        bathroomsCount
        maxOccupancy
        seasonPricing {
          lowSeason {
            minPrice
            maxPrice
          }
          highSeason {
            minPrice
            maxPrice
          }
        }
        photos {
          url
        }
      }
    }
  }
`;

export const GetHomePricing = gql`
  query getHomePricing($id: UUID, $period: BookingPeriod!, $coupon: String) {
    homesPricing(ids: [$id], period: $period, coupon: $coupon) {
      numberOfNights
      total
    }
  }
`;
