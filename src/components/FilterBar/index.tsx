import { useContext } from "react";
import {
  AppContext,
  guestsOptions,
  orderOptions,
} from "../../store/AppContext";

import { DateRangePicker } from "../DateRangePicker";
import { Select } from "../Select";
import { TextInput } from "../TextInput";
import { Divider, FieldsContainer, FilterContainer } from "./style";

export const FilterBar = () => {
  const {
    regionsOptions,
    selectedRegion,
    handleChangeSelectedRegion,
    selectedBookingPeriod,
    setSelectedBookingPeriod,
    selectedOrder,
    setSelectedOrder,
    selectedGuests,
    setSelectedGuests,
    coupon,
    setCoupon,
  } = useContext(AppContext);

  return (
    <FilterContainer>
      <FieldsContainer>
        <Select
          label="Where"
          value={selectedRegion}
          handleChange={handleChangeSelectedRegion}
          options={regionsOptions}
        />

        <Divider />
        <DateRangePicker
          label="When"
          value={selectedBookingPeriod}
          handleChange={setSelectedBookingPeriod}
        />

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
