import { FormControl, FormControlLabel, Checkbox, Switch } from "@mui/material";
import { AllLanguages, CheckboxFieldType } from "../../../../../types/forms";
import { useState } from "react";
import { getValueOf } from "../../../../../helpers/lang";

interface SingleCheckboxType {
  formData: CheckboxFieldType;
  language: AllLanguages;
}

const SingleCheckbox: React.FC<SingleCheckboxType> = ({
  formData,
  language,
}) => {
  const [selected, setSelected] = useState<boolean>(
    getValueOf(formData.predefinedValue, language) === "true"
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
        label={getValueOf(formData.label, language)}
      />
      {formData.tooltip && (
        <h6 className="text-sm mt-2 text-gray-400">
          {getValueOf(formData.tip, language)}
        </h6>
      )}
    </FormControl>
  );
};

export default SingleCheckbox;
