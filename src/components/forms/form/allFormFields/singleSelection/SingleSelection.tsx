import { AllLanguages, RadioFieldType } from "../../../../../types/forms";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { useState } from "react";
import { getValueOf } from "../../../../../helpers/lang";

interface SingleSelectionType {
  formData: RadioFieldType;
  language: AllLanguages;
}

const SingleSelection: React.FC<SingleSelectionType> = ({
  formData,
  language,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    getValueOf(formData.predefinedValue, language)
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  if (formData.options) {
    return (
      <FormControl>
        <FormLabelAndTooltip
          label={getValueOf(formData.label, language)}
          tooltip={getValueOf(formData.tip, language)}
          showLabel={formData.showLabel}
        >
          <RadioGroup
            value={selectedValue}
            onChange={handleChange}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {formData.options.map((option) => {
              return (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={getValueOf(option.label, language)}
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
