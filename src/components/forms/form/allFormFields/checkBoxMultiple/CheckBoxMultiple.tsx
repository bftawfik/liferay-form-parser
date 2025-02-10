import { FieldType, FormFieldOption } from "../../../../../types/forms";
import { Checkbox, FormControlLabel, FormControl } from "@mui/material";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";

interface CheckBoxMultipleType {
  formData: FieldType;
}

const CheckBoxMultiple: React.FC<CheckBoxMultipleType> = ({ formData }) => {
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
                control={<Checkbox />}
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
