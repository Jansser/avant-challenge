import { useEffect, useState } from "react";
import { Option } from "../components/Select";

import queryString from "query-string";

import { BookingPeriod } from "./type";
import { useHistory, useLocation } from "react-router-dom";

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

export const useFilter = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();
  const queryStringParams = queryString.parse(search);

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

  const setQueryStringParams = () => {
    history.push({
      pathname,
      search: queryString.stringify(queryStringParams),
    });
  };

  const [selectedBookingPeriod, setSelectedBookingPeriod] =
    useState<BookingPeriod>();

  const handleChangeSelectedBookingPeriod = (order: BookingPeriod) => {
    setSelectedBookingPeriod(order);

    queryStringParams.checkIn = order.checkIn;
    queryStringParams.checkOut = order.checkOut;
    setQueryStringParams();
  };

  const [selectedGuests, setSelectedGuests] = useState<Option>({
    value: "",
    label: "",
  });
  const handleChangeSelectedGuests = (guest: Option) => {
    queryStringParams.guests = guest.value.toString();
    setQueryStringParams();
    setSelectedGuests(guest);
  };

  const [selectedOrder, setSelectedOrder] = useState<Option>(orderOptions[0]);

  const handleChangeSelectedOrder = (order: Option) => {
    queryStringParams.order = order.value.toString();
    setQueryStringParams();
    setSelectedOrder(order);
  };

  const [coupon, setCoupon] = useState("");
  const handleChangeCoupon = (coupon: string) => {
    queryStringParams.coupon = coupon;
    setQueryStringParams();
    setCoupon(coupon);
  };

  return {
    selectedBookingPeriod,
    handleChangeSelectedBookingPeriod,
    selectedGuests,
    handleChangeSelectedGuests,
    selectedOrder,
    handleChangeSelectedOrder,
    coupon,
    handleChangeCoupon,
  };
};
