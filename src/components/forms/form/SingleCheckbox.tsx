import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import { FormFieldOption } from "../../../types/forms";

export const SingleCheckbox = ({ label }: { label: string }) => {
  return (
    <FormControl>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormControl>
  );
};
