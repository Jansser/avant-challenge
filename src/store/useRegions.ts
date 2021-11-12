import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetRegions } from "./queries";
import { Region, RegionsData } from "./type";
import { Option } from "../components/Select";
import { useHistory, useLocation } from "react-router";

const sortRegionByStateCode = (a: Region, b: Region) =>
  a.stateCode.localeCompare(b.stateCode);

export const initialRegionOption = {
  groupLabel: "",
  value: "Any Region",
  label: "Any Region",
};

interface Props {
  pathname: string;
}

export const useRegions = ({ pathname }: Props) => {
  const history = useHistory();
  const { search } = useLocation();

  const { data: regionsData } = useQuery<RegionsData>(GetRegions);
  const [regionsOptions, setRegionsOptions] = useState<Option[]>([]);
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

  useEffect(() => {
    if (regionsData) {
      const regions = regionsData.regions;

      const regionsOptions = [...regions]
        .sort(sortRegionByStateCode)
        .map((region) => ({
          groupLabel: region.stateName,
          value: region.id,
          label: region.name,
        }));

      regionsOptions.unshift(initialRegionOption);

      setRegionsOptions(regionsOptions);
    }
  }, [regionsData]);

  const handleChangeSelectedRegion = (region: Option) => {
    history.push({
      pathname: `/regions/${region.label}`,
      search,
    });
    setSelectedRegion(region);
  };

  return {
    regions: regionsData?.regions || [],
    regionsOptions,
    selectedRegion,
    setSelectedRegion,
    handleChangeSelectedRegion,
  };
};
