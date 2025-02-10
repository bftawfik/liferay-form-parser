import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { FieldType } from "../../../../../types/forms";

interface SingleCheckboxType {
  formData: FieldType;
}

const SingleCheckbox: React.FC<SingleCheckboxType> = ({ formData }) => {
  return (
    <FormControl>
      <FormControlLabel control={<Checkbox />} label={formData.label} />
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
    </FormControl>
  );
};

export default SingleCheckbox;
