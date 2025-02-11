// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   SelectChangeEvent,
//   Chip,
//   OutlinedInput,
//   Box,
//   IconButton,
// } from "@mui/material";
// import { Close } from "@mui/icons-material";
// import { FieldType, FormFieldOption } from "../../../../../types/forms";
// import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
// import { useState } from "react";
// interface DropDownListType {
//   formData: FieldType;
// }

// const DropDownList: React.FC<DropDownListType> = ({ formData }) => {
//   const [selectedValues, setSelectedValues] = useState<string[]>([]);
//   const [selectedValue, setSelectedValue] = useState<string>("");

//   const handleChange = (event: SelectChangeEvent<string | string[]>) => {
//     if (formData.multiple) {
//       setSelectedValues(event.target.value as string[]);
//     } else {
//       setSelectedValue(event.target.value as string);
//     }
//   };
//   const handleDelete = (valueToRemove: string) => {
//     setSelectedValues((prev) =>
//       prev.filter((value) => value !== valueToRemove)
//     );
//   };

//   if (formData.formFieldOptions) {
//     return (
//       <div className="mt-4">
//         <FormControl fullWidth>
//           <FormLabelAndTooltip
//             label={formData.label}
//             tooltip={formData.tooltip}
//             showLabel={formData.showLabel}
//           >
//             <InputLabel
//               id="demo-simple-select-autowidth-label"
//               sx={{ mt: 5.5 }}
//             >
//               Choose an option
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-autowidth-label"
//               id="demo-simple-select-autowidth"
//               fullWidth
//               sx={{ mt: 2 }}
//               label="Choose an option"
//               multiple={formData.multiple}
//               value={formData.multiple ? selectedValues : selectedValue}
//               onChange={handleChange}
//               input={<OutlinedInput label="Choose an option" />}
//               renderValue={(selected) =>
//                 formData.multiple ? (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                     {(selected as string[]).map((value) => (
//                       <Chip
//                         key={value}
//                         label={
//                           formData.formFieldOptions?.find(
//                             (opt) => opt.value === value
//                           )?.label
//                         }
//                         sx={{
//                           borderRadius: 1,
//                           "& .MuiChip-deleteIcon": {
//                             fontSize: 16,
//                             color: "grey",
//                           },
//                         }}
//                         // deleteIcon={<Close fontSize="small" />}
//                         onDelete={() => {
//                           handleDelete(value);
//                         }}
//                       />
//                     ))}
//                   </Box>
//                 ) : (
//                   formData.formFieldOptions?.find(
//                     (opt) => opt.value === selected
//                   )?.label
//                 )
//               }
//             >
//               {formData.formFieldOptions.map((option: FormFieldOption) => {
//                 return (
//                   <MenuItem
//                     key={option.value}
//                     value={option.value}
//                     className="w-full"
//                   >
//                     {option.label}
//                   </MenuItem>
//                 );
//               })}
//             </Select>
//           </FormLabelAndTooltip>
//         </FormControl>
//       </div>
//     );
//   } else {
//     return <div>No options available</div>;
//   }
// };

// export default DropDownList;
import { useState } from "react";
import { FormControl, TextField, Autocomplete, Chip, Box } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FieldType, FormFieldOption } from "../../../../../types/forms";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";

interface DropDownListType {
  formData: FieldType;
}

const DropDownList: React.FC<DropDownListType> = ({ formData }) => {
  const [selectedValues, setSelectedValues] = useState<FormFieldOption[]>([]);
  const [selectedValue, setSelectedValue] = useState<FormFieldOption | null>(
    null
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

  return formData.formFieldOptions ? (
    <div className="mt-4">
      <FormControl fullWidth>
        <FormLabelAndTooltip
          label={formData.label}
          tooltip={formData.tooltip}
          showLabel={formData.showLabel}
        >
          <Autocomplete
            multiple={formData.multiple}
            options={formData.formFieldOptions}
            value={formData.multiple ? selectedValues : selectedValue}
            onChange={handleChange}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            renderInput={(params) => (
              <TextField {...params} label="Choose an option" />
            )}
            renderTags={(value, getTagProps) =>
              formData.multiple &&
              (value as FormFieldOption[]).map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });

                return (
                  <Chip
                    key={key}
                    label={option.label}
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
