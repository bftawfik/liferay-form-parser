import { FieldType, FormFieldOption } from "../../../../../types/forms";
import { Checkbox, FormControlLabel, FormControl } from "@mui/material";

interface CheckBoxMultipleType {
  formData: FieldType;
}

const CheckBoxMultiple: React.FC<CheckBoxMultipleType> = ({ formData }) => {
  if (formData.formFieldOptions) {
    return (
      <FormControl>
        {formData.showLabel && <h6 className="text-lg">{formData.label}</h6>}
        {formData.formFieldOptions.map((option: FormFieldOption) => {
          return (
            <FormControlLabel
              key={option.value}
              control={<Checkbox />}
              label={option.label}
            />
          );
        })}
        {formData.tooltip && (
          <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
        )}
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};

export default CheckBoxMultiple;
