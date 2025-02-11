import { FieldType, FormFieldOption } from "../../../../../types/forms";
import { Checkbox, FormControlLabel, FormControl, Switch } from "@mui/material";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { useState } from "react";

interface CheckBoxMultipleType {
  formData: FieldType;
}

const CheckBoxMultiple: React.FC<CheckBoxMultipleType> = ({ formData }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    formData.predefinedValue
      ? JSON.parse(formData.predefinedValue as string)
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
  if (formData.formFieldOptions) {
    return (
      <FormControl>
        <FormLabelAndTooltip
          label={formData.label}
          tooltip={formData.tooltip}
          showLabel={formData.showLabel}
        >
          {formData.formFieldOptions.map((option: FormFieldOption) => {
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
                label={option.label}
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
