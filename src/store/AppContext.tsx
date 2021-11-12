import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GetHomes } from "./queries";
import { AppState, HomesData } from "./type";
import { useFilter } from "./useFilter";
import { useRegions } from "./useRegions";

export const AppContext = React.createContext<AppState>({} as AppState);

interface Props {
  children?: React.ReactNode;
}

export const AppStateProvider = ({ children }: Props) => {
  const { pathname } = useLocation();

  const { regionsOptions, selectedRegion, handleChangeSelectedRegion } =
    useRegions({ pathname });

  const {
    selectedBookingPeriod,
    handleChangeSelectedBookingPeriod,
    selectedGuests,
    handleChangeSelectedGuests,
    selectedOrder,
    handleChangeSelectedOrder,
    coupon,
    handleChangeCoupon,
  } = useFilter();

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
    handleChangeSelectedRegion,

    selectedBookingPeriod,
    handleChangeSelectedBookingPeriod,

    selectedGuests,
    handleChangeSelectedGuests,

    selectedOrder,
    handleChangeSelectedOrder,

    coupon,
    handleChangeCoupon,

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
