import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FieldType, FormFieldOption } from "../../../types/forms";

export const DropDownList = ({ formData }: { formData: FieldType }) => {
  if (formData.formFieldOptions) {
    return (
      <div className="mt-4">
        {formData.showLabel && (
          <h6 className="text-lg mb-2">{formData.label}</h6>
        )}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">
            Choose an option
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            fullWidth
            label="Choose an option"
          >
            {formData.formFieldOptions.map((option: FormFieldOption) => {
              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  className="w-full"
                >
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
          {formData.tooltip && (
            <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
          )}
        </FormControl>
      </div>
    );
  } else {
    return <div>No options available</div>;
  }
};
