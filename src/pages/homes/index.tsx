import React, { useContext } from "react";
import { EmptyResults } from "../../components/EmptyResults";
import { HomeCard } from "../../components/HomeCard";
import { HomeSkeleton } from "../../components/HomeCard/components/HomeSkeleton";

import { HomeTitle } from "../../components/HomeTitle";
import { LoadingMore } from "../../components/LoadingMore";
import { AppContext } from "../../store/AppContext";
import { ErrorMessage, HomesContainer } from "./style";

export const Homes = () => {
  const {
    selectedRegion,
    loadingHomes,
    count,
    homes,

    page,
    hasMore,
    loadMore,
    errorMessage,
  } = useContext(AppContext);

  const hasHomes = !loadingHomes && count > 0;

  const handleScroll = ({ currentTarget }: React.UIEvent) => {
    const scrollToTheEnd =
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight;

    if (scrollToTheEnd && hasMore) {
      const nextPage = page + 1;
      loadMore(nextPage);
    }
  };

  if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>;

  return (
    <HomesContainer id="main" onScroll={(e) => handleScroll(e)}>
      <HomeTitle loading={loadingHomes} count={count}></HomeTitle>
      {loadingHomes ? (
        <>
          <HomeSkeleton divider />
          <HomeSkeleton divider />
          <HomeSkeleton />
        </>
      ) : (
        count === 0 && <EmptyResults selectedRegion={selectedRegion} />
      )}

      {homes.map((home) => (
        <HomeCard key={home.id} home={home} divider />
      ))}

      {hasHomes && hasMore && <LoadingMore />}
    </HomesContainer>
  );
};
