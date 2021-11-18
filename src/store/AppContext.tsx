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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const resetPagination = () => {
    const mainContainer = document.getElementById("main");

    if (mainContainer) {
      mainContainer.scroll({
        top: 0,
        behavior: "smooth",
      });
    }

    setPage(1);
    setHasMore(true);
  };

  const { regionsOptions, selectedRegion, handleChangeSelectedRegion } =
    useRegions({ pathname, resetPagination });

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

  const {
    loading: loadingHomes,
    data: homesData,
    fetchMore,
    error,
  } = useQuery<HomesData>(GetHomes, {
    variables: {
      region: selectedRegion.value,
      period: selectedBookingPeriod || null,
      guests: Number(selectedGuests.value) || 0,
      order: selectedOrder.value,
      page: 1,
    },
  });

  const loadMore = (nextPage: number) => {
    setErrorMessage("");

    fetchMore({
      variables: { page: nextPage },

      updateQuery: (prevResult, { fetchMoreResult }) => {
        setHasMore(true);
        if (!fetchMoreResult || !prevResult) {
          return prevResult;
        }

        const count = fetchMoreResult?.homes.count;
        const results = [
          ...prevResult.homes.results,
          ...fetchMoreResult.homes.results,
        ];

        setHasMore(results.length < count);
        setPage(nextPage);

        return {
          homes: {
            count,
            results,
          },
        };
      },
    }).catch(() => {
      setErrorMessage("Oops, something went wrong!");
    });
  };

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
    errorMessage: error ? "Oops, something went wrong!" : errorMessage,
  };

  return (
    <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>
  );
};
