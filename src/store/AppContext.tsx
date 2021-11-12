import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppState } from "./type";
import { useFilter } from "./useFilter";
import { useHomes } from "./useHomes";
import { useRegions } from "./useRegions";

export const AppContext = React.createContext<AppState>({} as AppState);

interface Props {
  children?: React.ReactNode;
}

export const AppStateProvider = ({ children }: Props) => {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const { regionsOptions, selectedRegion, handleChangeSelectedRegion } =
    useRegions({ pathname, setPage });

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

  const { loadingHomes, homesData, hasMore, loadMore } = useHomes({
    selectedRegion,
    selectedBookingPeriod,
    selectedGuests,
    selectedOrder,
    setPage,
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
    loadMore,
    hasMore,
    count: homesData?.homes.count || 0,
    homes: homesData?.homes.results || [],
  };

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  );
};
