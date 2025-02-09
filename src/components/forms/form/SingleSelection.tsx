import { FormFieldOption } from "../../../types/forms";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const SingleSelection = ({
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
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {options.map((option: any) => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};
