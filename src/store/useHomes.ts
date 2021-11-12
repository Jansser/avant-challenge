import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Option } from "../components/Select";
import { GetHomes } from "./queries";
import { BookingPeriod, HomesData } from "./type";

interface Props {
  selectedRegion: Option;
  selectedBookingPeriod?: BookingPeriod;
  selectedGuests: Option;
  selectedOrder: Option;
  setPage: (page: number) => void;
}

export const useHomes = ({
  selectedRegion,
  selectedBookingPeriod,
  selectedGuests,
  selectedOrder,
  setPage,
}: Props) => {
  const [hasMore, setHasMore] = useState(true);

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
      page: 1,
    },
  });

  const loadMore = (nextPage: number) => {
    fetchMore({
      variables: { page: nextPage },

      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevResult;
        }

        const count = fetchMoreResult?.homes.count;
        const results = [
          ...prevResult.homes.results,
          ...fetchMoreResult.homes.results,
        ];

        setPage(nextPage);

        return {
          homes: {
            count,
            results,
          },
        };
      },
    });
  };

  useEffect(() => {
    if (homesData) {
      const { count, results } = homesData.homes;
      setHasMore(count > results.length);
    }
  }, [homesData]);

  return {
    loadingHomes,
    homesData,
    hasMore,
    loadMore,
    setPage,
  };
};
