import { useState } from "react";
import { FormControl, TextField, Autocomplete, Chip } from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  SelectFieldType,
  FormFieldOption,
  AllLanguages,
} from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
import { getArrayValueOf, getValueOf } from "../../../../../helpers/lang";

interface DropDownListType {
  formData: SelectFieldType;
  language: AllLanguages;
}

const DropDownList: React.FC<DropDownListType> = ({ formData, language }) => {
  let predefinedValues: string[] = getArrayValueOf(
    formData.predefinedValue,
    language
  )
    ? (getArrayValueOf(formData.predefinedValue, language) as string[])
    : [];

  const [selectedValues, setSelectedValues] = useState<FormFieldOption[]>(
    formData.multiple
      ? formData.options.filter((opt) => predefinedValues.includes(opt.value))
      : []
  );

  const [selectedValue, setSelectedValue] = useState<FormFieldOption | null>(
    !formData.multiple
      ? formData.options.find((opt) => predefinedValues.includes(opt.value)) ||
          null
      : null
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: FormFieldOption | FormFieldOption[] | null
  ) => {
    if (formData.multiple) {
      setSelectedValues(newValue as FormFieldOption[]);
    } else {
      setSelectedValue(newValue as FormFieldOption | null);
    }
  };

  return formData.options ? (
    <div className="mt-4">
      <FormControl fullWidth>
        <FormLabelAndTooltip
          label={getValueOf(formData.label, language)}
          tooltip={getValueOf(formData.tip, language)}
          showLabel={formData.showLabel}
        >
          <Autocomplete
            sx={{ mt: 2 }}
            multiple={formData.multiple}
            options={formData.options}
            value={formData.multiple ? selectedValues : selectedValue}
            onChange={handleChange}
            getOptionLabel={(option) => getValueOf(option.label, language)}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderInput={(params) => (
              <TextField {...params} label="Choose an option" />
            )}
            renderTags={(value, getTagProps) =>
              formData.multiple &&
              value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });

                return (
                  <Chip
                    key={key}
                    label={getValueOf(option.label, language)}
                    {...tagProps}
                    deleteIcon={<Close fontSize="small" />}
                  />
                );
              })
            }
          />
        </FormLabelAndTooltip>
      </FormControl>
    </div>
  ) : (
    <div>No options available</div>
  );
};

export default DropDownList;
