import { useState } from "react";

import { DateRange, RangeKeyDict, Range } from "react-date-range";
import useOnclickOutside from "react-cool-onclickoutside";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { theme } from "../../constants/theme";
import { format } from "date-fns";
import {
  DatePickerContainer,
  SelectContainer,
  SelectHeader,
  SelectLabel,
  SelectPlaceholder,
} from "./style";

export interface Option {
  groupLabel?: string;
  label: string;
  value: string | number;
}

export interface GroupedOption {
  label: string;
  options: Option[];
}

interface Props {
  label: string;
  value?: Option;
  placeholder?: string;
}

export const DateRangePicker = ({
  label,
  value,
  placeholder = "Select...",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  const [dateRange, setDateRange] = useState<Range[] | undefined>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [valueLabel, setValueLabel] = useState("");

  const handleSelect = (dateRange: RangeKeyDict) => {
    if (dateRange.selection) {
      const dateFormat = "MMM dd, yyyy";
      const { startDate, endDate } = dateRange.selection;

      if (startDate && endDate) {
        setValueLabel(
          `${format(startDate, dateFormat)} - ${format(endDate, dateFormat)}`
        );
      }

      setDateRange([dateRange.selection]);
    }
  };

  const datePickerRef = useOnclickOutside(() => {
    setIsOpen(false);
  });

  return (
    <SelectContainer>
      <div onClick={toggleIsOpen} ref={datePickerRef}>
        <SelectLabel>{label}</SelectLabel>
        <SelectHeader>
          {valueLabel ? (
            valueLabel
          ) : (
            <SelectPlaceholder>{placeholder}</SelectPlaceholder>
          )}
        </SelectHeader>
      </div>

      {isOpen && (
        <DatePickerContainer ref={datePickerRef}>
          <DateRange
            color={theme.colors.primary}
            rangeColors={[
              theme.colors.accentDark,
              theme.colors.accent,
              theme.colors.accentLight,
            ]}
            ranges={dateRange}
            minDate={new Date()}
            onChange={handleSelect}
            showMonthAndYearPickers={false}
            showPreview={false}
            showDateDisplay={false}
          />
        </DatePickerContainer>
      )}
    </SelectContainer>
  );
};
