import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Option } from "../components/Select";
import { GetHomes } from "./queries";
import { AppState, BookingPeriod, HomesData } from "./type";
import { initialRegionOption, useRegions } from "./useRegions";
import queryString from "query-string";

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
  const { pathname, search } = useLocation();
  const history = useHistory();

  const { regionsOptions } = useRegions();

  const [selectedRegion, setSelectedRegion] =
    useState<Option>(initialRegionOption);

  useEffect(() => {
    if (regionsOptions) {
      let regionParam = "";

      if (pathname.includes("/regions")) {
        regionParam = pathname.split("/")[2];

        const region = regionsOptions.find(
          (region) => region.label === regionParam
        );

        setSelectedRegion(region ? region : initialRegionOption);
      }
    }
  }, [regionsOptions, pathname]);

  const handleChangeSelectedRegion = (region: Option) => {
    history.push({
      pathname: `/regions/${region.label}`,
    });
    setSelectedRegion(region);
  };

  useEffect(() => {
    const queryStringParams = queryString.parse(search);

    if (queryStringParams.guests) {
      const guestsOption = guestsOptions.find(
        (option) => option.value === Number(queryStringParams.guests)
      );

      if (guestsOption) {
        setSelectedGuests(guestsOption);
      }
    }

    if (queryStringParams.order) {
      const orderOption = orderOptions.find(
        (option) =>
          option.value.toLowerCase() ===
          queryStringParams.order?.toString().toLowerCase()
      );

      if (orderOption) {
        setSelectedOrder(orderOption);
      }
    }

    if (queryStringParams.checkIn && queryStringParams.checkOut) {
      setSelectedBookingPeriod({
        checkIn: queryStringParams.checkIn.toString(),
        checkOut: queryStringParams.checkOut.toString(),
      });
    }

    if (queryStringParams.coupon) {
      setCoupon(queryStringParams.coupon.toString());
    }
  }, [search]);

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
    handleChangeSelectedRegion,

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
