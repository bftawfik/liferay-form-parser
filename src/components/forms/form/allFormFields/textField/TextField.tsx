import { FormControl } from "@mui/material";
import { FieldType } from "../../../../../types/forms";
import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormLabelAndTooltip } from "../../HelperComponents/FormLabelAndTooltip";
interface TextFieldType {
  formData: FieldType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TextField: React.FC<TextFieldType> = ({ formData, register, errors }) => {
  return (
    <FormControl fullWidth>
      <FormLabelAndTooltip
        label={formData.label}
        tooltip={formData.tooltip}
        showLabel={formData.showLabel}
      >
        <Box
          component="form"
          sx={{ "& > :not(style)": { mt: 2, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          <MuiTextField
            id="outlined-basic"
            label={formData.placeholder}
            value={formData.predefinedValue}
            variant="outlined"
            multiline={formData.displayStyle === "multiline"}
            rows={formData.displayStyle === "multiline" ? 4 : 1}
            {...register(formData.name)}
          />
        </Box>
        {errors[formData.name]?.message && (
          <p role="alert">{`${errors[formData.name]?.message}`}</p>
        )}
      </FormLabelAndTooltip>
    </FormControl>
  );
};
export default TextField;
