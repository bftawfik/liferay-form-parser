import { FieldType } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { FormControl } from "@mui/material";
import { NumberField } from "@base-ui-components/react/number-field";
import { useState } from "react";

interface NumericType {
  formData: FieldType;
}

const Numeric: React.FC<NumericType> = ({ formData }) => {
  const [value, setValue] = useState<string>(
    formData.predefinedValue !== "null" ? String(formData.predefinedValue) : ""
  );

  const isDecimal = formData.dataType === "double";

  const handleChange = (newValue: string) => {
    if (isDecimal) {
      if (/^\d*\.?\d*$/.test(newValue)) {
        setValue(newValue);
      }
    } else {
      if (/^\d+$/.test(newValue)) {
        setValue(newValue);
      }
    }
  };
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
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
              placeholder={formData.placeholder as string}
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
