import { Option } from "../components/Select";

export interface Region {
  id: string;
  name: string;
  stateName: string;
  stateCode: string;
}

export interface BookingPeriod {
  checkIn: string;
  checkOut: string;
}

export interface Photo {
  url: string;
}

export interface PriceRange {
  minPrice: number;
  maxPrice: number;
}

export interface HomeSeasonPricing {
  highSeason: PriceRange;
  lowSeason: PriceRange;
}

export interface Home {
  id: string;
  title: string;
  photos: Photo[];

  regionName: string;
  stateName: string;
  stateCode: string;

  bedsCount: number;
  hasPool?: boolean;
  maxOccupancy: number;
  bathroomsCount: number;

  seasonPricing: HomeSeasonPricing;
}

export type HomePaginatedResult = {
  count: number;
  results: Home[];
};

export interface RegionsData {
  regions: Region[];
}

export interface HomesData {
  homes: HomePaginatedResult;
}

export interface HomePricing {
  homeId: string;
  numberOfNights: number;
  total: number;
}

export interface HomePricingData {
  homesPricing: HomePricing[];
}

export interface AppState {
  regionsOptions: Option[];

  //  HomeFilter
  selectedRegion: Option;
  handleChangeSelectedRegion: (region: Option) => void;

  selectedGuests: Option;
  setSelectedGuests: (order: Option) => void;

  selectedBookingPeriod?: BookingPeriod;
  setSelectedBookingPeriod: (value: BookingPeriod) => void;

  selectedOrder: Option;
  setSelectedOrder: (order: Option) => void;

  coupon: string;
  setCoupon: (coupon: string) => void;

  // End HomeFilter
  loadingHomes: boolean;
  count: number;
  homes: Home[];
  page: number;
  setPage: (page: number) => void;
}
