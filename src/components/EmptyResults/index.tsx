import { Button } from "../Button";
import { Icon } from "../Icons/Icon";
import { EmptyResultsContainer } from "./style";

export const EmptyResults = () => {
  const selectedRegion = "";
  const selectedRegionLabel = selectedRegion ? selectedRegion : "";

  return (
    <EmptyResultsContainer>
      <Icon name="satellite" />

      <span>Oops! We haven’t found anything mathing your search.</span>

      <span>
        Try something else or reset the filters to see all {selectedRegionLabel}{" "}
        homes.
      </span>

      <Button
        bordered
        secondary
        label={`See all ${selectedRegionLabel} homes`}
        onClick={() => console.log("redirect to regions home")}
      />
    </EmptyResultsContainer>
  );
};
