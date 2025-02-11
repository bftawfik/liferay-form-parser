import { FieldType } from "../../../../../types/forms";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { useState } from "react";

interface SingleSelectionType {
  formData: FieldType;
}

const SingleSelection: React.FC<SingleSelectionType> = ({ formData }) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    formData.predefinedValue
      ? JSON.parse(formData.predefinedValue as string)
      : ""
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  if (formData.formFieldOptions) {
    return (
      <FormControl>
        <FormLabelAndTooltip
          label={formData.label}
          tooltip={formData.tooltip}
          showLabel={formData.showLabel}
        >
          <RadioGroup
            value={selectedValue}
            onChange={handleChange}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {formData.formFieldOptions.map((option: any) => {
              return (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              );
            })}
          </RadioGroup>
        </FormLabelAndTooltip>
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};
export default SingleSelection;
