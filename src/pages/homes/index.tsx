import { useContext } from "react";
import { EmptyResults } from "../../components/EmptyResults";
import { HomeCard } from "../../components/HomeCard";
import { HomeSkeleton } from "../../components/HomeCard/components/HomeSkeleton";

import { HomeTitle } from "../../components/HomeTitle";
import { AppContext } from "../../store/AppContext";
import { HomesContainer } from "./style";

export const Homes = () => {
  const { loadingHomes, count, homes } = useContext(AppContext);
  const hasHomes = !loadingHomes && count > 0;

  return (
    <HomesContainer>
      <HomeTitle loading={loadingHomes} count={count}></HomeTitle>
      {loadingHomes && (
        <>
          <HomeSkeleton divider />
          <HomeSkeleton divider />
          <HomeSkeleton />
        </>
      )}

      {/* TODO - selectedRegion */}
      {!hasHomes && <EmptyResults />}

      {homes.map((home) => (
        <HomeCard key={home.id} home={home} divider />
      ))}
    </HomesContainer>
  );
};
