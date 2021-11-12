import React, { useContext } from "react";
import { EmptyResults } from "../../components/EmptyResults";
import { HomeCard } from "../../components/HomeCard";
import { HomeSkeleton } from "../../components/HomeCard/components/HomeSkeleton";

import { HomeTitle } from "../../components/HomeTitle";
import { LoadingMore } from "../../components/LoadingMore";
import { AppContext } from "../../store/AppContext";
import { HomesContainer } from "./style";

export const Homes = () => {
  const {
    selectedRegion,
    loadingHomes,
    count,
    homes,

    page,
    hasMore,
    loadMore,
  } = useContext(AppContext);

  const hasHomes = !loadingHomes && homes.length > 0;

  const handleScroll = ({ currentTarget }: React.UIEvent) => {
    const scrollToTheEnd =
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight;

    if (scrollToTheEnd && hasMore) {
      const nextPage = page + 1;
      loadMore(nextPage);
    }
  };

  return (
    <HomesContainer onScroll={(e) => handleScroll(e)}>
      <HomeTitle loading={loadingHomes} count={count}></HomeTitle>
      {loadingHomes && (
        <>
          <HomeSkeleton divider />
          <HomeSkeleton divider />
          <HomeSkeleton />
        </>
      )}

      {homes.map((home) => (
        <HomeCard key={home.id} home={home} divider />
      ))}

      {hasHomes && hasMore && <LoadingMore />}

      {!hasHomes && <EmptyResults selectedRegion={selectedRegion} />}
    </HomesContainer>
  );
};
