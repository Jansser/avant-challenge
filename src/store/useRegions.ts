import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GetRegions } from "./queries";
import { Region, RegionsData } from "./type";
import { Option } from "../components/Select";

const sortRegionByStateCode = (a: Region, b: Region) =>
  a.stateCode.localeCompare(b.stateCode);

export const initialRegionOption = {
  groupLabel: "",
  value: "Any Region",
  label: "Any Region",
};

export const useRegions = () => {
  const { data: regionsData } = useQuery<RegionsData>(GetRegions);
  const [regionsOptions, setRegionsOptions] = useState<Option[]>([]);

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

  return {
    regions: regionsData?.regions || [],
    regionsOptions,
  };
};
