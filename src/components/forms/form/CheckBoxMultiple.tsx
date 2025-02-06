import { FormFieldOption } from "../../../types/forms";
import { Checkbox, FormControlLabel, FormControl } from "@mui/material";

export const CheckBoxMultiple = ({
  options,
}: {
  options: FormFieldOption[];
}) => {
  if (options) {
    return (
      <FormControl>
        {options.map((option: FormFieldOption) => {
          return (
            <FormControlLabel
              key={option.value}
              control={<Checkbox />}
              label={option.label}
            />
          );
        })}
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};
