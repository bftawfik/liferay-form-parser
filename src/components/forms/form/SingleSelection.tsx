import { FieldType, FormFieldOption } from "../../../types/forms";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const SingleSelection = ({ formData }: { formData: FieldType }) => {
  if (formData.formFieldOptions) {
    return (
      <FormControl>
        {formData.showLabel && <h6 className="text-lg">{formData.label}</h6>}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {formData.formFieldOptions.map((option: any) => {
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
        {formData.tooltip && (
          <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
        )}
      </FormControl>
    );
  } else {
    return <div>No options available</div>;
  }
};
