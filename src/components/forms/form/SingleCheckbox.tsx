import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { FieldType, FormFieldOption } from "../../../types/forms";

export const SingleCheckbox = ({ formData }: { formData: FieldType }) => {
  return (
    <FormControl>
      <FormControlLabel control={<Checkbox />} label={formData.label} />
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
    </FormControl>
  );
};
