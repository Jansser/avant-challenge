import { useState } from "react";

import { DateRangePicker } from "../DateRangePicker";
import { Option, Select } from "../Select";
import { TextInput } from "../TextInput";
import { Divider, FieldsContainer, FilterContainer } from "./style";

const orderOptions = [
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

const regions = [
  {
    id: "0bb20925-51bc-11ea-adb3-c5da55d0cc57",
    name: "Nashville",
    stateName: "Tennessee",
    stateCode: "TN",
  },
  {
    id: "24c6f668-fa74-11e9-aa26-3fdfc21757cb",
    name: "Sonoma",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b72ed3-4f50-11e9-afc4-934d893b8b54",
    name: "Malibu",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b755e6-4f50-11e9-afc4-cfeda9af0fec",
    name: "Coachella Valley",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b77cf7-4f50-11e9-afc4-734d78a6978a",
    name: "Paso Robles",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b77cf8-4f50-11e9-afc4-3f5e0267ddc0",
    name: "San Diego",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b7a40a-4f50-11e9-afc4-c9cfd29373e8",
    name: "Lake Tahoe",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "42b7cb1b-4f50-11e9-afc4-397f5c2b2d98",
    name: "Temecula",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "4603902a-cb72-11e9-a60a-cfc093c1a651",
    name: "Bend",
    stateName: "Oregon",
    stateCode: "OR",
  },
  {
    id: "46a7caf0-7e8c-11ea-b6e6-1c1b0d3c3f82",
    name: "Breckenridge",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "c1bda57a-6214-11e9-a3b5-dd949d424ff2",
    name: "Scottsdale",
    stateName: "Arizona",
    stateCode: "AZ",
  },
  {
    id: "c1be1aab-6214-11e9-a3b5-bdb1d5fa67e4",
    name: "Newport Beach",
    stateName: "California",
    stateCode: "CA",
  },
  {
    id: "d02d76e0-ebb1-11e9-a94a-bf83202d1910",
    name: "Park City",
    stateName: "Utah",
    stateCode: "UT",
  },
  {
    id: "d17922c4-1582-11ea-8bdb-a9a358ecac71",
    name: "Tempe",
    stateName: "Arizona",
    stateCode: "AZ",
  },
];

interface Region {
  id: string;
  name: string;
  stateName: string;
  stateCode: string;
}

interface BookingPeriod {
  checkIn: string;
  checkOut: string;
}

const sortRegionByStateCode = (a: Region, b: Region) =>
  a.stateCode.localeCompare(b.stateCode);

export const FilterBar = () => {
  const [selectedOrder, setSelectedOrder] = useState<Option>(orderOptions[0]);
  const [selectedRegion, setSelectedRegion] = useState<Option>({
    value: "",
    label: "Any Region",
  });

  const [selectedGuests, setSelectedGuests] = useState<Option>();

  const regionsOptions = regions.sort(sortRegionByStateCode).map((region) => ({
    groupLabel: region.stateName,
    value: region.id,
    label: region.name,
  }));

  const guestsOptions = Array.from(Array(30).keys()).map((value) => ({
    label: `${value + 1} Guest${value > 0 ? "s" : ""}`,
    value: value + 1,
  }));

  const [bookingPeriod, setBookingPeriod] = useState<
    BookingPeriod | undefined
  >();
  const [coupon, setCoupon] = useState("");

  return (
    <FilterContainer>
      <FieldsContainer>
        <Select
          label="Where"
          value={selectedRegion}
          handleChange={setSelectedRegion}
          options={regionsOptions}
        />

        <Divider />
        {/* Change to checkin and checkout */}
        <DateRangePicker label="When" value={selectedGuests} />

        <Divider />
        <Select
          label="Who"
          value={selectedGuests}
          options={guestsOptions}
          handleChange={setSelectedGuests}
        />

        <Divider />
        <Select
          label="Order"
          value={selectedOrder}
          handleChange={setSelectedOrder}
          options={orderOptions}
        />
      </FieldsContainer>

      <TextInput
        label="Coupon"
        placeholder="Got a code?"
        value={coupon}
        onChange={setCoupon}
      />
    </FilterContainer>
  );
};
