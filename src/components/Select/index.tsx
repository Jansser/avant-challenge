import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import { Icon } from "../Icons/Icon";
import {
  GroupOptionItem,
  GroupValue,
  OptionItem,
  SelectContainer,
  SelectHeader,
  SelectLabel,
  SelectPlaceholder,
  OptionsContainer,
} from "./style";

export interface Option {
  groupLabel?: string;
  label: string;
  value: string | number;
}

interface Props {
  label: string;
  value?: Option;
  defaultValue?: string;
  placeholder?: string;
  options: Option[];
  handleChange: (value: Option) => void;
}

export const Select = ({
  label,
  value,
  options,
  handleChange,
  placeholder = "Select...",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    toggleIsOpen();
    handleChange(option);
  };

  const optionsRef = useOnclickOutside(() => {
    setIsOpen(false);
  });

  const hasOptions = options.length > 0;

  return (
    <SelectContainer onClick={toggleIsOpen} ref={optionsRef}>
      <SelectLabel>{label}</SelectLabel>
      <SelectHeader>
        {value?.value ? (
          <span>
            {value.groupLabel ? (
              <>
                <GroupValue>{value.label}, </GroupValue>
                {value.groupLabel}
              </>
            ) : (
              value.label
            )}
          </span>
        ) : (
          <SelectPlaceholder>{placeholder}</SelectPlaceholder>
        )}

        <Icon name={isOpen ? "chevronUp" : "chevronDown"} />
      </SelectHeader>
      {isOpen && hasOptions && (
        <OptionsContainer ref={optionsRef}>
          {options.map((option, index) => {
            const previousOption = options[index - 1];
            const samePreviousGroup =
              option.groupLabel &&
              previousOption?.groupLabel !== option.groupLabel;

            return (
              <div key={option.label}>
                {samePreviousGroup && (
                  <GroupOptionItem>{option.groupLabel}</GroupOptionItem>
                )}

                <OptionItem
                  key={option.label}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </OptionItem>
              </div>
            );
          })}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};
