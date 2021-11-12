import { useContext } from "react";
import { AppContext } from "../../store/AppContext";
import { guestsOptions, orderOptions } from "../../store/useFilter";

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
    handleChangeSelectedBookingPeriod,
    selectedOrder,
    handleChangeSelectedOrder,
    selectedGuests,
    handleChangeSelectedGuests,
    coupon,
    handleChangeCoupon,
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
          handleChange={handleChangeSelectedBookingPeriod}
        />

        <Divider />
        <Select
          label="Who"
          value={selectedGuests}
          options={guestsOptions}
          handleChange={handleChangeSelectedGuests}
        />

        <Divider />
        <Select
          label="Order"
          value={selectedOrder}
          handleChange={handleChangeSelectedOrder}
          options={orderOptions}
        />
      </FieldsContainer>

      <TextInput
        label="Coupon"
        placeholder="Got a code?"
        value={coupon}
        onChange={handleChangeCoupon}
      />
    </FilterContainer>
  );
};
