import { FormFieldOption } from "../../../types/forms";
import { Checkbox, FormControlLabel, FormControl } from "@mui/material";

export const CheckBoxMultiple = ({
  options,
  label,
}: {
  options: FormFieldOption[];
  label: string;
}) => {
  if (options) {
    return (
      <FormControl>
        <h6 className="text-lg">{label}</h6>
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
