import { FormControl, FormControlLabel, Checkbox, Switch } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import { useState } from "react";

interface SingleCheckboxType {
  formData: FieldType;
}

const SingleCheckbox: React.FC<SingleCheckboxType> = ({ formData }) => {
  const [selected, setSelected] = useState<boolean>(
    formData.predefinedValue
      ? JSON.parse(formData.predefinedValue as string)[0] === "true"
        ? true
        : false
      : false
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(!selected);
  };
  return (
    <FormControl>
      <FormControlLabel
        control={
          formData.showAsSwitcher ? (
            <Switch checked={selected} onChange={handleChange} />
          ) : (
            <Checkbox checked={selected} onChange={handleChange} />
          )
        }
        label={formData.label}
      />
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">{formData.tooltip}</h6>
      )}
    </FormControl>
  );
};

export default SingleCheckbox;
