import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FieldType, FormFieldOption } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
interface DropDownListType {
  formData: FieldType;
}

const DropDownList: React.FC<DropDownListType> = ({ formData }) => {
  if (formData.formFieldOptions) {
    return (
      <div className="mt-4">
        <FormControl fullWidth>
          <FormLabelAndTooltip
            label={formData.label}
            tooltip={formData.tooltip}
            showLabel={formData.showLabel}
          >
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
          </FormLabelAndTooltip>
        </FormControl>
      </div>
    );
  } else {
    return <div>No options available</div>;
  }
};

export default DropDownList;
