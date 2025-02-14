import { AllLanguages, NumericFieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl } from "@mui/material";
import { NumberField } from "@base-ui-components/react/number-field";
import { useState } from "react";
import { getValueOf } from "../../../../../helpers/lang";

interface NumericType {
  formData: NumericFieldType;
  language: AllLanguages;
}

const Numeric: React.FC<NumericType> = ({ formData, language }) => {
  const [value, setValue] = useState<string>(
    getValueOf(formData.predefinedValue, language)
  );
  console.log(formData.predefinedValue);

  const isDecimal = formData.dataType === "double";

  const handleChange = (newValue: string) => {
    if (isDecimal) {
      if (/^\d*\.?\d*$/.test(newValue)) {
        setValue(newValue);
      }
    } else if (/^\d+$/.test(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={getValueOf(formData.label, language)}
        tooltip={getValueOf(formData.tip, language)}
        showLabel={formData.showLabel}
      >
        <NumberField.Root value={parseFloat(value)}>
          <NumberField.Group>
            <NumberField.Input
              className="p-2 border rounded"
              inputMode={isDecimal ? "decimal" : "numeric"}
              step={isDecimal ? 0.01 : 1}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={getValueOf(formData.placeholder, language)}
              style={{
                color: value ? "black" : "gray",
              }}
            />
          </NumberField.Group>
        </NumberField.Root>
      </FormLabelAndTooltip>
    </FormControl>
  );
};

export default Numeric;
