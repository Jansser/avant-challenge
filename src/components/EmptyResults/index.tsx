import { Button } from "../Button";
import { Icon } from "../Icons/Icon";
import { EmptyResultsContainer } from "./style";
import { Option } from "../Select";
import { useHistory } from "react-router";
import { initialRegionOption } from "../../store/useRegions";

interface Props {
  selectedRegion: Option;
}

export const EmptyResults = ({ selectedRegion }: Props) => {
  const history = useHistory();
  const selectedRegionLabel =
    selectedRegion.value !== initialRegionOption.value
      ? selectedRegion.label
      : "";

  const redirectToSeeAllHomes = () => {
    const pathname = selectedRegionLabel
      ? `/regions/${selectedRegionLabel}`
      : "/homes";

    history.push({
      pathname,
    });

    window.location.reload();
  };

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
        onClick={redirectToSeeAllHomes}
      />
    </EmptyResultsContainer>
  );
};
