import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Option } from "../components/Select";
import { GetHomes } from "./queries";
import { AppState, BookingPeriod, HomesData } from "./type";
import { initialRegionOption, useRegions } from "./useRegions";

export const AppContext = React.createContext<AppState>({} as AppState);

interface Props {
  children?: React.ReactNode;
}

export const guestsOptions = Array.from(Array(30).keys()).map((value) => ({
  label: `${value + 1} Guest${value > 0 ? "s" : ""}`,
  value: value + 1,
}));

export const orderOptions = [
  {
    value: "RELEVANCE",
    label: "Relevance",
  },
  {
    value: "PRICE_ASC",
    label: "Price: lowest first",
  },
  {
    value: "PRICE_DESC",
    label: "Price: highest first",
  },
];

export const AppStateProvider = ({ children }: Props) => {
  const { regionsOptions } = useRegions();

  // useFilters
  const [selectedRegion, setSelectedRegion] =
    useState<Option>(initialRegionOption);

  const [selectedOrder, setSelectedOrder] = useState<Option>(orderOptions[0]);

  const [selectedGuests, setSelectedGuests] = useState<Option>({
    value: "",
    label: "",
  });

  const [selectedBookingPeriod, setSelectedBookingPeriod] =
    useState<BookingPeriod>();

  const [coupon, setCoupon] = useState("");

  // useHomes
  const [page, setPage] = useState(1);

  const {
    loading: loadingHomes,
    data: homesData,
    fetchMore,
  } = useQuery<HomesData>(GetHomes, {
    variables: {
      region: selectedRegion.value,
      period: selectedBookingPeriod || null,
      guests: Number(selectedGuests.value) || 0,
      order: selectedOrder.value,
      page,
    },
  });

  const stateValue: AppState = {
    regionsOptions,
    selectedRegion,
    setSelectedRegion,

    selectedBookingPeriod,
    setSelectedBookingPeriod,

    selectedGuests,
    setSelectedGuests,

    selectedOrder,
    setSelectedOrder,

    coupon,
    setCoupon,

    loadingHomes,
    page,
    setPage,
    count: homesData?.homes.count || 0,
    homes: homesData?.homes.results || [],
  };

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  );
};
