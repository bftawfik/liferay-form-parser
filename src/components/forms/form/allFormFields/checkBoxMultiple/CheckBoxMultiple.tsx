import { useState } from "react";
import {
  AllLanguages,
  CheckboxMultipleFieldType,
  FormFieldOption,
} from "../../../../../types/forms";
import { Checkbox, FormControlLabel, FormControl, Switch } from "@mui/material";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { getArrayValueOf, getValueOf } from "../../../../../helpers/lang";

interface CheckBoxMultipleType {
  formData: CheckboxMultipleFieldType;
  language: AllLanguages;
}

const CheckBoxMultiple: React.FC<CheckBoxMultipleType> = ({
  formData,
  language,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    getArrayValueOf(formData.predefinedValue, language)
      ? (getArrayValueOf(formData.predefinedValue, language) as string[])
      : []
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((val) => val !== value)
        : [...prev, value]
    );
  };
  if (formData.options) {
    return (
      <FormControl>
        <FormLabelAndTooltip
          label={getValueOf(formData.label, language)}
          tooltip={getValueOf(formData.tip, language)}
          showLabel={formData.showLabel}
        >
          {formData.options.map((option: FormFieldOption) => {
            return (
              <FormControlLabel
                key={option.value}
                control={
                  formData.showAsSwitcher ? (
                    <Switch
                      value={option.value}
                      checked={selectedValues.includes(option.value)}
                      onChange={handleChange}
                    />
                  ) : (
                    <Checkbox
                      value={option.value}
                      checked={selectedValues.includes(option.value)}
                      onChange={handleChange}
                    />
                  )
                }
                label={getValueOf(option.label, language)}
              />
            );
          })}
        </FormLabelAndTooltip>
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};

export default CheckBoxMultiple;
