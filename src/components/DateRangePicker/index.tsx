import { useEffect, useState } from "react";

import { DateRange, RangeKeyDict, Range } from "react-date-range";
import useOnclickOutside from "react-cool-onclickoutside";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { theme } from "../../constants/theme";
import { format, parse } from "date-fns";
import {
  DatePickerContainer,
  SelectContainer,
  SelectHeader,
  SelectLabel,
  SelectPlaceholder,
} from "./style";
import { BookingPeriod } from "../../store/type";

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
  value?: BookingPeriod;
  placeholder?: string;
  handleChange: (value: BookingPeriod) => void;
}

const dateLabelFormat = "MMM dd, yyyy";
const bookingPeriodDateFormat = "yyyy-MM-dd";

const parseValueToDate = (value: string) =>
  parse(value, bookingPeriodDateFormat, new Date());

const formatValueToDateLabel = (value: Date) => format(value, dateLabelFormat);

export const DateRangePicker = ({
  label,
  value,
  placeholder = "Select...",
  handleChange,
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

  useEffect(() => {
    if (value) {
      const checkInDate = parseValueToDate(value.checkIn);
      const checkOutDate = parseValueToDate(value.checkOut);

      setValueLabel(
        `${formatValueToDateLabel(checkInDate)} - ${formatValueToDateLabel(
          checkOutDate
        )} `
      );

      setDateRange([
        {
          startDate: checkInDate,
          endDate: checkOutDate,
          key: "selection",
        },
      ]);
    }
  }, [value]);

  const handleSelect = (dateRange: RangeKeyDict) => {
    if (dateRange.selection) {
      const { startDate, endDate } = dateRange.selection;

      if (startDate && endDate) {
        setDateRange([dateRange.selection]);

        setValueLabel(
          `${format(startDate, dateLabelFormat)} - ${format(
            endDate,
            dateLabelFormat
          )}`
        );

        const bookingPeriod = {
          checkIn: format(startDate, bookingPeriodDateFormat),
          checkOut: format(endDate, bookingPeriodDateFormat),
        };

        handleChange(bookingPeriod);
      }
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
